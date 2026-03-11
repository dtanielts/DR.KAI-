/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import LandingPage from './pages/LandingPage';
import DoctorPage from './pages/DoctorPage';
import PatientPage from './pages/PatientPage';
import JourneyMapPage from './pages/JourneyMapPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/doctor" element={<DoctorPage />} />
        <Route path="/patient" element={<PatientPage />} />
        <Route path="/journey" element={<JourneyMapPage />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

