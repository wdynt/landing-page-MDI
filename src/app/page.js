"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Users,
  Activity,
  Phone,
  FileText,
  Heart,
  Home,
  Brain,
  BarChart3,
  Lock,
  Star,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: <Activity className="h-8 w-8 text-teal-600" />,
      title: "Telemedisin",
      description:
        "Konsultasi virtual yang mulus dengan video HD, pesan aman, dan alat kolaborasi real-time.",
    },
    {
      icon: <Heart className="h-8 w-8 text-teal-600" />,
      title: "Pemantauan Tanda Vital",
      description:
        "Pemantauan real-time tanda vital pasien berbasis IoT dengan peringatan otomatis dan analisis tren.",
    },
    {
      icon: <Phone className="h-8 w-8 text-teal-600" />,
      title: "Call Center Pintar",
      description:
        "Penjadwalan janji temu berbasis AI, pengingat obat, dan layanan dukungan pasien 24/7.",
    },
    {
      icon: <FileText className="h-8 w-8 text-teal-600" />,
      title: "Rekam Medis Digital",
      description:
        "Sistem EMR komprehensif dengan organisasi data cerdas dan kontrol akses instan.",
    },
    {
      icon: <Shield className="h-8 w-8 text-teal-600" />,
      title: "Apotek Online",
      description:
        "Manajemen resep terintegrasi dengan pengisian ulang otomatis dan koordinasi pengiriman.",
    },
    {
      icon: <Home className="h-8 w-8 text-teal-600" />,
      title: "Integrasi Perawatan Rumah",
      description:
        "Koordinasi yang mulus antara perawatan rumah sakit dan program perawatan berbasis rumah.",
    },
  ];

  const userSegments = [
    {
      title: "Pasien",
      description:
        "Akses perawatan kapan saja, di mana saja dengan portal pasien dan aplikasi mobile yang intuitif.",
      benefits: [
        "Konsultasi virtual 24/7",
        "Pemantauan kesehatan real-time",
        "Pengingat obat",
      ],
    },
    {
      title: "Dokter",
      description:
        "Sederhanakan alur kerja dengan diagnostik berbasis AI dan wawasan pasien yang komprehensif.",
      benefits: [
        "Diagnosis berbantuan AI",
        "Rekam medis terintegrasi",
        "Penjadwalan efisien",
      ],
    },
    {
      title: "Administrator",
      description:
        "Optimalkan operasi dengan analitik real-time dan manajemen rumah sakit otomatis.",
      benefits: [
        "Analitik operasional",
        "Optimasi sumber daya",
        "Manajemen biaya",
      ],
    },
    {
      title: "Manajer SDM",
      description:
        "Kelola staf kesehatan secara efisien dengan penjadwalan otomatis dan pelacakan kinerja.",
      benefits: ["Penjadwalan staf", "Metrik kinerja", "Pelacakan kepatuhan"],
    },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Medical Officer, Rumah Sakit Metropolitan",
      content:
        "Platform ini telah merevolusi cara kami memberikan perawatan pasien. Diagnostik AI telah meningkatkan akurasi kami sebesar 40%.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Direktur IT, Sistem Kesehatan Regional",
      content:
        "Implementasi berjalan mulus, dan fitur keamanan memberi kami kepercayaan penuh dalam perlindungan data pasien.",
      rating: 5,
    },
    {
      name: "Lisa Thompson",
      role: "Manajer Perawat, Community Care Center",
      content:
        "Integrasi perawatan rumah telah mengubah hasil pasien kami. Sekarang kami dapat memantau pasien dari jarak jauh dengan percaya diri.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-navy-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-navy-900">
                  HealthTech AI
                </span>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#features"
                  className="text-gray-700 hover:text-teal-600 transition-colors"
                >
                  Fitur
                </a>
                <a
                  href="#ai-analytics"
                  className="text-gray-700 hover:text-teal-600 transition-colors"
                >
                  AI & Analitik
                </a>
                <a
                  href="#security"
                  className="text-gray-700 hover:text-teal-600 transition-colors"
                >
                  Keamanan
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-700 hover:text-teal-600 transition-colors"
                >
                  Testimoni
                </a>
                <Button
                  variant="outline"
                  className="border-teal-600 text-teal-600 hover:bg-teal-50"
                >
                  Hubungi Kami
                </Button>
                <Button className="bg-navy-600 hover:bg-navy-700">
                  Pesan Demo
                </Button>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-teal-600"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block px-3 py-2 text-gray-700 hover:text-teal-600"
              >
                Fitur
              </a>
              <a
                href="#ai-analytics"
                className="block px-3 py-2 text-gray-700 hover:text-teal-600"
              >
                AI & Analitik
              </a>
              <a
                href="#security"
                className="block px-3 py-2 text-gray-700 hover:text-teal-600"
              >
                Keamanan
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 text-gray-700 hover:text-teal-600"
              >
                Testimoni
              </a>
              <div className="px-3 py-2 space-y-2">
                <Button
                  variant="outline"
                  className="w-full border-teal-600 text-teal-600 hover:bg-teal-50"
                >
                  Hubungi Kami
                </Button>
                <Button className="w-full bg-navy-600 hover:bg-navy-700">
                  Pesan Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-100">
                  Platform Kesehatan Berbasis AI
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight">
                  Transformasi Kesehatan dengan
                  <span className="text-teal-600">
                    {" "}
                    Teknologi Rumah Sakit
                  </span>{" "}
                  Pintar
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Sistem rumah sakit pintar end-to-end yang mengintegrasikan
                  Telemedisin, pemantauan IoT, diagnostik AI, dan manajemen
                  perawatan komprehensif. Revolusi hasil pasien dengan platform
                  terintegrasi kami.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-navy-600 hover:bg-navy-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
                >
                  Pesan Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Jadwalkan Panggilan
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-600">Sesuai HIPAA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-600">Dukungan 24/7</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-600">Berbasis Cloud</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-navy-100 to-teal-100 rounded-2xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80"
                  alt="Profesional kesehatan menggunakan teknologi"
                  className="rounded-xl w-full h-96 object-cover shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-6 shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                      <Brain className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy-900">Berbasis AI</p>
                      <p className="text-sm text-gray-600">
                        Analitik Real-time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Solusi Kesehatan Komprehensif
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Platform terintegrasi kami menggabungkan teknologi canggih dengan
              keahlian kesehatan untuk memberikan perawatan pasien yang luar
              biasa dan efisiensi operasional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
              >
                <CardHeader className="pb-4">
                  <div className="mb-4 p-3 bg-teal-50 rounded-lg w-fit group-hover:bg-teal-100 transition-colors">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-navy-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI & Analytics Section */}
      <section
        id="ai-analytics"
        className="py-20 bg-gradient-to-br from-navy-50 to-teal-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-navy-100 text-navy-800 hover:bg-navy-100">
                  Kecerdasan Buatan
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
                  Analitik Kesehatan Berbasis AI
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Manfaatkan kekuatan kecerdasan buatan untuk pemantauan
                  real-time, analitik prediktif, dan pengambilan keputusan
                  cerdas di seluruh operasi kesehatan Anda.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">
                      Pemantauan Pasien Real-time
                    </h3>
                    <p className="text-gray-600">
                      Pelacakan tanda vital berkelanjutan dengan peringatan
                      instan dan wawasan kesehatan prediktif.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">
                      Bantuan Diagnostik AI
                    </h3>
                    <p className="text-gray-600">
                      Algoritma pembelajaran mesin mendukung pengambilan
                      keputusan klinis dan meningkatkan akurasi diagnostik.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">
                      Analitik Prediktif
                    </h3>
                    <p className="text-gray-600">
                      Prediksi kebutuhan pasien, optimalkan alokasi sumber daya,
                      dan cegah kejadian yang merugikan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                  alt="Dashboard analitik kesehatan"
                  className="rounded-xl w-full h-80 object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-navy-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy-900">
                        99.9% Uptime
                      </p>
                      <p className="text-sm text-gray-600">Performa Andal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section id="security" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Keamanan & Kepatuhan Utama
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Data pasien Anda dilindungi oleh langkah-langkah keamanan tingkat
              perusahaan dan kepatuhan penuh terhadap peraturan kesehatan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="h-8 w-8 text-navy-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">
                Enkripsi AES-256
              </h3>
              <p className="text-gray-600">
                Enkripsi tingkat militer melindungi semua data dalam transit dan
                penyimpanan, memastikan keamanan maksimum.
              </p>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">
                Autentikasi Dua Faktor
              </h3>
              <p className="text-gray-600">
                Autentikasi multi-layer memastikan hanya personel yang berwenang
                mengakses informasi sensitif.
              </p>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Activity className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">
                Pemantauan Anti-Penipuan
              </h3>
              <p className="text-gray-600">
                Deteksi penipuan berbasis AI memantau aktivitas mencurigakan dan
                mencegah akses tidak sah.
              </p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-teal-600" />
                <span>Sesuai HIPAA</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-teal-600" />
                <span>SOC 2 Type II</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-teal-600" />
                <span>ISO 27001</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-teal-600" />
                <span>Siap GDPR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Segments */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Dibuat untuk Setiap Profesional Kesehatan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Platform kami beradaptasi dengan kebutuhan unik berbagai peran
              kesehatan, menyediakan pengalaman yang disesuaikan untuk
              meningkatkan produktivitas dan perawatan pasien.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {userSegments.map((segment, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-navy-100 to-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-navy-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-navy-900">
                    {segment.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {segment.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {segment.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Dipercaya oleh Pemimpin Kesehatan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lihat bagaimana organisasi kesehatan terkemuka mentransformasi
              perawatan pasien dengan platform kami.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-navy-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Mentransformasi Operasi Kesehatan Anda?
          </h2>
          <p className="text-xl text-navy-100 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ratusan organisasi kesehatan yang sudah
            menggunakan platform kami untuk memberikan perawatan pasien yang
            luar biasa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-navy-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
            >
              Jadwalkan Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-navy-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Hubungi Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-navy-400 to-teal-400 rounded-lg flex items-center justify-center">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">HealthTech AI</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Mentransformasi kesehatan melalui solusi teknologi cerdas yang
                meningkatkan hasil pasien dan efisiensi operasional.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Solusi</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Telemedisin
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pemantauan IoT
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Diagnostik AI
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Rekam Digital
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Perusahaan</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Karir
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Kontak
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Kebijakan Privasi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Syarat Layanan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Kepatuhan HIPAA
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Keamanan
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">
              © 2024 HealthTech AI. Semua hak dilindungi.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky CTA */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          size="lg"
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 animate-pulse"
        >
          Mulai Sekarang
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
