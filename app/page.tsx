"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ArtworkWall from "@/components/artwork-wall"
import ArtworkDetail from "@/components/artwork-detail"

// Sample artwork data
const artworks = [
  {
    id: 1,
    title: "Abstract Harmony",
    description: "An exploration of color and form, creating visual harmony through abstract elements.",
    year: "2023",
    medium: "Acrylic on canvas",
    dimensions: "100 × 80 cm",
    position: { top: "15%", left: "25%" },
    color: "bg-rose-500",
  },
  {
    id: 2,
    title: "Urban Dreams",
    description: "A reflection on urban life and the dreams that flourish within city environments.",
    year: "2022",
    medium: "Mixed media",
    dimensions: "120 × 90 cm",
    position: { top: "30%", left: "65%" },
    color: "bg-amber-400",
  },
  {
    id: 3,
    title: "Nature's Whisper",
    description: "Inspired by the subtle sounds and movements of nature in its purest form.",
    year: "2023",
    medium: "Oil on canvas",
    dimensions: "90 × 70 cm",
    position: { top: "60%", left: "40%" },
    color: "bg-emerald-500",
  },
  {
    id: 4,
    title: "Emotional Landscape",
    description: "A visual representation of the human emotional landscape, with all its complexity.",
    year: "2021",
    medium: "Watercolor",
    dimensions: "80 × 60 cm",
    position: { top: "75%", left: "75%" },
    color: "bg-sky-500",
  },
  {
    id: 5,
    title: "Memory Fragments",
    description: "Exploring how memories fragment and reconnect through abstract visual language.",
    year: "2022",
    medium: "Digital art printed on canvas",
    dimensions: "110 × 85 cm",
    position: { top: "45%", left: "15%" },
    color: "bg-violet-500",
  },
]

export default function Home() {
  const [selectedArtwork, setSelectedArtwork] = useState<number | null>(null)

  const handleArtworkClick = (id: number) => {
    setSelectedArtwork(id)
  }

  const closeArtworkDetail = () => {
    setSelectedArtwork(null)
  }

  const selectedArtworkData = artworks.find((artwork) => artwork.id === selectedArtwork)

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-neutral-100">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Zilon: The Rebel of Montreal</h1>
          <p className="mt-2 text-lg text-muted-foreground">Punk, raw, and expressive—discover the world of a legendary street artist.</p>
        </header>

        <ArtworkWall artworks={artworks} onArtworkClick={handleArtworkClick} />
      </div>

      <AnimatePresence>
        {selectedArtwork && selectedArtworkData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed mb-5 inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-lg bg-white p-6 shadow-xl"
            >
              <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={closeArtworkDetail}>
                <X className="h-5 w-5" />
                <span className="sr-only">close</span>
              </Button>

              <ArtworkDetail artwork={selectedArtworkData} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

