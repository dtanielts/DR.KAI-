import React from 'react';
import { 
  Stethoscope, 
  User, 
  ClipboardList, 
  Search, 
  Activity, 
  CheckCircle2, 
  ArrowRight,
  MessageSquare,
  FileText,
  Calendar,
  ShieldCheck,
  Zap,
  Smile
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface JourneyStepProps {
  icon: any;
  title: string;
  description: string;
  delay: number;
}

const JourneyStep: React.FC<JourneyStepProps> = ({ icon: Icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="relative flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="bg-brand-50 p-4 rounded-xl mb-4 text-brand-600">
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
  </motion.div>
);

const Connector = () => (
  <div className="hidden lg:flex items-center justify-center w-full h-px bg-slate-200 relative my-8">
    <div className="absolute right-0 top-1/2 -translate-y-1/2">
      <ArrowRight className="w-4 h-4 text-slate-300" />
    </div>
  </div>
);

export default function JourneyMapPage() {
  const doctorSteps = [
    {
      icon: ClipboardList,
      title: "1. Morning Prep",
      description: "Dr Kai generates structured summaries for the day's appointments, highlighting critical patient history."
    },
    {
      icon: Activity,
      title: "2. Intelligent Triage",
      description: "Incoming patient data is automatically triaged, flagging urgent cases for immediate attention."
    },
    {
      icon: Search,
      title: "3. Clinical Support",
      description: "During consultations, Dr Kai provides instant access to medical databases (1177, Viss) with context-aware search."
    },
    {
      icon: Zap,
      title: "4. Admin Automation",
      description: "Post-visit notes and referrals are drafted automatically, reducing documentation time by up to 40%."
    }
  ];

  const patientSteps = [
    {
      icon: Calendar,
      title: "1. Appointment Prep",
      description: "Patient uses Dr Kai to log symptoms and prepare questions, ensuring a productive visit."
    },
    {
      icon: ShieldCheck,
      title: "2. Secure Check-in",
      description: "Data is shared with the clinic via E2EE, maintaining total privacy and data sovereignty."
    },
    {
      icon: MessageSquare,
      title: "3. Clear Communication",
      description: "Patient receives easy-to-understand summaries of their visit and clear next steps."
    },
    {
      icon: Smile,
      title: "4. Empowered Health",
      description: "Continuous access to personal health records and symptom tracking for long-term wellness."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
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
            <div className="flex items-center gap-4">
              <Link to="/doctor" className="text-sm font-medium text-slate-600 hover:text-brand-600">Doctor Portal</Link>
              <Link to="/patient" className="text-sm font-medium text-slate-600 hover:text-brand-600">Patient Portal</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Customer Journey Map</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Visualizing the seamless interaction between clinicians and patients powered by Dr Kai's clinical intelligence.
            </p>
          </div>

          {/* Doctor Journey */}
          <section className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <div className="bg-brand-900 p-3 rounded-2xl">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">The Clinician's Path</h2>
                <p className="text-slate-500">Optimizing workflow from preparation to documentation.</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-4 gap-6 relative">
              {doctorSteps.map((step, idx) => (
                <JourneyStep 
                  key={idx} 
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  delay={0.1 * idx} 
                />
              ))}
            </div>
          </section>

          {/* Patient Journey */}
          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="bg-brand-100 p-3 rounded-2xl">
                <User className="w-8 h-8 text-brand-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">The Patient's Path</h2>
                <p className="text-slate-500">Empowering health management with clarity and security.</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-4 gap-6">
              {patientSteps.map((step, idx) => (
                <JourneyStep 
                  key={idx} 
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  delay={0.1 * idx + 0.4} 
                />
              ))}
            </div>
          </section>

          {/* Summary/Outcome */}
          <section className="mt-32 bg-brand-600 rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <path d="M0 400 L400 0" stroke="currentColor" strokeWidth="1" fill="none" />
                <path d="M0 300 L300 0" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Ultimate Outcome</h2>
              <p className="text-brand-100 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                A collaborative healthcare ecosystem where data flows securely, 
                decisions are informed by intelligence, and the human connection remains at the center of care.
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-brand-300" />
                  <span className="font-bold">40% Less Admin</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-brand-300" />
                  <span className="font-bold">100% Data Sovereignty</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-brand-300" />
                  <span className="font-bold">Better Patient Outcomes</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400 text-sm">© 2026 Dr Kai. Built for EU Healthcare.</p>
        </div>
      </footer>
    </div>
  );
}
