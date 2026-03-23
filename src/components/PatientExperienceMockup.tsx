import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  ShieldCheck, 
  MessageSquare, 
  Smile, 
  CheckCircle2, 
  Lock, 
  FileText, 
  Activity,
  ChevronRight,
  Heart,
  Plus,
  ArrowRight
} from 'lucide-react';

const steps = [
  {
    id: 'prep',
    title: 'Appointment Prep',
    icon: <Calendar className="w-5 h-5" />,
    color: 'bg-brand-500',
    content: (
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-bold text-slate-800">Symptom Logger</h4>
          <span className="text-[10px] font-bold text-slate-400 uppercase">Step 1 of 4</span>
        </div>
        <div className="space-y-3">
          <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Current Symptom</div>
            <div className="text-sm font-bold text-slate-900">Mild chest tightness</div>
            <div className="text-[10px] text-slate-500">Started 2 days ago, worse after exercise</div>
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-sm opacity-50">
            <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Medication Check</div>
            <div className="text-sm font-bold text-slate-900">Lisinopril 10mg</div>
            <div className="text-[10px] text-slate-500">Taken daily as prescribed</div>
          </div>
          <button className="w-full py-3 bg-slate-50 border border-slate-200 border-dashed rounded-xl text-slate-400 text-xs font-bold flex items-center justify-center gap-2">
            <Plus className="w-4 h-4" /> Add Symptom or Question
          </button>
        </div>
        <div className="p-3 bg-brand-50 rounded-xl border border-brand-100">
          <p className="text-[10px] text-brand-700 leading-relaxed font-medium">
            <span className="font-bold">Pro Tip:</span> Logging symptoms helps your doctor prepare a more focused summary for your visit.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'checkin',
    title: 'Secure Check-in',
    icon: <ShieldCheck className="w-5 h-5" />,
    color: 'bg-emerald-500',
    content: (
      <div className="space-y-6 flex flex-col items-center justify-center h-full text-center">
        <div className="relative">
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center"
          >
            <Lock className="w-10 h-10 text-emerald-600" />
          </motion.div>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="absolute -top-2 -right-2 w-24 h-24 border-2 border-dashed border-emerald-200 rounded-full"
          />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 text-lg mb-2">E2EE Data Sharing</h4>
          <p className="text-xs text-slate-500 leading-relaxed max-w-[200px] mx-auto">
            Your clinical data is being encrypted and shared securely with <span className="font-bold">Central Health Clinic</span>.
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold border border-emerald-100">
          <CheckCircle2 className="w-3 h-3" /> GDPR & EU Compliant
        </div>
      </div>
    )
  },
  {
    id: 'summary',
    title: 'Clear Communication',
    icon: <MessageSquare className="w-5 h-5" />,
    color: 'bg-blue-500',
    content: (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-slate-800">Visit Summary</h4>
          <span className="text-[10px] font-bold text-slate-400 uppercase">Today</span>
        </div>
        <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl">
          <div className="text-xs font-bold text-blue-800 mb-2">Key Takeaways</div>
          <ul className="space-y-2">
            {[
              "Your heart rate is stable at 72 BPM.",
              "Continue current medication schedule.",
              "Next follow-up in 6 months."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-[10px] text-blue-700">
                <div className="w-1 h-1 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Next Steps</div>
          <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center">
                <FileText className="w-4 h-4 text-slate-400" />
              </div>
              <div className="text-[10px] font-bold text-slate-900">Blood Test Referral</div>
            </div>
            <ArrowRight className="w-3 h-3 text-slate-300" />
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'health',
    title: 'Empowered Health',
    icon: <Smile className="w-5 h-5" />,
    color: 'bg-orange-500',
    content: (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-slate-800">Health Trends</h4>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
          </div>
        </div>
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <div className="flex items-end gap-1 h-24 mb-4">
            {[40, 60, 45, 70, 85, 65, 90].map((h, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className={`flex-1 rounded-t-md ${i === 6 ? 'bg-orange-500' : 'bg-orange-200'}`}
              />
            ))}
          </div>
          <div className="flex justify-between text-[8px] font-bold text-slate-400 uppercase">
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
            <span>Sun</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="text-[8px] font-bold text-slate-400 uppercase mb-1">Avg. Activity</div>
            <div className="text-sm font-bold text-slate-900">8.4k Steps</div>
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="text-[8px] font-bold text-slate-400 uppercase mb-1">Sleep Quality</div>
            <div className="text-sm font-bold text-slate-900">92%</div>
          </div>
        </div>
      </div>
    )
  }
];

export default function PatientExperienceMockup() {
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
              <motion.div layoutId="arrow-patient" className="ml-auto">
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
              <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Dr. Kai Patient Portal</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-brand-100 border border-brand-200 flex items-center justify-center overflow-hidden">
              <Heart className="w-4 h-4 text-brand-600" />
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
                <Activity className="w-3 h-3 text-slate-400" />
                <span className="text-[10px] font-bold text-slate-400">Health Sync: Active</span>
              </div>
              <div className="w-px h-3 bg-slate-200"></div>
              <div className="text-[10px] font-bold text-slate-400">SECURE-LINK-V1</div>
            </div>
            <div className="flex -space-x-2">
              <div className="w-5 h-5 rounded-full border-2 border-white bg-brand-100"></div>
              <div className="w-5 h-5 rounded-full border-2 border-white bg-emerald-100"></div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-400/10 rounded-full blur-2xl -z-10"></div>
        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl -z-10"></div>
      </div>
    </div>
  );
}
