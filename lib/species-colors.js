export function getSpeciesColor(homeworld) {
  const colorMap = {
    Tatooine: "#F59E0B",
    Alderaan: "#3B82F6",
    Naboo: "#10B981",
    Coruscant: "#8B5CF6",
    Kamino: "#06B6D4",
    Geonosis: "#EC4899",
    Mustafar: "#EF4444",
    Kashyyyk: "#22C55E",
    Bespin: "#F3E8FF",
    Endor: "#84CC16",
    Dagobah: "#6B7280",
    Yvin: "#14B8A6",
    Kaminoan: "#0EA5E9",
  }

  return colorMap[homeworld] || "#64748B"
}
