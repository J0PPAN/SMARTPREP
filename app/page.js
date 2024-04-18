
import Hero from "./components/landing/Hero";
import Services from "./components/landing/Services";

export default function Home() {
  return (
    <main>
      <section id="hero-section">
        <Hero/>
      </section>
      
      <section id="services-section">
        <Services/>
      </section>
    </main>
  );
}
