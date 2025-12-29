"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Ticket, QrCode, Star, Heart, Tag } from "lucide-react"
import { motion } from "framer-motion"

const features = [
    {
        title: "Discover Events",
        icon: Search,
        description: "Browse thousands of events by category, city, or date",
    },
    {
        title: "Easy Booking",
        icon: Ticket,
        description: "Book tickets in seconds with secure payments",
    },
    {
        title: "QR Tickets",
        icon: QrCode,
        description: "No paper tickets - just show your QR code",
    },
    {
        title: "Reviews & Ratings",
        icon: Star,
        description: "Read reviews from verified attendees",
    },
    {
        title: "Favorites",
        icon: Heart,
        description: "Save events and get reminders",
    },
    {
        title: "Promo Codes",
        icon: Tag,
        description: "Use discount codes for savings",
    },
]

export function Features() {
    return (
        <section className="py-24 bg-background/50">
            <div className="container px-6 mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight">Everything You Need</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="bg-card/40 border-input h-full hover:bg-card/60 transition-colors">
                                <CardHeader>
                                    <feature.icon className="w-10 h-10 text-primary mb-4" />
                                    <CardTitle>{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
