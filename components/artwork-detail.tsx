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
  color: string
}

type ArtworkDetailProps = {
  artwork: Artwork
}

export default function ArtworkDetail({ artwork }: ArtworkDetailProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg">
        <div className={`absolute inset-0 ${artwork.color} opacity-20`} />
        <Image
          src={`/placeholder.svg?height=600&width=600&text=${encodeURIComponent(artwork.title)}`}
          alt={artwork.title}
          fill
          className="object-cover"
        />

        {/* Animated overlay */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
            ease: "linear",
            repeatDelay: 1,
          }}
          className={`absolute inset-y-0 left-0 w-1/4 ${artwork.color} opacity-30 blur-xl`}
        />
      </div>

      <div className="flex flex-col justify-center">
        <motion.h2
          className="text-2xl font-bold md:text-3xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {artwork.title}
        </motion.h2>

        <motion.div
          className="mt-2 h-1 w-16 rounded-full"
          style={{ backgroundColor: artwork.color.replace("bg-", "") }}
          initial={{ width: 0 }}
          animate={{ width: "4rem" }}
          transition={{ delay: 0.4 }}
        />

        <motion.p
          className="mt-4 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {artwork.description}
        </motion.p>

        <motion.div
          className="mt-6 grid gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="grid grid-cols-2">
            <span className="font-medium">Année:</span>
            <span>{artwork.year}</span>
          </div>
          <div className="grid grid-cols-2">
            <span className="font-medium">Technique:</span>
            <span>{artwork.medium}</span>
          </div>
          <div className="grid grid-cols-2">
            <span className="font-medium">Dimensions:</span>
            <span>{artwork.dimensions}</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

