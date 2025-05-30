import { Palette, Shirt, Home, Gift, Star, CheckCircle, Package } from "lucide-react"

const SpecialOffers = () => {
  const offers = [
    {
      icon: Package,
      title: "Bundling Batik Keluarga",
      description: "Paket hemat untuk keluarga, terdiri dari 4 baju batik motif pilihan. Gratis ongkir dan gift box!",
      features: ["4 Baju Batik Dewasa & Anak", "Motif Bisa Pilih", "Gift Box Eksklusif", "Gratis Ongkir"],
      originalPrice: "Rp 2.000.000",
      specialPrice: "Rp 1.500.000",
      popular: true,
    },
    {
      icon: Palette,
      title: "Batik Tradisional Spesial",
      description: "Dapatkan koleksi batik tradisional dengan harga spesial hanya di bulan ini! Stok terbatas.",
      features: ["Motif Klasik Jawa", "Pewarna Alami", "Handmade Premium", "Sertifikat Keaslian"],
      originalPrice: "Rp 700.000",
      specialPrice: "Rp 500.000",
      popular: false,
    },
    {
      icon: Shirt,
      title: "Fashion Modern Diskon 20%",
      description: "Fashion batik modern untuk gaya kekinian, dapatkan diskon spesial untuk pembelian minggu ini.",
      features: ["Desain Trendy", "Bahan Premium", "Custom Design", "Size Chart Lengkap"],
      originalPrice: "Rp 950.000",
      specialPrice: "Rp 750.000",
      popular: false,
    },
    {
      icon: Gift,
      title: "Souvenir Eksklusif Promo",
      description: "Cinderamata unik dengan harga promo, cocok untuk hadiah spesial dan koleksi.",
      features: ["Limited Edition", "Packaging Mewah", "Personalisasi", "Bulk Order"],
      originalPrice: "Rp 200.000",
      specialPrice: "Rp 150.000",
      popular: false,
    },
  ]

  const process = [
    {
      step: "01",
      title: "Pilih Bundling/Offer",
      description: "Pilih produk bundling atau special offer yang Anda inginkan",
    },
    {
      step: "02",
      title: "Pesan Sekarang",
      description: "Klik tombol beli dan lengkapi data pemesanan",
    },
    {
      step: "03",
      title: "Konfirmasi & Bayar",
      description: "Lakukan pembayaran sesuai instruksi dan konfirmasi ke admin",
    },
    {
      step: "04",
      title: "Pengiriman Cepat",
      description: "Produk dikirim ke alamat Anda dengan aman dan cepat",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-batik-cream to-batik-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-batik-brown mb-6">Bundling & Special Offers</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dapatkan paket bundling dan penawaran spesial produk batik terbaik kami. Promo terbatas, harga lebih hemat untuk Anda!
          </p>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offers.map((offer, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${offer.popular ? "border-batik-gold" : "border-gray-100"} overflow-hidden`}
              >
                {offer.popular && (
                  <div className="absolute top-0 right-0 bg-batik-gold text-white px-4 py-2 rounded-bl-lg">
                    <div className="flex items-center space-x-1">
                      <Star size={16} />
                      <span className="text-sm font-semibold">Paling Laris</span>
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className="w-16 h-16 bg-batik-gold rounded-lg flex items-center justify-center mb-6">
                    <offer.icon className="text-white" size={24} />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-batik-brown mb-4">{offer.title}</h3>

                  <p className="text-gray-600 mb-6">{offer.description}</p>

                  <ul className="space-y-3 mb-6">
                    {offer.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="text-batik-gold mr-3" size={16} />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg line-through text-gray-400 mr-2">{offer.originalPrice}</span>
                        <span className="text-2xl font-bold text-batik-brown">{offer.specialPrice}</span>
                      </div>
                      <button className="btn-primary">Beli Sekarang</button>
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
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-batik-brown mb-4">Cara Mendapatkan Penawaran</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ikuti langkah mudah berikut untuk mendapatkan produk bundling & special offer dari kami.
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
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">Jangan Lewatkan Penawaran Spesial Ini!</h2>
          <p className="text-xl text-batik-cream mb-8 max-w-3xl mx-auto">
            Segera dapatkan produk bundling & special offer favorit Anda dengan harga terbaik. Stok terbatas, buruan beli sekarang juga!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-batik-gold hover:bg-batik-gold/90 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
              Lihat Semua Penawaran
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-batik-brown font-semibold py-4 px-8 rounded-lg transition-all duration-300">
              Hubungi Admin
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SpecialOffers
