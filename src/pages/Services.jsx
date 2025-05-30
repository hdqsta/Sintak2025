import { Palette, Shirt, Home, Gift, Star, CheckCircle } from "lucide-react"

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Batik Tradisional",
      description:
        "Koleksi batik asli dengan motif tradisional yang diwariskan turun temurun dari berbagai daerah di Indonesia.",
      features: ["Motif Klasik Jawa", "Pewarna Alami", "Handmade Premium", "Sertifikat Keaslian"],
      price: "Mulai dari Rp 500.000",
      popular: false,
    },
    {
      icon: Shirt,
      title: "Fashion Modern",
      description:
        "Pakaian kontemporer dengan sentuhan batik untuk gaya hidup modern yang tetap mempertahankan nilai budaya.",
      features: ["Desain Trendy", "Bahan Premium", "Custom Design", "Size Chart Lengkap"],
      price: "Mulai dari Rp 750.000",
      popular: true,
    },
    {
      icon: Home,
      title: "Dekorasi Rumah",
      description: "Produk dekorasi rumah dengan nuansa budaya Indonesia yang elegan untuk mempercantik interior Anda.",
      features: ["Interior Design", "Furniture Custom", "Aksesoris Unik", "Konsultasi Gratis"],
      price: "Mulai dari Rp 300.000",
      popular: false,
    },
    {
      icon: Gift,
      title: "Souvenir Eksklusif",
      description: "Cinderamata unik yang mencerminkan kekayaan budaya Nusantara, cocok untuk hadiah spesial.",
      features: ["Limited Edition", "Packaging Mewah", "Personalisasi", "Bulk Order"],
      price: "Mulai dari Rp 150.000",
      popular: false,
    },
  ]

  const process = [
    {
      step: "01",
      title: "Konsultasi",
      description: "Diskusi kebutuhan dan preferensi desain dengan tim ahli kami",
    },
    {
      step: "02",
      title: "Desain",
      description: "Pembuatan sketsa dan mockup sesuai dengan brief yang telah disepakati",
    },
    {
      step: "03",
      title: "Produksi",
      description: "Proses pembuatan oleh pengrajin berpengalaman dengan quality control ketat",
    },
    {
      step: "04",
      title: "Delivery",
      description: "Pengiriman dengan packaging khusus dan asuransi untuk keamanan produk",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-batik-cream to-batik-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-batik-brown mb-6">Layanan & Produk Kami</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temukan berbagai produk handycraft berkualitas tinggi yang memadukan keindahan tradisi dengan sentuhan
            modern.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${service.popular ? "border-batik-gold" : "border-gray-100"} overflow-hidden`}
              >
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-batik-gold text-white px-4 py-2 rounded-bl-lg">
                    <div className="flex items-center space-x-1">
                      <Star size={16} />
                      <span className="text-sm font-semibold">Populer</span>
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className="w-16 h-16 bg-batik-gold rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="text-white" size={24} />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-batik-brown mb-4">{service.title}</h3>

                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="text-batik-gold mr-3" size={16} />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-batik-brown">{service.price}</span>
                      <button className="btn-primary">Pesan Sekarang</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-batik-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-batik-brown mb-4">Proses Pemesanan</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kami memastikan setiap tahap pemesanan berjalan lancar dan transparan untuk kepuasan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-batik-gold rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>

                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-batik-gold/30 transform translate-x-10"></div>
                )}

                <h3 className="font-serif text-xl font-semibold text-batik-brown mb-3">{item.title}</h3>

                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-batik-brown to-batik-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">Siap Memulai Proyek Anda?</h2>
          <p className="text-xl text-batik-cream mb-8 max-w-3xl mx-auto">
            Hubungi tim kami untuk konsultasi gratis dan dapatkan penawaran terbaik untuk kebutuhan handycraft Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-batik-gold hover:bg-batik-gold/90 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
              Konsultasi Gratis
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-batik-brown font-semibold py-4 px-8 rounded-lg transition-all duration-300">
              Lihat Katalog
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
