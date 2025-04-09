import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  liveUrl?: string
  githubUrl?: string
}

export default function ProjectCard({ title, description, tags, imageUrl, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <div className="overflow-hidden border-2 border-black bg-white">
      <div className="relative h-48 w-full overflow-hidden border-b-2 border-black">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-mono mb-2 text-black">{title}</h3>
        <p className="text-black/70 mb-4 font-mono">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-black text-xs font-mono">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 pb-6 pt-0 flex gap-3">
        {liveUrl && (
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1 font-mono rounded-none border-2 border-black hover:bg-black hover:text-white"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </Button>
        )}

        {githubUrl && (
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1 font-mono rounded-none border-2 border-black hover:bg-black hover:text-white"
          >
            <Github className="h-4 w-4" />
            Code
          </Button>
        )}

        {!liveUrl && !githubUrl && (
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1 font-mono rounded-none border-2 border-black hover:bg-black hover:text-white"
          >
            <ExternalLink className="h-4 w-4" />
            View Project
          </Button>
        )}
      </div>
    </div>
  )
}

