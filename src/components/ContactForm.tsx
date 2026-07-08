import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LeadSubmission } from '../types';
import { Phone, Mail, Calendar, MapPin, CheckCircle2, Clock, Trash2, Shield, Sparkles, Inbox, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    gradYear: '',
    currentSchool: '',
    positions: '',
    clubTeam: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [savedSubmission, setSavedSubmission] = useState<LeadSubmission | null>(null);
  const [adminView, setAdminView] = useState(false);
  const [allLeads, setAllLeads] = useState<LeadSubmission[]>([]);

  // Load existing leads for admin inspect capability
  useEffect(() => {
    const leads = localStorage.getItem('darin_baseball_leads');
    if (leads) {
      try {
        setAllLeads(JSON.parse(leads));
      } catch (e) {
        console.error('Failed to parse leads', e);
      }
    }
  }, [showSuccessModal]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a valid email';
    }
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.gradYear.trim()) errors.gradYear = 'Graduation year is required';
    if (!formData.currentSchool.trim()) errors.currentSchool = 'Current school is required';
    if (!formData.positions.trim()) errors.positions = 'Please specify playing position(s)';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate server post action
    setTimeout(() => {
      const newLead: LeadSubmission = {
        id: `lead_${Date.now()}`,
        ...formData,
        timestamp: new Date().toLocaleString(),
        status: 'new',
      };

      // Save to local storage for realistic data persistence
      const currentLeads = localStorage.getItem('darin_baseball_leads');
      let leadsArray: LeadSubmission[] = [];
      if (currentLeads) {
        try {
          leadsArray = JSON.parse(currentLeads);
        } catch (e) {
          leadsArray = [];
        }
      }
      leadsArray.unshift(newLead);
      localStorage.setItem('darin_baseball_leads', JSON.stringify(leadsArray));

      setSavedSubmission(newLead);
      setAllLeads(leadsArray);
      setIsSubmitting(false);
      setShowSuccessModal(true);

      // Clear Form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        gradYear: '',
        currentSchool: '',
        positions: '',
        clubTeam: '',
        message: '',
      });
    }, 1200);
  };

  const deleteLead = (id: string) => {
    const updated = allLeads.filter((l) => l.id !== id);
    localStorage.setItem('darin_baseball_leads', JSON.stringify(updated));
    setAllLeads(updated);
  };

  return (
    <section id="contact" className="relative py-28 bg-slate-950 overflow-hidden">
      
      {/* Visual background shapes */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* SECTION 9: FINAL CALL TO ACTION (Elegant transition banner) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24 relative z-10">
        <div className="relative rounded-3xl overflow-hidden p-8 md:p-16 border border-white/5 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 shadow-2xl">
          {/* Subtle network connection graphic in final CTA background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.06),transparent_50%)] pointer-events-none" />
          
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">
              <Sparkles className="w-3 h-3" />
              Secure Your Placement
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none">
              Ready to Take the Next Step?
            </h2>
            <p className="text-gray-300 font-light text-base md:text-lg leading-relaxed mt-2 max-w-2xl">
              The recruiting process does not have to be confusing. Receive personalized guidance from a highly accomplished college baseball Coach and build a recruiting strategy designed around your future.
            </p>
            <div className="w-12 h-[2px] bg-amber-500 rounded-full my-2" />
            <p className="text-xs text-gray-500 font-mono">
              Fill out the comprehensive recruiting form below to request your consultation slot.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 10: CONTACT DETAILS AND FORM PANEL */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Direct Inquiries, Hour limits & Social Connections */}
          <div className="lg:col-span-5 text-left flex flex-col gap-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber-500 font-bold">
                Get In Touch
              </span>
              <h3 className="font-display text-3xl font-extrabold text-white mt-2 tracking-tight">
                Start Your Recruiting Journey Today
              </h3>
              <p className="text-gray-400 font-light mt-4 leading-relaxed text-sm md:text-base">
                Whether you are a high school player aiming for Division 1, a transfer athlete looking for the perfect program alignment, or a parent seeking trusted, honest recruiting advice, I am here to support your goals.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-6">
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-amber-500 group-hover:border-amber-500/30 transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-mono block">Direct Call / Text</span>
                  <a href="tel:3144352340" className="text-lg font-bold text-white hover:text-amber-400 transition-colors">
                    314-435-2340
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-sky-400 group-hover:border-sky-400/30 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-mono block">Direct Email</span>
                  <a href="mailto:hendricksondarin@gmail.com" className="text-lg font-bold text-white hover:text-amber-400 transition-colors">
                    hendricksondarin@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-amber-500 group-hover:border-amber-500/30 transition-all">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-mono block">Business Hours</span>
                  <p className="text-sm font-semibold text-gray-300">
                    Mon - Sun: 8:00 AM - 8:00 PM CST
                  </p>
                </div>
              </div>

            </div>


          </div>

          {/* Right Column: Custom 8-field consultation form */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {adminView ? (
                // ADMIN LEADS INBOX PANEL
                <motion.div
                  key="admin-panel"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="rounded-3xl p-8 bg-slate-900/50 border border-white/5 text-left h-full flex flex-col min-h-[580px]"
                >
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <Inbox className="w-5 h-5 text-amber-500" />
                      <h4 className="font-display font-bold text-lg text-white">Submitted Consultations</h4>
                    </div>
                    <span className="text-xs font-mono text-gray-500">System Local Memory</span>
                  </div>

                  {allLeads.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-center p-8 text-gray-500 gap-3">
                      <MessageSquare className="w-8 h-8 text-slate-800" />
                      <p className="text-sm">No consultations received yet.</p>
                      <p className="text-xs text-slate-600 max-w-xs">
                        Use the contact form to submit a mock consultation. It will instantly populate here!
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4 overflow-y-auto max-h-[500px] pr-2">
                      {allLeads.map((lead) => (
                        <div key={lead.id} className="p-5 rounded-2xl bg-slate-950/60 border border-white/5 hover:border-amber-500/20 transition-colors flex flex-col gap-3">
                          <div className="flex items-center justify-between border-b border-white/5 pb-2">
                            <div>
                              <h5 className="font-display font-bold text-white text-base">{lead.fullName}</h5>
                              <span className="text-[10px] text-gray-500 font-mono">{lead.timestamp}</span>
                            </div>
                            <button
                              onClick={() => deleteLead(lead.id)}
                              className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20 transition-colors"
                              title="Delete consultation"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          
                          {/* Core fields list */}
                          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                            <p className="text-gray-400 font-light"><strong className="text-gray-300 font-normal">Email:</strong> {lead.email}</p>
                            <p className="text-gray-400 font-light"><strong className="text-gray-300 font-normal">Phone:</strong> {lead.phone}</p>
                            <p className="text-gray-400 font-light"><strong className="text-gray-300 font-normal">Grad Year:</strong> {lead.gradYear}</p>
                            <p className="text-gray-400 font-light"><strong className="text-gray-300 font-normal">School:</strong> {lead.currentSchool}</p>
                            <p className="text-gray-400 font-light"><strong className="text-gray-300 font-normal">Positions:</strong> {lead.positions}</p>
                            <p className="text-gray-400 font-light"><strong className="text-gray-300 font-normal">Club/Travel:</strong> {lead.clubTeam || 'N/A'}</p>
                          </div>

                          {lead.message && (
                            <div className="p-3 rounded-lg bg-slate-900 border border-white/5 mt-1">
                              <p className="text-xs text-gray-400 leading-relaxed"><strong className="text-gray-300 block mb-1 font-normal">Message:</strong> {lead.message}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ) : (
                // COMPREHENSIVE 8-FIELD CONTACT FORM
                <motion.div
                  key="form-panel"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="rounded-3xl p-8 sm:p-10 bg-slate-900/40 border border-white/5 backdrop-blur-md text-left shadow-2xl relative"
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Grid Fields Group */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Full Name */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="fullName" className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors ${
                            formErrors.fullName ? 'border-red-500/40' : 'border-white/10'
                          }`}
                          placeholder="e.g. Connor Hendrickson"
                        />
                        {formErrors.fullName && (
                          <span className="text-[10px] text-red-400">{formErrors.fullName}</span>
                        )}
                      </div>

                      {/* Email Address */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors ${
                            formErrors.email ? 'border-red-500/40' : 'border-white/10'
                          }`}
                          placeholder="e.g. athlete@example.com"
                        />
                        {formErrors.email && (
                          <span className="text-[10px] text-red-400">{formErrors.email}</span>
                        )}
                      </div>

                      {/* Phone Number */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors ${
                            formErrors.phone ? 'border-red-500/40' : 'border-white/10'
                          }`}
                          placeholder="e.g. 314-555-0199"
                        />
                        {formErrors.phone && (
                          <span className="text-[10px] text-red-400">{formErrors.phone}</span>
                        )}
                      </div>

                      {/* Graduation Year */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="gradYear" className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">
                          Graduation Year *
                        </label>
                        <input
                          type="text"
                          id="gradYear"
                          name="gradYear"
                          value={formData.gradYear}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors ${
                            formErrors.gradYear ? 'border-red-500/40' : 'border-white/10'
                          }`}
                          placeholder="e.g. 2027 or 2028"
                        />
                        {formErrors.gradYear && (
                          <span className="text-[10px] text-red-400">{formErrors.gradYear}</span>
                        )}
                      </div>

                      {/* Current School */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="currentSchool" className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">
                          Current School *
                        </label>
                        <input
                          type="text"
                          id="currentSchool"
                          name="currentSchool"
                          value={formData.currentSchool}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors ${
                            formErrors.currentSchool ? 'border-red-500/40' : 'border-white/10'
                          }`}
                          placeholder="e.g. Saint Louis High School"
                        />
                        {formErrors.currentSchool && (
                          <span className="text-[10px] text-red-400">{formErrors.currentSchool}</span>
                        )}
                      </div>

                      {/* Positions */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="positions" className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">
                          Position(s) *
                        </label>
                        <input
                          type="text"
                          id="positions"
                          name="positions"
                          value={formData.positions}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors ${
                            formErrors.positions ? 'border-red-500/40' : 'border-white/10'
                          }`}
                          placeholder="e.g. RHP / Shortstop"
                        />
                        {formErrors.positions && (
                          <span className="text-[10px] text-red-400">{formErrors.positions}</span>
                        )}
                      </div>

                    </div>

                    {/* Club / Travel Team (Full Width / Optional) */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="clubTeam" className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">
                        Club / Travel Team
                      </label>
                      <input
                        type="text"
                        id="clubTeam"
                        name="clubTeam"
                        value={formData.clubTeam}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                        placeholder="e.g. Midwest Prospects or St. Louis Gamers"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">
                        Message / Recruiting Goals
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
                        placeholder="Share a bit about where you are in your recruiting journey and what colleges you target..."
                      />
                    </div>

                    {/* Form Submit Trigger */}
                    <div className="pt-2">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-base shadow-lg shadow-amber-500/10 hover:shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                            Verifying Slot Availability...
                          </div>
                        ) : (
                          <>
                            <Calendar className="w-5 h-5" />
                            Book My Consultation
                          </>
                        )}
                      </motion.button>
                    </div>

                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* STUNNING SUCCESS CONFIRMATION MODAL */}
      <AnimatePresence>
        {showSuccessModal && savedSubmission && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              className="w-full max-w-xl rounded-3xl glass-card p-8 md:p-10 border-amber-500/30 shadow-2xl relative text-left"
            >
              {/* Confetti decoration */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
              
              <div className="flex items-start gap-4 mb-6 pb-6 border-b border-white/5">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 animate-bounce" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-2xl text-white tracking-tight">
                    Consultation Requested!
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 font-mono">
                    ID: {savedSubmission.id} &bull; Received
                  </p>
                </div>
              </div>

              {/* Consultation Details Card */}
              <div className="p-6 rounded-2xl bg-slate-950/60 border border-white/5 mb-6 text-sm flex flex-col gap-3">
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-xs text-gray-500 font-mono">Client Name</span>
                  <span className="font-bold text-white">{savedSubmission.fullName}</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-xs text-gray-500 font-mono">Class of</span>
                  <span className="font-bold text-amber-400 font-mono">{savedSubmission.gradYear}</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-xs text-gray-500 font-mono">Playing Position</span>
                  <span className="font-bold text-gray-200">{savedSubmission.positions}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-mono">Current School</span>
                  <span className="font-bold text-gray-200">{savedSubmission.currentSchool}</span>
                </div>
              </div>

              <div className="text-gray-300 space-y-4 text-sm leading-relaxed mb-8">
                <p>
                  Thank you for starting your recruiting journey. I have securely saved your profile in my consulting files.
                </p>
                <p className="text-xs text-gray-400">
                  Coach Darin Hendrickson will personally review your athletic achievements and target goals, and get back to you via email (<strong className="text-white">{savedSubmission.email}</strong>) or phone (<strong className="text-white">{savedSubmission.phone}</strong>) within <strong className="text-amber-400">24 to 48 hours</strong>.
                </p>
              </div>

              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-3.5 rounded-xl bg-white text-slate-950 font-bold text-sm tracking-wide shadow-md active:scale-98 transition-all cursor-pointer text-center block"
              >
                Close Ticket & Return
              </button>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
