import { Star, Quote, Building, Calendar } from "lucide-react"

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Wijaya",
      role: "CEO",
      company: "PT. Nusantara Jaya",
      rating: 5,
      content:
        "Kualitas produk luar biasa! Tim Batik Nusantara sangat profesional dan hasil akhir melebihi ekspektasi kami. Seragam korporat yang mereka buat mendapat apresiasi tinggi dari seluruh karyawan.",
      project: "Seragam Korporat",
      date: "Januari 2024",
      image: "/testimonials/profil1.jpg",
    },
    {
      id: 2,
      name: "Budi Santoso",
      role: "Event Organizer",
      company: "Santoso Events",
      rating: 5,
      content:
        "Pelayanan excellent dan produk berkualitas tinggi. Mereka berhasil menyelesaikan 500 souvenir pernikahan dalam waktu yang sangat ketat. Sangat merekomendasikan!",
      project: "Souvenir Pernikahan",
      date: "Desember 2023",
      image: "/testimonials/profil3.jpg",
    },
    {
      id: 3,
      name: "Maya Sari",
      role: "Fashion Designer",
      company: "Maya Couture",
      rating: 5,
      content:
        "Kolaborasi yang luar biasa! Mereka memahami visi kreatif dengan sempurna dan mengeksekusinya dengan detail yang menakjubkan. Hasil fashion show kami sukses besar.",
      project: "Fashion Show Collection",
      date: "November 2023",
      image: "/testimonials/profil2.jpg",
    },
    {
      id: 4,
      name: "Dr. Ahmad Fauzi",
      role: "Direktur",
      company: "Museum Batik Indonesia",
      rating: 5,
      content:
        "Sebagai institusi yang bergerak di bidang pelestarian budaya, kami sangat mengapresiasi dedikasi Batik Nusantara dalam menjaga kualitas dan keaslian motif tradisional.",
      project: "Koleksi Museum",
      date: "Oktober 2023",
      image: "/testimonials/profil4.jpg",
    },
    {
      id: 5,
      name: "Rina Kusuma",
      role: "Interior Designer",
      company: "Kusuma Design Studio",
      rating: 5,
      content:
        "Proyek dekorasi hotel dengan mereka berjalan sangat lancar. Tim sangat responsif dan kreatif dalam memberikan solusi desain yang sesuai dengan konsep yang kami inginkan.",
      project: "Hotel Interior",
      date: "September 2023",
      image: "/testimonials/profil10.jpg",
    },
    {
      id: 6,
      name: "Pak Joko",
      role: "Pengusaha",
      company: "Toko Batik Malioboro",
      rating: 5,
      content:
        "Sudah 5 tahun bermitra dengan Batik Nusantara untuk supply produk di toko kami. Kualitas konsisten, pengiriman tepat waktu, dan pelayanan yang memuaskan.",
      project: "Partnership Supply",
      date: "Ongoing",
      image: "/testimonials/profil5.jpg",
    },
  ]

  const stats = [
    { number: "1000+", label: "Klien Puas" },
    { number: "98%", label: "Tingkat Kepuasan" },
    { number: "4.9/5", label: "Rating Rata-rata" },
    { number: "500+", label: "Review Positif" },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-batik-cream to-batik-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-batik-brown mb-6">Testimoni Klien</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kepuasan klien adalah kebanggaan kami. Simak pengalaman mereka yang telah mempercayakan proyek handycraft
            kepada kami.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-serif font-bold text-batik-brown mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-batik-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-batik-gold/20">
                  <Quote size={32} />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-batik-gold fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.content}"</p>

                {/* Client Info */}
                <div className="border-t pt-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover bg-batik-cream"
                    />
                    <div>
                      <div className="font-semibold text-batik-brown">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>

                  <div className="space-y-1 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Building size={14} />
                      <span>{testimonial.company}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={14} />
                      <span>{testimonial.date}</span>
                    </div>
                  </div>

                  <div className="mt-3">
                    <span className="inline-block bg-batik-gold/10 text-batik-brown text-xs px-2 py-1 rounded-full">
                      {testimonial.project}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-batik-brown mb-4">Video Testimoni</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dengarkan langsung pengalaman klien kami melalui video testimoni
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-batik-gold/20 to-batik-brown/20 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                      <div className="w-0 h-0 border-l-[12px] border-l-batik-brown border-y-[8px] border-y-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold mb-1">Testimoni Klien {index}</h3>
                    <p className="text-sm opacity-90">CEO PT. Example {index}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-batik-brown to-batik-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Bergabunglah dengan Klien Puas Kami
          </h2>
          <p className="text-xl text-batik-cream mb-8 max-w-3xl mx-auto">
            Ratusan klien telah mempercayakan proyek mereka kepada kami. Saatnya giliran Anda merasakan pengalaman yang
            luar biasa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-batik-gold hover:bg-batik-gold/90 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
              Mulai Proyek Anda
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-batik-brown font-semibold py-4 px-8 rounded-lg transition-all duration-300">
              Konsultasi Gratis
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
