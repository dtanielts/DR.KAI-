import React from 'react';
import { 
  Stethoscope, 
  ShieldCheck, 
  Search, 
  Users, 
  ClipboardList, 
  Activity, 
  ArrowRight, 
  CheckCircle2,
  Lock,
  Database,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import DashboardMockup from '../components/DashboardMockup';
import ClinicianExperienceMockup from '../components/ClinicianExperienceMockup';
import BetaSignup from '../components/BetaSignup';

export default function DoctorPage() {
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
              <Link to="/demo" className="text-sm font-bold text-brand-600 hover:text-brand-700 transition-colors">Try Demo</Link>
              <a href="#signup" className="bg-brand-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-brand-700 transition-all shadow-sm">Join Beta</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-12 pb-20 md:pt-20 md:pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-slate-900 text-white">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-400 rounded-full blur-3xl animate-pulse delay-700"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-left"
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-brand-300 text-xs md:text-sm font-bold uppercase tracking-widest mb-6 md:mb-8 border border-white/20 backdrop-blur-sm">
                  <Stethoscope className="w-4 h-4" /> Clinician Portal
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-[1.1]">
                  Reduce Clinic Admin <br />
                  <span className="text-brand-400">Empower Your Doctors</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8 md:mb-10 leading-relaxed">
                  Dr.Kai provides structured clinical summaries and intelligent triage support, 
                  letting your team focus on patient care instead of paperwork.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a href="#signup" className="w-full sm:w-auto px-8 py-4 bg-brand-600 text-white rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-lg shadow-brand-200 flex items-center justify-center gap-2 group">
                    Apply for Beta Access <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#features" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all text-center">
                    See How It Works
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden lg:block"
              >
                <DashboardMockup type="doctor" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats/Trust Bar */}
        <section className="bg-slate-50 py-12 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-900 mb-1">40%</div>
                <div className="text-sm text-slate-500 font-medium">Admin Reduction</div>
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
                <div className="text-3xl font-bold text-brand-900 mb-1">1177+</div>
                <div className="text-sm text-slate-500 font-medium">Medical Databases</div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section - Interactive Mockup */}
        <section className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">The Clinician's Path</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Experience how Dr.Kai transforms every stage of your clinical day, 
                from morning preparation to final documentation.
              </p>
            </div>

            <ClinicianExperienceMockup />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Built for Modern Clinical Workflows</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Dr.Kai integrates seamlessly into your clinic to handle the heavy lifting of data synthesis and triage.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ClipboardList className="w-6 h-6 text-brand-600" />,
                  title: "Structured Summaries",
                  description: "Receive concise clinical summaries before every appointment, synthesized from patient history and current symptoms."
                },
                {
                  icon: <Search className="w-6 h-6 text-brand-600" />,
                  title: "Instant Medical Search",
                  description: "Quickly refer to credible medical databases like 1177, Viss, and Fass with intelligent, context-aware search."
                },
                {
                  icon: <Activity className="w-6 h-6 text-brand-600" />,
                  title: "Intelligent Triage",
                  description: "AI-driven triage algorithms with medical guardrails to support diagnosis and prioritize urgent cases."
                },
                {
                  icon: <Users className="w-6 h-6 text-brand-600" />,
                  title: "Patient Profiles",
                  description: "Create and maintain structured patient profiles that evolve with every visit and data point."
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 text-brand-600" />,
                  title: "Privacy First",
                  description: "Built with E2EE and KMS technology to ensure patient data remains confidential and secure."
                },
                {
                  icon: <Database className="w-6 h-6 text-brand-600" />,
                  title: "EU Compliance",
                  description: "Full GDPR compliance with all data handled securely within EU borders for maximum sovereignty."
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
        <section id="security" className="py-16 md:py-24 bg-brand-900 text-white overflow-hidden relative">
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
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Medical-Grade Security & Privacy</h2>
                <p className="text-brand-100 text-base md:text-lg mb-8 leading-relaxed">
                  We understand the sensitivity of medical data. Dr.Kai is built from the ground up with 
                  privacy enhancement technology to meet the highest standards of healthcare.
                </p>
                <div className="space-y-4">
                  {[
                    "End-to-End Encryption (E2EE) for all patient data",
                    "Key Management Service (KMS) for secure credential handling",
                    "Structured patient modeling with strict access controls",
                    "AI with clinical guardrails and human-in-the-loop design"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                      <span className="text-brand-50 font-medium text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-white/20">
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className="bg-brand-500 p-3 rounded-2xl">
                    <Lock className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-lg md:text-xl font-bold">Secure Infrastructure</div>
                    <div className="text-brand-300 text-xs md:text-sm">EU-Based Data Centers</div>
                  </div>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className="text-[10px] md:text-xs font-bold text-brand-400 uppercase tracking-wider mb-1">Data Sovereignty</div>
                    <p className="text-xs md:text-sm text-brand-100">All clinical data is stored and processed within the EU to comply with GDPR and local healthcare regulations.</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className="text-[10px] md:text-xs font-bold text-brand-400 uppercase tracking-wider mb-1">Audit Trails</div>
                    <p className="text-xs md:text-sm text-brand-100">Comprehensive logging and audit trails for every data access event, ensuring full transparency.</p>
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
