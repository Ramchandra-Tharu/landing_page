import type { Metadata } from 'next'
import { ContactForm } from "@/components/ContactForm"

export const metadata: Metadata = {
    title: 'Contact Us | Vibez Event App',
    description: 'Get in touch with Vibez support for any queries or assistance.',
}

export default function ContactPage() {
    return <ContactForm />
}
