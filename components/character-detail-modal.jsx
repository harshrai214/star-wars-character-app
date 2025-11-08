"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"

export default function CharacterDetailModal({ character, isOpen, onClose }) {
  const [filmCount, setFilmCount] = useState(0)

  useEffect(() => {
    setFilmCount(character.films?.length || 0)
  }, [character])

  if (!isOpen) return null

  const getImageUrl = (name) => {
    const hash = name.split("").reduce((acc, char) => ((acc << 5) - acc + char.charCodeAt(0)) | 0, 0)
    return `https://picsum.photos/400/400?random=${Math.abs(hash)}`
  }

  const formatDate = (dateString) => {
    if (!dateString) return "Unknown"
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    } catch (e) {
      return "Unknown"
    }
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in">
      <Card className="w-full max-w-2xl border-border/50 max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6 relative">
          <CardTitle className="text-2xl">{character.name}</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose} className="absolute right-6 top-6">
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Image */}
          <div className="relative w-full h-64 rounded-lg overflow-hidden bg-card">
            <img
              src={getImageUrl(character.name) || "/placeholder.svg"}
              alt={character.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Physical Characteristics */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-1">HEIGHT</p>
              <p className="text-foreground font-semibold">{character.height} cm</p>
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-1">MASS</p>
              <p className="text-foreground font-semibold">{character.mass} kg</p>
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-1">BIRTH YEAR</p>
              <p className="text-foreground font-semibold">{character.birth_year}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-1">FILMS APPEARED</p>
              <p className="text-foreground font-semibold">{filmCount}</p>
            </div>
          </div>

          {/* Homeworld Info */}
          <div className="space-y-3 p-4 rounded-lg bg-card/50 border border-border/50">
            <h3 className="font-semibold text-foreground">Homeworld</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-xs text-muted-foreground mb-1">PLANET</p>
                <p className="text-foreground">{character.homeworld_name || "Unknown"}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">TERRAIN</p>
                <p className="text-foreground">{character.homeworld_terrain || "Unknown"}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">CLIMATE</p>
                <p className="text-foreground">{character.homeworld_climate || "Unknown"}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">POPULATION</p>
                <p className="text-foreground">{character.homeworld_population || "Unknown"}</p>
              </div>
            </div>
          </div>

          {/* Created Date */}
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-1">DATE ADDED TO DATABASE</p>
            <p className="text-foreground">{formatDate(character.created)}</p>
          </div>

          {/* Close Button */}
          <Button onClick={onClose} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Close
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
