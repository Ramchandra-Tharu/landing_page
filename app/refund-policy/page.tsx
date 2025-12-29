"use client"

import { PageHeader } from "@/components/PageHeader"
import { Card, CardContent } from "@/components/ui/card"
import { RefreshCcw, AlertTriangle, Calendar, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function RefundPolicy() {
    return (
        <>
            <PageHeader
                title="Refund Policy"
                description="Clear and transparent rules for cancellations and refunds."
            />

            <div className="container mx-auto px-6 py-12 max-w-4xl relative z-10">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <Card className="bg-card/50 border-primary/20">
                        <CardContent className="p-8">
                            <div className="w-12 h-12 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Organizer Cancellation</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                If an event is cancelled by the organizer, you are automatically entitled to a <strong>100% full refund</strong>, including booking fees. No action is needed from your side.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-card/50 border-primary/20">
                        <CardContent className="p-8">
                            <div className="w-12 h-12 bg-yellow-500/20 text-yellow-500 rounded-full flex items-center justify-center mb-6">
                                <AlertTriangle className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">User Cancellation</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Refunds for user-initiated cancellations depend on the specific <strong>Organizer's Policy</strong> listed on the event page. Some tickets may be non-refundable.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                            <RefreshCcw className="w-6 h-6" /> Processing Timeline
                        </h2>
                        <div className="bg-secondary/30 rounded-xl p-8 border border-border/50">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
                                <div className="absolute top-1/2 left-0 w-full h-1 bg-border -z-10 hidden md:block" />

                                {[
                                    { step: "1", title: "Request", desc: "Immediate" },
                                    { step: "2", title: "Review", desc: "24-48 Hours" },
                                    { step: "3", title: "Initiated", desc: "Instant" },
                                    { step: "4", title: "Credited", desc: "5-7 Biz Days" }
                                ].map((s, i) => (
                                    <div key={i} className="bg-card p-4 rounded-lg border border-border text-center w-full md:w-40 z-10">
                                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">{s.step}</div>
                                        <div className="font-semibold text-sm">{s.title}</div>
                                        <div className="text-xs text-muted-foreground">{s.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <div className="grid md:grid-cols-2 gap-12">
                        <section>
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-primary" /> Postponed Events
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                If an event is rescheduled, your ticket remains valid for the new date. If you cannot attend the rescheduled date, you may request a refund within <strong>7 days</strong> of the announcement, subject to approval.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                Missing Refunds?
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                If you haven't received a refund after 7 business days, please check with your bank first. If the issue persists, contact us with your Booking ID.
                            </p>
                            <Link href="/contact" className="text-primary text-sm font-medium hover:underline">Contact Support &rarr;</Link>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}
