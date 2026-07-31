import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import CopyEmail from "@/components/CopyEmail";

export default function Home() {
  return (
    <main className="relative lg:flex lg:min-h-screen">
      <div className="lg:flex lg:h-screen lg:w-140 lg:shrink-0 lg:flex-col  lg:sticky lg:top-0 p-8">
        <Hero />
        <Contact />
        <section className="mt-auto py-10">
          <h3 className="text-lg font-medium text-ink">
            Case studies
          </h3>

          <p className="mt-2 text-muted">
            Detailed breakdowns of selected projects will be added over time.
          </p>
        </section>
      </div>

      <div className="lg:w-0 lg:flex-1 p-8">
        <Gallery />
        <Footer />
      </div>
    </main>
  );
}
