"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Clock, MapPin, Phone, MessageSquare, HelpCircle, AlertCircle } from "lucide-react"
import { PageHeader } from "@/components/PageHeader"
import { motion } from "framer-motion"

const contactOptions = [
    {
        icon: MessageSquare,
        title: "Chat Support",
        description: "Get instant help via our in-app chat.",
        action: "Open App",
        link: "#"
    },
    {
        icon: Mail,
        title: "Email Us",
        description: "We usually reply within 24 hours.",
        action: "support@vibez.app",
        link: "mailto:support@vibez.app"
    },
    {
        icon: HelpCircle,
        title: "Help Center",
        description: "Find answers in our FAQ section.",
        action: "Visit FAQs",
        link: "/faqs"
    }
]

export function ContactForm() {
    return (
        <>
            <PageHeader
                title="Contact Support"
                description="We're here to help. Choose a channel below or send us a message."
            />

            <div className="container mx-auto px-6 py-16 -mt-12 relative z-20">
                {/* Contact Channels Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {contactOptions.map((option, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-card/80 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors text-center p-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                    <option.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-semibold text-xl mb-2">{option.title}</h3>
                                <p className="text-muted-foreground text-sm mb-6">{option.description}</p>
                                <Button variant="outline" className="w-full" asChild>
                                    <a href={option.link}>{option.action}</a>
                                </Button>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Info Section */}
                    <div className="space-y-8 lg:sticky lg:top-24">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                            <p className="text-muted-foreground">
                                Have a specific inquiry? Fill out the form and our team will route it to the right department.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 border border-border/50">
                                <div className="bg-primary/20 p-3 rounded-full">
                                    <Phone className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Phone Support</h3>
                                    <p className="text-sm text-foreground mb-1">+91-XXXXXXXXXX</p>
                                    <p className="text-xs text-muted-foreground">Mon-Fri, 10 AM - 7 PM IST</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 border border-border/50">
                                <div className="bg-primary/20 p-3 rounded-full">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Office HQ</h3>
                                    <p className="text-sm text-foreground">Vibez Technologies Pvt. Ltd.</p>
                                    <p className="text-sm text-muted-foreground">[Street Address], [City]</p>
                                    <p className="text-sm text-muted-foreground">India, [PIN Code]</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <Card className="bg-card border-input overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-600" />
                        <CardContent className="p-8">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Name</label>
                                        <Input placeholder="John Doe" required className="bg-background/50" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Email</label>
                                        <Input type="email" placeholder="john@company.com" required className="bg-background/50" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Subject</label>
                                    <select className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                        <option>General Inquiry</option>
                                        <option>Booking Issue</option>
                                        <option>Refund Request</option>
                                        <option>Organizer Support</option>
                                        <option>Technical Problem</option>
                                        <option>Partnership/Business</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Message</label>
                                    <Textarea
                                        placeholder="How can we help you today?"
                                        className="min-h-[150px] bg-background/50 resize-none"
                                        required
                                    />
                                </div>

                                <Button type="submit" size="lg" className="w-full">
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}
