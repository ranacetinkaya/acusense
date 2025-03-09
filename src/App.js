import React, { useState } from 'react';
import './App.css';
import { Download, Mic, Speaker, Cpu, Gauge, Server, Languages, Globe } from 'lucide-react';

const translations = {
  en: {
    nav: {
      features: "Features",
      overview: "Overview",
      reports: "Reports"
    },
    title: "Development of a Turkish Language Processing System with Integrated Speech Recognition and Synthesis",
    subtitle: "Advanced AI-powered text-to-speech and speech-to-text solution optimized for Turkish dialects.",
    description: {
      title: "Project Overview",
      content: "The Turkish Language Processing System is a cutting-edge AI solution designed to revolutionize voice interaction in Turkish. Our system combines advanced machine learning with sophisticated audio processing to deliver unparalleled accuracy in both speech recognition and synthesis. Specifically designed for integration with FNSS systems, it offers robust offline capabilities, real-time processing, and comprehensive support for regional dialects.",
      features: ["Advanced AI Models", "Real-time Processing", "Dialect Support", "Offline Capability"]
    },
    features: "Key Features",
    featureTitles: {
      speechRecognition: "Speech Recognition",
      textToSpeech: "Text to Speech",
      machineLearning: "Machine Learning",
      offlineProcessing: "Offline Processing",
      realTimePerformance: "Real-time Performance",
      dialectSupport: "Dialect Support"
    },
    featureDescriptions: {
      speechRecognition: "Advanced STT capabilities optimized for Turkish language and dialects.",
      textToSpeech: "Natural-sounding TTS with support for regional accents.",
      machineLearning: "AI-powered processing for continuous improvement.",
      offlineProcessing: "Local processing capability for secure operations.",
      realTimePerformance: "Low-latency processing for immediate response.",
      dialectSupport: "Comprehensive coverage of Turkish regional variations."
    },
    reports: "Project Reports",
    downloadBtn: "Download",
    footer: "© 2024 Turkish Language Processing System. All rights reserved."
  },
  tr: {
    nav: {
      features: "Özellikler",
      overview: "Genel Bakış",
      reports: "Raporlar"
    },
    title: "Entegre Konuşma Tanıma ve Sentezi Olan Bir Türkçe Dil İşleme Sisteminin Geliştirilmesi",
    subtitle: "Türkçe lehçeler için optimize edilmiş, AI destekli gelişmiş metin-konuşma ve konuşma-metin çözümü",
    description: {
      title: "Proje Genel Bakışı",
      content: "Türkçe Dil İşleme Sistemi, Türkçe'de sesli etkileşimi devrimleştirmek için tasarlanmış çağdaş bir yapay zeka çözümüdür. Sistemimiz, hem konuşma tanıma hem de sentezde eşsiz doğruluk sağlamak için gelişmiş makine öğrenimini sofistike ses işleme ile birleştirir. FNSS sistemleri ile entegrasyon için özel olarak tasarlanmış olup, güçlü çevrimdışı yetenekler, gerçek zamanlı işleme ve bölgesel lehçeler için kapsamlı destek sunar.",
      features: ["Gelişmiş AI Modelleri", "Gerçek Zamanlı İşleme", "Lehçe Desteği", "Çevrimdışı Çalışabilme"]
    },
    features: "Temel Özellikler",
    featureTitles: {
      speechRecognition: "Konuşma Tanıma",
      textToSpeech: "Metinden Konuşmaya Çeviri",
      machineLearning: "Makine Öğrenmesi",
      offlineProcessing: "Çevrimdışı İşleme",
      realTimePerformance: "Gerçek Zamanlı Performans",
      dialectSupport: "Lehçe Desteği"
    },
    featureDescriptions: {
      speechRecognition: "Türk dili ve lehçeleri için optimize edilmiş gelişmiş STT yetenekleri.",
      textToSpeech: "Bölgesel aksanları destekleyen doğal sesli TTS.",
      machineLearning: "Sürekli iyileşme için yapay zeka destekli işleme.",
      offlineProcessing: "Güvenli işlemler için yerel işleme yeteneği.",
      realTimePerformance: "Anında yanıt için düşük gecikmeli işleme.",
      dialectSupport: "Türkçe bölgesel varyasyonlarının kapsamlı desteği."
    },
    reports: "Proje Raporları",
    downloadBtn: "İndir",
    footer: "© 2024 Türkçe Dil İşleme Sistemi. Tüm hakları saklıdır."
  }
};

