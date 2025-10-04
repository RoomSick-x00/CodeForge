import DynamicBackground from '@/components/DynamicBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Schedule from '@/components/Schedule';
import Prizes from '@/components/Prizes';
import Rules from '@/components/Rules';
import RegisterForm from '@/components/RegisterForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Dynamic Background */}
      <DynamicBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content Sections */}
      <Hero />
      <About />
      <Schedule />
      <Prizes />
      <Rules />
      <RegisterForm />
      <Footer />
    </main>
  );
}
