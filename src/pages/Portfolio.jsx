"use client"

import { useState } from "react"
import { ExternalLink, Calendar, User } from "lucide-react"

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  const categories = [
    { id: "all", name: "Semua" },
    { id: "fashion", name: "Fashion" },
    { id: "interior", name: "Interior" },
    { id: "corporate", name: "Corporate" },
    { id: "wedding", name: "Wedding" },
    { id: "souvenir", name: "Souvenir" },
  ]

  const portfolioItems = [
    {
      id: 1,
      title: "Koleksi Batik Royal Wedding",
      category: "wedding",
      client: "Hotel Borobudur",
      year: "2024",
      description: "Desain eksklusif untuk paket pernikahan dengan tema royal Jawa klasik",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Batik", "Wedding", "Luxury"],
    },
    {
      id: 2,
      title: "Seragam Korporat Bank Mandiri",
      category: "corporate",
      client: "Bank Mandiri",
      year: "2024",
      description: "Seragam korporat dengan motif batik modern untuk 500+ karyawan",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Corporate", "Uniform", "Modern"],
    },
    {
      id: 3,
      title: "Interior Lobby Hotel Tentrem",
      category: "interior",
      client: "Hotel Tentrem",
      year: "2023",
      description: "Dekorasi lobby hotel mewah dengan tema budaya Yogyakarta",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Interior", "Hotel", "Traditional"],
    },
    {
      id: 4,
      title: "Fashion Show Jakarta Fashion Week",
      category: "fashion",
      client: "Jakarta Fashion Week",
      year: "2023",
      description: "Koleksi fashion modern dengan sentuhan batik kontemporer",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Fashion", "Modern", "Runway"],
    },
    {
      id: 5,
      title: "Souvenir G20 Indonesia",
      category: "souvenir",
      client: "Kementerian Luar Negeri",
      year: "2022",
      description: "Souvenir eksklusif untuk delegasi G20 dengan motif Garuda",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Souvenir", "Government", "Exclusive"],
    },
    {
      id: 6,
      title: "Koleksi Batik Casual Wear",
      category: "fashion",
      client: "Batik Keris",
      year: "2023",
      description: "Koleksi pakaian kasual dengan motif batik yang fresh dan modern",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Fashion", "Casual", "Collaboration"],
    },
  ]

  const filteredItems =
    activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-batik-cream to-batik-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-batik-brown mb-6">Portofolio Kami</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jelajahi berbagai proyek yang telah kami kerjakan bersama klien-klien terpercaya di berbagai industri.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-batik-gold text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-batik-cream"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <button className="w-full bg-white/20 backdrop-blur-sm text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-white/30 transition-colors">
                        <ExternalLink size={16} />
                        <span>Lihat Detail</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-batik-cream text-batik-brown px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-batik-brown mb-2">{item.title}</h3>

                  <p className="text-gray-600 mb-4 text-sm">{item.description}</p>

                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <User size={14} />
                      <span>{item.client}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={14} />
                      <span>{item.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-batik-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-batik-brown mb-4">Pencapaian Kami</h2>
            <p className="text-gray-600">Angka-angka yang menunjukkan dedikasi dan kepercayaan klien</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-batik-brown mb-2">150+</div>
              <div className="text-gray-600">Proyek Selesai</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-batik-brown mb-2">50+</div>
              <div className="text-gray-600">Klien Korporat</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-batik-brown mb-2">98%</div>
              <div className="text-gray-600">Tingkat Kepuasan</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-batik-brown mb-2">15+</div>
              <div className="text-gray-600">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-batik-brown to-batik-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">Tertarik Berkolaborasi?</h2>
          <p className="text-xl text-batik-cream mb-8 max-w-3xl mx-auto">
            Mari wujudkan proyek impian Anda bersama tim profesional kami. Konsultasi gratis untuk semua jenis proyek.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-batik-gold hover:bg-batik-gold/90 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
              Mulai Konsultasi
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-batik-brown font-semibold py-4 px-8 rounded-lg transition-all duration-300">
              Download Katalog
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
