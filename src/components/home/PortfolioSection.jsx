import { ExternalLink } from "lucide-react";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: "Koleksi Batik Royal",
      category: "Fashion",
      description:
        "Koleksi eksklusif untuk acara formal dengan motif klasik Yogyakarta",
    },
    {
      title: "Dekorasi Hotel Bintang 5",
      category: "Interior",
      description: "Proyek dekorasi hotel mewah dengan tema budaya Nusantara",
    },
    {
      title: "Seragam Perusahaan",
      category: "Corporate",
      description: "Desain seragam korporat dengan identitas batik modern",
    },
    {
      title: "Souvenir Pernikahan",
      category: "Wedding",
      description: "Paket souvenir pernikahan dengan kemasan premium",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Wijaya",
      role: "CEO PT. Nusantara Jaya",
      content:
        "Kualitas produk luar biasa! Tim sangat profesional dan hasil akhir melebihi ekspektasi.",
      rating: 5,
    },
    {
      name: "Budi Santoso",
      role: "Event Organizer",
      content:
        "Pelayanan excellent dan produk berkualitas tinggi. Sangat merekomendasikan!",
      rating: 5,
    },
    {
      name: "Maya Sari",
      role: "Fashion Designer",
      content:
        "Kolaborasi yang luar biasa! Mereka memahami visi kreatif dengan sempurna.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Portfolio Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-batik-brown dark:text-batik-gold mb-4">
              Portofolio & Klien Kami
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Beberapa proyek terbaik yang telah kami kerjakan bersama
              klien-klien terpercaya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-batik-cream to-batik-gold/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square bg-batik-pattern opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-xs bg-batik-gold px-2 py-1 rounded-full inline-block mb-2">
                    {item.category}
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="text-white" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-batik-brown dark:text-batik-gold mb-4">
              Testimoni Klien
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Kepuasan klien adalah kebanggaan kami. Simak apa kata mereka
              tentang layanan kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div
                      key={i}
                      className="w-5 h-5 bg-batik-gold rounded-full mr-1"
                    ></div>
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="border-t dark:border-gray-700 pt-4">
                  <div className="font-semibold text-batik-brown dark:text-batik-gold">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
