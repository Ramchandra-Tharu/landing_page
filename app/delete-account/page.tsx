"use client"

import { PageHeader } from "@/components/PageHeader"
import { Card, CardContent } from "@/components/ui/card"
import { Trash2, AlertOctagon, History, ArrowRight } from "lucide-react"

export default function DeleteAccount() {
    return (
        <>
            <PageHeader
                title="Delete Account"
                description="Instructions on how to permanently remove your data from Vibez."
            />

            <div className="container mx-auto px-6 py-12 max-w-3xl relative z-10">

                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 mb-12 flex items-start gap-4">
                    <AlertOctagon className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                    <div>
                        <h3 className="font-bold text-red-500 mb-1">Warning: Irreversible Action</h3>
                        <p className="text-sm text-red-200/70">
                            Deleting your account will permanently remove all your bookings, preferences, and tickets. This action cannot be undone.
                        </p>
                    </div>
                </div>

                <div className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-6">How to delete your account</h2>
                        <div className="space-y-4">
                            {[
                                "Open the Vibez App on your mobile device.",
                                "Go to your Profile tab (bottom right corner).",
                                "Tap on Settings > Account.",
                                "Scroll to the bottom and tap 'Delete Account'.",
                                "Confirm via OTP sent to your registered number."
                            ].map((step, i) => (
                                <div key={i} className="flex items-center gap-4 bg-card/40 p-4 rounded-lg border border-white/5">
                                    <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold text-muted-foreground shrink-0">{i + 1}</span>
                                    <p className="text-foreground">{step}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2"><History className="w-5 h-5 text-primary" /> Data Retention</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Your personal profile data is deleted within 30 days. However, we are legally required to retain transaction records for 7 years for tax and auditing purposes.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2"><Trash2 className="w-5 h-5 text-primary" /> Pending Bookings</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                You cannot delete your account if you have active tickets for upcoming events. Please complete the events or cancel your bookings first.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
