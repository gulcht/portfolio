import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/ContactForm"
import { Hero } from "@/pages/Hero"
import { Stack } from "@/pages/Stack"
import { Contact } from "@/pages/Contact"
import { Footer } from "@/pages/Footer"
import { Project } from "@/pages/Project"

export default function Home() {
  return (
    <main className="min-h-screen font-mono bg-white text-black">
      <Hero />
      <Stack />
      <Project />
      <Contact />
      <Footer />
    </main>
  )
}

