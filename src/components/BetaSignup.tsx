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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Beta signup:', { name, email });
    setSubmitted(true);
  };

  return (
    <section id={id} className={`py-24 bg-slate-50 rounded-[3rem] border border-slate-100 text-center px-8 ${className}`}>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">Join the Beta Testing</h2>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
          Be among the first to experience Dr.Kai. Help us shape the future of EU healthcare coordination.
        </p>

        {submitted ? (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-10 rounded-[2.5rem] border border-brand-100 shadow-xl shadow-brand-500/5"
          >
            <div className="bg-brand-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-200">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">You're on the list!</h3>
            <p className="text-slate-600">
              Thank you for joining, <span className="font-bold text-brand-600">{name}</span>. We'll notify you as soon as a spot opens up in our private beta.
            </p>
          </motion.div>
        ) : (
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-brand-900/5 border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="beta-name" className="block text-sm font-bold text-slate-700 mb-2 ml-1">Full Name / Clinic Name</label>
                  <input
                    type="text"
                    id="beta-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Jane Doe or Central Clinic"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all text-lg"
                  />
                </div>
                <div>
                  <label htmlFor="beta-email" className="block text-sm font-bold text-slate-700 mb-2 ml-1">Email Address</label>
                  <input
                    type="email"
                    id="beta-email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all text-lg"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-brand-600 text-white rounded-2xl font-bold text-xl hover:bg-brand-700 transition-all shadow-xl shadow-brand-200 flex items-center justify-center gap-3 group"
              >
                Join the Beta <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-center text-xs text-slate-400 mt-6">
                By joining, you agree to our <a href="#" className="underline hover:text-brand-600">Privacy Policy</a> and <a href="#" className="underline hover:text-brand-600">Terms of Service</a>.
              </p>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
