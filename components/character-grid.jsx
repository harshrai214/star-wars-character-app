"use client"

import CharacterCard from "@/components/character-card"

export default function CharacterGrid({ characters, onCharacterClick, getSpeciesColor }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {characters.map((character) => (
        <CharacterCard
          key={character.url}
          character={character}
          onClick={() => onCharacterClick(character)}
          accentColor={getSpeciesColor(character.homeworld_name || "")}
        />
      ))}
    </div>
  )
}
