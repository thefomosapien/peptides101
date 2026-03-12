import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';
import GuidePage from './pages/GuidePage';
import QuizPage from './pages/QuizPage';
import ResearchPage from './pages/ResearchPage';
import FDAPage from './pages/FDAPage';

export default function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/fda" element={<FDAPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
