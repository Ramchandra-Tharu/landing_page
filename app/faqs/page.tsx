"use client"

import { PageHeader } from "@/components/PageHeader"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"

export default function FAQs() {
    return (
        <>
            <PageHeader
                title="Frequently Asked Questions"
                description="Everything you need to know about Vibez, bookings, and more."
            >
                <div className="max-w-md mx-auto relative mt-6">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search for answers..."
                        className="w-full h-12 pl-10 pr-4 rounded-full bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/70"
                    />
                </div>
            </PageHeader>

            <div className="container mx-auto px-6 py-16 -mt-8 relative z-20">
                <div className="max-w-3xl mx-auto space-y-8">
                    <Card className="bg-card/50 border-input backdrop-blur-sm">
                        <CardContent className="p-8">
                            <h3 className="text-xl font-semibold mb-6 text-primary">Booking & Getting Tickets</h3>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-left text-foreground">How do I book tickets?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        Depending on the event, you can book tickets directly through the Vibez app. Simply browse for an event you like, click "Book Now", select your ticket type and quantity, and proceed to secure payment using your preferred method.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left text-foreground">Where can I find my tickets?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        Your tickets are instantly stored in the "My Bookings" section of the Vibez app. You will also receive an email confirmation with ticket details.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-left text-foreground">Do I need to print my ticket?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        No! We use 100% digital QR code ticketing. Just show your unique QR code from the app at the venue entrance for scanning.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </CardContent>
                    </Card>

                    <Card className="bg-card/50 border-input backdrop-blur-sm">
                        <CardContent className="p-8">
                            <h3 className="text-xl font-semibold mb-6 text-primary">Payments & Refunds</h3>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-left text-foreground">What payment methods do you accept?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        We accept all major credit/debit cards, UPI, and net banking via secure gateways like Razorpay and Stripe. All transactions are encrypted.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left text-foreground">What is the refund policy?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        Refund policies are set by individual event organizers. You can find the specific policy on the event page. If an event is cancelled, a full refund is automatically processed.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </CardContent>
                    </Card>

                    <Card className="bg-card/50 border-input backdrop-blur-sm">
                        <CardContent className="p-8">
                            <h3 className="text-xl font-semibold mb-6 text-primary">For Organizers</h3>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-left text-foreground">How do I list an event?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        Download the "Vibez Organizer" app or sign up on our website portal to access the organizer dashboard. The setup wizard will guide you through creating your first event.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left text-foreground">When do I get paid?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        Payouts are processed to your registered bank account within 7 business days after the event concludes ensuring all attendee disputes are resolved.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}
