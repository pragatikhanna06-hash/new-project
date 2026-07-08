import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import ServicesPage from "./ServicesPage";
import ReportCrimePage from "./pages/ReportCrimePage";

import DataSecurityPage from "./pages/services/DataSecurityPage";
import ForensicAuditPage from "./pages/services/ForensicAuditPage";
import DigitalForensicsPage from "./pages/services/DigitalForensicsPage";
import FraudInvestigationPage from "./pages/services/FraudInvestigationPage";
import InvestigationsPage from "./pages/services/InvestigationsPage";
import LegalConsultationPage from "./pages/services/LegalConsultationPage";
import DocumentExaminationPage from "./pages/services/DocumentExaminationPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/report-crime" element={<ReportCrimePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/data-security" element={<DataSecurityPage />} />
        <Route path="/services/forensic-audit" element={<ForensicAuditPage />} />
        <Route path="/services/digital-forensics" element={<DigitalForensicsPage />} />
        <Route path="/services/fraud-investigation" element={<FraudInvestigationPage />} />
        <Route path="/services/investigations" element={<InvestigationsPage />} />
        <Route path="/services/legal-consultation" element={<LegalConsultationPage />} />
        <Route path="/services/document-examination" element={<DocumentExaminationPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}