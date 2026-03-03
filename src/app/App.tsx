import { BrowserRouter, Routes, Route } from 'react-router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage'));
const StorePage = lazy(() => import('./pages/StorePage'));
const HealthEducationPage = lazy(() => import('./pages/HealthEducationPage'));
const ClinicRegistrationPage = lazy(() => import('./pages/ClinicRegistrationPage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const MedicalCentrePage = lazy(() => import('./pages/MedicalCentrePage'));
const MedicalSuppliesPage = lazy(() => import('./pages/MedicalSuppliesPage'));
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
              <Route path="/services/medical-supplies" element={<MedicalSuppliesPage />} />
              <Route path="/store" element={<StorePage />} />
              <Route path="/health-education" element={<HealthEducationPage />} />
              <Route path="/health-education/:slug" element={<ArticlePage />} />
              <Route path="/clinic-registration" element={<ClinicRegistrationPage />} />
              <Route path="/flyers" element={<FlyersListPage />} />
              <Route path="/flyers/:slug" element={<FlyerPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
