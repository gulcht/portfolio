import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/ContactForm"
import { Hero } from "@/components/Hero"
import { Stack } from "@/components/Stack"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { Project } from "@/components/Project"

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

