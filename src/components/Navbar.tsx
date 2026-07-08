import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Calendar, Award } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Recruiting Process', href: '#process' },
    { name: 'Why Darin', href: '#why-darin' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-amber-500 origin-left z-[100]"
        style={{
          scaleX: 0,
        }}
        animate={{
          scaleX: typeof window !== 'undefined' ? undefined : 0,
        }}
      />

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-4 bg-slate-950/90 backdrop-blur-md shadow-lg border-b border-white/5'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
          >
            <div className="relative w-10 h-10 rounded-full bg-slate-900 border border-amber-500/30 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-amber-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Award className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                DARIN HENDRICKSON
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-mono font-semibold">
                Baseball Consulting
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8 text-sm font-medium text-gray-300">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="relative py-2 hover:text-white transition-colors group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>

            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold text-sm shadow-md shadow-amber-500/15 hover:shadow-amber-500/25 transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book a Consultation
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-slate-950/98 backdrop-blur-xl z-40 flex flex-col justify-between p-8 pt-28 lg:hidden"
          >
            <div className="absolute top-0 right-0 left-0 h-28 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none" />

            {/* Menu Links */}
            <nav className="flex flex-col gap-6">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.08 } },
                }}
                className="flex flex-col gap-6"
              >
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } },
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                      className="font-display text-3xl font-bold text-gray-300 hover:text-amber-400 transition-colors block py-2 border-b border-white/5"
                    >
                      {link.name}
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </nav>

            {/* Bottom Section with CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-6 mb-12"
            >
              <div className="h-[1px] bg-white/10 w-full" />
              <div className="flex flex-col gap-2">
                <p className="text-xs text-gray-500 font-mono tracking-wider uppercase">Contact Direct</p>
                <a href="tel:3144352340" className="text-lg font-semibold text-white hover:text-amber-400 transition-colors">
                  314-435-2340
                </a>
                <a href="mailto:hendricksondarin@gmail.com" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                  hendricksondarin@gmail.com
                </a>
              </div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contact');
                }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-center shadow-lg shadow-amber-500/20 active:scale-95 transition-transform flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book My Consultation
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
