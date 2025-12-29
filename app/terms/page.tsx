"use client"

import { PageHeader } from "@/components/PageHeader"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Shield, Scale, ArrowRight } from "lucide-react"
import Link from "next/link"

const sections = [
    {
        title: "Acceptance of Terms",
        icon: FileText,
        content: "By accessing and using Vibez, you agree to be bound by these terms. If you do not agree, please do not use our services. The platform is available only to individuals who are at least 13 years old."
    },
    {
        title: "Account Registration",
        icon: Shield,
        content: "To access certain features, you must register for an account. You agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account and password."
    },
    {
        title: "Ticket Purchases",
        icon: Scale,
        content: "All ticket sales are final unless otherwise stated by the event organizer. Tickets are generally non-transferable. Platform fees charged by Vibez are non-refundable in all circumstances unless the event is cancelled."
    },
]

export default function Terms() {
    return (
        <>
            <PageHeader
                title="Terms of Use"
                description="Please read these terms carefully before using our services."
            />

            <div className="container mx-auto px-6 py-12 max-w-4xl relative z-10">
                <div className="prose prose-invert max-w-none">
                    <div className="flex flex-col md:flex-row gap-8 mb-12">
                        <div className="flex-1 bg-card/40 p-6 rounded-lg border border-primary/20">
                            <h3 className="text-lg font-bold mb-2 flex items-center gap-2"><FileText className="w-5 h-5 text-primary" /> Agreement</h3>
                            <p className="text-sm text-muted-foreground">This is a legal agreement between you and Vibez Technologies Pvt. Ltd.</p>
                        </div>
                        <div className="flex-1 bg-card/40 p-6 rounded-lg border border-primary/20">
                            <h3 className="text-lg font-bold mb-2 flex items-center gap-2"><Shield className="w-5 h-5 text-primary" /> Updates</h3>
                            <p className="text-sm text-muted-foreground">Last updated on December 2024. Continued use implies acceptance.</p>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-primary">1. Overview</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Welcome to Vibez. These Terms of Use govern your access to and use of the Vibez website, mobile application, and services.
                                We manage a marketplace that connects event organizers with attendees. We are not the creator, organizer, or owner of the events listed on the Services.
                            </p>
                        </div>

                        {sections.map((section, idx) => (
                            <Card key={idx} className="bg-card border-l-4 border-l-primary border-y-0 border-r-0 rounded-r-lg shadow-sm">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <span className="text-primary/40 text-sm">0{idx + 2}.</span> {section.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {section.content}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-primary">5. User Conduct</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                You agree not to uses the services for any unlawful purpose or in any way that interrupts, damages, or impairs the service. Prohibited activities include:
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                                {['Ticket Scalping', 'Fraudulent Bookings', 'Harassment', 'Data Scraping'].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground p-3 bg-secondary/50 rounded-md">
                                        <span className="w-2 h-2 bg-red-500 rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-primary/5 p-8 rounded-xl border border-primary/20 text-center">
                            <h3 className="text-xl font-bold mb-2">Questions about these terms?</h3>
                            <p className="text-muted-foreground mb-6">Our legal team is available to clarify any doubts.</p>
                            <Button asChild variant="default">
                                <Link href="/contact">Contact Legal Team <ArrowRight className="w-4 h-4 ml-2" /></Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
