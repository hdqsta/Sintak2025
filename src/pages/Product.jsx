"use client"

import { useState } from "react"
import { ExternalLink, Calendar, User } from "lucide-react"

const Product = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  const categories = [
    { id: "all", name: "Semua" },
    { id: "fashion", name: "Fashion" },
    { id: "kain", name: "Kain Batik" },
    { id: "decor", name: "Dekorasi" },
    { id: "souvenir", name: "Souvenir" },
  ]

  const portfolioItems = [
    {
      id: 1,
      title: "Batik Design 1",
      category: "fashion",
      client: "Batik Keris",
      year: "2023",
      description: "Desain batik yang elegan dan modern.",
      image: "/portfolio/BATIK.jpg",
      tags: ["Fashion", "Batik"],
    },
    {
      id: 2,
      title: "Batik Design 2",
      category: "fashion",
      client: "Batik Keris",
      year: "2023",
      description: "Koleksi batik dengan motif yang unik.",
      image: "/portfolio/Batik1.jpg",
      tags: ["Fashion", "Batik"],
    },
    {
      id: 3,
      title: "Batik Design 3",
      category: "fashion",
      client: "Batik Keris",
      year: "2023",
      description: "Koleksi batik yang kaya warna.",
      image: "/portfolio/BATIK10.jpg",
      tags: ["Fashion", "Batik"],
    },
    {
      id: 4,
      title: "Batik Design 4",
      category: "fashion",
      client: "Batik Keris",
      year: "2023",
      description: "Desain batik yang terinspirasi dari budaya lokal.",
      image: "/portfolio/BATIK11.jpg",
      tags: ["Fashion", "Batik"],
    },
    {
      id: 5,
      title: "Batik Design 5",
      category: "fashion",
      client: "Batik Keris",
      year: "2023",
      description: "Koleksi batik dengan sentuhan modern.",
      image: "/portfolio/BATIK12.jpg",
      tags: ["Fashion", "Batik"],
    },
    {
      id: 6,
      title: "Batik Design 6",
      category: "fashion",
      client: "Batik Keris",
      year: "2023",
      description: "Koleksi batik yang cocok untuk berbagai acara.",
      image: "/portfolio/BATIK13.jpg",
      tags: ["Fashion", "Batik"],
    },
    {
      id: 7,
      title: "Batik Design 7",
      category: "fashion",
      client: "Batik Keris",
      year: "2023",
      description: "Desain batik yang elegan dan anggun.",
      image: "/portfolio/BATIK14.jpg",
      tags: ["Fashion", "Batik"],
    },
    {
      id: 8,
      title: "Batik Design 8",
      category: "fashion",
      client: "Batik Keris",
      year: "2023",
      description: "Koleksi batik dengan motif yang menarik.",
      image: "/portfolio/BATIK2.jpg",
      tags: ["Fashion", "Batik"],
    },
    {
      id: 9,
      title: "Batik Design 9",
      category: "fashion",
      client: "Batik Keris",
      year: "2023",
      description: "Desain batik yang modern dan stylish.",
      image: "/portfolio/BATIK3.jpg",
      tags: ["Fashion", "Batik"],
    },
    {
      id: 10,
      title: "Batik Design 10",
      category: "fashion",
      client: "Batik Keris",
      year: "2023",
      description: "Koleksi batik yang kaya akan detail.",
      image: "/portfolio/BATIK4.jpg",
      tags: ["Fashion", "Batik"],
    },
    {
      id: 11,
      title: "Batik Design 11",
      category: "fashion",
      client: "Batik Keris",
      year: "2023",
      description: "Desain batik yang cocok untuk acara formal.",
      image: "/portfolio/BATIK6.jpg",
      tags: ["Fashion", "Batik"],
    },
    {
      id: 12,
      title: "Batik Design 12",
      category: "fashion",
      client: "Batik Keris",
      year: "2023",
      description: "Koleksi batik dengan motif yang elegan.",
      image: "/portfolio/BATIK9.jpg",
      tags: ["Fashion", "Batik"],
    },
    {
      id: 13,
      title: "Batik Balian",
      category: "kain",
      client: "Batik Keris",
      year: "2023",
      description: "Desain batik yang terinspirasi dari Bali.",
      image: "/portfolio/BatikBalian.jpg",
      tags: ["Fashion", "Batik"],
    },
    {
      id: 14,
      title: "Batik Kawung",
      category: "kain",
      client: "Batik Keris",
      year: "2023",
      description: "Koleksi batik dengan motif Kawung.",
      image: "/portfolio/BatikKawung.webp",
      tags: ["Fashion", "Batik"],
    },
    {
      id: 15,
      title: "Batik Mega Mendung",
      category: "kain",
      client: "Batik Keris",
      year: "2023",
      description: "Desain batik Mega Mendung yang khas.",
      image: "/portfolio/BatikMegaMendung.webp",
      tags: ["Fashion", "Batik"],
    },
    {
      id: 16,
      title: "Batik Parang",
      category: "kain",
      client: "Batik Keris",
      year: "2023",
      description: "Koleksi batik dengan motif Parang.",
      image: "/portfolio/BatikParang.jpeg",
      tags: ["Fashion", "Batik"],
    },
    {
      id: 17,
      title: "Batik Parang 2",
      category: "kain",
      client: "Batik Keris",
      year: "2023",
      description: "Desain batik Parangg yang unik.",
      image: "/portfolio/BatikParangg.jpg",
      tags: ["Fashion", "Batik"],
    },
    {
      id: 18,
      title: "Batik Solo Truntum",
      category: "kain",
      client: "Batik Keris",
      year: "2023",
      description: "Koleksi batik Solo Truntum yang elegan.",
      image: "/portfolio/BatikSoloTruntum1.jpg",
      tags: ["Fashion", "Batik"],
    },
    {
      id: 19,
      title: "Hiasan Dinding 1",
      category: "decor", 
      client: "Batik Keris",
      year: "2023",
      description: "Dekorasi batik yang indah.",
      image: "/portfolio/DekorasiBatik1.jpg",
      tags: ["Kain", "Batik"],
    },
    {
      id: 20,
      title: "Hiasan Dinding 2",
      category: "decor",
      client: "Batik Keris",
      year: "2023",
      description: "Dekorasi dinding dengan motif batik.",
      image: "/portfolio/DekorDinding.jpg",
      tags: ["Kain", "Batik"],
    },
    {
      id: 21,
      title: "Hiasan Dinding 3",
      category: "decor",
      client: "Batik Keris",
      year: "2023",
      description: "Hiasan dinding yang menarik.",
      image: "/portfolio/HiasanDinding3.jpg",
      tags: ["Kain", "Batik"],
    },
    {
      id: 22,
      title: "Batik Kawung 2",
      category: "kain",
      client: "Batik Keris",
      year: "2023",
      description: "Koleksi batik Kawung yang menarik.",
      image: "/portfolio/Kawung2.webp",
      tags: ["Kain", "Batik"],
    },
    {
      id: 23,
      title: "Batik Mega Mendung 2",
      category: "kain",
      client: "Batik Keris",
      year: "2023",
      description: "Desain batik Mega Mendung yang khas.",
      image: "/portfolio/MegaMendung.jpg",
      tags: ["Kain", "Batik"],
    },
    {
      id: 24,
      title: " Batik Sekar Jagad 1",
      category: "kain",
      client: "Batik Keris",
      year: "2023",
      description: "Koleksi batik Sekar Jagad.",
      image: "/portfolio/SekarJagad3.jpg",
      tags: ["Kain", "Batik"],
    },
    {
      id: 25,
      title: "Batik Sekar Jagad 2",
      category: "kain",
      client: "Batik Keris",
      year: "2023",
      description: "Koleksi batik Sekar Jagad.",
      image: "/portfolio/SekarJagad4.jpg",
      tags: ["Kain", "Batik"],
    },
    {
      id: 26,
      title: "Batik Sekar Jagat 3",
      category: "kain",
      client: "Batik Keris",
      year: "2023",
      description: "Koleksi batik Sekar Jagat.",
      image: "/portfolio/SekarJagat1.jpg",
      tags: ["Kain", "Batik"],
    },
    {
      id: 27,
      title: "Batik Sekar Jagad 4",
      category: "kain",
      client: "Batik Keris",
      year: "2023",
      description: "Koleksi batik Sekatr Jagad.",
      image: "/portfolio/SekatrJagad2.jpg",
      tags: ["Kain", "Batik"],
    },
    {
      id: 28,
      title: "Souvenir 1",
      category: "souvenir",
      client: "Batik Keris",
      year: "2023",
      description: "Souvenir batik yang menarik.",
      image: "/portfolio/Souvenir1.jpg",
      tags: ["Souvenir", "Batik"],
    },
    {
      id: 29,
      title: "Souvenir 2",
      category: "souvenir",
      client: "Batik Keris",
      year: "2023",
      description: "Souvenir batik yang unik.",
      image: "/portfolio/Souvenir11.png",
      tags: ["Souvenir", "Batik"],
    },
    {
      id: 30,
      title: "Souvenir 3",
      category: "souvenir",
      client: "Batik Keris",
      year: "2023",
      description: "Souvenir batik yang menarik.",
      image: "/portfolio/Souvenir3.jpg",
      tags: ["Souvenir", "Batik"],
    },
  ]

  const filteredItems =
    activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-batik-cream to-batik-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-batik-brown mb-6">Product Kami</h1>
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
                    src={item.image || "/BATIK.jpg"}
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

export default Product
