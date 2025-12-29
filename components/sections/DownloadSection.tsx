"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { Smartphone, Play, QrCode } from "lucide-react"

export function DownloadSection() {
    return (
        <section id="download" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/10 z-0" />
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-6 mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold tracking-tighter mb-6"
                    >
                        Get Vibez Now
                    </motion.h2>
                    <p className="text-xl text-muted-foreground mb-10">
                        Download the app to discover events, book tickets, and manage your bookings on the go.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                        <Button size="lg" className="h-14 px-8 text-base" asChild>
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
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <div className="bg-white p-2 rounded-lg">
                            <QrCode className="w-20 h-20 text-black" />
                        </div>
                        <div className="text-left text-sm text-muted-foreground">
                            <p>Scan to download</p>
                            <p>Available on iOS & Android</p>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <div className="relative w-64 h-[500px] bg-black border-4 border-gray-800 rounded-[3rem] shadow-2xl overflow-hidden">
                        {/* App Screenshot Placeholder */}
                        <div className="absolute inset-0 bg-zinc-900 flex flex-col pt-10 px-4">
                            <div className="w-full h-8 bg-zinc-800 rounded-lg mb-4 opacity-50 animate-pulse" />
                            <div className="w-full h-32 bg-primary/20 rounded-xl mb-4" />
                            <div className="grid grid-cols-2 gap-2">
                                <div className="h-24 bg-zinc-800 rounded-lg" />
                                <div className="h-24 bg-zinc-800 rounded-lg" />
                            </div>
                        </div>
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
