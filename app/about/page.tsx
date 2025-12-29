import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Us | Vibez Event App',
    description: 'Learn more about Vibez, our mission, and the team behind the platform.',
}

export default function About() {
    return (
        <div className="container mx-auto px-6 py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">About Vibez</h1>

            <div className="prose prose-invert max-w-none space-y-8 text-lg text-muted-foreground">
                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
                    <p>
                        At Vibez, we believe that life is made of moments. Our mission is to connect people with experiences that turn into lifelong memories.
                        Whether it's a pulsating underground concert, a quiet art workshop, or a massive food festival, we make discovering and attending events seamless and exciting.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">The Story</h2>
                    <p>
                        Founded in 2024, Vibez started with a simple problem: finding good things to do nearby was harder than it should be.
                        Fragmented listings, clunky booking flows, and lost paper tickets were the norm. We set out to change that by building a
                        mobile-first, design-centric platform that puts the user experience first.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">For Organizers</h2>
                    <p>
                        We're not just for attendees. We empower creators, artists, and event planners with powerful tools to reach their audience,
                        manage sales, and run smooth operations. We succeed when our organizers succeed.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">Join the Vibe</h2>
                    <p>
                        We are a passionate team of designers, engineers, and event lovers based in India. We're always looking for talented individuals to join our journey.
                    </p>
                </section>
            </div>
        </div>
    )
}
