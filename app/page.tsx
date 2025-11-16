import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CountersSection from './components/CountersSection';
import ProductsShowcase from './components/ProductsShowcase';
import IndustriesServed from './components/IndustriesServed';
import MissionStatement from './components/MissionStatement';
import ClientsSection from './components/ClientsSection';
import NewsEvents from './components/NewsEvents';
import FAQs from './components/FAQs';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <CountersSection />
      <ProductsShowcase />
      <IndustriesServed />
      <MissionStatement />
      <ClientsSection />
      <EnquiryForm />
      <Footer />
    </div>
  );
}
