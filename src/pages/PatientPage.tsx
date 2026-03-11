import React, { useState } from 'react';
import { 
  Stethoscope, 
  ShieldCheck, 
  Activity, 
  ArrowRight, 
  CheckCircle2,
  Lock,
  Database,
  Heart,
  Calendar,
  MessageSquare,
  FileText
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function PatientPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Patient sign up:', { name, email });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-brand-600 p-1.5 rounded-lg">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold font-display text-brand-900">Dr Kai</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Features</a>
              <a href="#security" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Security</a>
              <a href="#signup" className="bg-brand-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-brand-700 transition-all shadow-sm">Join Beta</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-200 rounded-full blur-3xl animate-pulse delay-700"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-6 border border-brand-100">
                <Heart className="w-3 h-3" /> For Patients
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[1.1]">
                Your Health Journey, <br />
                <span className="text-brand-600">Simplified & Secure</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                Dr Kai empowers you to manage your clinical data, prepare for appointments, 
                and communicate with your care team with total privacy.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#signup" className="w-full sm:w-auto px-8 py-4 bg-brand-600 text-white rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-lg shadow-brand-200 flex items-center justify-center gap-2 group">
                  Join Patient Beta <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#features" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
                  Explore Features
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats/Trust Bar */}
        <section className="bg-slate-50 py-12 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-900 mb-1">100%</div>
                <div className="text-sm text-slate-500 font-medium">Data Ownership</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-900 mb-1">E2EE</div>
                <div className="text-sm text-slate-500 font-medium">End-to-End Encryption</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-900 mb-1">EU-Based</div>
                <div className="text-sm text-slate-500 font-medium">Data Sovereignty</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-900 mb-1">24/7</div>
                <div className="text-sm text-slate-500 font-medium">Secure Access</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Empowering Your Healthcare Experience</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Take control of your medical information with tools designed for clarity, security, and ease of use.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FileText className="w-6 h-6 text-brand-600" />,
                  title: "Personal Health Records",
                  description: "Access your clinical summaries and visit notes in a clear, structured format that's easy to understand."
                },
                {
                  icon: <Calendar className="w-6 h-6 text-brand-600" />,
                  title: "Appointment Prep",
                  description: "Use AI-guided tools to prepare for your next visit, ensuring you ask the right questions and share key symptoms."
                },
                {
                  icon: <MessageSquare className="w-6 h-6 text-brand-600" />,
                  title: "Secure Messaging",
                  description: "Communicate directly with your clinic through an encrypted channel, keeping your conversations private."
                },
                {
                  icon: <Activity className="w-6 h-6 text-brand-600" />,
                  title: "Symptom Tracking",
                  description: "Log your symptoms over time to provide your doctor with a more accurate picture of your health journey."
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 text-brand-600" />,
                  title: "Privacy Control",
                  description: "You decide who sees your data. Manage permissions for different healthcare providers with a single tap."
                },
                {
                  icon: <Database className="w-6 h-6 text-brand-600" />,
                  title: "EU Data Protection",
                  description: "Your data never leaves the EU, protected by the world's strongest privacy laws and our advanced encryption."
                }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-brand-500/5 transition-all"
                >
                  <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm mb-6 border border-slate-100">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section id="security" className="py-24 bg-brand-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <path d="M0 400 L400 0" stroke="currentColor" strokeWidth="1" fill="none" />
              <path d="M0 300 L300 0" stroke="currentColor" strokeWidth="1" fill="none" />
              <path d="M0 200 L200 0" stroke="currentColor" strokeWidth="1" fill="none" />
              <path d="M100 400 L400 100" stroke="currentColor" strokeWidth="1" fill="none" />
              <path d="M200 400 L400 200" stroke="currentColor" strokeWidth="1" fill="none" />
            </svg>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Your Privacy is Our Priority</h2>
                <p className="text-brand-100 text-lg mb-8 leading-relaxed">
                  Medical data is the most personal data there is. We use state-of-the-art technology to 
                  ensure that you are always in control of your information.
                </p>
                <div className="space-y-4">
                  {[
                    "End-to-End Encryption (E2EE) for all your records",
                    "Zero-knowledge architecture: we can't see your data",
                    "Biometric and multi-factor authentication support",
                    "Full GDPR compliance and data portability"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-400" />
                      <span className="text-brand-50 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-brand-500 p-3 rounded-2xl">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold">Patient-Centric Security</div>
                    <div className="text-brand-300 text-sm">You hold the keys</div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className="text-xs font-bold text-brand-400 uppercase tracking-wider mb-1">Encryption at Rest</div>
                    <p className="text-sm text-brand-100">Your data is encrypted before it even leaves your device, ensuring it's never exposed in transit or on our servers.</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className="text-xs font-bold text-brand-400 uppercase tracking-wider mb-1">Access Transparency</div>
                    <p className="text-sm text-brand-100">Get instant notifications whenever a healthcare provider accesses your records, with full details on what was viewed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sign Up Section */}
        <section id="signup" className="py-24 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-brand-900/5 border border-slate-100 text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Join the Patient Beta</h2>
              <p className="text-slate-600 mb-10">
                Be among the first to experience a new way of managing your health. Sign up for early access.
              </p>

              {submitted ? (
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-brand-50 p-8 rounded-2xl border border-brand-100"
                >
                  <div className="bg-brand-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-900 mb-2">You're on the list!</h3>
                  <p className="text-brand-700">
                    Thank you for joining, {name}. We'll notify you as soon as a spot opens up in our private beta.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2 ml-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 ml-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@example.com"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-600 text-white rounded-2xl font-bold text-lg hover:bg-brand-700 transition-all shadow-lg shadow-brand-200 mt-4"
                  >
                    Request Early Access
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-6">
                    By signing up, you agree to our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="bg-brand-600 p-1 rounded-lg">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold font-display text-brand-900">Dr Kai</span>
            </div>
            <div className="flex gap-8 text-sm text-slate-500 font-medium">
              <Link to="/journey" className="hover:text-brand-600">Journey Map</Link>
              <a href="#" className="hover:text-brand-600">Privacy</a>
              <a href="#" className="hover:text-brand-600">Terms</a>
              <a href="#" className="hover:text-brand-600">Contact</a>
            </div>
            <div className="text-sm text-slate-400">
              © 2026 Dr Kai. All rights reserved. Built for EU Healthcare.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
