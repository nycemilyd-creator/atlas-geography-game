"use client"

import React from "react"

import { useState, useEffect, useMemo, useRef } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  countries,
  allCountries,
  calculateDistance,
  calculateBearing,
  getDirectionArrow,
  type Country
} from "@/lib/countries"
import { cn } from "@/lib/utils"
import { Check, MapPin, Users, Globe, Sparkles, PartyPopper, Languages, Church, Coins, Share2 } from "lucide-react"

const MAX_GUESSES = 6

interface Guess {
  name: string
  code: string
  distance: number
  direction: string
  isCorrect: boolean
}

// Convert country code to flag emoji
function getFlagEmoji(countryCode: string): string {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0))
  return String.fromCodePoint(...codePoints)
}

export function GeographyGame() {
  const [targetCountry, setTargetCountry] = useState<Country | null>(null)
  const [guesses, setGuesses] = useState<Guess[]>([])
  const [inputValue, setInputValue] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [gameWon, setGameWon] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // Initialize game with random country
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * countries.length)
    setTargetCountry(countries[randomIndex])
  }, [])

  // Focus input when game starts or guess is made
  useEffect(() => {
    if (!gameOver && inputRef.current) {
      inputRef.current.focus()
    }
  }, [guesses.length, gameOver])

  // Filter suggestions based on input
  const suggestions = useMemo(() => {
    if (!inputValue.trim()) return []
    const guessedNames = guesses.map((g) => g.name.toLowerCase())
    return allCountries
      .filter(
        (country) =>
          country.name.toLowerCase().includes(inputValue.toLowerCase()) &&
          !guessedNames.includes(country.name.toLowerCase())
      )
      .slice(0, 5)
  }, [inputValue, guesses])

  const handleGuess = (country: { name: string; code: string; coordinates: { lat: number; lng: number } }) => {
    if (!targetCountry || gameOver || guesses.length >= MAX_GUESSES) return

    const distance = calculateDistance(
      country.coordinates.lat,
      country.coordinates.lng,
      targetCountry.coordinates.lat,
      targetCountry.coordinates.lng
    )

    const bearing = calculateBearing(
      country.coordinates.lat,
      country.coordinates.lng,
      targetCountry.coordinates.lat,
      targetCountry.coordinates.lng
    )

    const isCorrect = country.name.toLowerCase() === targetCountry.name.toLowerCase()

    const newGuess: Guess = {
      name: country.name,
      code: country.code,
      distance,
      direction: isCorrect ? "correct" : getDirectionArrow(bearing),
      isCorrect
    }

    const newGuesses = [...guesses, newGuess]
    setGuesses(newGuesses)
    setInputValue("")
    setShowSuggestions(false)

    if (isCorrect) {
      setGameWon(true)
      setGameOver(true)
    } else if (newGuesses.length >= MAX_GUESSES) {
      setGameOver(true)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (suggestions.length > 0) {
      handleGuess(suggestions[0])
    } else {
      const exactMatch = allCountries.find((c) => c.name.toLowerCase() === inputValue.toLowerCase())
      if (exactMatch) handleGuess(exactMatch)
    }
  }

  const getGuessColor = (distance: number, isCorrect: boolean) => {
    if (isCorrect) return "bg-lime-400"
    if (distance < 500) return "bg-lime-400"
    if (distance < 1500) return "bg-yellow-400"
    if (distance < 3000) return "bg-orange-400"
    return "bg-red-400"
  }

  const playAgain = () => {
    const randomIndex = Math.floor(Math.random() * countries.length)
    setTargetCountry(countries[randomIndex])
    setGuesses([])
    setGameWon(false)
    setGameOver(false)
    setInputValue("")
  }

  // Generate shareable result text (similar to Wordle)
  const generateShareText = (): string => {
    const getColorSquare = (distance: number, isCorrect: boolean): string => {
      if (isCorrect) return "🟩"
      const maxDistance = 12500
      const ratio = Math.min(distance / maxDistance, 1)
      //if (ratio <= 0.05) return "🟨"
      //if (ratio <= 0.25) return "🟧"
      //if (ratio <= 0.40) return "🟥"
      return "🟨"
    }

    const squares = guesses.map((g) => getColorSquare(g.distance, g.isCorrect)).join("")
    const result = gameWon ? `${guesses.length}/6` : "X/6"
    
    return `Atlas ${result}\n\n${squares}\n\nPlay at atlas-game.vercel.app`
  }

  const shareResults = async () => {
    const text = generateShareText()
    
    if (navigator.share) {
      try {
        await navigator.share({ text })
        return
      } catch {
        // User cancelled or share failed, fall through to clipboard
      }
    }
    
    try {
      await navigator.clipboard.writeText(text)
      alert("Results copied to clipboard!")
    } catch {
      const textArea = document.createElement("textarea")
      textArea.value = text
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      alert("Results copied to clipboard!")
    }
  }

  if (!targetCountry) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#1a3a5c]">
        <div className="text-white text-lg">Loading...</div>
      </div>
    )
  }

  const currentGuessNumber = guesses.length + 1

  return (
    <div className="min-h-screen bg-[#1a3a5c] text-white p-4 pb-8">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Atlas</h1>
        <p className="text-white/70 text-sm mt-1">Guess the country from its silhouette</p>
      </header>

      {/* Country Silhouette */}
      <div className="flex justify-center mb-6">
        <div className="relative w-64 h-48 flex items-center justify-center">
          <Image
            src={targetCountry.silhouette || "/placeholder.svg"}
            alt="Mystery country silhouette"
            fill
            className="object-contain drop-shadow-lg"
            priority
            unoptimized={targetCountry.silhouette?.endsWith('.svg')}
          />
        </div>
      </div>

      {/* Success State */}
      {gameWon && (
        <div className="flex items-center justify-center gap-2 mb-4 animate-in fade-in zoom-in duration-300">
          <div className="bg-emerald-500 rounded-full p-1">
            <Check className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold">{targetCountry.name}</span>
        </div>
      )}

      {/* Game Over - Lost */}
      {gameOver && !gameWon && (
        <div className="text-center mb-4 animate-in fade-in duration-300">
          <p className="text-red-400 font-semibold">The answer was:</p>
          <p className="text-2xl font-bold">{targetCountry.name}</p>
        </div>
      )}

      {/* Guesses List */}
      <div className="max-w-md mx-auto mb-4">
        <p className="text-sm font-semibold mb-2 text-white/80">Your guesses</p>
        <div className="space-y-2 relative">
          {/* Submitted guesses */}
          {guesses.map((guess, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center justify-between px-4 py-3 rounded-xl text-gray-900 font-medium animate-in slide-in-from-top-2 duration-300",
                getGuessColor(guess.distance, guess.isCorrect)
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">{getFlagEmoji(guess.code)}</span>
                <span className="font-semibold">{guess.name}</span>
              </div>
              <div className="flex items-center gap-3">
                {guess.isCorrect ? (
                  <span className="text-xl"><PartyPopper className="w-5 h-5" /></span>
                ) : (
                  <span className="text-xl">{guess.direction}</span>
                )}
                <span className="font-mono">{guess.distance.toLocaleString()} miles</span>
              </div>
            </div>
          ))}

          {/* Current input row - only show if game is not over */}
          {!gameOver && (
            <form onSubmit={handleSubmit} className="relative">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value)
                    setShowSuggestions(true)
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  placeholder={`${currentGuessNumber}. Guess`}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50"
                  autoComplete="off"
                />
              </div>

              {/* Suggestions Dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-[#0f2942] border border-white/20 rounded-xl shadow-lg overflow-hidden">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion.code}
                      type="button"
                      onClick={() => handleGuess(suggestion)}
                      className="w-full px-4 py-3 text-left text-white hover:bg-white/10 transition-colors flex items-center gap-3"
                    >
                      <span className="text-xl">{getFlagEmoji(suggestion.code)}</span>
                      <span>{suggestion.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </form>
          )}

          {/* Empty guess slots */}
          {!gameOver &&
            Array.from({ length: MAX_GUESSES - guesses.length - 1 }).map((_, i) => (
              <div
                key={`empty-${i}`}
                className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/30"
              >
                {currentGuessNumber + i + 1}. Guess
              </div>
            ))}
        </div>
      </div>

      {/* Fun Facts Card - Only shown after winning */}
      {gameWon && (
        <Card className="max-w-md mx-auto bg-white/10 border-white/20 text-white animate-in fade-in slide-in-from-bottom-4 duration-500">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Sparkles className="w-5 h-5 text-amber-400" />
              Fun Facts about {targetCountry.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 bg-white/5 rounded-lg p-3">
                <Users className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-white/60">Population</p>
                  <p className="font-medium truncate">{targetCountry.population}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-lg p-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-white/60">Capital</p>
                  <p className="font-medium truncate">{targetCountry.capital}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-lg p-3">
                <Languages className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-white/60">Language</p>
                  <p className="font-medium truncate">{targetCountry.language}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-lg p-3">
                <Church className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-white/60">Religion</p>
                  <p className="font-medium truncate">{targetCountry.religion}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-lg p-3">
                <Coins className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-white/60">Currency</p>
                  <p className="font-medium truncate">{targetCountry.currency}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-lg p-3">
                <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-white/60">Continent</p>
                  <p className="font-medium truncate">{targetCountry.continent}</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-white/80 mb-2">Did you know?</p>
              <ul className="space-y-2">
                {targetCountry.facts.map((fact, index) => (
                  <li
                    key={index}
                    className="text-sm text-white/90 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-amber-400"
                  >
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Play Again & Share Buttons */}
      {gameOver && (
        <div className="max-w-md mx-auto mt-6 flex gap-3">
          <Button
            onClick={playAgain}
            className="flex-1 bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold"
          >
            Play Again
          </Button>
          <Button
            onClick={shareResults}
            className="flex-1 bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>
      )}

      {/* Click outside to close suggestions */}
      {showSuggestions && (
        <div className="fixed inset-0 z-0" onClick={() => setShowSuggestions(false)} />
      )}
    </div>
  )
}
