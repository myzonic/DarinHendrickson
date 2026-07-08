import { motion } from 'motion/react';
import { SERVICES } from '../data';
import { UserCheck, Activity, Compass, Mail, Award, TrendingUp, Sparkles } from 'lucide-react';

export default function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-amber-500" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-sky-400" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-amber-500" />;
      case 'Mail':
        return <Mail className="w-6 h-6 text-sky-400" />;
      case 'Award':
        return <Award className="w-6 h-6 text-amber-500" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-sky-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="services" className="relative py-28 bg-slate-950">
      {/* Visual glowing blobs in corners */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber-500 font-bold">
            What I Offer
          </span>
          <h2 className="font-display text-4xl font-extrabold text-white mt-2 tracking-tight leading-tight">
            Personalized Recruiting Services
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-6 rounded-full" />
          <p className="text-gray-400 font-light text-base md:text-lg leading-relaxed mt-6">
            Unlike massive automated recruiting platforms, I work one-on-one with you to construct an authentic, strategic, and successful college baseball plan.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
              }}
              className="group relative rounded-3xl p-8 bg-slate-900/40 border border-white/5 hover:border-amber-500/30 transition-all duration-300 shadow-xl overflow-hidden cursor-default flex flex-col justify-between"
              style={{ minHeight: '260px' }}
            >
              {/* Subtle background glow effect on hover */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-amber-500/40 group-hover:bg-amber-500/5 transition-all duration-300">
                  {getIcon(service.iconName)}
                </div>

                {/* Service Title */}
                <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Card visual accent in bottom-right corner */}
              <div className="mt-8 flex items-center justify-between text-xs font-mono font-bold uppercase text-gray-500 group-hover:text-amber-400 transition-colors">
                <span>Personalized Guidance</span>
                <span className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  &rarr;
                </span>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
