import { Users, Target, Eye, Award } from "lucide-react"

const About = () => {
  const team = [
    {
      name: "Sari Dewi",
      role: "Founder & CEO",
      description: "Pengalaman 20 tahun di industri batik dan fashion",
    },
    {
      name: "Budi Hartono",
      role: "Creative Director",
      description: "Desainer senior dengan spesialisasi motif tradisional",
    },
    {
      name: "Maya Sari",
      role: "Production Manager",
      description: "Ahli dalam manajemen produksi dan quality control",
    },
    {
      name: "Andi Wijaya",
      role: "Marketing Director",
      description: "Strategi pemasaran dan pengembangan bisnis",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-batik-cream to-batik-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-batik-brown mb-6">Tentang Batik Nusantara</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Perjalanan kami dalam melestarikan warisan budaya Indonesia melalui inovasi dan dedikasi yang tak pernah
            surut.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-batik-brown mb-6">Cerita Kami</h2>
              <p className="text-gray-600 mb-6">
                Batik Nusantara didirikan pada tahun 2009 dengan visi sederhana namun mulia: melestarikan keindahan
                batik Indonesia sambil menghadirkan inovasi yang relevan dengan zaman modern.
              </p>
              <p className="text-gray-600 mb-6">
                Berawal dari workshop kecil di Yogyakarta, kami kini telah berkembang menjadi perusahaan terpercaya yang
                melayani klien di seluruh Indonesia dan mancanegara.
              </p>
              <p className="text-gray-600">
                Setiap produk yang kami hasilkan merupakan hasil kolaborasi antara pengrajin tradisional dan desainer
                kontemporer, menciptakan harmoni sempurna antara warisan budaya dan tren modern.
              </p>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-batik-gold/20 to-batik-brown/20 rounded-2xl">
                <div className="absolute inset-0 batik-pattern opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-batik-brown">
                    <div className="text-6xl font-serif font-bold mb-4">2009</div>
                    <div className="text-lg">Tahun Didirikan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Values */}
      <section className="py-20 bg-batik-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-batik-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="text-white" size={24} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-batik-brown mb-4">Visi</h3>
              <p className="text-gray-600">
                Menjadi perusahaan handycraft terdepan yang melestarikan budaya Indonesia melalui inovasi berkelanjutan.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-batik-brown rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-batik-brown mb-4">Misi</h3>
              <p className="text-gray-600">
                Menghadirkan produk berkualitas tinggi yang memadukan tradisi dengan desain modern untuk pasar global.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-batik-maroon rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-batik-brown mb-4">Nilai</h3>
              <p className="text-gray-600">
                Integritas, kualitas, inovasi, dan komitmen terhadap pelestarian budaya Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-batik-brown mb-4">Tim Kami</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dibalik setiap karya yang kami hasilkan, terdapat tim profesional yang berdedikasi tinggi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-32 h-32 bg-gradient-to-br from-batik-gold/20 to-batik-brown/20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                  <Users className="text-batik-brown" size={40} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-batik-brown mb-2">{member.name}</h3>
                <p className="text-batik-gold font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
