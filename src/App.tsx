import { Route, Routes } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header'
import Home from './components/layout/Home'

function App() {
  return (
    <div className="max-w-[100rem] mx-auto px-16">
      <Header />
      <div className="px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predict" element={<Home />} />
          <Route path="/about" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;
