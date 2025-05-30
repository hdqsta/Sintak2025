"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.")
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      details: ["Jl. Malioboro No. 123", "Yogyakarta 55271", "Indonesia"],
    },
    {
      icon: Phone,
      title: "Telepon",
      details: ["+62 21 1234 5678", "+62 812 3456 7890"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@batiknusantara.com", "sales@batiknusantara.com"],
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      details: ["Senin - Jumat: 08:00 - 17:00", "Sabtu: 08:00 - 15:00", "Minggu: Tutup"],
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-batik-cream to-batik-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-batik-brown mb-6">Hubungi Kami</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami siap membantu mewujudkan proyek handycraft impian Anda. Jangan ragu untuk menghubungi tim profesional
            kami.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-batik-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="text-white" size={24} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-batik-brown mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-batik-brown mb-6">Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-batik-gold focus:border-transparent"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-batik-gold focus:border-transparent"
                      placeholder="nama@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-batik-gold focus:border-transparent"
                      placeholder="+62 812 3456 7890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subjek *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-batik-gold focus:border-transparent"
                    >
                      <option value="">Pilih subjek</option>
                      <option value="konsultasi">Konsultasi Produk</option>
                      <option value="pemesanan">Pemesanan</option>
                      <option value="kerjasama">Kerjasama Bisnis</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-batik-gold focus:border-transparent"
                    placeholder="Ceritakan kebutuhan atau pertanyaan Anda..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary inline-flex items-center justify-center">
                  <Send className="mr-2" size={20} />
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-batik-brown mb-6">Lokasi Kami</h2>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-gradient-to-br from-batik-gold/20 to-batik-brown/20 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center text-batik-brown">
                  <MapPin size={48} className="mx-auto mb-2" />
                  <p className="font-medium">Peta Lokasi</p>
                  <p className="text-sm">Jl. Malioboro No. 123, Yogyakarta</p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-batik-cream/30 rounded-lg p-6">
                <h3 className="font-serif text-xl font-semibold text-batik-brown mb-4">Informasi Tambahan</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Konsultasi gratis untuk semua layanan</li>
                  <li>• Estimasi harga dalam 24 jam</li>
                  <li>• Garansi kepuasan 100%</li>
                  <li>• Pengiriman ke seluruh Indonesia</li>
                  <li>• Pembayaran fleksibel</li>
                </ul>
              </div>

              {/* Quick Contact */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="tel:+6221123456789"
                  className="bg-batik-gold text-white text-center py-3 px-4 rounded-lg hover:bg-batik-brown transition-colors duration-300"
                >
                  Telepon Sekarang
                </a>
                <a
                  href="mailto:info@batiknusantara.com"
                  className="bg-batik-brown text-white text-center py-3 px-4 rounded-lg hover:bg-batik-navy transition-colors duration-300"
                >
                  Kirim Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-batik-cream/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-batik-brown mb-4">Pertanyaan yang Sering Diajukan</h2>
            <p className="text-gray-600">Temukan jawaban untuk pertanyaan umum seputar layanan kami</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-batik-brown mb-2">Berapa lama waktu pengerjaan produk custom?</h3>
              <p className="text-gray-600">
                Waktu pengerjaan bervariasi tergantung kompleksitas desain, biasanya 2-4 minggu untuk produk fashion dan
                1-3 minggu untuk aksesoris.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-batik-brown mb-2">Apakah ada minimum order untuk pemesanan?</h3>
              <p className="text-gray-600">
                Tidak ada minimum order untuk produk ready stock. Untuk custom design, minimum order adalah 10 pieces.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-batik-brown mb-2">Bagaimana cara perawatan produk batik?</h3>
              <p className="text-gray-600">
                Kami akan memberikan panduan perawatan lengkap untuk setiap produk. Umumnya disarankan dry clean atau
                hand wash dengan detergen khusus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
