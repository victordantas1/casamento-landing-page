import React, { useState, useEffect } from 'react';

const FlorTopo = () => (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="absolute top-2 left-2 w-20 h-20 md:w-32 md:h-32 opacity-50">
        <path d="M50 90 C40 70, 40 50, 50 30 M50 90 C60 70, 60 50, 50 30 M50 30 C45 20, 55 20, 50 30 M50 30 C40 25, 60 25, 50 30 M30 60 C40 50, 40 40, 50 30 M70 60 C60 50, 60 40, 50 30" stroke="#A9B4C8" strokeWidth="1" fill="none" />
    </svg>
);
const FlorTopo2 = () => (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="absolute top-2 right-2 w-20 h-20 md:w-32 md:h-32 opacity-50 transform -scale-x-100">
        <path d="M50 90 C40 70, 40 50, 50 30 M50 90 C60 70, 60 50, 50 30 M50 30 C45 20, 55 20, 50 30 M50 30 C40 25, 60 25, 50 30 M30 60 C40 50, 40 40, 50 30 M70 60 C60 50, 60 40, 50 30" stroke="#A9B4C8" strokeWidth="1" fill="none" />
    </svg>
);
const FlorTitle1 = ({ className = '' }) => (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={`w-20 h-20 md:w-24 md:h-24 text-gray-400 ${className}`}>
        <path d="M50 95 C40 75, 40 55, 50 35 M50 95 C60 75, 60 55, 50 35 M50 35 C45 25, 55 25, 50 35 M50 35 C40 30, 60 30, 50 35 M50 5 C40 15, 60 15, 50 5" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
);
const FlorDate = ({ className = '' }) => (
    <svg width="60" height="30" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg" className={`w-16 h-8 text-gray-500 ${className}`}>
        <path d="M5 15 Q15 5, 30 15 T55 15 M5 17 Q15 27, 30 17 T55 17" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
);


const ImageFrame = ({ src, alt, shape = 'circle', name }) => {
    const placeholderUrl = shape === 'circle'
        ? `https://placehold.co/200x200/EFEFEF/CCCCCC?text=?`
        : `https://placehold.co/600x400/EFEFEF/CCCCCC?text=?`;
    const finalSrc = src || placeholderUrl;
    return (
        <div className="flex flex-col items-center text-center">
            <div className={`bg-gray-200 overflow-hidden shadow-lg ${shape === 'circle' ? 'rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48' : 'rounded-lg w-full max-w-xl'}`}>
                <img src={finalSrc} alt={alt} className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src = placeholderUrl; }} />
            </div>
            {name && <p className="mt-4 text-base md:text-lg text-gray-600" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{name}</p>}
        </div>
    );
};

