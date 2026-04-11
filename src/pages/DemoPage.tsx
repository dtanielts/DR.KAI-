import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ClipboardList, 
  Activity, 
  ShieldCheck,
  MessageSquare,
  AlertCircle,
  Loader2,
  Stethoscope,
  Clock,
  Zap,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

type BodyPart = 'Head & Brain' | 'Chest & Heart' | 'Abdomen & Digestive' | 'Back & Spine' | 'Limbs & Joints';

interface ProcessStep {
  text: string;
  time?: string;
}

interface ClinicalSummary {
  summary: string;
  symptoms: string[];
  timeline: string;
  questions: string[];
  disclaimer: string;
}

interface UnifiedCondition {
  name: string;
  description: string;
  clinicalSummary: ClinicalSummary;
  standardProcess: ProcessStep[];
  drKaiProcess: ProcessStep[];
  standardTime: string;
  drKaiTime: string;
}

const UNIFIED_DEMO_DATA: Record<BodyPart, UnifiedCondition[]> = {
  'Head & Brain': [
    {
      name: "Chronic Migraines",
      description: "I'm experiencing intense throbbing pain on the left side of my head. It started this morning and is accompanied by sensitivity to light and sound. I've had similar episodes twice a month for the last year. Usually, they last about 24 hours.",
      clinicalSummary: {
        summary: "Patient presents with an acute migraine episode characterized by unilateral throbbing pain and sensory hypersensitivity.",
        symptoms: ["Unilateral throbbing pain (left side)", "Photophobia (light sensitivity)", "Phonophobia (sound sensitivity)", "24-hour duration"],
        timeline: "Chronic pattern established over 12 months with a frequency of 2 episodes per month.",
        questions: [
          "Should we consider preventative medication?",
          "Are my symptoms typical of migraine with aura?",
          "Could there be specific hormonal triggers?",
          "What acute treatment options are most effective?"
        ],
        disclaimer: "Demo summary for coordination purposes only."
      },
      standardProcess: [
        { text: "Call Healthcare Advice (1177)", time: "30 min" },
        { text: "Wait for callback", time: "4 hours" },
        { text: "Book Health Center visit", time: "10 min" },
        { text: "Wait for appointment", time: "5 days" },
        { text: "GP Consultation", time: "20 min" },
        { text: "Neurologist Referral", time: "3 months" }
      ],
      drKaiProcess: [
        { text: "Dr. Kai AI Assessment", time: "5 min" },
        { text: "Instant Clinical Model", time: "Instant" },
        { text: "Direct Specialist Triage", time: "24 hours" },
        { text: "Specialist Consultation", time: "1 week" }
      ],
      standardTime: "3+ Months",
      drKaiTime: "1 Week"
    }
  ],
  'Chest & Heart': [
    {
      name: "Persistent Chest Cough",
      description: "I've had a dry, hacking cough for about 2 weeks now. It's worse at night and when I'm lying down. I feel a bit of tightness in my chest, but no sharp pain. I haven't had a fever, but I've been feeling more tired than usual lately.",
      clinicalSummary: {
        summary: "Patient reports a subacute non-productive cough with nocturnal worsening and associated chest tightness and fatigue.",
        symptoms: ["Dry, hacking cough", "Nocturnal worsening", "Chest tightness", "General fatigue"],
        timeline: "Symptoms have persisted for 14 days without fever.",
        questions: [
          "Could this be related to asthma or allergies?",
          "Does the tightness require a lung function test?",
          "Is the fatigue a typical secondary symptom?",
          "Are there specific environmental triggers?"
        ],
        disclaimer: "Demo summary for coordination purposes only."
      },
      standardProcess: [
        { text: "Healthcare Advice Triage", time: "20 min" },
        { text: "Health Center Booking", time: "10 min" },
        { text: "Wait for appointment", time: "4 days" },
        { text: "GP Physical Exam", time: "25 min" },
        { text: "Lab Tests Referral", time: "2 days" }
      ],
      drKaiProcess: [
        { text: "Dr. Kai Respiratory Log", time: "5 min" },
        { text: "AI-Assisted Triage", time: "30 min" },
        { text: "Immediate Lab Order", time: "1 hour" },
        { text: "Results & Plan", time: "Same Day" }
      ],
      standardTime: "1 Week",
      drKaiTime: "24 Hours"
    }
  ],
  'Abdomen & Digestive': [
    {
      name: "Abdominal Discomfort",
      description: "I've been feeling bloated and having intermittent cramping in my lower abdomen for the past week. It seems to happen shortly after eating. My bowel movements have been irregular. No fever or vomiting, but it's quite uncomfortable.",
      clinicalSummary: {
        summary: "Patient reports acute abdominal discomfort including bloating and postprandial cramping with altered bowel habits.",
        symptoms: ["Abdominal bloating", "Lower abdominal cramping", "Postprandial discomfort", "Irregular bowel movements"],
        timeline: "Symptoms emerged 7 days ago and appear to be triggered by food intake.",
        questions: [
          "Do these symptoms suggest IBS or intolerance?",
          "Should I keep a detailed food diary?",
          "Are there specific diagnostic tests needed?",
          "What dietary modifications might help?"
        ],
        disclaimer: "Demo summary for coordination purposes only."
      },
      standardProcess: [
        { text: "Healthcare Advice Call", time: "15 min" },
        { text: "Health Center Visit", time: "30 min" },
        { text: "Dietary Referral", time: "5 min" },
        { text: "Wait for Dietician", time: "4 weeks" }
      ],
      drKaiProcess: [
        { text: "Dr. Kai Nutrition Log", time: "10 min" },
        { text: "Instant Structured Data", time: "Instant" },
        { text: "Direct Dietician Triage", time: "24 hours" },
        { text: "Digital Consultation", time: "3 days" }
      ],
      standardTime: "5 Weeks",
      drKaiTime: "3 Days"
    }
  ],
  'Back & Spine': [
    {
      name: "Severe Lower Back Pain",
      description: "I've been having a sharp pain in my lower back for 3 days. It gets worse when I sit down or try to lift anything. I also feel a bit of numbness in my left leg, specifically around the calf area. I haven't had any recent injuries, but I do sit at a desk for 8 hours a day.",
      clinicalSummary: {
        summary: "Patient presents with acute-onset sharp lower back pain and neurological symptoms in the left lower extremity.",
        symptoms: ["Sharp lower back pain", "Numbness in left calf", "Pain exacerbated by sitting", "Pain exacerbated by lifting"],
        timeline: "Symptoms appeared 3 days ago, likely related to prolonged sedentary posture.",
        questions: [
          "Is this likely a disc issue or muscular strain?",
          "Should I undergo an MRI or X-ray?",
          "Are there ergonomic adjustments I should make?",
          "What is the recommended balance of rest/mobility?"
        ],
        disclaimer: "Demo summary for coordination purposes only."
      },
      standardProcess: [
        { text: "Healthcare Advice", time: "15 min" },
        { text: "Wait for GP Visit", time: "5 days" },
        { text: "Physiotherapy Referral", time: "2 weeks" },
        { text: "Assessment", time: "45 min" }
      ],
      drKaiProcess: [
        { text: "Dr. Kai Mobility Assessment", time: "8 min" },
        { text: "Instant Structured Model", time: "Instant" },
        { text: "Direct Physio Triage", time: "24 hours" },
        { text: "Immediate Exercise Plan", time: "Same Day" }
      ],
      standardTime: "3 Weeks",
      drKaiTime: "2 Days"
    }
  ],
  'Limbs & Joints': [
    {
      name: "Acute Knee Sprain",
      description: "I twisted my knee while running yesterday. It's swollen and I'm having trouble putting weight on it. The pain is mostly on the inner side of the knee.",
      clinicalSummary: {
        summary: "Patient presents with acute knee trauma, localized edema, and impaired weight-bearing capacity following a running injury.",
        symptoms: ["Knee swelling (edema)", "Inability to bear weight", "Localized pain (medial)", "Acute trauma"],
        timeline: "Injury occurred 24 hours ago during physical activity.",
        questions: [
          "Is there a risk of ligament or meniscus tear?",
          "Should I keep the knee immobilized or start gentle movement?",
          "Is an immediate X-ray or MRI necessary?",
          "What is the expected recovery timeline for this severity?"
        ],
        disclaimer: "Demo summary for coordination purposes only."
      },
      standardProcess: [
        { text: "Healthcare Advice Call", time: "15 min" },
        { text: "Health Center Visit", time: "30 min" },
        { text: "X-ray Referral", time: "1 week" },
        { text: "Results Review", time: "20 min" }
      ],
      drKaiProcess: [
        { text: "Dr. Kai Visual Assessment", time: "5 min" },
        { text: "Instant X-ray Order", time: "30 min" },
        { text: "Priority Imaging", time: "4 hours" },
        { text: "Results & Plan", time: "Same Day" }
      ],
      standardTime: "10 Days",
      drKaiTime: "24 Hours"
    }
  ]
};

