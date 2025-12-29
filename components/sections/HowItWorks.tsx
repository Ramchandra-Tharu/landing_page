"use client"

import { motion } from "framer-motion"

const steps = [
    { id: "1", title: "Browse", description: "Explore events in your city" },
    { id: "2", title: "Book", description: "Select tickets and pay securely" },
    { id: "3", title: "Attend", description: "Show your QR code at the venue" },
]

export function HowItWorks() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container px-6 mx-auto relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative p-8 rounded-2xl bg-gradient-to-b from-card to-transparent border border-white/5 text-center group hover:border-primary/30 transition-colors"
                        >
                            <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
                                {step.id}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
