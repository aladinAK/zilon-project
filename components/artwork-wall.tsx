"use client"

import { motion } from "framer-motion"
import Image from "next/image"

type Artwork = {
  id: number
  title: string
  description: string
  year: string
  medium: string
  dimensions: string
  position: {
    top: string
    left: string
  }
  color: string
}

type ArtworkWallProps = {
  artworks: Artwork[]
  onArtworkClick: (id: number) => void
}

export default function ArtworkWall({ artworks, onArtworkClick }: ArtworkWallProps) {
  return (
    <div className="relative mx-auto aspect-[16/9] w-full max-w-5xl rounded-lg bg-neutral-200 shadow-lg">
      {/* Wall texture background */}
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Mur d'art texturé"
          fill
          className="object-cover opacity-40"
          priority
        />

        {/* Texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-100/20 to-neutral-800/20" />
      </div>

      {/* Interactive artwork spots */}
      {artworks.map((artwork) => (
        <motion.button
          key={artwork.id}
          className={`absolute z-10 h-24 w-24 cursor-pointer rounded-full ${artwork.color} shadow-lg md:h-32 md:w-32`}
          style={{
            top: artwork.position.top,
            left: artwork.position.left,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onArtworkClick(artwork.id)}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              delay: 0.1 * artwork.id,
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
        >
          <span className="sr-only">{artwork.title}</span>
          <div className="absolute inset-0 rounded-full bg-white/20" />
        </motion.button>
      ))}

      {/* Instructions */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-neutral-700">
        Cliquez sur les cercles colorés pour découvrir les œuvres
      </div>
    </div>
  )
}

