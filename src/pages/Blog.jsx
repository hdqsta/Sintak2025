import { Calendar, User, ArrowRight } from "lucide-react"

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "Sejarah dan Filosofi Batik Indonesia: Warisan Budaya yang Tak Ternilai",
    excerpt:
      "Menyelami makna mendalam di balik setiap motif batik tradisional Indonesia dan bagaimana warisan ini terus dilestarikan di era modern.",
    author: "Sari Dewi",
    date: "15 Januari 2024",
    category: "Budaya",
    readTime: "8 min",
    image: "/blog/batik_1.jpg", 
  }

  const blogPosts = [
    {
      id: 2,
      title: "Tips Memilih Batik yang Tepat untuk Acara Formal",
      excerpt: "Panduan lengkap memilih motif dan warna batik yang sesuai untuk berbagai acara formal dan semi formal.",
      author: "Maya Sari",
      date: "12 Januari 2024",
      category: "Fashion",
      readTime: "5 min",
      image: "/blog/batik_2.jpg",
    },
    {
      id: 3,
      title: "Proses Pembuatan Batik Tulis: Dari Sketsa hingga Karya Seni",
      excerpt:
        "Mengikuti perjalanan pembuatan batik tulis tradisional yang membutuhkan ketelitian dan kesabaran tinggi.",
      author: "Budi Hartono",
      date: "10 Januari 2024",
      category: "Proses",
      readTime: "6 min",
      image: "/blog/batik_3.jpg",
    },
    {
      id: 4,
      title: "Tren Batik Modern 2024: Inovasi dalam Tradisi",
      excerpt: "Eksplorasi tren terbaru dalam dunia batik yang memadukan elemen tradisional dengan desain kontemporer.",
      author: "Andi Wijaya",
      date: "8 Januari 2024",
      category: "Tren",
      readTime: "4 min",
      image: "/blog/batik_4.jpg",
    },
    {
      id: 5,
      title: "Cara Merawat Batik agar Awet dan Tahan Lama",
      excerpt: "Tips praktis merawat koleksi batik Anda agar tetap indah dan tahan lama dengan perawatan yang tepat.",
      author: "Sari Dewi",
      date: "5 Januari 2024",
      category: "Tips",
      readTime: "3 min",
      image: "/blog/batik_5.jpg",
    },
    {
      id: 6,
      title: "Batik sebagai Diplomasi Budaya Indonesia",
      excerpt:
        "Peran batik dalam memperkenalkan budaya Indonesia ke dunia internasional melalui berbagai acara diplomatik.",
      author: "Maya Sari",
      date: "3 Januari 2024",
      category: "Budaya",
      readTime: "7 min",
      image: "/blog/batik_6.jpg",
    },
    {
      id: 7,
      title: "Kolaborasi Desainer Muda dengan Pengrajin Batik",
      excerpt:
        "Kisah inspiratif kolaborasi antara desainer muda dan pengrajin senior dalam menciptakan karya batik inovatif.",
      author: "Budi Hartono",
      date: "1 Januari 2024",
      category: "Inspirasi",
      readTime: "5 min",
      image: "/blog/batik_7.jpg",
    },
  ]

  const categories = [
    { name: "Semua", count: 12 },
    { name: "Budaya", count: 4 },
    { name: "Fashion", count: 3 },
    { name: "Tips", count: 2 },
    { name: "Proses", count: 2 },
    { name: "Tren", count: 1 },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-batik-cream to-batik-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-batik-brown mb-6">Blog & Artikel</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temukan wawasan mendalam tentang dunia batik, tips fashion, dan cerita inspiratif dari para pengrajin
            Indonesia.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-batik-brown mb-2">Artikel Pilihan</h2>
            <div className="w-20 h-1 bg-batik-gold"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>

            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-batik-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                  {featuredPost.category}
                </span>
                <span className="text-gray-500 text-sm">{featuredPost.readTime} baca</span>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-bold text-batik-brown mb-4">{featuredPost.title}</h3>

              <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <User size={16} />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{featuredPost.date}</span>
                  </div>
                </div>

                <button className="btn-primary inline-flex items-center">
                  Baca Selengkapnya
                  <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-batik-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="font-serif text-xl font-bold text-batik-brown mb-4">Kategori</h3>
                <ul className="space-y-3">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="flex items-center justify-between text-gray-600 hover:text-batik-brown transition-colors duration-200"
                      >
                        <span>{category.name}</span>
                        <span className="bg-batik-cream text-batik-brown text-xs px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t">
                  <h4 className="font-serif text-lg font-semibold text-batik-brown mb-4">Newsletter</h4>
                  <p className="text-gray-600 text-sm mb-4">Dapatkan artikel terbaru langsung di email Anda</p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Email Anda"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-batik-gold focus:border-transparent text-sm"
                    />
                    <button className="w-full bg-batik-gold text-white py-2 px-4 rounded-lg hover:bg-batik-brown transition-colors duration-300 text-sm">
                      Berlangganan
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-batik-brown mb-2">Artikel Terbaru</h2>
                <div className="w-20 h-1 bg-batik-gold"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-batik-gold text-white px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-serif text-lg font-semibold text-batik-brown mb-3 line-clamp-2 group-hover:text-batik-gold transition-colors duration-200">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <User size={12} />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar size={12} />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <span>{post.readTime} baca</span>
                      </div>

                      <div className="mt-4 pt-4 border-t">
                        <button className="text-batik-gold hover:text-batik-brown font-medium text-sm inline-flex items-center group">
                          Baca Selengkapnya
                          <ArrowRight
                            className="ml-1 group-hover:translate-x-1 transition-transform duration-200"
                            size={14}
                          />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-batik-cream transition-colors duration-200">
                    Sebelumnya
                  </button>
                  <button className="px-3 py-2 bg-batik-gold text-white rounded-lg">1</button>
                  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-batik-cream transition-colors duration-200">
                    2
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-batik-cream transition-colors duration-200">
                    3
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-batik-cream transition-colors duration-200">
                    Selanjutnya
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
