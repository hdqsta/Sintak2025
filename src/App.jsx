import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

import Contact from "./pages/Contact";

import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Legal from "./pages/Legal";
import Product from "./pages/Product";
import SpecialOffers from "./pages/SpecialOffers";

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />

              <Route path="/contact" element={<Contact />} />

              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/product" element={<Product />} />
              <Route path="/special-offers" element={<SpecialOffers />} />
            </Routes>
          </Layout>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
