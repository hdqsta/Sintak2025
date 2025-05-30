"use client";

import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  Palette,
  Hand,
  Sparkles,
  Shirt,
  Brush,
} from "lucide-react";

const HeroSection = () => {
  const [motifs, setMotifs] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [waxDrops, setWaxDrops] = useState([]);
  const [cantingPosition, setCantingPosition] = useState({ x: 50, y: 50 });
  const [showInstructions, setShowInstructions] = useState(true);
  const [selectedMotif, setSelectedMotif] = useState(0);
  const [fabricColor, setFabricColor] = useState("#F5F5DC"); // Default cream
  const [motifColors, setMotifColors] = useState({}); // Object with motif id as key
  const [waxLineColor, setWaxLineColor] = useState("#DAA520"); // Default gold
  const [coloringTarget, setColoringTarget] = useState("fabric"); // fabric, motif, canting
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [waxLines, setWaxLines] = useState([]);

  // Animation states for title
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showCanting, setShowCanting] = useState(true);
  const [cantingAnimationPosition, setCantingAnimationPosition] = useState({
    x: 0,
    y: 0,
  });
  const [completedWords, setCompletedWords] = useState([]);

  const titleWords = [
    { text: "Warisan", delay: 0 },
    { text: "Budaya", delay: 1500 },
    { text: "Indonesia", delay: 3000 },
    { text: "Modern", delay: 4500 },
  ];

  const steps = [
    { name: "Sketsa", color: "bg-batik-cream", icon: "✏️" },
    { name: "Canting", color: "bg-batik-gold", icon: "🖌️" },
    { name: "Pewarnaan", color: "bg-batik-maroon", icon: "🎨" },
    { name: "Finishing", color: "bg-batik-navy", icon: "✨" },
  ];

  // Expanded color palettes
  const fabricColors = [
    { name: "Krem", color: "#F5F5DC" },
    { name: "Putih", color: "#FFFFFF" },
    { name: "Coklat Muda", color: "#DEB887" },
    { name: "Kuning Gading", color: "#FFFFF0" },
    { name: "Abu-abu Terang", color: "#F5F5F5" },
  ];

  const motifColors_palette = [
    { name: "Coklat Tua", color: "#8B4513" },
    { name: "Emas", color: "#DAA520" },
    { name: "Merah Maroon", color: "#800000" },
    { name: "Biru Navy", color: "#1e3a8a" },
    { name: "Hijau Tua", color: "#006400" },
    { name: "Ungu Tua", color: "#4B0082" },
  ];

  const cantingColors = [
    { name: "Emas", color: "#DAA520" },
    { name: "Coklat", color: "#8B4513" },
    { name: "Kuning", color: "#FFD700" },
    { name: "Orange", color: "#FF8C00" },
    { name: "Merah Bata", color: "#B22222" },
  ];

  const motifTypes = [
    { name: "Parang", description: "Motif klasik berbentuk diagonal" },
    { name: "Kawung", description: "Motif bulat empat segi" },
    { name: "Mega Mendung", description: "Motif awan bergelombang" },
    { name: "Truntum", description: "Motif bunga kecil" },
    { name: "Sekar Jagad", description: "Motif bunga dunia" },
  ];

  // Title animation effect
  useEffect(() => {
    const animateTitle = () => {
      titleWords.forEach((word, index) => {
        setTimeout(() => {
          // Animate canting to word position
          const wordPositions = [
            { x: 20, y: 30 }, // Warisan
            { x: 50, y: 30 }, // Budaya
            { x: 20, y: 70 }, // Indonesia
            { x: 50, y: 70 }, // Modern
          ];

          setCantingAnimationPosition(wordPositions[index]);
          setCurrentWordIndex(index);

          // Show word after canting reaches position
          setTimeout(() => {
            setCompletedWords((prev) => [...prev, index]);
          }, 800);

          // Hide canting after last word
          if (index === titleWords.length - 1) {
            setTimeout(() => {
              setShowCanting(false);
            }, 1200);
          }
        }, word.delay);
      });
    };

    animateTitle();
  }, []);

  // Handle mouse movement for canting tool
  const handleMouseMove = (e) => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });

      if (isDrawing && currentStep === 1) {
        setCantingPosition({ x, y });
        // Add wax drop at current position
        addWaxDrop(x, y);
        // Add wax line for continuous drawing
        addWaxLine(x, y);
      }
    }
  };

  // Handle mouse down for drawing
  const handleMouseDown = (e) => {
    if (currentStep === 1) {
      setIsDrawing(true);
      const rect = canvasRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setCantingPosition({ x, y });
    }
  };

  // Handle mouse up for drawing
  const handleMouseUp = () => {
    if (currentStep === 1) {
      setIsDrawing(false);
    }
  };

  // Add motif when clicking in sketch mode
  const handleCanvasClick = (e) => {
    if (canvasRef.current && currentStep === 0) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      const newMotif = {
        id: Date.now(),
        x,
        y,
        type: selectedMotif,
        size: Math.random() * 40 + 30,
        rotation: Math.random() * 360,
      };

      setMotifs((prev) => [...prev, newMotif]);
      // Set default color for new motif
      setMotifColors((prev) => ({
        ...prev,
        [newMotif.id]: "#8B4513", // Default brown
      }));
      setShowInstructions(false);
    }
  };

  // Add wax drop
  const addWaxDrop = (x, y) => {
    const newDrop = {
      id: Date.now() + Math.random(),
      x,
      y,
      size: Math.random() * 6 + 3,
    };

    setWaxDrops((prev) => [...prev, newDrop]);

    // Remove drop after animation
    setTimeout(() => {
      setWaxDrops((prev) => prev.filter((drop) => drop.id !== newDrop.id));
    }, 2000);
  };

  // Add wax line for continuous drawing
  const addWaxLine = (x, y) => {
    const newLine = {
      id: Date.now() + Math.random(),
      x,
      y,
      size: Math.random() * 3 + 2,
    };

    setWaxLines((prev) => [...prev, newLine]);

    // Keep only recent lines to avoid performance issues
    if (waxLines.length > 50) {
      setWaxLines((prev) => prev.slice(-40));
    }
  };

  // Handle color application
  const applyColor = (color) => {
    if (coloringTarget === "fabric") {
      setFabricColor(color);
    } else if (coloringTarget === "motif") {
      // Apply to all motifs
      const newMotifColors = {};
      motifs.forEach((motif) => {
        newMotifColors[motif.id] = color;
      });
      setMotifColors((prev) => ({ ...prev, ...newMotifColors }));
    } else if (coloringTarget === "canting") {
      setWaxLineColor(color);
    }
  };

  // Handle step change
  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
    setIsDrawing(false);
  };

  // Get current color palette based on target
  const getCurrentColorPalette = () => {
    switch (coloringTarget) {
      case "fabric":
        return fabricColors;
      case "motif":
        return motifColors_palette;
      case "canting":
        return cantingColors;
      default:
        return fabricColors;
    }
  };

  // Render motif based on type with custom color
  const renderMotif = (motif) => {
    const motifColor = motifColors[motif.id] || "#8B4513";
    const baseStyle = {
      left: `${motif.x}%`,
      top: `${motif.y}%`,
      transform: `translate(-50%, -50%) rotate(${motif.rotation}deg)`,
      width: `${motif.size}px`,
      height: `${motif.size}px`,
    };

    switch (motif.type) {
      case 0: // Parang
        return (
          <div
            key={motif.id}
            className="absolute animate-pulse"
            style={baseStyle}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d="M10,50 Q30,20 50,50 Q70,80 90,50"
                stroke={motifColor}
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M20,60 Q40,30 60,60 Q80,90 100,60"
                stroke={motifColor}
                strokeWidth="2"
                fill="none"
                opacity="0.7"
              />
            </svg>
          </div>
        );

      case 1: // Kawung
        return (
          <div
            key={motif.id}
            className="absolute animate-pulse"
            style={baseStyle}
          >
            <div className="w-full h-full relative">
              <div
                className="absolute inset-0 border-2 rounded-full"
                style={{ borderColor: motifColor }}
              ></div>
              <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
                style={{ backgroundColor: motifColor }}
              ></div>
              <div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full"
                style={{ backgroundColor: motifColor }}
              ></div>
              <div
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
                style={{ backgroundColor: motifColor }}
              ></div>
              <div
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full"
                style={{ backgroundColor: motifColor }}
              ></div>
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                style={{ backgroundColor: motifColor, opacity: 0.8 }}
              ></div>
            </div>
          </div>
        );

      case 2: // Mega Mendung
        return (
          <div
            key={motif.id}
            className="absolute animate-pulse"
            style={baseStyle}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d="M10,40 Q20,20 30,40 Q40,20 50,40 Q60,20 70,40 Q80,20 90,40"
                stroke={motifColor}
                strokeWidth="4"
                fill="none"
              />
              <path
                d="M15,60 Q25,40 35,60 Q45,40 55,60 Q65,40 75,60 Q85,40 95,60"
                stroke={motifColor}
                strokeWidth="3"
                fill="none"
                opacity="0.8"
              />
              <path
                d="M20,80 Q30,60 40,80 Q50,60 60,80 Q70,60 80,80"
                stroke={motifColor}
                strokeWidth="2"
                fill="none"
                opacity="0.6"
              />
            </svg>
          </div>
        );

      case 3: // Truntum
        return (
          <div
            key={motif.id}
            className="absolute animate-pulse"
            style={baseStyle}
          >
            <div className="w-full h-full relative">
              <div
                className="absolute inset-0 border-2 rounded-full"
                style={{ borderColor: motifColor }}
              ></div>
              <div
                className="absolute inset-2 border rounded-full"
                style={{ borderColor: motifColor, opacity: 0.7 }}
              ></div>
              <div
                className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full"
                style={{ backgroundColor: motifColor }}
              ></div>
              <div
                className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full"
                style={{ backgroundColor: motifColor }}
              ></div>
              <div
                className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full"
                style={{ backgroundColor: motifColor }}
              ></div>
              <div
                className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full"
                style={{ backgroundColor: motifColor }}
              ></div>
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                style={{ backgroundColor: motifColor, opacity: 0.9 }}
              ></div>
            </div>
          </div>
        );

      case 4: // Sekar Jagad
        return (
          <div
            key={motif.id}
            className="absolute animate-pulse"
            style={baseStyle}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke={motifColor}
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="25"
                stroke={motifColor}
                strokeWidth="2"
                fill="none"
                opacity="0.8"
              />
              <circle cx="50" cy="50" r="10" fill={motifColor} />
              <path
                d="M50,10 L55,25 L50,40 L45,25 Z"
                fill={motifColor}
                transform="rotate(0 50 50)"
                opacity="0.7"
              />
              <path
                d="M50,10 L55,25 L50,40 L45,25 Z"
                fill={motifColor}
                transform="rotate(90 50 50)"
                opacity="0.7"
              />
              <path
                d="M50,10 L55,25 L50,40 L45,25 Z"
                fill={motifColor}
                transform="rotate(180 50 50)"
                opacity="0.7"
              />
              <path
                d="M50,10 L55,25 L50,40 L45,25 Z"
                fill={motifColor}
                transform="rotate(270 50 50)"
                opacity="0.7"
              />
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Interactive Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-batik-cream via-batik-gold/20 to-batik-brown/10">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(218,165,32,0.3)_0%,transparent_50%)] animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(139,69,19,0.3)_0%,transparent_50%)] animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Animated Title with Canting */}
          <div className="relative mb-6">
            {/* Animated Canting Tool */}
            {showCanting && (
              <div
                className="absolute z-20 transition-all duration-1000 ease-in-out"
                style={{
                  left: `${cantingAnimationPosition.x}%`,
                  top: `${cantingAnimationPosition.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="relative animate-bounce">
                  <div className="w-12 h-2 bg-gradient-to-r from-batik-brown to-batik-gold rounded-full shadow-lg"></div>
                  <div className="absolute -right-1 -top-1 w-4 h-4 bg-batik-gold rounded-full shadow-lg animate-pulse">
                    <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-75"></div>
                  </div>
                  <div className="absolute -right-0.5 top-0 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-bounce"></div>

                  {/* Wax drops from canting */}
                  <div className="absolute -bottom-2 -right-1 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
                  <div
                    className="absolute -bottom-3 right-0 w-0.5 h-0.5 bg-orange-300 rounded-full animate-ping"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            )}

            {/* Title Text */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-batik-brown mb-4 sm:mb-6 mt-8 sm:mt-12 leading-tight">
              <span className="block">Warisan Budaya</span>
              <span className="block text-batik-gold">Indonesia Modern</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto animate-slide-up px-4 sm:px-0 leading-relaxed">
              Temukan keindahan handycraft Indonesia yang memadukan tradisi
              batik dengan desain kontemporer. Coba pengalaman membatik
              interaktif di bawah ini!
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-slide-up px-4 sm:px-0"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              to="/services"
              className="w-full sm:w-auto bg-batik-gold hover:bg-batik-brown text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center text-sm sm:text-base"
            >
              Jelajahi Produk
              <ArrowRight className="ml-2" size={16} />
            </Link>

            <button className="w-full sm:w-auto border-2 border-batik-brown text-batik-brown hover:bg-batik-brown hover:text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition-all duration-300 inline-flex items-center justify-center text-sm sm:text-base">
              <Play className="mr-2" size={16} />
              Tonton Video
            </button>
          </div>
        </div>

        {/* Interactive Batik Canvas */}
        <div className="mt-16 relative">
          <div className="w-full max-w-6xl mx-auto">
            {/* Instructions */}
            {showInstructions && (
              <div className="mb-4 sm:mb-6 bg-batik-gold/10 border border-batik-gold/30 rounded-lg p-3 sm:p-4 animate-bounce mx-4 sm:mx-0">
                <div className="flex items-center justify-center space-x-2 text-batik-brown">
                  <Hand size={16} className="sm:w-5 sm:h-5" />
                  <span className="font-medium text-sm sm:text-base text-center">
                    {currentStep === 0 &&
                      "Pilih motif di bawah, lalu klik pada kanvas untuk menambah motif batik!"}
                    {currentStep === 1 &&
                      "Klik dan drag mouse untuk menggambar dengan canting!"}
                    {currentStep === 2 &&
                      "Pilih target pewarnaan, lalu pilih warna untuk mengubah warna elemen!"}
                    {currentStep === 3 &&
                      "Proses finishing - batik Anda sudah jadi!"}
                  </span>
                </div>
              </div>
            )}

            {/* Motif Selector for Sketch Step */}
            {currentStep === 0 && (
              <div className="mb-6 bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-batik-gold/30">
                <h3 className="font-serif text-lg font-semibold text-batik-brown mb-3">
                  Pilih Motif Batik:
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {motifTypes.map((motif, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedMotif(index)}
                      className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                        selectedMotif === index
                          ? "border-batik-gold bg-batik-gold/20 shadow-lg"
                          : "border-batik-brown/30 bg-white hover:bg-batik-cream"
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-1">{motif.name}</div>
                        <div className="text-xs text-gray-600">
                          {motif.description}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Controls for Coloring Step */}
            {currentStep === 2 && (
              <div className="mb-6 bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-batik-gold/30">
                <h3 className="font-serif text-lg font-semibold text-batik-brown mb-4">
                  Pewarnaan Batik:
                </h3>

                {/* Target Selector */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-3">
                    Pilih yang ingin diwarnai:
                  </p>
                  <div className="flex justify-center space-x-3">
                    <button
                      onClick={() => setColoringTarget("fabric")}
                      className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 flex items-center space-x-2 ${
                        coloringTarget === "fabric"
                          ? "border-batik-gold bg-batik-gold/20 text-batik-brown"
                          : "border-gray-300 bg-white text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <Shirt size={16} />
                      <span>Kain</span>
                    </button>
                    <button
                      onClick={() => setColoringTarget("motif")}
                      className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 flex items-center space-x-2 ${
                        coloringTarget === "motif"
                          ? "border-batik-gold bg-batik-gold/20 text-batik-brown"
                          : "border-gray-300 bg-white text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <Palette size={16} />
                      <span>Motif</span>
                    </button>
                    <button
                      onClick={() => setColoringTarget("canting")}
                      className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 flex items-center space-x-2 ${
                        coloringTarget === "canting"
                          ? "border-batik-gold bg-batik-gold/20 text-batik-brown"
                          : "border-gray-300 bg-white text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <Brush size={16} />
                      <span>Canting</span>
                    </button>
                  </div>
                </div>

                {/* Color Palette */}
                <div>
                  <p className="text-sm text-gray-600 mb-3">
                    Pilih warna untuk{" "}
                    {coloringTarget === "fabric"
                      ? "kain"
                      : coloringTarget === "motif"
                      ? "motif"
                      : "canting"}
                    :
                  </p>
                  <div className="flex justify-center flex-wrap gap-3">
                    {getCurrentColorPalette().map((colorItem, index) => (
                      <button
                        key={index}
                        onClick={() => applyColor(colorItem.color)}
                        className="group relative"
                        title={colorItem.name}
                      >
                        <div
                          className="w-12 h-12 rounded-full border-4 border-white shadow-lg hover:scale-110 transition-transform duration-200"
                          style={{ backgroundColor: colorItem.color }}
                        ></div>
                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {colorItem.name}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Interactive Canvas - Fixed Size */}
            <div
              ref={canvasRef}
              className={`relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-batik-gold/30 ${
                currentStep === 0
                  ? "cursor-crosshair"
                  : currentStep === 1
                  ? "cursor-none"
                  : "cursor-pointer"
              }`}
              style={{ backgroundColor: fabricColor }}
              onClick={currentStep === 2 ? undefined : handleCanvasClick}
              onMouseMove={handleMouseMove}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {/* Fabric Texture */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)]"></div>
              </div>

              {/* Rendered Motifs */}
              {motifs.map((motif) => renderMotif(motif))}

              {/* Wax Lines (permanent drawing) */}
              {waxLines.map((line) => (
                <div
                  key={line.id}
                  className="absolute rounded-full"
                  style={{
                    left: `${line.x}%`,
                    top: `${line.y}%`,
                    transform: "translate(-50%, -50%)",
                    width: `${line.size}px`,
                    height: `${line.size}px`,
                    backgroundColor: waxLineColor,
                    opacity: 0.8,
                  }}
                ></div>
              ))}

              {/* Wax Drops (temporary animation) */}
              {waxDrops.map((drop) => (
                <div
                  key={drop.id}
                  className="absolute animate-ping"
                  style={{
                    left: `${drop.x}%`,
                    top: `${drop.y}%`,
                    transform: "translate(-50%, -50%)",
                    width: `${drop.size}px`,
                    height: `${drop.size}px`,
                  }}
                >
                  <div
                    className="w-full h-full rounded-full opacity-80"
                    style={{ backgroundColor: waxLineColor }}
                  ></div>
                </div>
              ))}

              {/* Canting Tool */}
              {currentStep === 1 && (
                <div
                  className="absolute pointer-events-none transition-all duration-75 z-20"
                  style={{
                    left: `${mousePosition.x}%`,
                    top: `${mousePosition.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="relative">
                    <div className="w-16 h-3 bg-gradient-to-r from-batik-brown to-batik-gold rounded-full shadow-lg"></div>
                    <div
                      className={`absolute -right-2 -top-1 w-5 h-5 rounded-full shadow-lg ${
                        isDrawing ? "animate-pulse" : ""
                      }`}
                      style={{ backgroundColor: waxLineColor }}
                    >
                      {isDrawing && (
                        <div
                          className="absolute inset-0 rounded-full animate-ping opacity-75"
                          style={{ backgroundColor: waxLineColor }}
                        ></div>
                      )}
                    </div>
                    {isDrawing && (
                      <div
                        className="absolute -right-1 top-0 w-2 h-2 rounded-full animate-bounce"
                        style={{ backgroundColor: waxLineColor }}
                      ></div>
                    )}
                  </div>
                </div>
              )}

              {/* Center Logo when no motifs */}
              {motifs.length === 0 && currentStep === 0 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-batik-gold/20 to-batik-brown/20 rounded-full flex items-center justify-center animate-pulse">
                      <Palette className="text-batik-brown w-16 h-16" />
                    </div>
                    <p className="text-batik-brown font-medium">
                      Pilih Motif & Mulai Membatik
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Interactive Controls */}
            <div className="mt-6 space-y-4">
              {/* Process Steps */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 px-4 sm:px-0">
                {steps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentStep(index);
                      setIsDrawing(false);
                    }}
                    className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
                      currentStep === index
                        ? "bg-batik-gold text-white shadow-lg scale-105"
                        : "bg-white text-batik-brown border border-batik-gold/30 hover:bg-batik-cream"
                    }`}
                  >
                    <span className="mr-1 sm:mr-2">{step.icon}</span>
                    <span className="hidden sm:inline">{step.name}</span>
                    <span className="sm:hidden">{step.name.slice(0, 4)}</span>
                  </button>
                ))}
              </div>

              {currentStep === 3 && (
                <div className="flex justify-center">
                  <div className="bg-gradient-to-r from-batik-gold to-batik-brown text-white px-6 py-3 rounded-lg font-medium animate-pulse">
                    <Sparkles className="inline mr-2" size={20} />
                    Batik Anda Sudah Jadi!
                  </div>
                </div>
              )}
            </div>

            {/* Reset Button */}
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => {
                  setMotifs([]);
                  setWaxDrops([]);
                  setWaxLines([]);
                  setMotifColors({});
                  setCurrentStep(0);
                  setIsDrawing(false);
                  setShowInstructions(true);
                  setSelectedMotif(0);
                  setFabricColor("#F5F5DC");
                  setWaxLineColor("#DAA520");
                  setColoringTarget("fabric");
                }}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200"
              >
                Reset Canvas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
