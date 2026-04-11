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
  Stethoscope
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { GoogleGenAI } from "@google/genai";

// Initialize Gemini API lazily
let aiInstance: GoogleGenAI | null = null;

const getAI = () => {
  if (!aiInstance) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not set in environment variables.");
    }
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
};

export default function DemoPage() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSummarize = async () => {
    if (!input.trim()) return;
    
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const ai = getAI();
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `You are Dr. Kai, an AI healthcare coordinator. 
        Your task is to take a patient's description of their symptoms or a medical note and provide a structured, professional summary that a patient can share with their doctor.
        
        Format the output as follows:
        1. **Summary of Concerns**: A brief overview of what the patient is experiencing.
        2. **Key Symptoms**: A bulleted list of the main symptoms mentioned.
        3. **Timeline**: When the symptoms started and how they have progressed.
        4. **Suggested Questions for Doctor**: 3-4 specific questions the patient should ask their clinician based on this information.
        
        IMPORTANT: Include a clear medical disclaimer at the end stating that this is an AI-generated summary for coordination purposes only and does not constitute medical advice or diagnosis.
        
        Patient Input: ${input}`,
      });

      if (response.text) {
        setResult(response.text);
      } else {
        throw new Error("No response from AI");
      }
    } catch (err) {
      console.error("AI Error:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
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
                <span className="text-xl font-bold font-display text-brand-900">Dr.Kai</span>
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 text-sm font-bold uppercase tracking-widest mb-6 border border-brand-100"
            >
              <Sparkles className="w-4 h-4" /> Interactive MVP
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Experience Dr.Kai AI
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Test our intelligent triage and summarization engine. 
              Describe your symptoms or paste a medical note to see how Dr.Kai structures clinical information.
            </p>
          </div>

          <div className="grid gap-8">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-brand-100 rounded-xl">
                  <MessageSquare className="w-5 h-5 text-brand-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">Patient Input</h2>
              </div>
              
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g. I've been having a sharp pain in my lower back for 3 days. It gets worse when I sit down. I also feel a bit of numbness in my left leg..."
                className="w-full h-48 p-6 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all text-lg resize-none mb-6"
              />

              <button
                onClick={handleSummarize}
                disabled={isLoading || !input.trim()}
                className={`w-full py-4 bg-brand-600 text-white rounded-2xl font-bold text-lg transition-all shadow-lg shadow-brand-200 flex items-center justify-center gap-3 group ${isLoading || !input.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-brand-700'}`}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Analyzing with Dr.Kai...
                  </>
                ) : (
                  <>
                    Generate Clinical Summary <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </motion.div>

            {/* Result Section */}
            <AnimatePresence>
              {(result || error) && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={`p-6 md:p-8 rounded-[2.5rem] border ${error ? 'bg-red-50 border-red-100' : 'bg-white border-brand-100 shadow-2xl shadow-brand-500/10'}`}
                >
                  {error ? (
                    <div className="flex items-center gap-3 text-red-700">
                      <AlertCircle className="w-6 h-6" />
                      <p className="font-medium">{error}</p>
                    </div>
                  ) : (
                    <div className="prose prose-slate max-w-none">
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-brand-600 rounded-xl">
                            <Stethoscope className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 m-0">Dr.Kai Clinical Summary</h3>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
                          AI Generated
                        </span>
                      </div>
                      
                      <div className="whitespace-pre-wrap text-slate-700 leading-relaxed">
                        {result}
                      </div>

                      <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-slate-100 rounded-lg">
                            <ShieldCheck className="w-5 h-5 text-slate-500" />
                          </div>
                          <p className="text-sm text-slate-500 max-w-xs">
                            This summary is encrypted and processed according to EU healthcare standards.
                          </p>
                        </div>
                        <Link 
                          to="/#signup" 
                          className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-all"
                        >
                          Join Beta for Full Access
                        </Link>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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
