import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ClipboardList, 
  Activity, 
  Search, 
  Zap, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Database,
  ChevronRight,
  Clock,
  User
} from 'lucide-react';

const steps = [
  {
    id: 'prep',
    title: 'Morning Prep',
    icon: <ClipboardList className="w-5 h-5" />,
    color: 'bg-blue-500',
    content: (
      <div className="space-y-3">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-bold text-slate-800">Daily Summaries</h4>
          <span className="text-[10px] font-bold text-slate-400 uppercase">8:00 AM</span>
        </div>
        {[
          { name: 'John Anderson', time: '09:00', status: 'Summary Ready' },
          { name: 'Sarah Miller', time: '10:30', status: 'Summary Ready' },
          { name: 'Robert Chen', time: '11:15', status: 'Processing...' },
        ].map((p, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="p-3 bg-white rounded-xl border border-slate-100 flex items-center justify-between shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">
                {p.name[0]}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">{p.name}</div>
                <div className="text-[10px] text-slate-400">{p.time} • Cardiology</div>
              </div>
            </div>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${p.status === 'Summary Ready' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-400'}`}>
              {p.status}
            </span>
          </motion.div>
        ))}
      </div>
    )
  },
  {
    id: 'triage',
    title: 'Intelligent Triage',
    icon: <Activity className="w-5 h-5" />,
    color: 'bg-red-500',
    content: (
      <div className="space-y-4">
        <div className="p-4 bg-red-50 border border-red-100 rounded-2xl">
          <div className="flex items-center gap-2 text-red-600 mb-2">
            <AlertCircle className="w-5 h-5" />
            <span className="font-bold text-sm">High Priority Alert</span>
          </div>
          <h4 className="font-bold text-slate-900 mb-1">Emma Wilson • Triage Flag</h4>
          <p className="text-xs text-slate-600 leading-relaxed mb-3">
            Patient reports acute chest pain and shortness of breath. History of hypertension.
          </p>
          <div className="flex gap-2">
            <button className="flex-1 py-2 bg-red-600 text-white text-xs font-bold rounded-lg shadow-lg shadow-red-200">
              Review Case
            </button>
            <button className="flex-1 py-2 bg-white text-slate-600 border border-slate-200 text-xs font-bold rounded-lg">
              Assign Nurse
            </button>
          </div>
        </div>
        <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl opacity-50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500">Routine Triage</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-sm font-bold text-slate-900">David Smith</div>
          <div className="text-[10px] text-slate-400">Mild seasonal allergies • Low priority</div>
        </div>
      </div>
    )
  },
  {
    id: 'support',
    title: 'Clinical Support',
    icon: <Search className="w-5 h-5" />,
    color: 'bg-brand-500',
    content: (
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            readOnly 
            value="Side effects of Lisinopril..."
            className="w-full pl-9 pr-4 py-2 bg-slate-100 border-none rounded-xl text-xs font-medium text-slate-700"
          />
        </div>
        <div className="space-y-2">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Results from 1177 & FASS</div>
          <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <Database className="w-3 h-3 text-brand-600" />
              <span className="text-[10px] font-bold text-brand-600">FASS.se</span>
            </div>
            <div className="text-xs font-bold text-slate-900 mb-1">Lisinopril Adverse Effects</div>
            <p className="text-[10px] text-slate-500 leading-relaxed">
              Common: Dizziness, headache, fatigue, cough. Rare: Angioedema...
            </p>
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <Database className="w-3 h-3 text-blue-600" />
              <span className="text-[10px] font-bold text-blue-600">1177.se</span>
            </div>
            <div className="text-xs font-bold text-slate-900 mb-1">Patient Guidance</div>
            <p className="text-[10px] text-slate-500 leading-relaxed">
              Information on how to explain side effects to patients in simple terms.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'admin',
    title: 'Admin Automation',
    icon: <Zap className="w-5 h-5" />,
    color: 'bg-amber-500',
    content: (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-slate-800 text-sm">Drafting Clinical Note</h4>
          <motion.div 
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex gap-1"
          >
            <div className="w-1 h-1 rounded-full bg-brand-500"></div>
            <div className="w-1 h-1 rounded-full bg-brand-500"></div>
            <div className="w-1 h-1 rounded-full bg-brand-500"></div>
          </motion.div>
        </div>
        <div className="p-4 bg-slate-900 rounded-2xl text-[10px] font-mono text-slate-300 leading-relaxed min-h-[120px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <span className="text-brand-400"># CLINICAL SUMMARY</span><br />
            PATIENT: John Anderson<br />
            DATE: 2026-03-23<br />
            <br />
            <span className="text-emerald-400">S:</span> Patient reports improved exercise tolerance.<br />
            <span className="text-emerald-400">O:</span> BP 132/84, HR 72, stable.<br />
            <span className="text-emerald-400">A:</span> Hypertension well-controlled on current regimen.<br />
            <span className="text-emerald-400">P:</span> Continue Lisinopril 10mg. F/U 6 months.
          </motion.div>
        </div>
        <button className="w-full py-3 bg-brand-600 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4" /> Approve & Sync to EHR
        </button>
      </div>
    )
  }
];

export default function ClinicianExperienceMockup() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto grid lg:grid-cols-12 gap-8 items-center">
      {/* Left: Step Indicators */}
      <div className="lg:col-span-5 space-y-4">
        {steps.map((step, idx) => (
          <button
            key={step.id}
            onClick={() => setActiveStep(idx)}
            className={`w-full text-left p-5 rounded-2xl border transition-all flex items-center gap-4 ${
              activeStep === idx 
                ? 'bg-white border-brand-200 shadow-xl shadow-brand-500/5 ring-1 ring-brand-100' 
                : 'bg-transparent border-transparent opacity-50 hover:opacity-80'
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg ${
              activeStep === idx ? step.color : 'bg-slate-400'
            }`}>
              {step.icon}
            </div>
            <div>
              <div className={`text-sm font-bold ${activeStep === idx ? 'text-slate-900' : 'text-slate-500'}`}>
                {step.title}
              </div>
              {activeStep === idx && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="text-xs text-slate-500 mt-1"
                >
                  Step {idx + 1} of 4
                </motion.div>
              )}
            </div>
            {activeStep === idx && (
              <motion.div layoutId="arrow" className="ml-auto">
                <ChevronRight className="w-5 h-5 text-brand-500" />
              </motion.div>
            )}
          </button>
        ))}
      </div>

      {/* Right: Mockup Window */}
      <div className="lg:col-span-7 relative">
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden min-h-[480px] flex flex-col">
          {/* Window Header */}
          <div className="bg-slate-50/50 px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-slate-200"></div>
              <div className="w-3 h-3 rounded-full bg-slate-200"></div>
              <div className="w-3 h-3 rounded-full bg-slate-200"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Dr. Kai Clinician Portal</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-brand-100 border border-brand-200 flex items-center justify-center overflow-hidden">
              <User className="w-4 h-4 text-brand-600" />
            </div>
          </div>

          {/* Window Content */}
          <div className="flex-grow p-8 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                {steps[activeStep].content}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Window Footer */}
          <div className="px-8 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-slate-400" />
                <span className="text-[10px] font-bold text-slate-400">Session: 4h 12m</span>
              </div>
              <div className="w-px h-3 bg-slate-200"></div>
              <div className="text-[10px] font-bold text-slate-400">V.2.4.0-BETA</div>
            </div>
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-5 h-5 rounded-full border-2 border-white bg-slate-200"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-400/10 rounded-full blur-2xl -z-10"></div>
        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl -z-10"></div>
      </div>
    </div>
  );
}
