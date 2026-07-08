import { Award, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: <Twitter className="w-4 h-4" />, href: '#', label: 'Twitter' },
    { icon: <Facebook className="w-4 h-4" />, href: '#', label: 'Facebook' },
    { icon: <Instagram className="w-4 h-4" />, href: '#', label: 'Instagram' },
    { icon: <Linkedin className="w-4 h-4" />, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-white/5 py-16 relative overflow-hidden">
      {/* Decorative linear glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Brand Block */}
        <div className="md:col-span-5 flex flex-col items-start gap-4 text-left">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 rounded-full bg-slate-900 border border-amber-500/20 flex items-center justify-center overflow-hidden transition-all duration-300">
              <Award className="w-5 h-5 text-amber-500" />
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
          <p className="text-xs text-gray-400 font-light max-w-sm leading-relaxed mt-2">
            Providing one-on-one, highly professional, and results-driven college baseball recruiting guidance. Empowering student-athletes to confidently navigate their athletic and academic futures.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-3 mt-2">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-amber-500/30 hover:bg-white/10 transition-all"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-3 text-left">
          <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3 text-xs text-gray-400">
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#home');
                }}
                className="hover:text-amber-400 transition-colors cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#about');
                }}
                className="hover:text-amber-400 transition-colors cursor-pointer"
              >
                About Darin
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#services');
                }}
                className="hover:text-amber-400 transition-colors cursor-pointer"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#process"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#process');
                }}
                className="hover:text-amber-400 transition-colors cursor-pointer"
              >
                Recruiting Process
              </a>
            </li>
            <li>
              <a
                href="#why-darin"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#why-darin');
                }}
                className="hover:text-amber-400 transition-colors cursor-pointer"
              >
                Why Work With Darin
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information Column */}
        <div className="md:col-span-4 text-left">
          <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-5">
            Direct Office
          </h4>
          <ul className="space-y-4 text-xs text-gray-400">
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="block text-gray-500 font-mono text-[9px] uppercase tracking-wider mb-0.5">Call / Text</span>
                <a href="tel:3144352340" className="hover:text-white transition-colors text-sm font-semibold text-gray-200">
                  314-435-2340
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
              <div>
                <span className="block text-gray-500 font-mono text-[9px] uppercase tracking-wider mb-0.5">Email Contact</span>
                <a href="mailto:hendricksondarin@gmail.com" className="hover:text-white transition-colors text-sm font-semibold text-gray-200">
                  hendricksondarin@gmail.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="block text-gray-500 font-mono text-[9px] uppercase tracking-wider mb-0.5">Primary Hub</span>
                <p className="text-gray-200 text-sm font-semibold">
                  Saint Louis, Missouri
                </p>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Base Copyright Block */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
        <p className="text-left font-light">
          &copy; {currentYear} Darin Hendrickson Baseball Consulting. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
