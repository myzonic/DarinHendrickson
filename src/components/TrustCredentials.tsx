import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { CAREER_HIGHLIGHTS } from '../data';
import { Trophy, ShieldCheck, Users, Calendar, Award, Star } from 'lucide-react';

// Custom lightweight counter animation
function CounterUp({ value, suffix = '' }: { value: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });

  // Parse numeric part of the value (e.g. "1,006+" -> 1006)
  const targetNum = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      // Quadratic out ease for smooth deceleration
      const progress = 1 - Math.pow(1 - frame / totalFrames, 2);
      const current = Math.round(start + progress * (targetNum - start));

      setCount(current);

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCount(targetNum);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [isInView, targetNum]);

  // Format count back into readable strings (e.g., adding commas for thousands)
  const formatNum = (num: number) => {
    if (num >= 1000) {
      const thousands = Math.floor(num / 1000);
      const remainder = num % 1000;
      return `${thousands},${remainder.toString().padStart(3, '0')}`;
    }
    return num.toString();
  };

  return (
    <span ref={ref} className="font-display font-extrabold text-5xl md:text-6xl text-white tracking-tight">
      {formatNum(count)}
      {suffix}
    </span>
  );
}

export default function TrustCredentials() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'wins':
        return <Trophy className="w-6 h-6 text-amber-500" />;
      case 'slu_wins':
        return <Award className="w-6 h-6 text-sky-400" />;
      case 'coaching_yrs':
        return <Calendar className="w-6 h-6 text-amber-500" />;
      case 'mlb_picks':
        return <Users className="w-6 h-6 text-sky-400" />;
      case 'championships':
        return <ShieldCheck className="w-6 h-6 text-amber-500" />;
      case 'ncaa_tourneys':
        return <Star className="w-6 h-6 text-sky-400" />;
      default:
        return <Trophy className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section className="relative py-24 bg-slate-950 border-y border-white/5 overflow-hidden">
      {/* Decorative lines & elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/2 left-10 w-72 h-72 bg-sky-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-amber-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl text-left">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber-500 font-bold">
              Legacy of Success
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mt-2 tracking-tight">
              A Resume Built on Winning & Elite Development
            </h2>
          </div>
          <div className="text-left md:text-right">
            <p className="text-gray-400 text-sm max-w-sm">
              Navigating the recruiting landscape requires a mentor who has spent decades winning at the highest collegiate levels.
            </p>
          </div>
        </div>

        {/* Credentials Bento Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {CAREER_HIGHLIGHTS.map((stat) => {
            const isPlus = stat.metric.includes('+');
            const cleanMetric = stat.metric;

            return (
              <motion.div
                key={stat.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
                }}
                className="group relative rounded-2xl glass-card p-8 flex flex-col justify-between overflow-hidden cursor-default hover:border-amber-500/30 transition-all duration-300 shadow-xl"
              >
                {/* Decorative border highlight */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-amber-500/30 group-hover:via-sky-400/30 group-hover:to-transparent transition-all duration-500" />
                
                {/* Top bar with icon */}
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 group-hover:bg-white/10 transition-colors">
                    {getIcon(stat.id)}
                  </div>
                  <span className="font-mono text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                    Verified Record
                  </span>
                </div>

                {/* Main Metric Count */}
                <div className="flex items-baseline gap-1 mb-2">
                  <CounterUp value={cleanMetric} suffix={isPlus ? '+' : ''} />
                </div>

                {/* Description Labels */}
                <div>
                  <h3 className="font-display font-bold text-lg text-white mb-1 group-hover:text-amber-400 transition-colors">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-gray-400 font-light">
                    {stat.subtext}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
