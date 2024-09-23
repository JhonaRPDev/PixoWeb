import "./App.css"; // Asegúrate de que esté importado
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./sections/Header";
import Home from "./page/Home";
import Company from "./page/Company";
import Contact from "./sections/contact";
import Footer from "./sections/Footer";
import IAPixo from "./page/IAPixo";
import Services from "./page/Services";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="bg-black flex-grow overflow-y-auto scrollable"> {/* Aquí se aplica la clase scrollable */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/services" element={<Services />}>
              <Route path="ai" element={<IAPixo />} />
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
