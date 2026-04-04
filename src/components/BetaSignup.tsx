import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface BetaSignupProps {
  id?: string;
  className?: string;
}

export default function BetaSignup({ id = "signup", className = "" }: BetaSignupProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check both import.meta.env and process.env (for Vite define)
    const getEnv = (key: string) => import.meta.env[key] || (process.env as any)[key];
    
    const rawFormId = getEnv('VITE_GOOGLE_FORM_ID');
    const rawNameEntry = getEnv('VITE_GOOGLE_FORM_NAME_ENTRY');
    const rawEmailEntry = getEnv('VITE_GOOGLE_FORM_EMAIL_ENTRY');
    const gaId = getEnv('VITE_GA_MEASUREMENT_ID');

    console.log('Detected VITE_ secrets:', {
      formId: !!rawFormId,
      nameEntry: !!rawNameEntry,
      emailEntry: !!rawEmailEntry
    });
    
    setIsSubmitting(true);

    // Clean up IDs safely
    const formId = rawFormId?.trim() || '';
    const nameEntry = rawNameEntry?.trim() 
      ? (rawNameEntry.trim().startsWith('entry.') ? rawNameEntry.trim() : `entry.${rawNameEntry.trim()}`)
      : '';
    const emailEntry = rawEmailEntry?.trim()
      ? (rawEmailEntry.trim().startsWith('entry.') ? rawEmailEntry.trim() : `entry.${rawEmailEntry.trim()}`)
      : '';

    const isConfigured = formId && nameEntry && emailEntry;

    if (isConfigured) {
      const formUrl = `https://docs.google.com/forms/d/e/${formId}/formResponse`;
      const formData = new FormData();
      formData.append(nameEntry, name);
      formData.append(emailEntry, email);

      console.log('Submitting to Google Form:', formUrl);
      
      try {
        await fetch(formUrl, {
          method: 'POST',
          mode: 'no-cors',
          body: formData
        });
        console.log('Beta signup successfully sent to Google Forms');
        
        // Track event if GA is configured
        if (gaId && (window as any).gtag) {
          (window as any).gtag('event', 'beta_signup', {
            'event_category': 'engagement',
            'event_label': 'Beta Signup Form'
          });
        }
      } catch (error) {
        console.error('Network error during Google Form submission:', error);
      }
    } else {
      console.log('Beta signup (mock):', { name, email });
      console.warn('Google Form configuration incomplete. Check your Secrets panel.');
      // Small delay to simulate network for mock
      await new Promise(resolve => setTimeout(resolve, 800));
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id={id} className={`py-16 md:py-24 bg-slate-50 rounded-[2rem] md:rounded-[3rem] border border-slate-100 text-center px-4 md:px-8 ${className}`}>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">Join the Beta Testing</h2>
        <p className="text-lg md:text-xl text-slate-600 mb-8 md:mb-10 leading-relaxed">
          Be among the first to experience Dr.Kai. Help us shape the future of EU healthcare coordination.
        </p>

        {submitted ? (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-brand-100 shadow-xl shadow-brand-500/5 relative z-10"
          >
            <div className="bg-brand-600 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg shadow-brand-200">
              <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 md:mb-3">You're on the list!</h3>
            <p className="text-sm md:text-base text-slate-600">
              Thank you for joining, <span className="font-bold text-brand-600">{name}</span>. We'll notify you as soon as a spot opens up in our private beta.
            </p>
          </motion.div>
        ) : (
          <div className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-brand-900/5 border border-slate-100 relative z-10">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5 text-left">
              {!(import.meta.env.VITE_GOOGLE_FORM_ID || (process.env as any).VITE_GOOGLE_FORM_ID) && (
                <div className="bg-amber-50 border border-amber-200 p-3 md:p-4 rounded-xl mb-4 md:mb-6 text-amber-800 text-[10px] md:text-sm">
                  <strong>Developer Note:</strong> Google Form ID is not set in Secrets. Submissions will be logged to the console but not sent to Sheets.
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label htmlFor="beta-name" className="block text-xs md:text-sm font-bold text-slate-700 mb-1.5 md:mb-2 ml-1">Full Name / Clinic Name</label>
                  <input
                    type="text"
                    id="beta-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Jane Doe or Central Clinic"
                    className="w-full px-5 py-3.5 md:px-6 md:py-4 bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all text-base md:text-lg"
                  />
                </div>
                <div>
                  <label htmlFor="beta-email" className="block text-xs md:text-sm font-bold text-slate-700 mb-1.5 md:mb-2 ml-1">Email Address</label>
                  <input
                    type="email"
                    id="beta-email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-5 py-3.5 md:px-6 md:py-4 bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all text-base md:text-lg"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 md:py-5 bg-brand-600 text-white rounded-xl md:rounded-2xl font-bold text-lg md:text-xl transition-all shadow-xl shadow-brand-200 flex items-center justify-center gap-3 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-brand-700'}`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Join the Beta <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
