"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const benefits = [
    "Reach thousands of attendees",
    "Easy event creation wizard",
    "Real-time ticket sales dashboard",
    "Built-in check-in with QR scanning",
    "Payouts directly to your bank",
]

export function ForOrganizers() {
    return (
        <section id="organizers" className="py-24 bg-primary/5 border-y border-white/5">
            <div className="container px-6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Host Your Event on Vibez</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Manage everything from ticketing to check-ins with our powerful organizer tools.
                        </p>
                        <ul className="space-y-4 mb-10">
                            {benefits.map((benefit, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="bg-primary/20 p-1 rounded-full">
                                        <Check className="w-4 h-4 text-primary" />
                                    </div>
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                        <Button size="lg" className="h-12 px-8" asChild>
                            <Link href="#">Become an Organizer</Link>
                        </Button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-card rounded-xl border border-border p-2 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
                >
                    <div className="bg-muted/50 rounded-lg aspect-video flex items-center justify-center text-muted-foreground">
                        [Dashboard Screenshot Placeholder]
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