export default function DemoPage() {
  const [selectedBodyPart, setSelectedBodyPart] = useState<BodyPart | ''>('');
  const [selectedCondition, setSelectedCondition] = useState<UnifiedCondition | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleConditionChange = (conditionName: string) => {
    if (!selectedBodyPart) return;
    const condition = UNIFIED_DEMO_DATA[selectedBodyPart].find(c => c.name === conditionName);
    if (condition) {
      setSelectedCondition(condition);
      setShowResult(false);
    }
  };

  const startAnalysis = () => {
    if (!selectedCondition) return;
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResult(true);
    }, 1200);
  };

  const bodyParts = Object.keys(UNIFIED_DEMO_DATA) as BodyPart[];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
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
              <Link to="/" className="flex items-center gap-2 group">
                <div className="group-hover:scale-110 transition-transform overflow-hidden w-8 h-8 flex items-center justify-center">
                  <img 
                    src="https://ffd65ed0edd477d8da02be1e35d3ffc9.cdn.bubble.io/cdn-cgi/image/w=128,h=,f=auto,dpr=1,fit=contain/f1765378714072x376524185866888400/Screenshot%202025-09-29%20at%2018.16.37.png" 
                    alt="Dr.Kai Logo" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-xl font-bold font-display text-brand-900 tracking-tight">Dr.Kai</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link to="/patient" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Patients</Link>
              <Link to="/doctor" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Clinicians</Link>
              <Link to="/demo" className="text-sm font-bold text-brand-600">Try Demo</Link>
              <Link to="/#signup" className="bg-brand-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-brand-700 transition-all shadow-sm">Join Beta</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 text-sm font-bold uppercase tracking-widest mb-6 border border-brand-100"
            >
              <Sparkles className="w-4 h-4" /> Unified Patient Demo
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              The Dr.Kai Patient Journey
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Experience how Dr.Kai instantly structures clinical data and optimizes the care path.
              Select a region and condition to begin.
            </p>
          </div>

          {/* Unified Selection Section */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
                <div className="grid md:grid-cols-2 gap-6 items-end">
                  {/* Body Part Selection */}
                  <div>
                    <label htmlFor="body-part-select" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                      1. Select Body Region
                    </label>
                    <div className="relative">
                      <select
                        id="body-part-select"
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl appearance-none focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all text-base font-bold text-slate-700 cursor-pointer"
                        value={selectedBodyPart}
                        onChange={(e) => {
                          setSelectedBodyPart(e.target.value as BodyPart);
                          setSelectedCondition(null);
                          setShowResult(false);
                        }}
                      >
                        <option value="" disabled>Choose region...</option>
                        {bodyParts.map((part) => (
                          <option key={part} value={part}>{part}</option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ChevronRight className="w-5 h-5 text-slate-400 rotate-90" />
                      </div>
                    </div>
                  </div>

                  {/* Condition Selection */}
                  <div>
                    <label htmlFor="condition-select" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                      2. Select Condition
                    </label>
                    <div className="relative">
                      <select
                        id="condition-select"
                        disabled={!selectedBodyPart}
                        className={`w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl appearance-none focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all text-base font-bold text-slate-700 cursor-pointer ${!selectedBodyPart ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onChange={(e) => handleConditionChange(e.target.value)}
                        value={selectedCondition?.name || ""}
                      >
                        <option value="" disabled>Choose condition...</option>
                        {selectedBodyPart && UNIFIED_DEMO_DATA[selectedBodyPart].map((condition) => (
                          <option key={condition.name} value={condition.name}>
                            {condition.name}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ChevronRight className="w-5 h-5 text-slate-400 rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>

                {selectedCondition && !showResult && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 pt-8 border-t border-slate-100"
                  >
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6">
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Patient Scenario</h4>
                      <p className="text-slate-600 italic leading-relaxed text-sm">"{selectedCondition.description}"</p>
                    </div>
                    <button
                      onClick={startAnalysis}
                      disabled={isAnalyzing}
                      className="w-full py-4 bg-brand-600 text-white rounded-2xl font-bold text-lg transition-all shadow-lg shadow-brand-200 flex items-center justify-center gap-3 group hover:bg-brand-700"
                    >
                      {isAnalyzing ? (
                        <>
                          <Loader2 className="w-6 h-6 animate-spin" />
                          Dr.Kai Analyzing...
                        </>
                      ) : (
                        <>
                          Start Dr.Kai Assessment <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </section>

          {/* Unified Result View */}
          <AnimatePresence mode="wait">
            {showResult && selectedCondition && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid lg:grid-cols-12 gap-8"
              >
                {/* Left Side: Clinical Summary */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-brand-600 rounded-xl">
                          <Stethoscope className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 m-0">Clinical Summary</h3>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
                        AI Structured
                      </span>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                        <h4 className="text-[10px] font-bold text-brand-600 uppercase tracking-widest mb-2">Concerns</h4>
                        <p className="text-sm text-slate-700 leading-relaxed m-0">{selectedCondition.clinicalSummary.summary}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                          <h4 className="text-[10px] font-bold text-brand-600 uppercase tracking-widest mb-3">Symptoms</h4>
                          <div className="space-y-1.5">
                            {selectedCondition.clinicalSummary.symptoms.slice(0, 3).map((s, i) => (
                              <div key={i} className="flex items-center gap-2 text-slate-700">
                                <div className="w-1 h-1 rounded-full bg-brand-400 shrink-0" />
                                <span className="text-[11px] font-medium truncate">{s}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                          <h4 className="text-[10px] font-bold text-brand-600 uppercase tracking-widest mb-2">Timeline</h4>
                          <p className="text-[11px] text-slate-700 leading-relaxed m-0">{selectedCondition.clinicalSummary.timeline}</p>
                        </div>
                      </div>

                      <div className="bg-brand-50 p-5 rounded-2xl border border-brand-100">
                        <h4 className="text-[10px] font-bold text-brand-700 uppercase tracking-widest mb-3">Suggested Questions</h4>
                        <div className="space-y-2">
                          {selectedCondition.clinicalSummary.questions.slice(0, 3).map((q, i) => (
                            <div key={i} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-brand-100 shadow-sm">
                              <div className="w-4 h-4 rounded-full bg-brand-100 text-brand-700 text-[8px] flex items-center justify-center shrink-0 font-bold">{i + 1}</div>
                              <span className="text-[11px] text-slate-700 font-medium leading-tight">{q}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Process Comparison */}
                <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
                  {/* Standard Process */}
                  <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                      <Clock className="w-24 h-24 text-slate-900" />
                    </div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-slate-100 rounded-lg">
                        <Clock className="w-4 h-4 text-slate-500" />
                      </div>
                      <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[10px]">Standard Process</h4>
                    </div>
                    <div className="space-y-4 mb-8 flex-grow">
                      {selectedCondition.standardProcess.map((step, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 text-[10px] flex items-center justify-center shrink-0 mt-0.5 font-bold">{i + 1}</div>
                          <div className="flex flex-col">
                            <span className="text-xs text-slate-700 leading-tight font-medium">{step.text}</span>
                            {step.time && <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">{step.time}</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="pt-6 border-t border-slate-50 mt-auto">
                      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Time</div>
                      <div className="text-2xl font-bold text-slate-400">{selectedCondition.standardTime}</div>
                    </div>
                  </div>

                  {/* Dr. Kai Process */}
                  <div className="bg-brand-600 p-8 rounded-[3rem] text-white shadow-2xl shadow-brand-500/20 relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Zap className="w-24 h-24 text-white" />
                    </div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="font-bold text-white uppercase tracking-wider text-[10px]">Dr.Kai Process</h4>
                    </div>
                    <div className="space-y-4 mb-8 flex-grow">
                      {selectedCondition.drKaiProcess.map((step, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-white/20 text-white text-[10px] flex items-center justify-center shrink-0 mt-0.5 font-bold">{i + 1}</div>
                          <div className="flex flex-col">
                            <span className="text-xs text-white leading-tight font-bold">{step.text}</span>
                            {step.time && <span className="text-[9px] text-brand-200 font-bold uppercase tracking-wider mt-0.5">{step.time}</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="pt-6 border-t border-white/10 mt-auto">
                      <div className="text-[9px] font-bold text-brand-200 uppercase tracking-widest mb-1">Total Time</div>
                      <div className="text-2xl font-bold text-white flex items-center gap-2">
                        {selectedCondition.drKaiTime}
                        <span className="text-[8px] bg-white/20 px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">Optimized</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Demo Features */}
          <div className="mt-24 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <ClipboardList className="w-6 h-6" />,
                title: "Structured Triage",
                desc: "Dr.Kai automatically categorizes symptoms and severity for clinicians."
              },
              {
                icon: <Activity className="w-6 h-6" />,
                title: "Clinical Modeling",
                desc: "Data is converted into structured medical models, not just raw text."
              },
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "E2EE Secure",
                desc: "Every interaction is protected by medical-grade end-to-end encryption."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
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
            <div className="text-sm text-slate-400">
              © 2026 Dr.Kai. All rights reserved. Built for EU Healthcare.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
