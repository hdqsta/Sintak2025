"use client";

import { useState } from "react";
import {
  ExternalLink,
  Calendar,
  User,
  X,
  ShoppingCart,
  Heart,
  Share2,
  Star,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Product = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: "all", name: "Semua" },
    { id: "fashion", name: "Fashion" },
    { id: "kain", name: "Kain Batik" },
    { id: "decor", name: "Dekorasi" },
    { id: "souvenir", name: "Souvenir" },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Batik Design 1",
      category: "fashion",
      client: "Domesa",
      year: "2023",
      description: "Desain batik yang elegan dan modern.",
      image: "/portfolio/BATIK.jpg",
      tags: ["Fashion", "Batik"],
      price: "Rp 450.000",
      material: "Katun Premium",
      size: "All Size",
      colors: ["Coklat", "Emas", "Krem"],
      stock: 15,
      rating: 4.8,
      reviews: 24,
      detailDescription:
        "Batik eksklusif dengan motif tradisional yang dipadukan dengan desain modern. Dibuat dengan teknik batik tulis oleh pengrajin berpengalaman. Cocok untuk acara formal maupun kasual.",
      care: "Cuci dengan tangan, hindari detergen keras, jemur di tempat teduh",
      origin: "Yogyakarta",
    },
    {
      id: 2,
      title: "Batik Design 2",
      category: "fashion",
      client: "Domesa",
      year: "2023",
      description: "Koleksi batik dengan motif yang unik.",
      image: "/portfolio/Batik1.jpg",
      tags: ["Fashion", "Batik"],
      price: "Rp 520.000",
      material: "Sutra",
      size: "S, M, L, XL",
      colors: ["Biru", "Putih", "Emas"],
      stock: 8,
      rating: 4.9,
      reviews: 18,
      detailDescription:
        "Batik sutra premium dengan motif unik yang terinspirasi dari kebudayaan Jawa. Proses pembuatan memakan waktu 2-3 minggu dengan detail yang sangat halus.",
      care: "Dry clean only, simpan di tempat kering",
      origin: "Solo",
    },
    {
      id: 3,
      title: "Batik Design 3",
      category: "fashion",
      client: "Domesa",
      year: "2023",
      description: "Koleksi batik yang kaya warna.",
      image: "/portfolio/BATIK10.jpg",
      tags: ["Fashion", "Batik"],
      price: "Rp 380.000",
      material: "Katun",
      size: "Free Size",
      colors: ["Merah", "Kuning", "Hijau"],
      stock: 20,
      rating: 4.7,
      reviews: 32,
      detailDescription:
        "Batik dengan perpaduan warna yang cerah dan menarik. Motif yang digunakan adalah kombinasi dari berbagai daerah di Indonesia.",
      care: "Cuci dengan air dingin, setrika suhu sedang",
      origin: "Pekalongan",
    },
    {
      id: 4,
      title: "Batik Design 4",
      category: "fashion",
      client: "Domesa",
      year: "2023",
      description: "Desain batik yang terinspirasi dari budaya lokal.",
      image: "/portfolio/BATIK11.jpg",
      tags: ["Fashion", "Batik"],
      price: "Rp 650.000",
      material: "Sutra Premium",
      size: "Custom",
      colors: ["Ungu", "Emas", "Silver"],
      stock: 5,
      rating: 5.0,
      reviews: 12,
      detailDescription:
        "Batik eksklusif dengan inspirasi budaya lokal Nusantara. Setiap piece adalah karya seni yang unik dan tidak dapat direplikasi.",
      care: "Perawatan khusus, konsultasi dengan ahli",
      origin: "Yogyakarta",
    },
    {
      id: 5,
      title: "Batik Design 5",
      category: "fashion",
      client: "Domesa",
      year: "2023",
      description: "Koleksi batik dengan sentuhan modern.",
      image: "/portfolio/BATIK12.jpg",
      tags: ["Fashion", "Batik"],
      price: "Rp 420.000",
      material: "Katun Stretch",
      size: "S, M, L",
      colors: ["Navy", "Putih", "Abu"],
      stock: 12,
      rating: 4.6,
      reviews: 28,
      detailDescription:
        "Batik modern yang nyaman digunakan sehari-hari. Bahan stretch memberikan kenyamanan maksimal untuk aktivitas.",
      care: "Machine wash cold, tumble dry low",
      origin: "Jakarta",
    },
    {
      id: 6,
      title: "Batik Design 6",
      category: "fashion",
      client: "Domesa",
      year: "2023",
      description: "Koleksi batik yang cocok untuk berbagai acara.",
      image: "/portfolio/BATIK13.jpg",
      tags: ["Fashion", "Batik"],
      price: "Rp 480.000",
      material: "Katun Dobby",
      size: "All Size",
      colors: ["Coklat", "Krem", "Emas"],
      stock: 18,
      rating: 4.8,
      reviews: 35,
      detailDescription:
        "Batik serbaguna yang cocok untuk berbagai acara, dari casual hingga semi formal. Motif klasik dengan sentuhan kontemporer.",
      care: "Hand wash recommended, iron medium heat",
      origin: "Cirebon",
    },
    {
      id: 7,
      title: "Batik Design 7",
      category: "fashion",
      client: "Domesa",
      year: "2023",
      description: "Desain batik yang elegan dan anggun.",
      image: "/portfolio/BATIK14.jpg",
      tags: ["Fashion", "Batik"],
      price: "Rp 580.000",
      material: "Silk Blend",
      size: "S, M, L, XL",
      colors: ["Burgundy", "Emas", "Hitam"],
      stock: 10,
      rating: 4.9,
      reviews: 22,
      detailDescription:
        "Batik elegan dengan bahan silk blend yang memberikan kesan mewah. Cocok untuk acara formal dan pesta.",
      care: "Dry clean preferred, store properly",
      origin: "Solo",
    },
    {
      id: 8,
      title: "Batik Design 8",
      category: "fashion",
      client: "Domesa",
      year: "2023",
      description: "Koleksi batik dengan motif yang menarik.",
      image: "/portfolio/BATIK2.jpg",
      tags: ["Fashion", "Batik"],
      price: "Rp 390.000",
      material: "Katun Voile",
      size: "Free Size",
      colors: ["Biru", "Putih", "Silver"],
      stock: 25,
      rating: 4.5,
      reviews: 41,
      detailDescription:
        "Batik dengan motif menarik yang cocok untuk gaya kasual. Bahan voile yang ringan dan adem.",
      care: "Gentle wash, air dry",
      origin: "Pekalongan",
    },
    {
      id: 9,
      title: "Batik Design 9",
      category: "fashion",
      client: "Domesa",
      year: "2023",
      description: "Desain batik yang modern dan stylish.",
      image: "/portfolio/BATIK3.jpg",
      tags: ["Fashion", "Batik"],
      price: "Rp 460.000",
      material: "Cotton Linen",
      size: "S, M, L",
      colors: ["Olive", "Krem", "Coklat"],
      stock: 14,
      rating: 4.7,
      reviews: 19,
      detailDescription:
        "Batik modern dengan gaya stylish untuk generasi muda. Perpaduan cotton linen memberikan tekstur yang unik.",
      care: "Cold wash, reshape while damp",
      origin: "Bandung",
    },
    {
      id: 10,
      title: "Batik Design 10",
      category: "fashion",
      client: "Domesa",
      year: "2023",
      description: "Koleksi batik yang kaya akan detail.",
      image: "/portfolio/BATIK4.jpg",
      tags: ["Fashion", "Batik"],
      price: "Rp 720.000",
      material: "Sutra Organik",
      size: "Custom",
      colors: ["Emerald", "Emas", "Putih"],
      stock: 3,
      rating: 5.0,
      reviews: 8,
      detailDescription:
        "Batik premium dengan detail yang sangat kaya. Menggunakan sutra organik berkualitas tinggi dengan proses pewarnaan alami.",
      care: "Professional care only",
      origin: "Yogyakarta",
    },
    {
      id: 11,
      title: "Batik Design 11",
      category: "fashion",
      client: "Domesa",
      year: "2023",
      description: "Desain batik yang cocok untuk acara formal.",
      image: "/portfolio/BATIK6.jpg",
      tags: ["Fashion", "Batik"],
      price: "Rp 550.000",
      material: "Katun Jacquard",
      size: "S, M, L, XL",
      colors: ["Navy", "Emas", "Maroon"],
      stock: 9,
      rating: 4.8,
      reviews: 26,
      detailDescription:
        "Batik formal dengan bahan jacquard yang memberikan tekstur mewah. Ideal untuk acara bisnis dan formal.",
      care: "Professional cleaning recommended",
      origin: "Solo",
    },
    {
      id: 12,
      title: "Batik Design 12",
      category: "fashion",
      client: "Domesa",
      year: "2023",
      description: "Koleksi batik dengan motif yang elegan.",
      image: "/portfolio/BATIK9.jpg",
      tags: ["Fashion", "Batik"],
      price: "Rp 410.000",
      material: "Katun Combed",
      size: "All Size",
      colors: ["Pink", "Putih", "Emas"],
      stock: 16,
      rating: 4.6,
      reviews: 33,
      detailDescription:
        "Batik elegan dengan motif feminin. Bahan katun combed yang lembut dan nyaman untuk penggunaan sehari-hari.",
      care: "Machine wash gentle, low heat dry",
      origin: "Cirebon",
    },
    {
      id: 13,
      title: "Batik Balian",
      category: "kain",
      client: "Domesa",
      year: "2023",
      description: "Desain batik yang terinspirasi dari Bali.",
      image: "/portfolio/BatikBalian.jpg",
      tags: ["Kain", "Batik"],
      price: "Rp 280.000",
      material: "Katun Prima",
      size: "2.5 meter",
      colors: ["Coklat", "Emas", "Merah"],
      stock: 30,
      rating: 4.7,
      reviews: 45,
      detailDescription:
        "Kain batik dengan motif khas Bali. Cocok untuk dijadikan berbagai macam pakaian atau dekorasi.",
      care: "Hand wash cold, air dry",
      origin: "Bali",
    },
    {
      id: 14,
      title: "Batik Kawung",
      category: "kain",
      client: "Domesa",
      year: "2023",
      description: "Koleksi batik dengan motif Kawung.",
      image: "/portfolio/BatikKawung.webp",
      tags: ["Kain", "Batik"],
      price: "Rp 320.000",
      material: "Katun Primisima",
      size: "2.5 meter",
      colors: ["Hitam", "Putih", "Coklat"],
      stock: 22,
      rating: 4.9,
      reviews: 38,
      detailDescription:
        "Motif Kawung klasik yang melambangkan kesucian dan kebijaksanaan. Kain berkualitas tinggi dengan pewarnaan yang tahan lama.",
      care: "Gentle wash, avoid bleach",
      origin: "Yogyakarta",
    },
    {
      id: 15,
      title: "Batik Mega Mendung",
      category: "kain",
      client: "Domesa",
      year: "2023",
      description: "Desain batik Mega Mendung yang khas.",
      image: "/portfolio/BatikMegaMendung.webp",
      tags: ["Kain", "Batik"],
      price: "Rp 350.000",
      material: "Katun Voile",
      size: "2.5 meter",
      colors: ["Biru", "Putih", "Indigo"],
      stock: 18,
      rating: 4.8,
      reviews: 29,
      detailDescription:
        "Motif Mega Mendung khas Cirebon dengan gradasi warna yang indah. Melambangkan kesabaran dan ketenangan.",
      care: "Cold wash, iron while damp",
      origin: "Cirebon",
    },
    {
      id: 16,
      title: "Batik Parang",
      category: "kain",
      client: "Domesa",
      year: "2023",
      description: "Koleksi batik dengan motif Parang.",
      image: "/portfolio/BatikParang.jpeg",
      tags: ["Kain", "Batik"],
      price: "Rp 380.000",
      material: "Katun Dobby",
      size: "2.5 meter",
      colors: ["Coklat", "Emas", "Hitam"],
      stock: 15,
      rating: 4.9,
      reviews: 31,
      detailDescription:
        "Motif Parang yang melambangkan kekuatan dan keteguhan. Dibuat dengan teknik tradisional yang autentik.",
      care: "Hand wash preferred, medium iron",
      origin: "Solo",
    },
    {
      id: 17,
      title: "Batik Parang 2",
      category: "kain",
      client: "Domesa",
      year: "2023",
      description: "Desain batik Parang yang unik.",
      image: "/portfolio/BatikParangg.jpg",
      tags: ["Kain", "Batik"],
      price: "Rp 420.000",
      material: "Sutra Alam",
      size: "2.5 meter",
      colors: ["Burgundy", "Emas", "Hitam"],
      stock: 8,
      rating: 5.0,
      reviews: 15,
      detailDescription:
        "Variasi motif Parang dengan bahan sutra alam premium. Cocok untuk pembuatan kebaya atau busana formal.",
      care: "Dry clean only, professional handling",
      origin: "Yogyakarta",
    },
    {
      id: 18,
      title: "Batik Solo Truntum",
      category: "kain",
      client: "Domesa",
      year: "2023",
      description: "Koleksi batik Solo Truntum yang elegan.",
      image: "/portfolio/BatikSoloTruntum1.jpg",
      tags: ["Kain", "Batik"],
      price: "Rp 450.000",
      material: "Katun Sutra",
      size: "2.5 meter",
      colors: ["Coklat", "Emas", "Krem"],
      stock: 12,
      rating: 4.8,
      reviews: 27,
      detailDescription:
        "Motif Truntum khas Solo yang melambangkan cinta kasih yang tumbuh kembali. Perpaduan katun sutra yang elegan.",
      care: "Gentle wash, air dry in shade",
      origin: "Solo",
    },
    {
      id: 19,
      title: "Hiasan Dinding 1",
      category: "decor",
      client: "Domesa",
      year: "2023",
      description: "Dekorasi batik yang indah.",
      image: "/portfolio/DekorasiBatik1.jpg",
      tags: ["Dekorasi", "Batik"],
      price: "Rp 180.000",
      material: "Canvas Premium",
      size: "40x60 cm",
      colors: ["Coklat", "Emas", "Krem"],
      stock: 25,
      rating: 4.6,
      reviews: 42,
      detailDescription:
        "Hiasan dinding dengan motif batik yang dicetak pada canvas premium. Cocok untuk dekorasi ruang tamu atau kantor.",
      care: "Dust regularly, avoid direct sunlight",
      origin: "Jakarta",
    },
    {
      id: 20,
      title: "Hiasan Dinding 2",
      category: "decor",
      client: "Domesa",
      year: "2023",
      description: "Dekorasi dinding dengan motif batik.",
      image: "/portfolio/DekorDinding.jpg",
      tags: ["Dekorasi", "Batik"],
      price: "Rp 220.000",
      material: "Kayu & Kain",
      size: "50x70 cm",
      colors: ["Natural", "Coklat", "Emas"],
      stock: 15,
      rating: 4.7,
      reviews: 23,
      detailDescription:
        "Kombinasi kayu dan kain batik untuk dekorasi dinding yang unik. Frame kayu solid dengan finishing natural.",
      care: "Clean with dry cloth, avoid moisture",
      origin: "Yogyakarta",
    },
    {
      id: 21,
      title: "Hiasan Dinding 3",
      category: "decor",
      client: "Domesa",
      year: "2023",
      description: "Hiasan dinding yang menarik.",
      image: "/portfolio/HiasanDinding3.jpg",
      tags: ["Dekorasi", "Batik"],
      price: "Rp 160.000",
      material: "Fiber & Batik",
      size: "35x50 cm",
      colors: ["Hitam", "Putih", "Emas"],
      stock: 20,
      rating: 4.5,
      reviews: 18,
      detailDescription:
        "Hiasan dinding modern dengan perpaduan fiber dan motif batik. Ringan dan mudah dipasang.",
      care: "Wipe with damp cloth, handle carefully",
      origin: "Bandung",
    },
    {
      id: 22,
      title: "Batik Kawung 2",
      category: "kain",
      client: "Domesa",
      year: "2023",
      description: "Koleksi batik Kawung yang menarik.",
      image: "/portfolio/Kawung2.webp",
      tags: ["Kain", "Batik"],
      price: "Rp 300.000",
      material: "Katun",
      size: "2.5 meter",
      colors: ["Biru", "Putih", "Navy"],
      stock: 28,
      rating: 4.6,
      reviews: 36,
      detailDescription:
        "Variasi motif Kawung dengan warna biru yang menenangkan. Cocok untuk berbagai keperluan fashion.",
      care: "Machine wash cold, tumble dry low",
      origin: "Yogyakarta",
    },
    {
      id: 23,
      title: "Batik Mega Mendung 2",
      category: "kain",
      client: "Domesa",
      year: "2023",
      description: "Desain batik Mega Mendung yang khas.",
      image: "/portfolio/MegaMendung.jpg",
      tags: ["Kain", "Batik"],
      price: "Rp 340.000",
      material: "Katun Prima",
      size: "2.5 meter",
      colors: ["Hijau", "Putih", "Emas"],
      stock: 19,
      rating: 4.7,
      reviews: 25,
      detailDescription:
        "Mega Mendung dengan warna hijau yang segar. Motif awan yang mengalir dengan gradasi warna yang halus.",
      care: "Hand wash recommended, iron medium",
      origin: "Cirebon",
    },
    {
      id: 24,
      title: "Batik Sekar Jagad 1",
      category: "kain",
      client: "Domesa",
      year: "2023",
      description: "Koleksi batik Sekar Jagad.",
      image: "/portfolio/SekarJagad3.jpg",
      tags: ["Kain", "Batik"],
      price: "Rp 390.000",
      material: "Katun Sutra",
      size: "2.5 meter",
      colors: ["Multi", "Emas", "Merah"],
      stock: 14,
      rating: 4.8,
      reviews: 21,
      detailDescription:
        "Sekar Jagad yang berarti bunga dunia, menggambarkan keberagaman yang indah. Perpaduan warna yang harmonis.",
      care: "Gentle wash, professional iron",
      origin: "Solo",
    },
    {
      id: 25,
      title: "Batik Sekar Jagad 2",
      category: "kain",
      client: "Domesa",
      year: "2023",
      description: "Koleksi batik Sekar Jagad.",
      image: "/portfolio/SekarJagad4.jpg",
      tags: ["Kain", "Batik"],
      price: "Rp 410.000",
      material: "Sutra Blend",
      size: "2.5 meter",
      colors: ["Ungu", "Emas", "Pink"],
      stock: 11,
      rating: 4.9,
      reviews: 17,
      detailDescription:
        "Variasi Sekar Jagad dengan dominasi warna ungu yang elegan. Bahan sutra blend yang lembut dan berkilau.",
      care: "Dry clean preferred, store carefully",
      origin: "Yogyakarta",
    },
    {
      id: 26,
      title: "Batik Sekar Jagat 3",
      category: "kain",
      client: "Domesa",
      year: "2023",
      description: "Koleksi batik Sekar Jagat.",
      image: "/portfolio/SekarJagat1.jpg",
      tags: ["Kain", "Batik"],
      price: "Rp 360.000",
      material: "Katun Voile",
      size: "2.5 meter",
      colors: ["Orange", "Kuning", "Merah"],
      stock: 17,
      rating: 4.6,
      reviews: 28,
      detailDescription:
        "Sekar Jagat dengan warna-warna hangat yang ceria. Bahan voile yang ringan dan nyaman.",
      care: "Cold wash, air dry",
      origin: "Pekalongan",
    },
    {
      id: 27,
      title: "Batik Sekar Jagad 4",
      category: "kain",
      client: "Domesa",
      year: "2023",
      description: "Koleksi batik Sekar Jagad.",
      image: "/portfolio/SekatrJagad2.jpg",
      tags: ["Kain", "Batik"],
      price: "Rp 380.000",
      material: "Katun Dobby",
      size: "2.5 meter",
      colors: ["Hijau", "Emas", "Coklat"],
      stock: 13,
      rating: 4.7,
      reviews: 24,
      detailDescription:
        "Sekar Jagad dengan nuansa alam yang menenangkan. Motif yang detail dengan pewarnaan yang tahan lama.",
      care: "Gentle machine wash, medium iron",
      origin: "Solo",
    },
    {
      id: 28,
      title: "Souvenir 1",
      category: "souvenir",
      client: "Domesa",
      year: "2023",
      description: "Souvenir batik yang menarik.",
      image: "/portfolio/Souvenir1.jpg",
      tags: ["Souvenir", "Batik"],
      price: "Rp 85.000",
      material: "Kayu & Batik",
      size: "15x10 cm",
      colors: ["Natural", "Coklat"],
      stock: 50,
      rating: 4.4,
      reviews: 67,
      detailDescription:
        "Souvenir unik berupa miniatur dengan motif batik. Cocok sebagai oleh-oleh atau hadiah.",
      care: "Keep dry, dust regularly",
      origin: "Yogyakarta",
    },
    {
      id: 29,
      title: "Souvenir 2",
      category: "souvenir",
      client: "Domesa",
      year: "2023",
      description: "Souvenir batik yang unik.",
      image: "/portfolio/Souvenir11.png",
      tags: ["Souvenir", "Batik"],
      price: "Rp 120.000",
      material: "Keramik & Batik",
      size: "12x8 cm",
      colors: ["Putih", "Biru", "Emas"],
      stock: 35,
      rating: 4.6,
      reviews: 43,
      detailDescription:
        "Souvenir keramik dengan motif batik yang diaplikasikan dengan teknik khusus. Tahan lama dan indah.",
      care: "Handle with care, clean gently",
      origin: "Bandung",
    },
    {
      id: 30,
      title: "Souvenir 3",
      category: "souvenir",
      client: "Domesa",
      year: "2023",
      description: "Souvenir batik yang menarik.",
      image: "/portfolio/Souvenir3.jpg",
      tags: ["Souvenir", "Batik"],
      price: "Rp 95.000",
      material: "Logam & Batik",
      size: "10x6 cm",
      colors: ["Silver", "Emas", "Coklat"],
      stock: 40,
      rating: 4.5,
      reviews: 52,
      detailDescription:
        "Souvenir logam dengan aplikasi motif batik. Finishing premium dengan detail yang halus.",
      care: "Polish regularly, avoid moisture",
      origin: "Jakarta",
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  // Global function to handle product detail view
  const handleViewDetail = (productId) => {
    const product = portfolioItems.find((item) => item.id === productId);
    if (product) {
      setSelectedProduct(product);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Function to render star rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star
          key="half"
          size={16}
          className="fill-yellow-400/50 text-yellow-400"
        />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} size={16} className="text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-batik-cream to-batik-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-batik-brown mb-6">
            Product Kami
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jelajahi berbagai produk batik berkualitas tinggi yang telah kami
            ciptakan dengan penuh dedikasi dan keahlian.
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
                      <button
                        onClick={() => handleViewDetail(item.id)}
                        className="w-full bg-white/20 backdrop-blur-sm text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>Lihat Detail</span>
                      </button>
                    </div>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-batik-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.price}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-batik-cream text-batik-brown px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-batik-brown mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm">
                    {item.description}
                  </p>

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

                  {/* Rating */}
                  {item.rating && (
                    <div className="flex items-center space-x-2 mt-3">
                      <div className="flex space-x-1">
                        {renderStars(item.rating)}
                      </div>
                      <span className="text-sm text-gray-500">
                        ({item.reviews})
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
              <h2 className="font-serif text-2xl font-bold text-batik-brown">
                {selectedProduct.title}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="space-y-4">
                  <img
                    src={selectedProduct.image || "/placeholder.svg"}
                    alt={selectedProduct.title}
                    className="w-full h-96 object-cover rounded-xl shadow-lg"
                  />

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-batik-gold text-white py-3 px-4 rounded-lg font-semibold hover:bg-batik-brown transition-colors flex items-center justify-center space-x-2">
                      <ShoppingCart size={20} />
                      <span>Tambah ke Keranjang</span>
                    </button>
                    <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Heart size={20} className="text-gray-600" />
                    </button>
                    <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Share2 size={20} className="text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                  {/* Price and Rating */}
                  <div className="space-y-3">
                    <div className="text-3xl font-bold text-batik-brown">
                      {selectedProduct.price}
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-1">
                        {renderStars(selectedProduct.rating)}
                      </div>
                      <span className="text-gray-600">
                        ({selectedProduct.reviews} ulasan)
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="font-semibold text-batik-brown mb-2">
                      Deskripsi
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedProduct.detailDescription}
                    </p>
                  </div>

                  {/* Specifications */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-batik-brown mb-2">
                        Spesifikasi
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Material:</span>
                          <span className="font-medium">
                            {selectedProduct.material}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Ukuran:</span>
                          <span className="font-medium">
                            {selectedProduct.size}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Stok:</span>
                          <span className="font-medium">
                            {selectedProduct.stock} pcs
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Asal:</span>
                          <span className="font-medium flex items-center">
                            <MapPin size={12} className="mr-1" />
                            {selectedProduct.origin}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-batik-brown mb-2">
                        Warna Tersedia
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.colors.map((color, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-batik-cream text-batik-brown text-xs rounded-full"
                          >
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Care Instructions */}
                  <div>
                    <h4 className="font-semibold text-batik-brown mb-2">
                      Petunjuk Perawatan
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {selectedProduct.care}
                    </p>
                  </div>

                  {/* Tags */}
                  <div>
                    <h4 className="font-semibold text-batik-brown mb-2">
                      Tags
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mt-8 p-6 bg-batik-cream/30 rounded-xl">
                <h3 className="font-serif text-lg font-semibold text-batik-brown mb-4">
                  Butuh Informasi Lebih Lanjut?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3">
                    <Phone size={20} className="text-batik-gold" />
                    <div>
                      <div className="font-medium text-batik-brown">
                        Telepon
                      </div>
                      <div className="text-sm text-gray-600">
                        +62 21 1234 5678
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={20} className="text-batik-gold" />
                    <div>
                      <div className="font-medium text-batik-brown">Email</div>
                      <div className="text-sm text-gray-600">
                        info@domesa.co
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin size={20} className="text-batik-gold" />
                    <div>
                      <div className="font-medium text-batik-brown">Lokasi</div>
                      <div className="text-sm text-gray-600">
                        Yogyakarta, Indonesia
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-20 bg-batik-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-batik-brown mb-4">
              Pencapaian Kami
            </h2>
            <p className="text-gray-600">
              Angka-angka yang menunjukkan dedikasi dan kepercayaan klien
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-batik-brown mb-2">
                150+
              </div>
              <div className="text-gray-600">Proyek Selesai</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-batik-brown mb-2">
                50+
              </div>
              <div className="text-gray-600">Klien Korporat</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-batik-brown mb-2">
                98%
              </div>
              <div className="text-gray-600">Tingkat Kepuasan</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-batik-brown mb-2">
                15+
              </div>
              <div className="text-gray-600">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-batik-brown to-batik-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Tertarik Berkolaborasi?
          </h2>
          <p className="text-xl text-batik-cream mb-8 max-w-3xl mx-auto">
            Mari wujudkan proyek impian Anda bersama tim profesional kami.
            Konsultasi gratis untuk semua jenis proyek.
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
  );
};

export default Product;
