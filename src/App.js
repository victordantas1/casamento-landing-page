import React, { useState, useEffect } from 'react';

// --- SVG Components for Floral Decorations ---
// As SVGs originais não foram fornecidas, então criei representações baseadas nas imagens.

const FlorTopo = () => (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="absolute top-4 left-4 w-24 h-24 md:w-32 md:h-32 opacity-50">
      <path d="M50 90 C40 70, 40 50, 50 30 M50 90 C60 70, 60 50, 50 30 M50 30 C45 20, 55 20, 50 30 M50 30 C40 25, 60 25, 50 30 M30 60 C40 50, 40 40, 50 30 M70 60 C60 50, 60 40, 50 30" stroke="#A9B4C8" strokeWidth="1" fill="none" />
    </svg>
);

const FlorTopo2 = () => (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="absolute top-4 right-4 w-24 h-24 md:w-32 md:h-32 opacity-50 transform -scale-x-100">
      <path d="M50 90 C40 70, 40 50, 50 30 M50 90 C60 70, 60 50, 50 30 M50 30 C45 20, 55 20, 50 30 M50 30 C40 25, 60 25, 50 30 M30 60 C40 50, 40 40, 50 30 M70 60 C60 50, 60 40, 50 30" stroke="#A9B4C8" strokeWidth="1" fill="none" />
    </svg>
);

const FlorTopo3 = () => (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-4 left-4 w-24 h-24 md:w-32 md:h-32 opacity-50 transform -scale-y-100">
      <path d="M50 90 C40 70, 40 50, 50 30 M50 90 C60 70, 60 50, 50 30 M50 30 C45 20, 55 20, 50 30 M50 30 C40 25, 60 25, 50 30 M30 60 C40 50, 40 40, 50 30 M70 60 C60 50, 60 40, 50 30" stroke="#A9B4C8" strokeWidth="1" fill="none" />
    </svg>
);

const FlorTopo4 = () => (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-4 right-4 w-24 h-24 md:w-32 md:h-32 opacity-50 transform -scale-x-100 -scale-y-100">
      <path d="M50 90 C40 70, 40 50, 50 30 M50 90 C60 70, 60 50, 50 30 M50 30 C45 20, 55 20, 50 30 M50 30 C40 25, 60 25, 50 30 M30 60 C40 50, 40 40, 50 30 M70 60 C60 50, 60 40, 50 30" stroke="#A9B4C8" strokeWidth="1" fill="none" />
    </svg>
);


const FlorTitle1 = ({ className = '' }) => (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={`w-24 h-24 text-gray-400 ${className}`}>
      <path d="M50 95 C40 75, 40 55, 50 35 M50 95 C60 75, 60 55, 50 35 M50 35 C45 25, 55 25, 50 35 M50 35 C40 30, 60 30, 50 35 M50 5 C40 15, 60 15, 50 5" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
);

const FlorDate = ({ className = '' }) => (
    <svg width="60" height="30" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg" className={`w-16 h-8 text-gray-500 ${className}`}>
      <path d="M5 15 Q15 5, 30 15 T55 15 M5 17 Q15 27, 30 17 T55 17" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
);


// --- Reusable Image Frame Component ---
const ImageFrame = ({ src, alt, shape = 'circle', name }) => {
  const placeholderUrl = shape === 'circle'
      ? `https://placehold.co/200x200/EFEFEF/CCCCCC?text=?`
      : `https://placehold.co/600x400/EFEFEF/CCCCCC?text=?`;

  const finalSrc = src || placeholderUrl;

  return (
      <div className="flex flex-col items-center text-center">
        <div className={`bg-gray-200 overflow-hidden shadow-lg ${shape === 'circle' ? 'rounded-full w-40 h-40 md:w-48 md:h-48' : 'rounded-lg w-full max-w-xl'}`}>
          <img
              // Altere aqui para a URL da sua imagem
              src={finalSrc}
              alt={alt}
              className="w-full h-full object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src = placeholderUrl; }}
          />
        </div>
        {name && <p className="mt-4 text-lg text-gray-600" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{name}</p>}
      </div>
  );
};


// --- Header Component ---
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['HOME', 'O CASAL', 'PADRINHOS', 'CERIMÔNIA', 'LISTA DE PRESENTES', 'CONFIRME SUA PRESENÇA', 'RECADOS'];

  return (
      <header className="bg-[#F3F3F3] w-full sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-xl text-gray-700" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Victor & Emmily</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item, index) => (
                    <a key={item} href="#" className={`px-3 py-2 rounded-md text-sm font-medium ${index === 0 ? 'bg-[#4A5568] text-white' : 'text-gray-600 hover:bg-gray-200'}`}>{item}</a>
                ))}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">Open main menu</span>
                <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
                <a key={item} href="#" className={`block px-3 py-2 rounded-md text-base font-medium ${index === 0 ? 'bg-[#4A5568] text-white' : 'text-gray-600 hover:bg-gray-200'}`}>{item}</a>
            ))}
          </div>
        </div>
      </header>
  );
};


