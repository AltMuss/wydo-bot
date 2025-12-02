import { Route, Routes } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header'
import HomePage from './components/layout/Home'
import PredictPage from './components/layout/PredictPage';
import AboutPage from './components/layout/AboutPage';
import { LangProvider } from './context/LangContext';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="max-w-[110rem] mx-auto px-0 md:px-6 lg:px-16 min-h-screen flex flex-col overflow-hidden">
      <LangProvider>
        <ScrollToTop />
        <Header />
        <div className="px-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/predict" element={<PredictPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
        <Footer />
      </LangProvider>
    </div>
  )
}

export default App;
