"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function CTA() {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 z-0" />
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-6 mx-auto relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold tracking-tighter mb-6"
                >
                    Ready to Break the Limits?
                </motion.h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                    Let's build something extraordinary together.
                </p>
                <Button size="lg" className="h-14 px-10 text-lg shadow-lg shadow-primary/20" asChild>
                    <Link href="/contact">Contact Us</Link>
                </Button>
            </div>
        </section>
    )
}
