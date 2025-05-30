"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, ShoppingCart } from "lucide-react"
import { useCart } from "../context/CartContext"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const location = useLocation()
  const { cartItems, updateQuantity, removeFromCart, getTotalItems, getTotalPrice } = useCart()

  const navigation = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Special", href: "/special-offers" },
    { name: "Product", href: "/product" },
    { name: "Testimoni", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Kontak", href: "/contact" },
  ]

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  const closeCart = () => {
    setIsCartOpen(false)
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price)
  }

  return (
    <nav className="shadow-lg sticky top-0 z-50 bg-white overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-48 z-0">
        <img
          src="/home-pages/navbar/batik-motif.webp"
          alt="Batik Left"
          className="h-full w-full object-cover blur-sm pointer-events-none"
          style={{
            maskImage: "linear-gradient(to right, black, transparent)",
            WebkitMaskImage: "linear-gradient(to right, black, transparent)",
          }}
        />
      </div>
      <div className="absolute right-0 top-0 h-full w-48 z-0">
        <img
          src="/home-pages/navbar/batik-motif.webp"
          alt="Batik Right"
          className="h-full w-full object-cover blur-sm pointer-events-none"
          style={{
            maskImage: "linear-gradient(to left, black, transparent)",
            WebkitMaskImage: "linear-gradient(to left, black, transparent)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-batik-gold rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="font-serif text-xl font-bold text-batik-brown">Domesa.co</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? "text-batik-gold border-b-2 border-batik-gold"
                    : "text-gray-700 hover:text-batik-brown"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Shopping Cart Icon */}
            <button
              onClick={toggleCart}
              className="relative text-gray-700 hover:text-batik-gold transition-colors duration-200"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={24} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-batik-gold text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button and cart icon */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleCart}
              className="relative text-gray-700 hover:text-batik-gold transition-colors duration-200"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={24} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-batik-gold text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-batik-brown">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden relative z-10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? "text-batik-gold bg-batik-cream"
                    : "text-gray-700 hover:text-batik-brown hover:bg-gray-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Shopping Cart Modal - Updated to match product detail style */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between rounded-t-2xl">
              <h2 className="font-serif text-xl font-bold text-batik-brown">Keranjang Belanja</h2>
              <button onClick={closeCart} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={20} className="text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-10">
                  <ShoppingCart size={64} className="mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-500">Keranjang belanja Anda kosong</p>
                </div>
              ) : (
                <>
                  {/* Cart Items */}
                  <div className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                        <div className="flex-shrink-0 w-20 h-20 border border-gray-200 rounded-md overflow-hidden">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            className="w-full h-full object-center object-cover"
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="font-semibold text-batik-brown">{item.title}</h3>
                          <p className="text-sm text-gray-500">{item.material}</p>
                          <p className="text-sm font-medium text-batik-gold">{item.price}</p>
                        </div>

                        <div className="flex items-center space-x-2">
                          <button
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md text-gray-600 hover:text-batik-gold"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md text-gray-600 hover:text-batik-gold"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          className="text-red-500 hover:text-red-700 text-sm font-medium"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Hapus
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Total */}
                  <div className="border-t border-gray-200 pt-4 mb-6">
                    <div className="flex justify-between text-lg font-semibold text-batik-brown">
                      <span>Total:</span>
                      <span>{formatPrice(getTotalPrice())}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Pengiriman dan pajak dihitung saat checkout.</p>
                  </div>

                  {/* Checkout Button */}
                  <div className="mb-4">
                    <button className="w-full bg-batik-gold text-white py-3 px-4 rounded-lg font-semibold hover:bg-batik-brown transition-colors">
                      Checkout
                    </button>
                  </div>

                  {/* Continue Shopping */}
                  <div className="text-center">
                    <button
                      type="button"
                      className="text-batik-gold font-medium hover:text-batik-brown"
                      onClick={closeCart}
                    >
                      Lanjutkan Belanja
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
