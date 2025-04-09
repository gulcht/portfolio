"use client"

import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export const Hero = () => {
    return (
        <section id="home" className="min-h-screen pt-20 flex flex-col justify-center">
            <div className="container px-4 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
               
                {/* Left Column - Hero Content */}
                <div className="space-y-8 order-2 lg:order-1">
                    <div className="space-y-4">
                    <h1 className="text-3xl md:text-5xl font-mono mb-4 text-black/80">
                        <span className="block">Hello, I'm</span>
                        {/* <span className="block text-4xl md:text-6xl font-bold">Gu</span> */}
                        <span className="block text-4xl mt-4 text-black/100 md:text-5xl font-bold">Kullachat Pana</span>
                    </h1>
                    <p className="text-lg md:text-xl font-mono">Fullstack Developer</p>
                    </div>

                    <div className="space-y-4">
                    <p className="text-black/80 font-mono">
                        I'm a passionate fullstack developer with expertise in building robust web applications from concept
                        to deployment. With a strong foundation in both frontend and backend technologies, I create seamless,
                        user-focused experiences that solve real-world problems.
                    </p>
                    <p className="text-black/80 font-mono">
                        My approach combines clean code, thoughtful architecture, and modern best practices to deliver
                        scalable, maintainable solutions. I thrive in collaborative environments and enjoy tackling complex
                        challenges.
                    </p>
                    </div>

                    <div className="space-y-4">
                    <h3 className="text-xl font-mono text-black">My Journey</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border-l-2 border-black pl-4">
                        <h4 className="font-mono">2023 - Present</h4>
                        <p className="text-black/80 font-mono">Senior Fullstack Developer</p>
                        </div>
                        <div className="border-l-2 border-black pl-4">
                        <h4 className="font-mono">2021 - 2023</h4>
                        <p className="text-black/80 font-mono">Fullstack Developer</p>
                        </div>
                        <div className="border-l-2 border-black pl-4">
                        <h4 className="font-mono">2019 - 2021</h4>
                        <p className="text-black/80 font-mono">Frontend Developer</p>
                        </div>
                        <div className="border-l-2 border-black pl-4">
                        <h4 className="font-mono">2018</h4>
                        <p className="text-black/80 font-mono">Computer Science Degree</p>
                        </div>
                    </div>
                    </div>

                
                    <div className="flex gap-4 pt-4">
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-none border-2 border-black hover:bg-black hover:text-white"
                    >
                        <Github className="h-5 w-5" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-none border-2 border-black hover:bg-black hover:text-white"
                    >
                        <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-none border-2 border-black hover:bg-black hover:text-white"
                    >
                        <Mail className="h-5 w-5" />
                    </Button>
                    </div>
                </div>

                {/* Right Column - Image */}
                <div className="order-1 lg:order-2">
                    <div className="relative aspect-square max-w-md mx-auto border-2 border-black p-2">
                    <div className="relative w-full h-full overflow-hidden">
                        <Image
                        src="./images/profile.jpeg"
                        alt="Serene landscape background"
                        fill
                        priority
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                    <div className="absolute inset-0 border-2 border-black m-2 pointer-events-none"></div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}