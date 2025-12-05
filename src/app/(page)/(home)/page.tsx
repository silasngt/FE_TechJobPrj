import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { HeroContent } from '../../components/hero/HeroSection';
import { Section1 } from './Section1';
import { Section2 } from './Section2';

export default function Home() {
  fetch('http://localhost:3001', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data.message));

  return (
    <>
      {/* HEADER + HERO */}
      <Header />
      <HeroContent />

      {/* MAIN CONTENT */}
      <main className="bg-[#F5FBFF]">
        {/* TOP EMPLOYERS */}
        <Section1 />

        {/* FEATURE JOBS */}
        <Section2 />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
