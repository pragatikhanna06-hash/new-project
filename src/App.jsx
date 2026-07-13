import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import ServicesPage from "./ServicesPage";
import ReportCrimePage from "./pages/ReportCrimePage";
import BookLawyerPage from "./pages/BookLawyerPage";
import BookLawyerDay1Page from "./pages/BookLawyerDay1Page";
import BookLawyerInBetweenPage from "./pages/BookLawyerInBetweenPage";
import CaseStatusPage from "./pages/CaseStatusPage";
import NyayShieldPage from "./pages/NyayShieldPage";
import ForensicExpertPage from "./pages/ForensicExpertPage";
import NearByPoliceStationPage from "./pages/NearByPoliceStationPage";
import LegalDraftingPage from "./pages/LegalDraftingPage";

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
        <Route path="/nyay-shield" element={<NyayShieldPage />} />
        <Route path="/report-crime" element={<ReportCrimePage />} />
        <Route path="/book-lawyer" element={<BookLawyerPage />} />
        <Route path="/book-lawyer/day-1" element={<BookLawyerDay1Page />} />
        <Route path="/book-lawyer/in-between" element={<BookLawyerInBetweenPage />} />
        <Route path="/case-status" element={<CaseStatusPage />} />
        <Route path="/forensic-expert" element={<ForensicExpertPage />} />
        <Route path="/nearby-police-station" element={<NearByPoliceStationPage />} />
        <Route path="/legal-drafting" element={<LegalDraftingPage />} />
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
