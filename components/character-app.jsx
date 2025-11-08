"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Header from "@/components/header"
import CharacterGrid from "@/components/character-grid"
import CharacterDetailModal from "@/components/character-detail-modal"
import LoadingSkeletons from "@/components/loading-skeletons"
import ErrorState from "@/components/error-state"
import { getSpeciesColor } from "@/lib/species-colors"

export default function CharacterApp({ userName, onLogout }) {
  const [characters, setCharacters] = useState([])
  const [filteredCharacters, setFilteredCharacters] = useState([])
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [speciesFilter, setSpeciesFilter] = useState("")
  const [homeworldFilter, setHomeworldFilter] = useState("")

  const charactersPerPage = 12
  const startIdx = (currentPage - 1) * charactersPerPage
  const endIdx = startIdx + charactersPerPage
  const paginatedCharacters = filteredCharacters.slice(startIdx, endIdx)
  const totalPages = Math.ceil(filteredCharacters.length / charactersPerPage)

  useEffect(() => {
    fetchCharacters()
  }, [])

  useEffect(() => {
    filterCharacters()
  }, [characters, searchTerm, speciesFilter, homeworldFilter])

  const fetchCharacters = async () => {
    try {
      setLoading(true)
      setError(null)
      const allCharacters = []
      let page = 1
      let hasNextPage = true

      while (hasNextPage && page <= 9) {
        const response = await fetch(`https://swapi.dev/api/people/?page=${page}`)
        if (!response.ok) throw new Error("Failed to fetch characters")

        const data = await response.json()

        const charactersWithDetails = await Promise.all(
          data.results.map(async (char) => {
            let homeworldData = null
            if (char.homeworld) {
              try {
                const hwResponse = await fetch(char.homeworld)
                homeworldData = await hwResponse.json()
              } catch (e) {
                console.error("Failed to fetch homeworld:", e)
              }
            }

            return {
              ...char,
              homeworld_name: homeworldData?.name || "Unknown",
              homeworld_terrain: homeworldData?.terrain || "Unknown",
              homeworld_climate: homeworldData?.climate || "Unknown",
              homeworld_population: homeworldData?.population || "Unknown",
            }
          }),
        )

        allCharacters.push(...charactersWithDetails)
        hasNextPage = !!data.next
        page++
      }

      setCharacters(allCharacters)
    } catch (err) {
      setError("Failed to load characters. Please try again.")
      console.error("Error fetching characters:", err)
    } finally {
      setLoading(false)
    }
  }

  const filterCharacters = () => {
    const filtered = characters.filter((char) => {
      const matchesSearch = char.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesSpecies = !speciesFilter || char.homeworld_name === speciesFilter
      const matchesHomeworld = !homeworldFilter || char.homeworld_name === homeworldFilter

      return matchesSearch && matchesSpecies && matchesHomeworld
    })

    setFilteredCharacters(filtered)
    setCurrentPage(1)
  }

  const getUniqueValues = (field) => {
    const values = characters.map((char) => char[field]).filter((v, i, a) => v && a.indexOf(v) === i)
    return values.sort()
  }

  const uniqueHomeworlds = getUniqueValues("homeworld_name")

  if (error && !loading) {
    return <ErrorState message={error} onRetry={fetchCharacters} />
  }

  return (
    <div className="min-h-screen bg-background">
      <Header userName={userName} onLogout={onLogout} />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">Search Characters</label>
            <Input
              placeholder="Find a character..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-card border-border/50"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">Homeworld</label>
            <select
              value={homeworldFilter}
              onChange={(e) => setHomeworldFilter(e.target.value)}
              className="w-full px-3 py-2 bg-card border border-border/50 rounded-md text-foreground text-sm"
            >
              <option value="">All Homeworlds</option>
              {uniqueHomeworlds.map((hw) => (
                <option key={hw} value={hw}>
                  {hw}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <Button
              onClick={() => {
                setSearchTerm("")
                setSpeciesFilter("")
                setHomeworldFilter("")
              }}
              variant="outline"
              className="w-full"
            >
              Reset Filters
            </Button>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            Showing {paginatedCharacters.length > 0 ? startIdx + 1 : 0}–{Math.min(endIdx, filteredCharacters.length)} of{" "}
            {filteredCharacters.length} characters
          </p>
        </div>

        {/* Character Grid */}
        {loading ? (
          <LoadingSkeletons count={charactersPerPage} />
        ) : filteredCharacters.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg mb-4">No characters found matching your criteria</p>
            <Button onClick={() => filterCharacters()}>Clear Filters</Button>
          </div>
        ) : (
          <>
            <CharacterGrid
              characters={paginatedCharacters}
              onCharacterClick={setSelectedCharacter}
              getSpeciesColor={getSpeciesColor}
            />

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-8 pt-8 border-t border-border/50">
                <Button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  variant="outline"
                >
                  ← Previous
                </Button>
                <div className="text-sm text-muted-foreground">
                  Page {currentPage} of {totalPages}
                </div>
                <Button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  variant="outline"
                >
                  Next →
                </Button>
              </div>
            )}
          </>
        )}

        {/* Character Detail Modal */}
        {selectedCharacter && (
          <CharacterDetailModal
            character={selectedCharacter}
            isOpen={!!selectedCharacter}
            onClose={() => setSelectedCharacter(null)}
          />
        )}
      </main>
    </div>
  )
}
