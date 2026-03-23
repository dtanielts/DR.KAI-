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
import DashboardMockup from '../components/DashboardMockup';
import BetaSignup from '../components/BetaSignup';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Simple Nav */}
      <nav className="p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              to="/" 
              className="flex items-center gap-2 group"
            >
              <div className="group-hover:scale-110 transition-transform overflow-hidden w-10 h-10 flex items-center justify-center">
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
          <div className="flex items-center gap-8">
            <Link to="/doctor" className="text-sm font-bold text-slate-600 hover:text-brand-600 transition-colors">
              For Clinicians
            </Link>
            <Link to="/patient" className="text-sm font-bold text-slate-600 hover:text-brand-600 transition-colors">
              For Patients
            </Link>
            <a href="#signup" className="bg-brand-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-brand-700 transition-all shadow-sm">
              Join Beta
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center py-12 px-4 lg:py-24">
        <div className="max-w-7xl w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <h1 className="text-6xl md:text-8xl font-bold text-slate-900 mb-8 leading-[1.1]">
                Your <br />
                personal AI <br />
                <span className="text-brand-600">healthcare coordinator</span>
              </h1>
              <p className="text-2xl text-slate-600 max-w-xl mb-12 leading-relaxed">
                Prepare for appointments, understand your health, and keep your entire medical history organized.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a 
                  href="#signup" 
                  className="w-full sm:w-auto px-10 py-5 bg-brand-600 text-white rounded-2xl font-bold text-xl hover:bg-brand-700 transition-all shadow-xl shadow-brand-200 flex items-center justify-center gap-3 group"
                >
                  Join the Beta Testing <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Right Column: Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <DashboardMockup type="patient" />
            </motion.div>
          </div>

          <div className="mt-32 grid md:grid-cols-2 gap-8">
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
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 font-bold text-brand-400 group-hover:text-white transition-colors">
                      Enter Clinician Portal <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
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
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 font-bold text-brand-600">
                    Enter Patient Portal <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
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

          <BetaSignup className="mt-32" />
        </div>
      </main>

      <footer className="p-8 text-center text-slate-400 text-sm flex flex-col items-center gap-6 border-t border-slate-100">
        <div className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
          <img 
            src="https://ffd65ed0edd477d8da02be1e35d3ffc9.cdn.bubble.io/cdn-cgi/image/w=128,h=,f=auto,dpr=1,fit=contain/f1765378714072x376524185866888400/Screenshot%202025-09-29%20at%2018.16.37.png" 
            alt="Dr.Kai Logo" 
            className="w-8 h-8 object-contain"
            referrerPolicy="no-referrer"
          />
          <span className="font-bold text-slate-900">Dr.Kai</span>
        </div>
        <div>© 2026 Dr.Kai. Built for EU Healthcare.</div>
      </footer>
    </div>
  );
}
