"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const services = [
    "UI/UX Design",
    "Frontend Development",
    "Motion Design",
    "Landing Pages",
    "SaaS Dashboards",
    "Website Redesign",
]

export function Services() {
    return (
        <section id="services" className="py-24 bg-background/50">
            <div className="container px-6 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What We Do</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive digital solutions tailored to your unique needs.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Card className="h-full bg-card/50 border-input hover:bg-card hover:border-primary/50 transition-colors cursor-default">
                                <CardHeader>
                                    <CardTitle className="text-xl">{service}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Expert {service.toLowerCase()} services to elevate your digital presence.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