// --- Hero Section ---
const HeroSection = () => (
    <div
        className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center text-center"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')" }}
    >
      <FlorTopo />
      <FlorTopo2 />
      <FlorTopo3 />
      <FlorTopo4 />

      <div className="relative z-10 flex flex-col items-center">
        <FlorTitle1 className="transform -translate-y-8" />

        <div className="flex items-center justify-center space-x-4 -mt-16">
          <h1 className="text-5xl md:text-7xl text-gray-700" style={{ fontFamily: "'Cormorant Garamond', serif" }}>VICTOR</h1>
          <div className="w-16 h-16 md:w-20 md:h-20 bg-[#A9B4C8] rounded-full flex items-center justify-center text-white text-3xl font-serif">&</div>
          <h1 className="text-5xl md:text-7xl text-gray-700" style={{ fontFamily: "'Cormorant Garamond', serif" }}>EMMILY</h1>
        </div>

        <FlorDate className="mt-2" />
        <p className="mt-4 text-2xl text-gray-600" style={{ fontFamily: "'Cormorant Garamond', serif" }}>03 DE OUTUBRO DE 2025</p>
      </div>
    </div>
);


// --- Countdown Section ---
const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-10-03T00:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval] && timeLeft[interval] !== 0) {
      return;
    }
    timerComponents.push(
        <div key={interval} className="text-center">
          <div className="bg-white bg-opacity-20 rounded-lg p-4 md:p-6">
            <span className="text-4xl md:text-6xl font-bold">{String(timeLeft[interval]).padStart(2, '0')}</span>
          </div>
          <span className="text-sm md:text-base uppercase mt-2 block">{interval}</span>
        </div>
    );
  });

  return (
      <section className="bg-[#4A5568] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl tracking-widest mb-10" style={{ fontFamily: "'Cormorant Garamond', serif" }}>CONTAGEM REGRESSIVA</h2>
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
            {timerComponents.length ? timerComponents : <span>O grande dia chegou!</span>}
          </div>
        </div>
      </section>
  );
};

// --- Section Template ---
const Section = ({ title, children, hasFlower = true }) => (
    <section className="py-20 md:py-24 bg-[#F3F3F3]">
      <div className="container mx-auto px-4 text-center">
        {hasFlower && <FlorTitle1 className="mx-auto -mb-8" />}
        <h2 className="text-4xl md:text-5xl text-gray-700 mb-12 md:mb-16" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{title}</h2>
        {children}
      </div>
    </section>
);

// --- About Section ---
const AboutSection = () => (
    <Section title="O CASAL">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12">
        <ImageFrame alt="Foto do Casal 1" shape="circle" />
        <ImageFrame alt="Foto do Casal 2" shape="circle" />
      </div>
      <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-lg">
        Criamos esse site para compartilhar com vocês os detalhes da organização do nosso casamento. Estamos muito felizes e contamos com a presença de todos no nosso grande dia! Aqui vocês encontrarão também dicas para hospedagem, salão de beleza, trajes, estacionamento, etc.
        <br/><br/>
        Ah, é importante também confirmar sua presença. Para isto contamos com sua ajuda clicando no menu "Confirme sua Presença" e preenchendo os dados necessários.
      </p>
    </Section>
);

// --- Godparents Section ---
const GodparentsSection = () => (
    <Section title="PADRINHOS">
      <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-lg mb-12">
        Aos nossos queridos padrinhos: É uma imensa emoção e indescritível tê-los ao nosso lado e poder partilhar com vocês toda felicidade dessa nova etapa em nossas vidas: nosso casamento! Por isso, desejamos tê-los como testemunhas do nosso sonho e do nosso amor!
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
        <ImageFrame alt="Padrinho/Madrinha 1" shape="circle" name="Nome" />
        <ImageFrame alt="Padrinho/Madrinha 2" shape="circle" name="Nome" />
        <ImageFrame alt="Padrinho/Madrinha 3" shape="circle" name="Nome" />
        <ImageFrame alt="Padrinho/Madrinha 4" shape="circle" name="Nome" />
      </div>
    </Section>
);

// --- Ceremony Section ---
const CeremonySection = () => (
    <Section title="CERIMÔNIA">
      <div className="max-w-3xl mx-auto mb-12">
        <ImageFrame alt="Local da Cerimônia" shape="rectangle" />
      </div>
      <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-lg">
        Gostaríamos muito de contar com a presença de todos vocês no momento em que nossa união será abençoada diante de Deus! A cerimônia será rápida e tentaremos ser extremamente pontuais. Contamos com vocês!
        <br/><br/>
        <strong>Salão Jardim Paulista, São Paulo - SP, 01408-060</strong>
      </p>
    </Section>
);


// --- Main App Component ---
export default function App() {
  return (
      <div className="bg-[#F3F3F3] antialiased">
        <style>
          {`
                    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&family=Lato:wght@300;400&display=swap');
                    body { font-family: 'Lato', sans-serif; }
                `}
        </style>
        <Header />
        <main>
          <HeroSection />
          <Countdown />
          <AboutSection />
          <div className="border-b-2 border-dashed border-gray-300 max-w-sm mx-auto"></div>
          <GodparentsSection />
          <div className="border-b-2 border-dashed border-gray-300 max-w-sm mx-auto"></div>
          <CeremonySection />
        </main>
        <footer className="bg-[#4A5568] text-white text-center p-8">
          <p style={{ fontFamily: "'Cormorant Garamond', serif" }}>Victor & Emmily</p>
        </footer>
      </div>
  );
}
