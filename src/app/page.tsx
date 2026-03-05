import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { StudioSection } from "@/components/studio-section";
import { ArtistSection } from "@/components/artist-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative bg-background text-foreground">
      <Nav />
      <Hero />
      <StudioSection />
      <ArtistSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
