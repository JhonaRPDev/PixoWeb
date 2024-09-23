import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./page/Home";
import Company from "./page/Company";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import Services from "./page/Services";
import Marketing from "./page/marketing";
import Software from "./page/software";
import IAPixo from "./page/IAPixo";
import DiseñoGrafico from "./page/diseñoGrafico";
import PaginaWeb from "./page/paginaweb";       

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="bg-black flex-grow overflow-y-auto scrollable">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/services" element={<Services />}>
              <Route path="marketing" element={<Marketing />} />
              <Route path="software" element={<Software />} />
              <Route path="ai" element={<IAPixo />} />
              <Route path="diseñografico" element={<DiseñoGrafico />} />
              <Route path="paginaweb" element={<PaginaWeb />} />
            </Route>
          </Routes>
          <div className="px-5 sm:px-10 lg:px-24 pb-10">
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;