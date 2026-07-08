import { useState } from 'react';
import { motion } from 'motion/react';
import { RECRUITING_STEPS } from '../data';
import { Search, Target, FileText, Users, Sparkles, HeartHandshake, ChevronDown } from 'lucide-react';

export default function RecruitingProcess() {
  const [activeStep, setActiveStep] = useState<number | null>(1);

  const getIcon = (iconName: string, active: boolean) => {
    const className = `w-6 h-6 transition-colors duration-300 ${active ? 'text-amber-500' : 'text-gray-400 group-hover:text-amber-400'}`;
    switch (iconName) {
      case 'Search':
        return <Search className={className} />;
      case 'Target':
        return <Target className={className} />;
      case 'FileText':
        return <FileText className={className} />;
      case 'Users':
        return <Users className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      case 'HeartHandshake':
        return <HeartHandshake className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  return (
    <section id="process" className="relative py-28 bg-slate-950 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-left max-w-2xl mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber-500 font-bold">
            The Roadmap
          </span>
          <h2 className="font-display text-4xl font-extrabold text-white mt-2 tracking-tight">
            A Clear Path Through Recruiting
          </h2>
          <p className="text-gray-400 font-light text-base leading-relaxed mt-4">
            Navigating the recruiting landscape requires a structured timeline. I break the process down into six key phases to ensure you make progress with total confidence.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          
          {/* Continuous Stitching Line (Background Baseball Stitch Accent) */}
          <div className="absolute left-[39px] lg:left-1/2 top-10 bottom-10 w-[2px] border-l-2 border-dashed border-red-500/20 lg:-translate-x-1/2 pointer-events-none hidden md:block">
            {/* Red stitch dots overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/10 to-transparent" />
          </div>

          {/* Steps container */}
          <div className="space-y-12">
            {RECRUITING_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const isActive = activeStep === step.stepNumber;

              return (
                <div
                  key={step.stepNumber}
                  className={`flex flex-col md:flex-row items-start lg:items-center relative ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  
                  {/* Timeline Badge/Number column */}
                  <div className="absolute left-0 md:left-5 lg:left-1/2 lg:-translate-x-1/2 flex items-center justify-center z-20">
                    <motion.button
                      onClick={() => setActiveStep(step.stepNumber)}
                      whileHover={{ scale: 1.1 }}
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-mono font-bold text-sm border cursor-pointer shadow-lg transition-all ${
                        isActive
                          ? 'bg-amber-500 text-slate-950 border-amber-400 scale-110 glow-gold'
                          : 'bg-slate-900 text-gray-400 border-white/10 hover:border-amber-500/30'
                      }`}
                    >
                      {step.stepNumber}
                    </motion.button>
                  </div>

                  {/* Left spacer column for Desktop layout matching */}
                  <div className="hidden lg:block w-1/2 px-12" />

                  {/* Card content column */}
                  <div className="w-full md:w-[calc(100%-80px)] lg:w-1/2 pl-16 md:pl-20 lg:pl-0 lg:px-12 text-left">
                    <motion.div
                      onClick={() => setActiveStep(step.stepNumber)}
                      className={`group p-8 rounded-2xl border transition-all duration-300 cursor-pointer shadow-xl ${
                        isActive
                          ? 'bg-slate-900/80 border-amber-500/30 ring-1 ring-amber-500/20'
                          : 'bg-slate-950/40 border-white/5 hover:border-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-2.5 rounded-xl border ${
                          isActive ? 'bg-amber-500/10 border-amber-500/30' : 'bg-white/5 border-white/10'
                        }`}>
                          {getIcon(step.iconName, isActive)}
                        </div>
                        <div>
                          <span className="font-mono text-[10px] text-amber-500 uppercase font-bold tracking-wider">
                            Phase 0{step.stepNumber}
                          </span>
                          <h3 className="font-display font-bold text-xl text-white group-hover:text-amber-400 transition-colors">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      {/* Expandable/Highlightable Body Text */}
                      <p className="text-sm text-gray-400 font-light leading-relaxed">
                        {step.description}
                      </p>

                      {/* Small expandable indicator */}
                      <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-500">
                        <span>Recruiting Pathway</span>
                        <ChevronDown className={`w-3.5 h-3.5 transform transition-transform duration-300 ${
                          isActive ? 'rotate-180 text-amber-500' : 'group-hover:text-gray-400'
                        }`} />
                      </div>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
