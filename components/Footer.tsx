import Link from "next/link"
import { Ticket, Twitter, Facebook, Linkedin, Instagram } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t border-border/40 py-12 md:py-16">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
                <div className="space-y-4">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter text-primary">
                        <Ticket className="w-6 h-6" />
                        <span className="text-foreground">Vibez</span>
                    </Link>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Discover, book, and experience the best events in your city.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">Company</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Press</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">Support</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        <li><Link href="/faqs" className="hover:text-primary transition-colors">FAQs</Link></li>
                        <li><Link href="/refund-policy" className="hover:text-primary transition-colors">Refund Policy</Link></li>
                        <li><Link href="/delete-account" className="hover:text-primary transition-colors">Delete Account</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">Legal</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                        <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Use</Link></li>
                    </ul>
                    <h4 className="font-semibold mb-4">Follow Us</h4>
                    <div className="flex gap-4">
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></Link>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6 mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
                © 2024 Vibez Technologies Pvt. Ltd.
            </div>
        </footer>
    )
}
