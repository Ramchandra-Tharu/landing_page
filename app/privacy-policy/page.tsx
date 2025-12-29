"use client"

import { PageHeader } from "@/components/PageHeader"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, Eye, Server, UserCheck } from "lucide-react"

export default function PrivacyPolicy() {
    return (
        <>
            <PageHeader
                title="Privacy Policy"
                description="We value your trust and are committed to protecting your personal data."
            />

            <div className="container mx-auto px-6 py-12 max-w-4xl relative z-10">
                <div className="flex flex-col md:flex-row gap-6 mb-16">
                    {[
                        { icon: Lock, title: "Encoded & Secure", text: "Data encrypted at rest and in transit." },
                        { icon: Eye, title: "Transparent", text: "No hidden tracking or data selling." },
                        { icon: Server, title: "Private Storage", text: "Stored securely on AWS servers." }
                    ].map((feature, i) => (
                        <Card key={i} className="flex-1 bg-card/60 border-primary/10">
                            <CardContent className="p-6 text-center">
                                <div className="w-10 h-10 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3">
                                    <feature.icon className="w-5 h-5" />
                                </div>
                                <h4 className="font-semibold mb-1">{feature.title}</h4>
                                <p className="text-xs text-muted-foreground">{feature.text}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-primary">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm">1</span>
                            Information We Collect
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-secondary/30 p-6 rounded-lg">
                                <h3 className="font-semibold mb-3 flex items-center gap-2"><UserCheck className="w-4 h-4 text-primary" /> Provided by You</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Name, email address, phone number</li>
                                    <li>• Payment info (via secure processors)</li>
                                    <li>• Profile preferences and favorites</li>
                                </ul>
                            </div>
                            <div className="bg-secondary/30 p-6 rounded-lg">
                                <h3 className="font-semibold mb-3 flex items-center gap-2"><Server className="w-4 h-4 text-primary" /> Automatically Collected</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Device ID and IP address</li>
                                    <li>• App usage statistics</li>
                                    <li>• Location data (with permission)</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-primary">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm">2</span>
                            How We Use Your Data
                        </h2>
                        <p className="text-muted-foreground mb-4">We use your personal data to provide and improve our services, including:</p>
                        <ul className="space-y-3">
                            {[
                                "Facilitating ticket bookings and payments",
                                "Sending event tickets and updates",
                                "Providing customer support",
                                "Detecting and preventing fraud",
                                "Personalizing event recommendations"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-muted-foreground bg-card/50 p-3 rounded border border-border/50">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-primary">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm">3</span>
                            Data Sharing
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We do not sell your personal data. We only share data with:
                        </p>
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="p-4 border rounded-lg border-border">
                                <strong className="block text-foreground mb-1">Event Organizers</strong>
                                <span className="text-muted-foreground">For entry management and updates.</span>
                            </div>
                            <div className="p-4 border rounded-lg border-border">
                                <strong className="block text-foreground mb-1">Service Providers</strong>
                                <span className="text-muted-foreground">Payment gateways, cloud hosting.</span>
                            </div>
                            <div className="p-4 border rounded-lg border-border">
                                <strong className="block text-foreground mb-1">Legal Authorities</strong>
                                <span className="text-muted-foreground">If required by law or to protect rights.</span>
                            </div>
                        </div>
                    </section>

                    <section className="border-t border-border pt-8">
                        <h3 className="font-semibold mb-2">Contact Privacy Verification</h3>
                        <p className="text-sm text-muted-foreground">
                            If you have any questions about this Privacy Policy, please contact our Data Protection Officer at <a href="mailto:privacy@vibez.app" className="text-primary hover:underline">privacy@vibez.app</a>.
                        </p>
                    </section>
                </div>
            </div>
        </>
    )
}
