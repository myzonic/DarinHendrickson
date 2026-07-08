import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { Calendar, ChevronRight, Trophy, Award, Users, Star } from 'lucide-react';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(true);

  // Springs for smooth parallax tracking
  const bgX = useSpring(useMotionValue(0), { stiffness: 50, damping: 20 });
  const bgY = useSpring(useMotionValue(0), { stiffness: 50, damping: 20 });
  const cardX = useSpring(useMotionValue(0), { stiffness: 70, damping: 15 });
  const cardY = useSpring(useMotionValue(0), { stiffness: 70, damping: 15 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 1024) {
        const { clientX, clientY } = e;
        const width = window.innerWidth;
        const height = window.innerHeight;
        // Shift range -1 to 1
        const xOffset = (clientX - width / 2) / (width / 2);
        const yOffset = (clientY - height / 2) / (height / 2);

        setMousePos({ x: xOffset, y: yOffset });
        
        bgX.set(xOffset * -15);
        bgY.set(yOffset * -15);
        cardX.set(xOffset * 15);
        cardY.set(yOffset * 15);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [bgX, bgY, cardX, cardY]);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingBadges = [
    {
      title: '1,006+ Career Wins',
      icon: <Trophy className="w-5 h-5 text-amber-400" />,
      style: 'top-[10%] left-[-15%]',
      delay: 0.1,
    },
    {
      title: '29 Years Coaching',
      icon: <Award className="w-5 h-5 text-sky-400" />,
      style: 'bottom-[35%] left-[-20%]',
      delay: 0.2,
    },
    {
      title: '33 MLB Draft Picks',
      icon: <Users className="w-5 h-5 text-amber-400" />,
      style: 'top-[25%] right-[-15%]',
      delay: 0.3,
    },
    {
      title: 'NCAA Tournament Coach',
      icon: <Star className="w-5 h-5 text-sky-400" />,
      style: 'bottom-[12%] right-[-10%]',
      delay: 0.4,
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden bg-slate-950"
    >
      {/* Stadium Background Image with Parallax & Dark Overlay */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-80 scale-105"
        style={{
          backgroundImage: `url('/src/assets/images/baseball_stadium_bg_1783476761323.jpg')`,
          x: bgX,
          y: bgY,
        }}
      />
      
      {/* Dynamic Colored Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] glow-gold" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] glow-blue" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side Content Column */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono font-bold tracking-wider text-amber-400 uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Premier College Baseball Guidance
          </motion.div>

          {/* Heading with Split Reveal Effect */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', damping: 15, stiffness: 60 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Helping Baseball Players Reach the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-sky-400">Next Level</span>
            </motion.h1>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-gray-300 text-base md:text-lg leading-relaxed font-light"
          >
            Private 1-on-1 college baseball recruiting guidance from legendary coach <strong className="font-semibold text-white">Darin Hendrickson</strong>. Over 1,000 career victories, decades of head coaching experience, and personalized recruiting roadmaps designed to help student-athletes and their families confidently navigate the collegiate baseball landscape.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-gray-400 text-sm md:text-base leading-relaxed"
          >
            Whether you are beginning your recruiting journey or preparing to make one of the biggest decisions of your athletic career, you'll receive honest evaluations, strategic planning, and expert mentorship every step of the way from one of college baseball's most respected coaching veterans.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold tracking-wide hover:from-amber-400 hover:to-amber-500 shadow-xl shadow-amber-500/10 hover:shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
            >
              <Calendar className="w-5 h-5" />
              Book a Consultation
            </button>
            <button
              onClick={() => scrollToSection('#about')}
              className="px-8 py-4 rounded-xl bg-slate-900 border border-white/10 hover:bg-slate-850 hover:border-white/20 text-white font-semibold tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
            >
              Learn More
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </motion.div>
        </div>

        {/* Right Side Visual Column */}
        <div className="lg:col-span-5 relative flex items-center justify-center mt-12 lg:mt-0">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            
            {/* Ambient Background Glow behind Headshot */}
            <div className="absolute inset-[-15px] rounded-full bg-gradient-to-tr from-amber-500/20 to-sky-500/10 blur-xl opacity-80" />

            {/* Custom Outer Frames */}
            <div className="absolute inset-[-10px] rounded-3xl border border-white/5 bg-slate-950/20 backdrop-blur-sm pointer-events-none" />
            <div className="absolute inset-0 rounded-2xl border border-amber-500/20 pointer-events-none" />

            {/* Coach Headshot Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 80 }}
              className="w-full h-full rounded-2xl overflow-hidden border-2 border-slate-900/80 shadow-2xl relative group"
            >
              <img
                src="/src/assets/images/darin_hendrickson_headshot_1783476743157.jpg"
                alt="Coach Darin Hendrickson"
                className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* Floating Achievement Cards (Only Parallaxed on Desktop) */}
            {floatingBadges.map((badge, idx) => {
              const floatingAnimation = {
                y: [0, -8, 0],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse' as const,
                  delay: badge.delay * 3,
                  ease: 'easeInOut',
                },
              };

              return (
                <motion.div
                  key={badge.title}
                  className={`absolute z-20 ${badge.style} hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-xl glass-card text-white font-medium text-xs md:text-sm border-white/10 shadow-lg pointer-events-none`}
                  style={{
                    x: isMobile ? 0 : cardX,
                    y: isMobile ? 0 : cardY,
                  }}
                  animate={floatingAnimation}
                >
                  <div className="p-1.5 rounded-lg bg-slate-900/90 border border-white/5 flex items-center justify-center">
                    {badge.icon}
                  </div>
                  <span className="whitespace-nowrap font-display tracking-tight text-white font-semibold">
                    {badge.title}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
