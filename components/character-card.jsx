"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function CharacterCard({ character, onClick, accentColor }) {
  const getImageUrl = (name) => {
    const hash = name.split("").reduce((acc, char) => ((acc << 5) - acc + char.charCodeAt(0)) | 0, 0)
    return `https://picsum.photos/300/300?random=${Math.abs(hash)}`
  }

  return (
    <Card
      onClick={onClick}
      className="cursor-pointer group overflow-hidden border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
    >
      <div className="relative overflow-hidden h-48 bg-card">
        <img
          src={getImageUrl(character.name) || "/placeholder.svg"}
          alt={character.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div
          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-${accentColor} to-transparent`}
          style={{
            background: `linear-gradient(90deg, ${accentColor} 0%, transparent 100%)`,
          }}
        ></div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground mb-2 line-clamp-1">{character.name}</h3>
        <div className="space-y-1 text-xs text-muted-foreground">
          <p>Height: {character.height} cm</p>
          <p>Birth Year: {character.birth_year}</p>
          <p className="line-clamp-1">Homeworld: {character.homeworld_name || "Unknown"}</p>
        </div>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-primary">Click to view details →</p>
        </div>
      </CardContent>
    </Card>
  )
}
