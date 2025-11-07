import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Advisors from './components/Advisors';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import TrustBar from './components/TrustBar';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Services />
      <Pricing />
      <Advisors />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
