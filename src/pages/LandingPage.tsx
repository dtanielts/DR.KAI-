import React from 'react';
import { 
  Stethoscope, 
  User, 
  ArrowRight,
  ShieldCheck,
  Activity,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Simple Nav */}
      <nav className="p-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <div className="bg-brand-600 p-1.5 rounded-lg">
            <Stethoscope className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold font-display text-brand-900">Dr Kai</span>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="max-w-5xl w-full">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                Welcome to <span className="text-brand-600">Dr Kai</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                The next generation of clinical intelligence. Choose your path to get started.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Doctor Path */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link 
                to="/doctor"
                className="group block p-8 md:p-12 rounded-[2.5rem] bg-brand-900 text-white hover:bg-brand-800 transition-all shadow-2xl shadow-brand-900/20 relative overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-white/10 transition-colors"></div>
                
                <div className="relative z-10">
                  <div className="bg-brand-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <Stethoscope className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">For Clinicians</h2>
                  <p className="text-brand-100 text-lg mb-8 leading-relaxed">
                    Streamline your workflow, reduce admin time, and focus on what matters most: your patients.
                  </p>
                  <div className="flex items-center gap-2 font-bold text-brand-400 group-hover:text-white transition-colors">
                    Enter Clinician Portal <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Patient Path */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link 
                to="/patient"
                className="group block p-8 md:p-12 rounded-[2.5rem] bg-white border-2 border-slate-100 hover:border-brand-200 hover:shadow-2xl hover:shadow-brand-500/5 transition-all h-full"
              >
                <div className="bg-brand-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <User className="w-8 h-8 text-brand-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">For Patients</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  Manage your health records, prepare for visits, and stay connected with your care team securely.
                </p>
                <div className="flex items-center gap-2 font-bold text-brand-600">
                  Enter Patient Portal <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          </div>

          <div className="mt-20 text-center">
            <div className="flex items-center justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-widest">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-widest">E2EE Secure</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="p-8 text-center text-slate-400 text-sm">
        © 2026 Dr Kai. Built for EU Healthcare.
      </footer>
    </div>
  );
}
