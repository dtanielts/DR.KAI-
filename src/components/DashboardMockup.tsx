import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Activity, Pill, CheckCircle2, ChevronRight } from 'lucide-react';

interface DashboardMockupProps {
  type: 'patient' | 'doctor';
}

export default function DashboardMockup({ type }: DashboardMockupProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Main Window */}
      <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden">
        {/* Window Header */}
        <div className="bg-slate-50/50 px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-slate-200"></div>
            <div className="w-3 h-3 rounded-full bg-slate-200"></div>
            <div className="w-3 h-3 rounded-full bg-slate-200"></div>
          </div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            {type === 'patient' ? 'Dr. KAI Patient Dashboard' : 'Dr. KAI Clinician Dashboard'}
          </div>
          <div className="w-8 h-8 rounded-full bg-brand-100"></div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900">
              {type === 'patient' ? 'Upcoming Appointment' : 'Next Patient'}
            </h3>
            <span className="px-3 py-1 bg-brand-50 text-brand-600 text-xs font-bold rounded-full">
              In 2 days
            </span>
          </div>

          {/* Appointment Card */}
          <div className="bg-brand-50/30 rounded-2xl p-6 border border-brand-100/50 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-white p-3 rounded-xl shadow-sm border border-brand-100">
                <Calendar className="w-6 h-6 text-brand-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">
                  {type === 'patient' ? 'Cardiology Review' : 'John Anderson • Review'}
                </h4>
                <p className="text-slate-500 text-sm">
                  {type === 'patient' ? 'Dr. Sarah Jenkins • 10:30 AM' : 'Cardiology Dept • 10:30 AM'}
                </p>
              </div>
            </div>
            
            <div className="w-full h-2 bg-brand-100 rounded-full mb-6 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '65%' }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-brand-500 rounded-full"
              />
            </div>

            <button className="w-full py-3 bg-brand-600 text-white rounded-xl font-bold text-sm hover:bg-brand-700 transition-all shadow-lg shadow-brand-200 flex items-center justify-center gap-2">
              {type === 'patient' ? 'Complete Visit Prep' : 'Review Patient Summary'}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-emerald-50 rounded-lg">
                  <Activity className="w-5 h-5 text-emerald-500" />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {type === 'patient' ? 'Avg. Heart Rate' : 'Clinic Efficiency'}
                </span>
              </div>
              <div className="text-2xl font-bold text-slate-900">
                {type === 'patient' ? '72 BPM' : '94%'}
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-orange-50 rounded-lg">
                  <Pill className="w-5 h-5 text-orange-500" />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {type === 'patient' ? 'Meds Adherence' : 'Triage Accuracy'}
                </span>
              </div>
              <div className="text-2xl font-bold text-slate-900">
                {type === 'patient' ? '98%' : '99.2%'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Notification */}
      <motion.div 
        initial={{ opacity: 0, x: 20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute -bottom-6 -right-6 md:-right-12 bg-white p-5 rounded-2xl shadow-2xl border border-slate-100 max-w-xs flex items-start gap-4 z-20"
      >
        <div className="bg-emerald-100 p-2 rounded-full flex-shrink-0">
          <CheckCircle2 className="w-6 h-6 text-emerald-600" />
        </div>
        <div>
          <h5 className="font-bold text-slate-900 text-sm mb-1">
            {type === 'patient' ? 'Lab Results Analyzed' : 'New Summary Ready'}
          </h5>
          <p className="text-slate-500 text-xs leading-relaxed">
            {type === 'patient' 
              ? '"Your cholesterol levels are improving. Keep it up!"'
              : 'Patient Anderson\'s cardiology summary has been synthesized.'}
          </p>
        </div>
      </motion.div>

      {/* Background blobs for depth */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-brand-200 rounded-full blur-3xl -z-10 opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand-100 rounded-full blur-3xl -z-10 opacity-30 animate-pulse delay-1000"></div>
    </div>
  );
}
