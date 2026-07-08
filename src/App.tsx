/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustCredentials from './components/TrustCredentials';
import About from './components/About';
import Services from './components/Services';
import RecruitingProcess from './components/RecruitingProcess';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 font-sans antialiased text-gray-200 overflow-x-hidden selection:bg-amber-500 selection:text-slate-950">
      
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Structural Layout */}
      <main>
        
        {/* Hero Section */}
        <Hero />

        {/* Trust & Credentials Counter Cards */}
        <TrustCredentials />

        {/* About Darin Section */}
        <About />

        {/* Recruiting Services Section */}
        <Services />

        {/* Recruiting Process Interactive Steps Section */}
        <RecruitingProcess />

        {/* Why Choose Darin section */}
        <WhyChoose />

        {/* Testimonials Glassmorphic Carousel Section */}
        <Testimonials />

        {/* Final CTA & Contact Booking Form Section */}
        <ContactForm />

      </main>

      {/* Footer Section */}
      <Footer />

    </div>
  );
}
