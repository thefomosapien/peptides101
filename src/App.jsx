import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

const HomePage = lazy(() => import('./pages/HomePage'));
const LearnPage = lazy(() => import('./pages/LearnPage'));
const GuidePage = lazy(() => import('./pages/GuidePage'));
const QuizPage = lazy(() => import('./pages/QuizPage'));
const ResearchPage = lazy(() => import('./pages/ResearchPage'));
const FDAPage = lazy(() => import('./pages/FDAPage'));
const GlossaryPage = lazy(() => import('./pages/GlossaryPage'));
const ProvidersPage = lazy(() => import('./pages/ProvidersPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export default function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/guide" element={<GuidePage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/fda" element={<FDAPage />} />
            <Route path="/glossary" element={<GlossaryPage />} />
            <Route path="/providers" element={<ProvidersPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
