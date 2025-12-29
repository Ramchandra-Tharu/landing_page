"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

const projects = [
    { title: "Neon Nexus", category: "DeFi Dashboard", color: "bg-pink-500/10" },
    { title: "Orbital", category: "SaaS Platform", color: "bg-cyan-500/10" },
    { title: "Velocity", category: "E-commerce", color: "bg-yellow-500/10" },
    { title: "Aether", category: "Portfolio", color: "bg-purple-500/10" },
]

export function Projects() {
    return (
        <section id="projects" className="py-24">
            <div className="container px-6 mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-tight">Featured Work</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Card className="overflow-hidden border-none bg-transparent">
                                <div className={`h-80 w-full ${project.color} rounded-lg flex items-end relative group overflow-hidden`}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                                    <div className="relative z-10 p-8 w-full">
                                        <h3 className="text-2xl font-bold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform">{project.title}</h3>
                                        <p className="text-white/70 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 delay-75">{project.category}</p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
