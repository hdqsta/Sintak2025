import { Heart, Award, Users } from "lucide-react"

const AboutSection = () => {
  return (
    <section className="py-20 bg-batik-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-batik-brown mb-4">Tentang Batik Nusantara</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kami adalah perusahaan yang berdedikasi untuk melestarikan dan mengembangkan warisan budaya Indonesia
            melalui produk handycraft berkualitas tinggi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-batik-brown mb-6">Misi Kami</h3>
            <p className="text-gray-600 mb-6">
              Sejak didirikan, kami berkomitmen untuk memadukan keindahan tradisi batik dengan inovasi desain modern.
              Setiap produk yang kami ciptakan merupakan hasil kolaborasi antara pengrajin berpengalaman dan desainer
              kontemporer.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-batik-gold rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="text-white" size={24} />
                </div>
                <h4 className="font-semibold text-batik-brown mb-2">Passion</h4>
                <p className="text-sm text-gray-600">Cinta pada budaya Indonesia</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-batik-brown rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="text-white" size={24} />
                </div>
                <h4 className="font-semibold text-batik-brown mb-2">Quality</h4>
                <p className="text-sm text-gray-600">Kualitas terbaik</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-batik-maroon rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="text-white" size={24} />
                </div>
                <h4 className="font-semibold text-batik-brown mb-2">Community</h4>
                <p className="text-sm text-gray-600">Memberdayakan pengrajin</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-batik-gold/20 to-batik-brown/20 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 batik-pattern opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-batik-brown">
                  <div className="text-4xl font-serif font-bold mb-2">15+</div>
                  <div className="text-sm">Tahun Pengalaman</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