function App() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  const reports = [
    {
      name: "Project Proposal",
      url: '/CMPE 491 - Project Proposal.pdf'
    },
    {
      name: "Project Specifications Report",
      url: "/CMPE 491 - Project Specifications Report.pdf"
    },
    {
      name: "Project Analysis Report",
      url: "/CMPE 491 - Project Analysis Report.pdf"
    },
    {
      name: "High-Level Design Report",
      url: "/CMPE 491 - High-Level Design Report.pdf"
    },
    {
      name: "Low-Level Design Report",
      url: "/CMPE 492 - Low-Level Design Report.pdf"
    },
    {
      name: "Backlog Document",
      url: "CMPE 491 - Backlog Document.pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md fixed w-full z-20 top-0 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Centered nav links */}
            <div className="flex-1 flex justify-center space-x-6">
              <a href="#overview" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t.nav.overview}
              </a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t.nav.features}
              </a>
              <a href="#reports" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t.nav.reports}
              </a>
            </div>
            <button
                onClick={() => setLang(lang === 'en' ? 'tr' : 'en')}
                className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors ml-auto"
              >
                <Globe className="w-5 h-5 text-blue-600" />
                <span className="text-blue-600">{lang === 'en' ? 'Türkçe' : 'English'}</span>
              </button>

          </div>
        </div>
      </nav>


      {/* Hero Section */}
      <header className="relative overflow-hidden pt-24" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '55vh', 
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-gray-900/90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              {t.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </div>
        </div>
      </header>


      {/* Project Description */}
      <section id="overview" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t.description.title}</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              {t.description.content}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {t.description.features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                  <span className="font-medium text-gray-800">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-12">{t.features}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <FeatureCard
        icon={<Mic className="w-8 h-8 icon" />}
        title={t.featureTitles.speechRecognition}
        description={t.featureDescriptions.speechRecognition}
      />
      <FeatureCard
        icon={<Speaker className="w-8 h-8 icon" />}
        title={t.featureTitles.textToSpeech}
        description={t.featureDescriptions.textToSpeech}
      />
      <FeatureCard
        icon={<Cpu className="w-8 h-8 icon" />}
        title={t.featureTitles.machineLearning}
        description={t.featureDescriptions.machineLearning}
      />
      <FeatureCard
        icon={<Server className="w-8 h-8 icon" />}
        title={t.featureTitles.offlineProcessing}
        description={t.featureDescriptions.offlineProcessing}
      />
      <FeatureCard
        icon={<Gauge className="w-8 h-8 icon" />}
        title={t.featureTitles.realTimePerformance}
        description={t.featureDescriptions.realTimePerformance}
      />
      <FeatureCard
        icon={<Languages className="w-8 h-8 icon" />}
        title={t.featureTitles.dialectSupport}
        description={t.featureDescriptions.dialectSupport}
      />
    </div>
  </div>
</section>


      {/* Reports Section */}
      <section id="reports" className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-12">{t.reports}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {reports.map((report, index) => (
        <ReportCard key={index} report={report} t={t} />
      ))}
    </div>
    <div className="flex justify-center mt-8">
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-center text-white">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 text-center">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const ReportCard = ({ report, t }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
    <h3 className="text-xl font-semibold text-gray-900">{report.name}</h3>
      <a href={report.url} className="text-blue-600 hover:underline flex items-center space-x-2 justify-end">
        <Download className="w-5 h-5 text-blue-600 d-icon" />
        <span>{t.downloadBtn}</span>
      </a>
  </div>
);


export default App;
