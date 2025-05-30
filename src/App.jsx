import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import SpecialOffers from "./pages/SpecialOffers"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Product"
import Testimonials from "./pages/Testimonials"
import Blog from "./pages/Blog"
import FAQ from "./pages/FAQ"
import Legal from "./pages/Legal"

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/special-offers" element={<SpecialOffers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Portfolio />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/legal" element={<Legal />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  )
}

export default App
