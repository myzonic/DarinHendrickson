import { motion } from 'motion/react';
import { Award, CheckCircle, ChevronRight, Milestone, Star, Target, Users, Linkedin } from 'lucide-react';

export default function About() {
  const careerHighlights = [
    '1,006+ Career Coaching Victories',
    '516 Wins at Saint Louis University',
    '29 Years of Head Coaching Experience',
    '33 MLB Draft Picks Developed',
    '11 MLB Draft Picks at Saint Louis',
    '6 Atlantic 10 Regular Season Championships',
    '3 NCAA Tournament Appearances',
    '3× Atlantic 10 Coach of the Year',
    'National Coach of the Year Honorable Mention',
    'Saint Louis University All-Time Winningest Baseball Coach',
  ];

  const valueProps = [
    {
      title: 'Coaching Experience',
      desc: 'Nearly 30 years as a Division I & collegiate head coach leading programs to historic heights.',
      icon: <Award className="w-5 h-5 text-amber-500" />,
    },
    {
      title: 'Recruiting Expertise',
      desc: 'A trusted visual evaluator who knows exactly what college programs look for in every roster slot.',
      icon: <Target className="w-5 h-5 text-sky-400" />,
    },
    {
      title: 'Player Development',
      desc: 'Developed 33 draft selections to the major leagues, showcasing a verified standard of development.',
      icon: <Users className="w-5 h-5 text-amber-500" />,
    },
  ];

  const handleCTAClick = () => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative py-28 bg-slate-950 overflow-hidden">
      {/* Abstract Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Biography & Narrative */}
          <div className="lg:col-span-7 text-left flex flex-col gap-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber-500 font-bold">
              Meet Darin Hendrickson
            </span>
            <h2 className="font-display text-4xl font-extrabold text-white tracking-tight leading-tight">
              A Respected Legacy in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-sky-400">
                College Baseball Recruiting
              </span>
            </h2>

            <div className="text-gray-300 space-y-5 text-base leading-relaxed font-light mt-2">
              <p>
                For nearly three decades, <strong className="font-semibold text-white">Darin Hendrickson</strong> has built a reputation as a highly respected college baseball Coach and recruiter. Throughout his coaching career, he has earned more than 1,000 career victories, led championship-winning programs, developed 33 Major League Baseball Draft selections, and guided countless student-athletes toward successful collegiate and professional careers.
              </p>
              <p>
                As the longtime head coach at Saint Louis University, Darin became the program's all-time winningest coach while leading the Billikens to multiple Atlantic 10 Conference championships, NCAA Tournament appearances, and national recognition.
              </p>
              <p>
                Today, Darin brings that same championship mindset and recruiting expertise to athletes and families through personalized one-on-one consulting designed to help players maximize their opportunities and find the college program that best fits their athletic, academic, and personal goals.
              </p>
            </div>

            {/* Core Values / Strengths Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
              {valueProps.map((prop) => (
                <div key={prop.title} className="p-5 rounded-xl bg-slate-900/50 border border-white/5">
                  <div className="mb-3">{prop.icon}</div>
                  <h4 className="font-display font-semibold text-white text-sm mb-1">{prop.title}</h4>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">{prop.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <motion.button
                onClick={handleCTAClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold hover:from-amber-400 hover:to-amber-500 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/25 transition-all cursor-pointer"
              >
                Start Your Recruiting Journey
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Right Column: Career Highlights Bento Block */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: 'spring', damping: 20, stiffness: 65 }}
              className="relative p-8 md:p-10 rounded-2xl glass-card border-white/10 overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <Milestone className="w-6 h-6 text-amber-500" />
                <h3 className="font-display font-bold text-xl text-white tracking-tight">
                  Career Highlights
                </h3>
              </div>

              <p className="text-xs text-amber-400 font-mono tracking-wider uppercase mb-6 font-bold">
                A Legacy of Excellence
              </p>

              <ul className="space-y-4">
                {careerHighlights.map((highlight, index) => (
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 }}
                    key={index}
                    className="flex items-start gap-3 group"
                  >
                    <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-slate-900 border border-amber-500/40 flex items-center justify-center group-hover:border-amber-400 transition-colors">
                      <Star className="w-2.5 h-2.5 text-amber-400" />
                    </div>
                    <span className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors text-left">
                      {highlight}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Decorative base block */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-col text-left">
                  <span className="text-xs text-gray-500 font-mono">Division 1 Standard</span>
                  <span className="text-sm font-bold text-gray-300">Respected Nationwide</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-mono text-amber-400 uppercase font-bold">
                  Elite Tier
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Deep-Dive Coaching Legacy Journey Section */}
        <div className="mt-24 pt-16 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Sub-column: Big Heading and LinkedIn Icon Button */}
            <div className="lg:col-span-4 text-left flex flex-col gap-6 lg:sticky lg:top-28">
              <div className="w-12 h-1 bg-amber-500 rounded-full" />
              <h3 className="font-display text-3xl font-extrabold text-white tracking-tight leading-tight">
                A Championship Coach <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-sky-400">
                  Dedicated to Your Success
                </span>
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                With more than three decades of high-level collegiate coaching experience, Coach Darin Hendrickson has built a career upon player development, conference titles, and national respect.
              </p>
              
              {/* LinkedIn Profile Button */}
              <motion.a
                href="https://www.linkedin.com/in/darin-hendrickson-81951864"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 self-start px-6 py-3.5 rounded-xl bg-slate-900 border border-white/10 hover:border-amber-500/40 text-sm font-semibold text-gray-200 hover:text-white transition-all shadow-lg cursor-pointer"
              >
                <Linkedin className="w-5 h-5 text-[#0a66c2]" />
                <span>Connect on LinkedIn</span>
              </motion.a>
            </div>

            {/* Right Sub-column: The detailed chronological journey narrative */}
            <div className="lg:col-span-8 text-left text-gray-300 space-y-6 text-base font-light leading-relaxed">
              <p>
                <strong className="font-semibold text-white">Darin Hendrickson</strong> is a highly accomplished and respected Coach in college baseball, bringing more than three decades of coaching experience and a career built on developing student-athletes, building championship programs, and helping players reach the next level.
              </p>
              <p>
                Throughout his coaching career, Darin has earned over 1,000 career victories, coached 33 Major League Baseball Draft selections, won multiple conference championships, and led teams to numerous NCAA Tournament appearances. His reputation for honest evaluations, player development, and recruiting expertise has made him a trusted mentor for athletes, families, and coaches across the country.
              </p>
              
              {/* Decorative milestone callouts with subtle borders */}
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 space-y-4">
                <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider text-amber-500">
                  The Early Milestones & Fontbonne University
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  A former standout pitcher at SIU Edwardsville, Darin earned First-Team All-Region honors before beginning his coaching career at his alma mater. His passion for teaching the game quickly led him to his first head coaching opportunity at Fontbonne University, where he built the baseball program into a conference champion and NCAA Tournament participant while earning both SLIAC Coach of the Year and Regional Coach of the Year honors.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 space-y-4">
                <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider text-sky-400">
                  NJCAA World Series & DII National Prominence
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  He later served as Athletic Director and Head Baseball Coach at St. Louis Community College–Forest Park, guiding the program to four consecutive NJCAA Super Regional appearances and a trip to the NJCAA World Series. His success continued at Central Missouri, where his teams captured multiple conference championships, reached the NCAA Division II College World Series, produced three 50-win seasons, and established one of the nation's premier Division II baseball programs.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 space-y-4">
                <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider text-amber-500">
                  Saint Louis University (SLU) Division I Era
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  In 2008, Darin became Head Baseball Coach at Saint Louis University, where he transformed the Billikens into one of the Atlantic 10 Conference's most successful programs. During his tenure, he became the university's all-time winningest baseball coach, led the program to multiple Atlantic 10 Regular Season and Tournament Championships, earned three Atlantic 10 Coach of the Year awards, and guided Saint Louis to several NCAA Tournament appearances while helping develop numerous professional baseball players.
                </p>
              </div>

              <p>
                Today, Darin brings that same championship experience and recruiting knowledge to athletes and families through <strong className="font-semibold text-white">Darin Hendrickson Baseball Consulting</strong>. His personalized one-on-one approach helps student-athletes navigate every stage of the college baseball recruiting process with confidence, honesty, and a clear strategy for long-term success.
              </p>
              <p>
                Whether you're pursuing your first recruiting opportunity or preparing to make one of the biggest decisions of your athletic career, Darin is committed to helping you find the college program that best fits your athletic ability, academic goals, and future aspirations.
              </p>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
