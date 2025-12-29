"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { Smartphone, Play } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 pt-16">
            {/* Background Gradients */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[100px]" />
            </div>

            <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div className="text-center md:text-left space-y-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white to-white/70"
                    >
                        Discover Amazing <span className="text-primary">Events</span> Near You
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl"
                    >
                        Book tickets, attend unforgettable experiences, and create memories.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <Button size="lg" className="h-14 px-8 text-base bg-white text-black hover:bg-white/90" asChild>
                            <Link href="#" className="flex items-center gap-2">
                                <Smartphone className="w-5 h-5" />
                                App Store
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-base" asChild>
                            <Link href="#" className="flex items-center gap-2">
                                <Play className="w-5 h-5 fill-current" />
                                Google Play
                            </Link>
                        </Button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* Abstract Event Collage Placeholder */}
                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-tr from-primary/20 to-secondary/20 border border-white/10 flex items-center justify-center">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-70 hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                        <div className="relative z-10 text-center p-6">
                            <span className="text-sm uppercase tracking-widest text-primary font-bold">Vibez App</span>
                            <h3 className="text-2xl font-bold mt-2">Live the Moment</h3>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
