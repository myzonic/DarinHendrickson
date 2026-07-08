import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { ChevronLeft, ChevronRight, Quote, Star, User } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'Parent':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'Student-Athlete':
        return 'bg-sky-500/10 text-sky-400 border-sky-500/20';
      case 'College Baseball Player':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      default:
        return 'bg-white/5 text-white/70 border-white/10';
    }
  };

  return (
    <section id="testimonials" className="relative py-28 bg-slate-950 overflow-hidden">
      {/* Dynamic ambient lights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Header Block */}
        <div className="max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber-500 font-bold">
            Testimonials
          </span>
          <h2 className="font-display text-4xl font-extrabold text-white mt-2 tracking-tight">
            What Athletes & Families Are Saying
          </h2>
          <p className="text-gray-400 font-light text-sm md:text-base mt-4 leading-relaxed">
            Real stories of confident decisions, honest assessments, and collegiate roster breakthroughs directly under Coach Darin's mentorship.
          </p>
        </div>

        {/* Glassmorphism Slider Frame */}
        <div className="relative min-h-[380px] sm:min-h-[340px] md:min-h-[300px] flex items-center justify-center">
          
          {/* Main Slider Content Block */}
          <div className="w-full glass-card rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl flex flex-col items-center">
            
            {/* Big quote icon accent */}
            <div className="absolute top-8 left-8 sm:top-12 sm:left-12 opacity-15 pointer-events-none text-amber-500">
              <Quote className="w-16 h-16 rotate-180" />
            </div>

            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="w-full flex flex-col items-center flex-1"
              >
                {/* 5-Star Rating block */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial Quote body */}
                <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light italic leading-relaxed max-w-3xl text-center mb-8">
                  "{current.text}"
                </blockquote>

                {/* Reviewer Details */}
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="font-display font-bold text-white tracking-tight">{current.author}</p>
                    <span className={`inline-block text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full border mt-1 ${getRoleBadgeColor(current.role)}`}>
                      {current.role}
                    </span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

          {/* Navigation Arrows (Absolute outer sides) */}
          <div className="absolute left-[-16px] md:left-[-24px] top-1/2 -translate-y-1/2 z-20">
            <motion.button
              onClick={handlePrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-slate-900 border border-white/10 hover:border-amber-500/30 flex items-center justify-center text-white hover:text-amber-500 cursor-pointer shadow-lg transition-colors backdrop-blur-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          </div>
          <div className="absolute right-[-16px] md:right-[-24px] top-1/2 -translate-y-1/2 z-20">
            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-slate-900 border border-white/10 hover:border-amber-500/30 flex items-center justify-center text-white hover:text-amber-500 cursor-pointer shadow-lg transition-colors backdrop-blur-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

        </div>

        {/* Carousel indicator dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <button
              key={testimonial.id}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-amber-500' : 'w-2 bg-slate-800 hover:bg-slate-700'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
