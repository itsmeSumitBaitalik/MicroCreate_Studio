import React, { lazy, Suspense } from 'react';
import { LoadingSpinner } from './components/LoadingSpinner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ErrorBoundary } from './components/ErrorBoundary';

const Home = lazy(() => import('./pages/Home/Home').then(m => ({ default: m.Home })));
const AboutPage = lazy(() => import('./pages/About/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./pages/Services/ServicesPage').then(m => ({ default: m.ServicesPage })));
const WorkPage = lazy(() => import('./pages/Work/WorkPage').then(m => ({ default: m.WorkPage })));
const ContactPage = lazy(() => import('./pages/Contact/ContactPage').then(m => ({ default: m.ContactPage })));

function PageLoader() {
  // Removed unused PageLoader, kept placeholder if needed.
  return null;
}

export function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary fallback={<LoadingSpinner />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}