import { BrowserRouter, Navigate, Routes, Route } from 'react-router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage'));
const StorePage = lazy(() => import('./pages/StorePage'));
const HealthEducationPage = lazy(() => import('./pages/HealthEducationPage'));
const PatientRegistrationPage = lazy(() => import('./pages/PatientRegistrationPage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const MedicalCentrePage = lazy(() => import('./pages/MedicalCentrePage'));
const MedicalSuppliesPage = lazy(() => import('./pages/MedicalSuppliesPage'));
const PharmacySuppliesPage = lazy(() => import('./pages/PharmacySuppliesPage'));
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'));
const UpcomingEventsPage = lazy(() => import('./pages/UpcomingEventsPage'));
const ArchivePage = lazy(() => import('./pages/ArchivePage'));
const TrainingCapacityBuildingPage = lazy(() => import('./pages/TrainingCapacityBuildingPage'));
const MACEConferencePage = lazy(() => import('./pages/MACEConferencePage'));
const NICUPage = lazy(() => import('./pages/NICUPage'));
const PICUPage = lazy(() => import('./pages/PICUPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const FlyersListPage = lazy(() => import('./pages/FlyersListPage'));
const FlyerPage = lazy(() => import('./pages/FlyerPage'));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/medical-centre" element={<MedicalCentrePage />} />
              <Route path="/services/medical-centre/nicu" element={<NICUPage />} />
              <Route path="/services/medical-centre/picu" element={<PICUPage />} />
              <Route path="/services/medical-supplies" element={<MedicalSuppliesPage />} />
              <Route path="/services/pharmacy-supplies" element={<PharmacySuppliesPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/upcoming-events" element={<UpcomingEventsPage />} />
              <Route path="/archive" element={<ArchivePage />} />
              <Route path="/training-capacity-building" element={<TrainingCapacityBuildingPage />} />
              <Route path="/mace-conference" element={<MACEConferencePage />} />
              <Route path="/store" element={<StorePage />} />
              <Route path="/med-vical-health" element={<HealthEducationPage />} />
              <Route path="/med-vical-health/:slug" element={<ArticlePage />} />
              <Route path="/health-education" element={<Navigate to="/med-vical-health" replace />} />
              <Route path="/health-education/:slug" element={<Navigate to="/med-vical-health/:slug" replace />} />
              <Route path="/patient-registration" element={<PatientRegistrationPage />} />
              <Route path="/flyers" element={<FlyersListPage />} />
              <Route path="/flyers/:slug" element={<FlyerPage />} />
              <Route path="/medical-centre" element={<Navigate to="/services/medical-centre" replace />} />
              <Route path="/medical-supplies" element={<Navigate to="/services/medical-supplies" replace />} />
              <Route path="/pharmacy-supplies" element={<Navigate to="/services/pharmacy-supplies" replace />} />
              <Route path="/clinic-registration" element={<Navigate to="/patient-registration" replace />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
