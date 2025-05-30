"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Search, MessageCircle, Phone, Mail } from "lucide-react"

const FAQ = () => {
  const [openItems, setOpenItems] = useState([0])
  const [searchTerm, setSearchTerm] = useState("")

  const toggleItem = (index) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  const faqCategories = [
    {
      title: "Umum",
      faqs: [
        {
          question: "Apa itu Domesa.co?",
          answer:
            " adalah perusahaan yang bergerak di bidang handycraft Indonesia, khususnya batik dan produk budaya tradisional dengan sentuhan modern. Kami didirikan pada tahun 2009 dengan misi melestarikan warisan budaya Indonesia melalui inovasi dan kualitas tinggi.",
        },
        {
          question: "Di mana lokasi workshop dan showroom Batik Nusantara?",
          answer:
            "Workshop utama kami berlokasi di Palembang, tepatnya di Pasar Kito Tradisional Kompleks Ilir Barat Permai . Untuk kunjungan, mohon hubungi kami terlebih dahulu untuk membuat janji.",
        },
        {
          question: "Apakah produk Batik Nusantara menggunakan bahan alami?",
          answer:
            "Ya, kami mengutamakan penggunaan bahan-bahan alami berkualitas tinggi. Untuk batik tradisional, kami menggunakan pewarna alami dan kain katun premium. Namun, untuk beberapa produk modern, kami juga menggunakan bahan sintetis berkualitas tinggi sesuai kebutuhan desain.",
        },
      ],
    },
    {
      title: "Pemesanan & Pembayaran",
      faqs: [
        {
          question: "Bagaimana cara memesan produk custom?",
          answer:
            "Untuk pemesanan custom, Anda dapat menghubungi tim kami melalui WhatsApp, email, atau datang langsung ke showroom. Proses dimulai dengan konsultasi gratis untuk memahami kebutuhan Anda, dilanjutkan dengan pembuatan sketsa dan estimasi harga.",
        },
        {
          question: "Berapa minimum order untuk produk custom?",
          answer:
            "Minimum order untuk produk custom adalah 10 pieces untuk pakaian dan 5 pieces untuk aksesoris. Untuk proyek korporat atau event khusus, kami dapat mendiskusikan ketentuan khusus sesuai kebutuhan.",
        },
        {
          question: "Metode pembayaran apa saja yang diterima?",
          answer:
            "Kami menerima pembayaran melalui transfer bank (BCA, Mandiri, BNI, BRI), e-wallet (OVO, GoPay, DANA), dan kartu kredit. Untuk pemesanan besar, tersedia opsi pembayaran bertahap dengan DP 50%.",
        },
        {
          question: "Apakah ada garansi untuk produk yang dibeli?",
          answer:
            "Ya, kami memberikan garansi kualitas selama 6 bulan untuk cacat produksi. Jika ada masalah dengan produk dalam periode ini, kami akan memperbaiki atau mengganti tanpa biaya tambahan.",
        },
      ],
    },
    {
      title: "Produksi & Pengiriman",
      faqs: [
        {
          question: "Berapa lama waktu pengerjaan untuk produk custom?",
          answer:
            "Waktu pengerjaan bervariasi tergantung jenis dan kompleksitas produk: Batik tulis (3-4 minggu), Batik cap (2-3 minggu), Fashion modern (2-3 minggu), Aksesoris (1-2 minggu), Dekorasi interior (3-6 minggu tergantung skala proyek).",
        },
        {
          question: "Apakah bisa melihat progress pengerjaan?",
          answer:
            "Tentu! Kami akan memberikan update progress secara berkala melalui foto dan video. Anda juga dapat mengunjungi workshop kami untuk melihat langsung proses pengerjaan (dengan perjanjian terlebih dahulu).",
        },
        {
          question: "Ke mana saja area pengiriman?",
          answer:
            "Kami melayani pengiriman ke seluruh Indonesia melalui JNE, TIKI, Pos Indonesia, dan kurir khusus untuk area Jabodetabek. Untuk pengiriman internasional, kami bekerja sama dengan DHL dan FedEx.",
        },
        {
          question: "Bagaimana packaging untuk produk yang dikirim?",
          answer:
            "Semua produk dikemas dengan sangat hati-hati menggunakan bubble wrap, box khusus, dan asuransi pengiriman. Untuk produk premium, kami menggunakan packaging eksklusif dengan branding Batik Nusantara.",
        },
      ],
    },
    {
      title: "Perawatan & Maintenance",
      faqs: [
        {
          question: "Bagaimana cara merawat produk batik agar awet?",
          answer:
            "Untuk batik tulis dan cap: cuci dengan tangan menggunakan detergen khusus batik, jangan diperas terlalu kuat, jemur di tempat teduh, setrika dengan suhu sedang. Untuk produk modern: ikuti petunjuk care label yang disertakan.",
        },
        {
          question: "Apakah produk batik bisa dicuci dengan mesin cuci?",
          answer:
            "Untuk batik tradisional, kami sangat menyarankan cuci tangan. Namun, untuk produk batik modern dengan treatment khusus, bisa menggunakan mesin cuci dengan mode gentle dan air dingin.",
        },
        {
          question: "Bagaimana mengatasi jika warna batik luntur?",
          answer:
            "Luntur ringan pada batik alami adalah hal normal pada pencucian pertama. Rendam dengan air garam sebelum pencucian pertama, pisahkan dari pakaian lain, dan gunakan detergen khusus batik untuk meminimalkan luntur.",
        },
      ],
    },
  ]

  const allFaqs = faqCategories.flatMap((category) =>
    category.faqs.map((faq) => ({ ...faq, category: category.title })),
  )

  const filteredFaqs = allFaqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-batik-cream to-batik-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-batik-brown mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Temukan jawaban untuk pertanyaan yang sering diajukan seputar produk dan layanan Batik Nusantara.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Cari pertanyaan..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-batik-gold focus:border-transparent text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {searchTerm ? (
            // Search Results
            <div>
              <h2 className="font-serif text-2xl font-bold text-batik-brown mb-8">
                Hasil Pencarian "{searchTerm}" ({filteredFaqs.length} hasil)
              </h2>
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div>
                        <h3 className="font-semibold text-batik-brown">{faq.question}</h3>
                        <span className="text-sm text-batik-gold">{faq.category}</span>
                      </div>
                      {openItems.includes(index) ? (
                        <ChevronUp className="text-batik-gold" size={20} />
                      ) : (
                        <ChevronDown className="text-batik-gold" size={20} />
                      )}
                    </button>
                    {openItems.includes(index) && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Category-based FAQ
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="font-serif text-2xl font-bold text-batik-brown mb-6">{category.title}</h2>
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 10 + faqIndex
                      return (
                        <div key={faqIndex} className="border border-gray-200 rounded-lg">
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                          >
                            <h3 className="font-semibold text-batik-brown">{faq.question}</h3>
                            {openItems.includes(globalIndex) ? (
                              <ChevronUp className="text-batik-gold" size={20} />
                            ) : (
                              <ChevronDown className="text-batik-gold" size={20} />
                            )}
                          </button>
                          {openItems.includes(globalIndex) && (
                            <div className="px-6 pb-4">
                              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-batik-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-batik-brown mb-4">Tidak Menemukan Jawaban?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tim customer service kami siap membantu Anda dengan pertanyaan atau kebutuhan khusus lainnya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-batik-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-white" size={24} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-batik-brown mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Chat langsung dengan tim support kami</p>
              <button className="btn-primary">Mulai Chat</button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-batik-brown rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-batik-brown mb-2">Telepon</h3>
              <p className="text-gray-600 mb-4">Hubungi hotline customer service kami</p>
              <button className="btn-primary">+62 895-2489-3101</button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-batik-maroon rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-batik-brown mb-2">Email</h3>
              <p className="text-gray-600 mb-4">Kirim pertanyaan detail via email</p>
              <button className="btn-primary">info@batiknusantara.com</button>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="font-serif text-2xl font-bold text-batik-brown mb-6 text-center">
                Kirim Pertanyaan Cepat
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nama Anda"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-batik-gold focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Email Anda"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-batik-gold focus:border-transparent"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subjek Pertanyaan"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-batik-gold focus:border-transparent"
                />
                <textarea
                  rows={4}
                  placeholder="Pertanyaan Anda..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-batik-gold focus:border-transparent"
                ></textarea>
                <button type="submit" className="w-full btn-primary">
                  Kirim Pertanyaan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ
