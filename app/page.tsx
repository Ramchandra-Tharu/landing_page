import { Hero } from "@/components/sections/Hero"
import { Features } from "@/components/sections/Features"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { ForOrganizers } from "@/components/sections/ForOrganizers"
import { Testimonials } from "@/components/sections/Testimonials"
import { DownloadSection } from "@/components/sections/DownloadSection"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <ForOrganizers />
      <Testimonials />
      <DownloadSection />
    </div>
  );
}
