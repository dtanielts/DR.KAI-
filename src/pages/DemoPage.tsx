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

interface Sickness {
  name: string;
  description: string;
  summary: ClinicalSummary;
  standardProcess: ProcessStep[];
  drKaiProcess: ProcessStep[];
  standardTime: string;
  drKaiTime: string;
}

const BODY_DATA: Record<BodyPart, Sickness[]> = {
  'Head & Brain': [
    {
      name: "Chronic Migraine",
      description: "I'm experiencing intense throbbing pain on the left side of my head. It started this morning and is accompanied by sensitivity to light and sound. I've had similar episodes twice a month for the last year. Usually, they last about 24 hours.",
      summary: {
        summary: "Patient presents with an acute migraine episode characterized by unilateral throbbing pain and sensory hypersensitivity.",
        symptoms: ["Unilateral throbbing pain (left side)", "Photophobia (light sensitivity)", "Phonophobia (sound sensitivity)", "24-hour duration"],
        timeline: "Chronic pattern established over 12 months with a frequency of 2 episodes per month.",
        questions: [
          "Should we consider preventative medication given the frequency of episodes?",
          "Are my current symptoms typical of migraine with or without aura?",
          "Could there be specific hormonal or dietary triggers for these recurring pains?",
          "What acute treatment options are most effective for 24-hour episodes?"
        ],
        disclaimer: "This is a pre-configured clinical summary for demonstration purposes only. Dr.Kai AI provides real-time analysis in the full application."
      },
      standardProcess: [
        { text: "Call Healthcare Advice (1177)", time: "15-30 min" },
        { text: "Wait for callback", time: "2-4 hours" },
        { text: "Book Health Center appointment", time: "10 min" },
        { text: "Wait for appointment", time: "3-7 days" },
        { text: "GP Consultation", time: "20 min" },
        { text: "Referral to Neurologist", time: "5 min" },
        { text: "Wait for Specialist", time: "3 months" }
      ],
      drKaiProcess: [
        { text: "Dr. Kai AI Assessment", time: "5 min" },
        { text: "Instant Structured Clinical Model", time: "Instant" },
        { text: "Direct Specialist Triage", time: "24 hours" },
        { text: "Specialist Consultation", time: "1-2 weeks" }
      ],
      standardTime: "3+ Months",
      drKaiTime: "1-2 Weeks"
    },
    {
      name: "Acute Sinusitis",
      description: "I've had a painful pressure behind my eyes and forehead for 4 days. My nose is completely blocked and I've lost my sense of smell. I feel a bit of a fever coming on and my teeth even hurt when I chew.",
      summary: {
        summary: "Patient reports acute rhinosinusitis symptoms with significant facial pressure and nasal obstruction.",
        symptoms: ["Facial pressure (eyes/forehead)", "Nasal obstruction", "Anosmia (loss of smell)", "Dental pain", "Suspected fever"],
        timeline: "Symptoms have progressed over 4 days, now affecting daily activities like eating.",
        questions: [
          "Is this likely viral or bacterial sinusitis?",
          "Do I need antibiotics or can this be managed with saline and steroids?",
          "How can I safely manage the facial pressure at home?",
          "What symptoms should trigger an immediate follow-up visit?"
        ],
        disclaimer: "This is a pre-configured clinical summary for demonstration purposes only. Dr.Kai AI provides real-time analysis in the full application."
      },
      standardProcess: [
        { text: "Check healthcare website", time: "10 min" },
        { text: "Call Health Center", time: "15 min" },
        { text: "Wait for phone queue", time: "45 min" },
        { text: "Book physical visit", time: "5 min" },
        { text: "Wait for visit", time: "2 days" },
        { text: "GP Visit & Prescription", time: "30 min" }
      ],
      drKaiProcess: [
        { text: "Dr. Kai Symptom Log", time: "3 min" },
        { text: "Instant Clinician Review", time: "1 hour" },
        { text: "Digital Prescription", time: "15 min" },
        { text: "Pharmacy Pickup", time: "30 min" }
      ],
      standardTime: "3-4 Days",
      drKaiTime: "2-4 Hours"
    }
  ],
  'Chest & Heart': [
    {
      name: "Persistent Chest Cough",
      description: "I've had a dry, hacking cough for about 2 weeks now. It's worse at night and when I'm lying down. I feel a bit of tightness in my chest, but no sharp pain. I haven't had a fever, but I've been feeling more tired than usual lately.",
      summary: {
        summary: "Patient reports a subacute non-productive cough with nocturnal worsening and associated chest tightness and fatigue.",
        symptoms: ["Dry, hacking cough", "Nocturnal worsening", "Chest tightness", "General fatigue"],
        timeline: "Symptoms have persisted for 14 days without fever, indicating a potential post-viral or respiratory sensitivity issue.",
        questions: [
          "Could this cough be related to asthma or seasonal allergies?",
          "Does the chest tightness require a lung function test?",
          "Is the fatigue a typical secondary symptom or does it require blood work?",
          "Are there specific environmental triggers I should avoid at night?"
        ],
        disclaimer: "This is a pre-configured clinical summary for demonstration purposes only. Dr.Kai AI provides real-time analysis in the full application."
      },
      standardProcess: [
        { text: "Healthcare Advice Triage", time: "20 min" },
        { text: "Health Center Booking", time: "10 min" },
        { text: "Wait for appointment", time: "4 days" },
        { text: "GP Physical Exam", time: "25 min" },
        { text: "Lab Tests Referral", time: "5 min" },
        { text: "Wait for Results", time: "2 days" }
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
      name: "Abdominal Discomfort / IBS",
      description: "I've been feeling bloated and having intermittent cramping in my lower abdomen for the past week. It seems to happen shortly after eating. My bowel movements have been irregular. No fever or vomiting, but it's quite uncomfortable.",
      summary: {
        summary: "Patient reports acute abdominal discomfort including bloating and postprandial cramping with altered bowel habits.",
        symptoms: ["Abdominal bloating", "Lower abdominal cramping", "Postprandial discomfort", "Irregular bowel movements"],
        timeline: "Symptoms emerged 7 days ago and appear to be triggered by food intake.",
        questions: [
          "Do these symptoms suggest Irritable Bowel Syndrome (IBS) or a food intolerance?",
          "Should I keep a detailed food diary for the next two weeks?",
          "Are there specific diagnostic tests needed to rule out inflammatory issues?",
          "What immediate dietary modifications might help alleviate the bloating?"
        ],
        disclaimer: "This is a pre-configured clinical summary for demonstration purposes only. Dr.Kai AI provides real-time analysis in the full application."
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
      summary: {
        summary: "Patient presents with acute-onset sharp lower back pain and neurological symptoms in the left lower extremity.",
        symptoms: ["Sharp lower back pain", "Numbness in left calf", "Pain exacerbated by sitting", "Pain exacerbated by lifting"],
        timeline: "Symptoms appeared 3 days ago and have remained persistent, likely related to prolonged sedentary posture at work.",
        questions: [
          "Is this pain likely related to a disc issue or muscular strain?",
          "Should I undergo an MRI or X-ray to rule out nerve compression?",
          "Are there specific ergonomic adjustments I should make to my workspace?",
          "What is the recommended balance between rest and mobility for this type of pain?"
        ],
        disclaimer: "This is a pre-configured clinical summary for demonstration purposes only. Dr.Kai AI provides real-time analysis in the full application."
      },
      standardProcess: [
        { text: "Healthcare Advice", time: "15 min" },
        { text: "Wait for GP Visit", time: "5 days" },
        { text: "Physiotherapy Referral", time: "5 min" },
        { text: "Wait for Physiotherapist", time: "2 weeks" },
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
      name: "Knee Sprain",
      description: "I twisted my knee while jogging yesterday. It's swollen and I can't put full weight on it. There's a dull ache that turns sharp when I try to bend it past 90 degrees.",
      summary: {
        summary: "Patient presents with acute knee trauma following a twisting injury with associated edema and weight-bearing limitations.",
        symptoms: ["Knee swelling (edema)", "Inability to bear full weight", "Dull ache", "Sharp pain on flexion > 90°"],
        timeline: "Injury occurred < 24 hours ago during physical activity.",
        questions: [
          "Is there a high suspicion of a ligamentous tear (ACL/MCL)?",
          "Should I follow the RICE protocol strictly for the next 48 hours?",
          "Is an immediate X-ray or MRI necessary to assess structural damage?",
          "What are the signs of vascular or nerve compromise I should watch for?"
        ],
        disclaimer: "This is a pre-configured clinical summary for demonstration purposes only. Dr.Kai AI provides real-time analysis in the full application."
      },
      standardProcess: [
        { text: "Healthcare Advice Call", time: "15 min" },
        { text: "Health Center Visit", time: "30 min" },
        { text: "X-ray Referral", time: "5 min" },
        { text: "Wait for X-ray", time: "1 week" },
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

interface ClinicalSummary {
  summary: string;
  symptoms: string[];
  timeline: string;
  questions: string[];
  disclaimer: string;
}

export default function DemoPage() {
  const [selectedBodyPart, setSelectedBodyPart] = useState<BodyPart | ''>('');
  const [selectedSickness, setSelectedSickness] = useState<Sickness | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectSickness = (sickness: Sickness) => {
    setIsLoading(true);
    setSelectedSickness(null);
    
    // Simulate analysis time
    setTimeout(() => {
      setSelectedSickness(sickness);
      setIsLoading(false);
    }, 800);
  };

  const bodyParts = Object.keys(BODY_DATA) as BodyPart[];

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
              <Sparkles className="w-4 h-4" /> Interactive MVP
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Experience the Dr.Kai Difference
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Select a body region and a patient scenario to see how Dr.Kai simultaneously generates a clinical summary and optimizes the entire care journey.
            </p>
          </div>

          {/* Selection Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Body Part Selection */}
                <div>
                  <label htmlFor="body-part-select" className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                    1. Select Body Region
                  </label>
                  <div className="relative">
                    <select
                      id="body-part-select"
                      className="w-full p-5 bg-slate-50 border border-slate-200 rounded-2xl appearance-none focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all text-lg font-bold text-slate-700 cursor-pointer"
                      value={selectedBodyPart}
                      onChange={(e) => {
                        setSelectedBodyPart(e.target.value as BodyPart);
                        setSelectedSickness(null);
                      }}
                    >
                      <option value="" disabled>Choose region...</option>
                      {bodyParts.map((part) => (
                        <option key={part} value={part}>{part}</option>
                      ))}
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ChevronRight className="w-6 h-6 text-slate-400 rotate-90" />
                    </div>
                  </div>
                </div>

                {/* Sickness Selection */}
                <div>
                  <label htmlFor="sickness-select" className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                    2. Select Scenario
                  </label>
                  <div className="relative">
                    <select
                      id="sickness-select"
                      disabled={!selectedBodyPart}
                      className={`w-full p-5 bg-slate-50 border border-slate-200 rounded-2xl appearance-none focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all text-lg font-bold text-slate-700 cursor-pointer ${!selectedBodyPart ? 'opacity-50 cursor-not-allowed' : ''}`}
                      onChange={(e) => {
                        if (selectedBodyPart) {
                          const selected = BODY_DATA[selectedBodyPart].find(s => s.name === e.target.value);
                          if (selected) handleSelectSickness(selected);
                        }
                      }}
                      value={selectedSickness?.name || ""}
                    >
                      <option value="" disabled>Choose scenario...</option>
                      {selectedBodyPart && BODY_DATA[selectedBodyPart].map((sickness) => (
                        <option key={sickness.name} value={sickness.name}>
                          {sickness.name}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ChevronRight className="w-6 h-6 text-slate-400 rotate-90" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Loading State */}
          <AnimatePresence>
            {isLoading && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-20"
              >
                <Loader2 className="w-12 h-12 text-brand-600 animate-spin mb-4" />
                <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Dr.Kai is analyzing the case...</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Integrated Result View */}
          <AnimatePresence mode="wait">
            {selectedSickness && !isLoading && (
              <motion.div
                key={selectedSickness.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid lg:grid-cols-12 gap-8"
              >
                {/* Left Column: Clinical Summary */}
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
                      {/* Summary Card */}
                      <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                        <h4 className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-3">Assessment</h4>
                        <p className="text-slate-700 leading-relaxed text-sm m-0">{selectedSickness.summary.summary}</p>
                      </div>

                      {/* Symptoms & Timeline */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                          <h4 className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-4">Key Symptoms</h4>
                          <div className="space-y-2">
                            {selectedSickness.summary.symptoms.map((symptom, i) => (
                              <div key={i} className="flex items-center gap-2 text-slate-700">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                                <span className="text-xs font-medium">{symptom}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                          <h4 className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-3">Timeline</h4>
                          <p className="text-xs text-slate-700 leading-relaxed m-0">{selectedSickness.summary.timeline}</p>
                        </div>
                      </div>

                      {/* Questions Card */}
                      <div className="bg-brand-50 p-6 rounded-3xl border border-brand-100">
                        <h4 className="text-xs font-bold text-brand-700 uppercase tracking-widest mb-4">Questions for Clinician</h4>
                        <div className="space-y-3">
                          {selectedSickness.summary.questions.map((q, i) => (
                            <div key={i} className="flex items-start gap-3 bg-white p-3 rounded-xl border border-brand-100 shadow-sm">
                              <div className="w-5 h-5 rounded-full bg-brand-100 text-brand-700 text-[10px] flex items-center justify-center shrink-0 font-bold">{i + 1}</div>
                              <span className="text-xs text-slate-700 font-medium leading-tight">{q}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-[9px] text-slate-400 italic m-0 leading-relaxed">
                        {selectedSickness.summary.disclaimer}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Process Comparison */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6 h-full">
                    {/* Standard Process */}
                    <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden flex flex-col">
                      <div className="absolute top-0 right-0 p-6 opacity-5">
                        <Clock className="w-32 h-32 text-slate-900" />
                      </div>
                      <div className="flex items-center gap-3 mb-8">
                        <div className="p-2.5 bg-slate-100 rounded-xl">
                          <Clock className="w-6 h-6 text-slate-500" />
                        </div>
                        <h4 className="font-bold text-slate-900 uppercase tracking-wider text-sm">Standard Journey</h4>
                      </div>
                      <div className="space-y-5 mb-10 flex-grow">
                        {selectedSickness.standardProcess.map((step, i) => (
                          <div key={i} className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-400 text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">{i + 1}</div>
                            <div className="flex flex-col">
                              <span className="text-sm text-slate-700 leading-snug font-medium">{step.text}</span>
                              {step.time && <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">{step.time}</span>}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="pt-6 border-t border-slate-50">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Estimated Time</div>
                        <div className="text-2xl font-bold text-slate-400">{selectedSickness.standardTime}</div>
                      </div>
                    </div>

                    {/* Dr. Kai Process */}
                    <div className="bg-brand-600 p-8 rounded-[3rem] text-white shadow-2xl shadow-brand-500/20 relative overflow-hidden flex flex-col">
                      <div className="absolute top-0 right-0 p-6 opacity-10">
                        <Zap className="w-32 h-32 text-white" />
                      </div>
                      <div className="flex items-center gap-3 mb-8">
                        <div className="p-2.5 bg-white/20 rounded-xl backdrop-blur-sm">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-bold text-white uppercase tracking-wider text-sm">Dr.Kai Journey</h4>
                      </div>
                      <div className="space-y-5 mb-10 flex-grow">
                        {selectedSickness.drKaiProcess.map((step, i) => (
                          <div key={i} className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-white/20 text-white text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">{i + 1}</div>
                            <div className="flex flex-col">
                              <span className="text-sm text-white leading-snug font-bold">{step.text}</span>
                              {step.time && <span className="text-[10px] text-brand-200 font-bold uppercase tracking-wider mt-1">{step.time}</span>}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="pt-6 border-t border-white/10">
                        <div className="text-[10px] font-bold text-brand-200 uppercase tracking-widest mb-1">Total Estimated Time</div>
                        <div className="text-2xl font-bold text-white flex items-center gap-3">
                          {selectedSickness.drKaiTime}
                          <span className="text-[10px] bg-white/20 px-3 py-1 rounded-full font-bold uppercase tracking-widest">85% Faster</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {!selectedSickness && !isLoading && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center p-20 bg-white rounded-[4rem] border border-dashed border-slate-200 shadow-sm"
              >
                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Activity className="w-12 h-12 text-slate-300" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Select a Case Study</h3>
                <p className="text-slate-500 text-lg max-w-md mx-auto">Choose a body region and scenario above to see how Dr.Kai optimizes the clinical experience.</p>
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
              <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
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
