import React, { useState, useEffect, useRef } from 'react';

// --- SVG Components for Floral Decorations (sem alterações) ---
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

// --- Reusable Image Frame Component (sem alterações) ---
const ImageFrame = ({ src, alt, shape = 'circle', name }) => {
    const placeholderUrl = shape === 'circle'
        ? `https://placehold.co/200x200/EFEFEF/CCCCCC?text=?`
        : `https://placehold.co/600x400/EFEFEF/CCCCCC?text=?`;
    const finalSrc = src || placeholderUrl;
    return (
        <div className="flex flex-col items-center text-center">
            <div className={`bg-gray-200 overflow-hidden shadow-lg ${shape === 'circle' ? 'rounded-full w-40 h-40 md:w-48 md:h-48' : 'rounded-lg w-full max-w-xl'}`}>
                <img src={finalSrc} alt={alt} className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src = placeholderUrl; }} />
            </div>
            {name && <p className="mt-4 text-lg text-gray-600" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{name}</p>}
        </div>
    );
};

// --- Header Component (ATUALIZADO) ---
const Header = ({ activeSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Mapeamento dos links para as seções
    const navItems = [
        { label: 'HOME', id: 'home' },
        { label: 'O CASAL', id: 'casal' },
        { label: 'PADRINHOS', id: 'padrinhos' },
        { label: 'CERIMÔNIA', id: 'cerimonia' },
        { label: 'CONFIRME SUA PRESENÇA', id: '#' },
    ];

    return (
        <header className="bg-[#F3F3F3] w-full sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Nomes à esquerda */}
                    <div className="flex-shrink-0">
                        <a href="#home" className="text-xl text-gray-700" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Victor & Emmily</a>
                    </div>

                    {/* Navegação centralizada (para telas médias e grandes) */}
                    <div className="hidden md:flex flex-1 items-center justify-center">
                        <div className="flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={`#${item.id}`}
                                    className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === item.id ? 'bg-[#4A5568] text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Botão de menu mobile (à direita) */}
                    <div className="flex items-center md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-700 focus:outline-none">
                            <span className="sr-only">Abrir menu</span>
                            <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                            <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu mobile expandido */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={`#${item.id}`}
                            onClick={() => setIsOpen(false)} // Fecha o menu ao clicar
                            className={`block px-3 py-2 rounded-md text-base font-medium ${activeSection === item.id ? 'bg-[#4A5568] text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};


// --- Seções com IDs para navegação ---

// ATUALIZADO: Componente de Seção genérico agora aceita 'id'
const Section = ({ id, title, children, hasFlower = true, className = '' }) => (
    <section id={id} className={`py-20 md:py-24 bg-[#F3F3F3] ${className}`}>
        <div className="container mx-auto px-4 text-center">
            {hasFlower && <FlorTitle1 className="mx-auto -mb-8" />}
            <h2 className="text-4xl md:text-5xl text-gray-700 mb-12 md:mb-16" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{title}</h2>
            {children}
        </div>
    </section>
);


const HeroSection = () => (
    <div
        id="home"
        className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center text-center"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')" }}
    >
        <FlorTopo />
        <FlorTopo2 />

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

const Countdown = () => {
    // Lógica do countdown permanece a mesma...
    const calculateTimeLeft = () => {
        const difference = +new Date("2025-10-03T00:00:00") - +new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = { dias: Math.floor(difference / (1000 * 60 * 60 * 24)), horas: Math.floor((difference / (1000 * 60 * 60)) % 24), minutos: Math.floor((difference / 1000 / 60) % 60), segundos: Math.floor((difference / 1000) % 60) };
        }
        return timeLeft;
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => { const timer = setTimeout(() => { setTimeLeft(calculateTimeLeft()); }, 1000); return () => clearTimeout(timer); });

    return (
        <section className="bg-[#4A5568] text-white py-16 md:py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl tracking-widest mb-10" style={{ fontFamily: "'Cormorant Garamond', serif" }}>CONTAGEM REGRESSIVA</h2>
                <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
                    {Object.keys(timeLeft).length ? Object.keys(timeLeft).map(interval => (
                        <div key={interval} className="text-center">
                            <div className="bg-white bg-opacity-20 rounded-lg p-4 md:p-6"><span className="text-4xl md:text-6xl font-bold">{String(timeLeft[interval]).padStart(2, '0')}</span></div>
                            <span className="text-sm md:text-base uppercase mt-2 block">{interval}</span>
                        </div>
                    )) : <span>O grande dia chegou!</span>}
                </div>
            </div>
        </section>
    );
}

const AboutSection = () => (
    <Section id="casal" title="O CASAL">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12">
            <ImageFrame alt="Foto do Casal 1" shape="circle" />
            <ImageFrame alt="Foto do Casal 2" shape="circle" />
        </div>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-lg">Criamos esse site para compartilhar com vocês os detalhes da organização do nosso casamento. Estamos muito felizes e contamos com a presença de todos no nosso grande dia!...</p>
    </Section>
);

const GodparentsSection = () => (
    <Section id="padrinhos" title="PADRINHOS">
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-lg mb-12">Aos nossos queridos padrinhos: É uma imensa emoção e indescritível tê-los ao nosso lado...</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
            <ImageFrame alt="Padrinho/Madrinha 1" shape="circle" name="Nome" />
            <ImageFrame alt="Padrinho/Madrinha 2" shape="circle" name="Nome" />
            <ImageFrame alt="Padrinho/Madrinha 3" shape="circle" name="Nome" />
            <ImageFrame alt="Padrinho/Madrinha 4" shape="circle" name="Nome" />
        </div>
    </Section>
);

const CeremonySection = () => (
    <Section id="cerimonia" title="CERIMÔNIA">
        <div className="max-w-3xl mx-auto mb-12"><ImageFrame alt="Local da Cerimônia" shape="rectangle" /></div>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-lg">Gostaríamos muito de contar com a presença de todos vocês no momento em que nossa união será abençoada diante de Deus!...<br/><br/><strong>Salão Jardim Paulista, São Paulo - SP, 01408-060</strong></p>
    </Section>
);


// --- Main App Component (ATUALIZADO) ---
export default function App() {
    const [activeSection, setActiveSection] = useState('home');

    // Lógica para detectar a seção ativa durante a rolagem
    useEffect(() => {
        const sectionIds = ['home', 'casal', 'padrinhos', 'cerimonia'];
        const sections = sectionIds.map(id => document.getElementById(id));

        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            const currentSection = sections.find(section =>
                section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight
            );

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-[#F3F3F3] antialiased">
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&family=Lato:wght@300;400&display=swap');
                    body { font-family: 'Lato', sans-serif; }
                    html { scroll-behavior: smooth; }
                `}
            </style>

            <Header activeSection={activeSection} />

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

