"use client"

import ProjectCard from "@/components/ProjectCard"

export const Project = () => {
    return (
        <section id="projects" className="py-20 bg-white border-t-2 border-black">
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl font-mono text-center mb-12 text-black">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="E-Commerce Platform"
              description="A full-featured online store with payment processing, user authentication, and inventory management."
              tags={["Next.js", "Node.js", "MongoDB", "Stripe"]}
              imageUrl="/placeholder.svg?height=200&width=400"
            />

            <ProjectCard
              title="Task Management App"
              description="A collaborative project management tool with real-time updates, task assignment, and progress tracking."
              tags={["React", "Firebase", "Tailwind CSS", "Redux"]}
              imageUrl="/placeholder.svg?height=200&width=400"
            />

            <ProjectCard
              title="Social Media Dashboard"
              description="An analytics dashboard for social media managers with data visualization and reporting features."
              tags={["TypeScript", "D3.js", "Express", "PostgreSQL"]}
              imageUrl="/placeholder.svg?height=200&width=400"
            />

            <ProjectCard
              title="Fitness Tracking App"
              description="A mobile-responsive application for tracking workouts, nutrition, and fitness goals."
              tags={["React Native", "GraphQL", "Node.js", "MongoDB"]}
              imageUrl="/placeholder.svg?height=200&width=400"
            />

            <ProjectCard
              title="Real Estate Platform"
              description="A property listing and search platform with map integration and virtual tours."
              tags={["Next.js", "Django", "PostgreSQL", "Google Maps API"]}
              imageUrl="/placeholder.svg?height=200&width=400"
            />

            <ProjectCard
              title="AI Content Generator"
              description="A tool that leverages AI to generate marketing content, blog posts, and social media captions."
              tags={["React", "Python", "Flask", "OpenAI API"]}
              imageUrl="/placeholder.svg?height=200&width=400"
            />
          </div>
        </div>
      </section>
    )
}