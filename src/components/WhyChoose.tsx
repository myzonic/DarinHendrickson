import { motion } from 'motion/react';
import { WHY_CHOOSE_CARDS } from '../data';
import { Trophy, CheckCircle2, Network, ShieldCheck, User, Users } from 'lucide-react';

export default function WhyChoose() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-amber-500" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-sky-400" />;
      case 'Network':
        return <Network className="w-6 h-6 text-amber-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-sky-400" />;
      case 'User':
        return <User className="w-6 h-6 text-amber-500" />;
      case 'Users':
        return <Users className="w-6 h-6 text-sky-400" />;
      default:
        return <Trophy className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="why-darin" className="relative py-28 bg-slate-950 border-t border-white/5">
      {/* Decorative linear glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Core Layout: Grid Header + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-6 text-left">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber-500 font-bold">
              The Difference
            </span>
            <h2 className="font-display text-4xl font-extrabold text-white mt-2 tracking-tight leading-tight">
              Experience That Makes <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-sky-400">
                A True Difference
              </span>
            </h2>
          </div>
          <div className="lg:col-span-6 text-left">
            <p className="text-gray-300 font-light text-base md:text-lg leading-relaxed">
              Choosing the right recruiting advisor can shape your future. With decades of coaching experience and a proven record of developing championship teams and professional athletes, Darin provides honest guidance, personalized mentorship, and a recruiting strategy tailored specifically to each athlete.
            </p>
          </div>
        </div>

        {/* 6 Grid Icon Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {WHY_CHOOSE_CARDS.map((card) => (
            <motion.div
              key={card.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
              }}
              className="group relative rounded-3xl p-8 bg-slate-900/30 border border-white/5 hover:border-amber-500/30 transition-all duration-300 shadow-xl overflow-hidden cursor-default text-left flex flex-col justify-between"
              style={{ minHeight: '230px' }}
            >
              {/* Card Hover Overlay Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Icon box */}
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-amber-500/40 group-hover:bg-amber-500/5 transition-all duration-300">
                  {getIcon(card.iconName)}
                </div>

                {/* Card Title */}
                <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Bottom tag or detail */}
              <div className="mt-6 pt-4 border-t border-white/5 text-[10px] font-mono text-gray-500 tracking-wider flex items-center justify-between uppercase">
                <span>Darin Hendrickson Standard</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500/40 group-hover:bg-amber-500 transition-colors" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Supporting statement banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-white/5 text-center flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-display font-bold text-lg text-white">Need an honest assessment of your fit?</h4>
            <p className="text-sm text-gray-400 font-light mt-1">Get real answers regarding NCAA Divisions and roster realities directly from Coach Darin.</p>
          </div>
          <motion.button
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wide shadow-md shadow-amber-500/5 transition-all cursor-pointer whitespace-nowrap"
          >
            Get a Player Evaluation
          </motion.button>
        </div>

      </div>
    </section>
  );
}