const Header = ({ activeSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: 'HOME', id: 'home' },
        { label: 'O CASAL', id: 'casal' },
        { label: 'PADRINHOS', id: 'padrinhos' },
        { label: 'CERIMÔNIA', id: 'cerimonia' },
        { label: 'CONFIRME SUA PRESENÇA', id: 'confirmar-presenca' },
        { label: 'LISTA DE PRESENTES', id: 'lista-de-presentes' },
    ];

    return (
        <header className="bg-[#F3F3F3] w-full sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#home" className="text-lg md:text-xl text-gray-700" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Victor & Emmily</a>
                    </div>
                    <div className="hidden lg:flex flex-1 items-center justify-center">
                        <div className="flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <a key={item.label} href={`#${item.id}`} className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === item.id ? 'bg-[#4A5568] text-white' : 'text-gray-600 hover:bg-gray-200'}`}>{item.label}</a>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center lg:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-700 focus:outline-none">
                            <span className="sr-only">Abrir menu</span>
                            <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                            <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navItems.map((item) => (<a key={item.label} href={`#${item.id}`} onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium ${activeSection === item.id ? 'bg-[#4A5568] text-white' : 'text-gray-600 hover:bg-gray-200'}`}>{item.label}</a>))}
                </div>
            </div>
        </header>
    );
};

const Section = ({ id, title, children, hasFlower = true, className = '' }) => (
    <section id={id} className={`py-16 md:py-24 bg-[#F3F3F3] ${className}`}>
        <div className="container mx-auto px-4 text-center">
            {hasFlower && <FlorTitle1 className="mx-auto -mb-6 md:-mb-8" />}
            <h2 className="text-3xl md:text-5xl text-gray-700 mb-10 md:mb-16" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{title}</h2>
            {children}
        </div>
    </section>
);

const HeroSection = () => (
    <div id="home" className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center text-center px-4" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')" }} >
        <FlorTopo />
        <FlorTopo2 />
        <div className="relative z-10 flex flex-col items-center">
            <FlorTitle1 className="transform -translate-y-4 md:-translate-y-8" />
            <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 -mt-12 md:-mt-16">
                <h1 className="text-5xl sm:text-6xl md:text-7xl text-gray-700" style={{ fontFamily: "'Cormorant Garamond', serif" }}>VICTOR</h1>
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 my-2 sm:my-0 bg-[#A9B4C8] rounded-full flex items-center justify-center text-white text-2xl md:text-3xl font-serif">&</div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl text-gray-700" style={{ fontFamily: "'Cormorant Garamond', serif" }}>EMMILY</h1>
            </div>
            <FlorDate className="mt-4" />
            <p className="mt-2 text-xl md:text-2xl text-gray-600" style={{ fontFamily: "'Cormorant Garamond', serif" }}>03 DE OUTUBRO DE 2025</p>
        </div>
    </div>
);

const Countdown = () => {
    const calculateTimeLeft = () => { const difference = +new Date("2025-10-03T00:00:00") - +new Date(); let timeLeft = {}; if (difference > 0) { timeLeft = { dias: Math.floor(difference / (1000 * 60 * 60 * 24)), horas: Math.floor((difference / (1000 * 60 * 60)) % 24), minutos: Math.floor((difference / 1000 / 60) % 60), segundos: Math.floor((difference / 1000) % 60) }; } return timeLeft; };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => { const timer = setTimeout(() => { setTimeLeft(calculateTimeLeft()); }, 1000); return () => clearTimeout(timer); });

    return (
        <section className="bg-[#4A5568] text-white py-16 md:py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-4xl tracking-widest mb-10" style={{ fontFamily: "'Cormorant Garamond', serif" }}>CONTAGEM REGRESSIVA</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
                    {Object.keys(timeLeft).length ? Object.entries(timeLeft).map(([interval, value]) => (
                        <div key={interval} className="text-center">
                            <div className="bg-white bg-opacity-20 rounded-lg p-3 md:p-6">
                                <span className="text-3xl sm:text-4xl md:text-6xl font-bold">{String(value).padStart(2, '0')}</span>
                            </div>
                            <span className="text-xs sm:text-sm md:text-base uppercase mt-2 block">{interval}</span>
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
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-base md:text-lg">Criamos esse site para compartilhar com vocês os detalhes da organização do nosso casamento. Estamos muito felizes e contamos com a presença de todos no nosso grande dia!...</p>
    </Section>
);

const GodparentsSection = () => (
    <Section id="padrinhos" title="PADRINHOS">
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-base md:text-lg mb-12">Aos nossos queridos padrinhos: É uma imensa emoção e indescritível tê-los ao nosso lado...</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-4xl mx-auto">
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
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-base md:text-lg">Gostaríamos muito de contar com a presença de todos vocês no momento em que nossa união será abençoada diante de Deus!...<br/><br/><strong>Salão Jardim Paulista, São Paulo - SP, 01408-060</strong></p>
    </Section>
);

const ConfirmPresenceSection = () => {
    const [convidadoId, setConvidadoId] = useState('');
    const [presenca, setPresenca] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Lê a URL da API do ficheiro .env, com um fallback para localhost
    const apiUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!convidadoId || !presenca) {
            setError('Por favor, preencha sua senha e selecione uma opção.');
            return;
        }
        setLoading(true);
        setError('');
        setSuccess('');
        try {
            const response = await fetch(`${apiUrl}/convidados/confirmar_presenca`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    convidado_id: convidadoId,
                    presenca: presenca,
                    codigo_confirmacao: "0", // Enviando um valor padrão
                }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || 'Ocorreu um erro. Tente novamente.');
            }
            setSuccess('Presença confirmada com sucesso! Obrigado!');
            setConvidadoId('');
            setPresenca(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Section id="confirmar-presenca" title="CONFIRME SUA PRESENÇA">
            <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed text-base md:text-lg mb-12">
                Sua presença é muito importante para nós! Por favor, confirme usando a sua senha.
            </p>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto text-left">
                <div className="mb-6">
                    <label htmlFor="convidadoId" className="block mb-2 text-sm font-medium text-gray-700">Sua Senha</label>
                    <input type="text" id="convidadoId" value={convidadoId} onChange={(e) => setConvidadoId(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Senha" required />
                </div>
                <div className="mb-8">
                    <label className="block mb-3 text-sm font-medium text-gray-700 text-center sm:text-left">Você irá ao evento?</label>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button type="button" onClick={() => setPresenca('vai')} className={`w-full py-3 px-5 text-sm md:text-base font-medium text-center rounded-lg transition-all ${presenca === 'vai' ? 'bg-green-600 text-white ring-2 ring-green-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>
                            Sim, estarei lá!
                        </button>
                        <button type="button" onClick={() => setPresenca('nao_vai')} className={`w-full py-3 px-5 text-sm md:text-base font-medium text-center rounded-lg transition-all ${presenca === 'nao_vai' ? 'bg-red-600 text-white ring-2 ring-red-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>
                            Não poderei comparecer
                        </button>
                    </div>
                </div>

                {error && <div className="mb-4 p-4 text-sm text-red-700 bg-red-100 rounded-lg text-center">{error}</div>}
                {success && <div className="mb-4 p-4 text-sm text-green-700 bg-green-100 rounded-lg text-center">{success}</div>}

                <div className="text-center">
                    <button type="submit" disabled={loading} className="text-white bg-[#4A5568] hover:bg-opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-3 text-center disabled:bg-gray-400">
                        {loading ? 'Enviando...' : 'Confirmar Presença'}
                    </button>
                </div>
            </form>
        </Section>
    );
};

const GiftListSection = () => (
    <Section id="lista-de-presentes" title="LISTA DE PRESENTES">
        <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed text-base md:text-lg mb-12">
            Sua presença é o nosso maior presente! Mas, se desejar nos presentear, ficaremos muito felizes. Criamos algumas opções com muito carinho.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
                // Coloque aqui o link para a sua lista de presentes da Bemol
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white bg-[#4A5568] hover:bg-opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3 text-center"
            >
                Lista de Presentes - Bemol
            </a>
            <a
                // Coloque aqui o link para a sua lista de presentes da Havan
                href="https://lista.havan.com.br/Convidado/ItensListaPresente/847390"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white bg-[#4A5568] hover:bg-opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3 text-center"
            >
                Lista de Presentes - Havan
            </a>
        </div>
    </Section>
);

export default function App() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sectionIds = ['home', 'casal', 'padrinhos', 'cerimonia', 'confirmar-presenca', 'lista-de-presentes'];
        const sections = sectionIds.map(id => document.getElementById(id));

        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            const currentSection = sections.find(section => section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetHeight);
            if (currentSection) { setActiveSection(currentSection.id); }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-[#F3F3F3] antialiased">
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&family=Lato:wght@300;400&display=swap'); body { font-family: 'Lato', sans-serif; } html { scroll-behavior: smooth; }`}</style>
            <Header activeSection={activeSection} />
            <main>
                <HeroSection />
                <Countdown />
                <AboutSection />
                <div className="border-b-2 border-dashed border-gray-300 max-w-sm mx-auto"></div>
                <GodparentsSection />
                <div className="border-b-2 border-dashed border-gray-300 max-w-sm mx-auto"></div>
                <CeremonySection />
                <div className="border-b-2 border-dashed border-gray-300 max-w-sm mx-auto"></div>
                <ConfirmPresenceSection />
                <div className="border-b-2 border-dashed border-gray-300 max-w-sm mx-auto"></div>
                <GiftListSection />
            </main>
            <footer className="bg-[#4A5568] text-white text-center p-8">
                <p style={{ fontFamily: "'Cormorant Garamond', serif" }}>Victor & Emmily</p>
            </footer>
        </div>
    );
}
