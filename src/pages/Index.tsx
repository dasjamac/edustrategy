import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import WhyProgramMatters from '@/components/landing/WhyProgramMatters';
import Services from '@/components/landing/Services';
import Differentiation from '@/components/landing/Differentiation';
import WhoIsFor from '@/components/landing/WhoIsFor';
import Credibility from '@/components/landing/Credibility';
import CTA from '@/components/landing/CTA';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <section id="why">
          <WhyProgramMatters />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="differentiation">
          <Differentiation />
        </section>
        <WhoIsFor />
        <section id="credibility">
          <Credibility />
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
