"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"


const testimonials = [
    { name: "Sarah J.", role: "User", content: "Found the best weekend concert through Vibez. The QR entry was super smooth!" },
    { name: "Mike T.", role: "User", content: "I love how easy it is to book tickets. No hidden fees and great support." },
    { name: "Club XYZ", role: "Organizer", content: "Vibez helped us sell out our event in record time. The dashboard is a lifesaver." },
    { name: "Neon Fest", role: "Organizer", content: "Managing attendees has never been easier. Highly recommend for event hosts." },
]

export function Testimonials() {
    return (
        <section className="py-24 bg-background/50">
            <div className="container px-6 mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight">Community Love</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="bg-card/50 border-input h-full">
                                <CardContent className="pt-6 flex flex-col justify-between h-full">
                                    <p className="mb-6 italic text-muted-foreground text-sm">"{t.content}"</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-sm">
                                            {t.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">{t.name}</h4>
                                            <p className="text-xs text-muted-foreground">{t.role}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
