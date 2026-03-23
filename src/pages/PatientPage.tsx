import React from 'react';
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
  FileText,
  Smile
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import DashboardMockup from '../components/DashboardMockup';
import PatientExperienceMockup from '../components/PatientExperienceMockup';
import BetaSignup from '../components/BetaSignup';

export default function PatientPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-6">
              <Link to="/" className="flex items-center gap-2 text-slate-500 hover:text-brand-600 transition-colors group/back">
                <ArrowRight className="w-5 h-5 rotate-180 group-hover/back:-translate-x-1 transition-transform" />
                <span className="text-sm font-bold">Back</span>
              </Link>
              <div className="w-px h-6 bg-slate-100"></div>
              <Link 
                to="/" 
                className="flex items-center gap-2 group"
              >
                <div className="group-hover:scale-110 transition-transform overflow-hidden w-8 h-8 flex items-center justify-center">
                  <img 
                    src="https://ffd65ed0edd477d8da02be1e35d3ffc9.cdn.bubble.io/cdn-cgi/image/w=128,h=,f=auto,dpr=1,fit=contain/f1765378714072x376524185866888400/Screenshot%202025-09-29%20at%2018.16.37.png" 
                    alt="Dr.Kai Logo" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-xl font-bold font-display text-brand-900">Dr.Kai</span>
              </Link>
            </div>
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
        <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-brand-50/50">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-300 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-200 rounded-full blur-3xl animate-pulse delay-700"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-left"
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-bold uppercase tracking-widest mb-8 border border-brand-200">
                  <Heart className="w-4 h-4" /> Patient Portal
                </span>
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[1.1]">
                  Your Health Journey, <br />
                  <span className="text-brand-600">Simplified & Secure</span>
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
                  Dr.Kai empowers you to manage your clinical data, prepare for appointments, 
                  and communicate with your care team with total privacy.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a href="#signup" className="w-full sm:w-auto px-8 py-4 bg-brand-600 text-white rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-lg shadow-brand-200 flex items-center justify-center gap-2 group">
                    Join Patient Beta <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#features" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
                    Explore Features
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden lg:block"
              >
                <DashboardMockup type="patient" />
              </motion.div>
            </div>
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

        {/* Experience Section - Interactive Mockup */}
        <section className="py-24 bg-brand-50/30 border-y border-brand-100/50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">The Patient's Path</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                See how Dr.Kai empowers you through every step of your healthcare journey, 
                from appointment preparation to long-term wellness.
              </p>
            </div>

            <PatientExperienceMockup />
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
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BetaSignup />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
              <img 
                src="https://ffd65ed0edd477d8da02be1e35d3ffc9.cdn.bubble.io/cdn-cgi/image/w=128,h=,f=auto,dpr=1,fit=contain/f1765378714072x376524185866888400/Screenshot%202025-09-29%20at%2018.16.37.png" 
                alt="Dr.Kai Logo" 
                className="w-6 h-6 object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="text-lg font-bold font-display text-brand-900">Dr.Kai</span>
            </div>
            <div className="flex gap-8 text-sm text-slate-500 font-medium">
              <a href="#" className="hover:text-brand-600">Privacy</a>
              <a href="#" className="hover:text-brand-600">Terms</a>
              <a href="#" className="hover:text-brand-600">Contact</a>
            </div>
            <div className="text-sm text-slate-400">
              © 2026 Dr.Kai. All rights reserved. Built for EU Healthcare.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
