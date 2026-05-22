import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const stats = [
  { value: "10+", label: "Semilleros de Investigación" },
  { value: "2", label: "Grupos Reconocidos MINCIENCIAS" },
  { value: "13", label: "Docentes con Posgrado" },
  { value: "10Gbps", label: "Conectividad de Fibra Óptica" },
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Acreditación de Alta Calidad",
    desc: "Programa reconocido a nivel nacional con los más altos estándares académicos e investigativos."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
    title: "Estándares ACM, IEEE y AIS",
    desc: "Plan de estudios alineado con las guías internacionales para Ingeniería de Sistemas y Software."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: "FAB-LAB e Infraestructura",
    desc: "Laboratorios de IoT, Realidad Virtual y fabricación digital disponibles para todos los estudiantes."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Movilidad Internacional",
    desc: "Convenios activos con universidades nacionales e internacionales para intercambios académicos."
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white font-sans flex flex-col overflow-x-hidden selection:bg-[#BE123C] selection:text-white">
      <Head>
        <title>Ingeniería de Sistemas | UFPS</title>
        <meta name="description" content="Portal de inducción del Programa de Ingeniería de Sistemas de la Universidad Francisco de Paula Santander. Acreditación de Alta Calidad." />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap');
          * { box-sizing: border-box; }
          body { background: #0A0A0F; }
          .font-display { font-family: 'Syne', sans-serif; }
          .font-sans { font-family: 'Inter', sans-serif; }
          .noise-bg {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          }
          .gradient-text {
            background: linear-gradient(135deg, #ffffff 0%, #BE123C 60%, #ff6b6b 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .glow-red { box-shadow: 0 0 80px -20px rgba(190, 18, 60, 0.5); }
          .card-hover { transition: all 0.3s ease; }
          .card-hover:hover { transform: translateY(-4px); border-color: rgba(190,18,60,0.4); }
          @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
          @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          .float { animation: float 6s ease-in-out infinite; }
          .spin-slow { animation: spin-slow 20s linear infinite; }
          @keyframes fade-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
          .fade-up { animation: fade-up 0.8s ease forwards; }
          .fade-up-delay-1 { animation: fade-up 0.8s 0.15s ease both; }
          .fade-up-delay-2 { animation: fade-up 0.8s 0.3s ease both; }
          .fade-up-delay-3 { animation: fade-up 0.8s 0.45s ease both; }
        `}</style>
      </Head>

      {/* Navigation */}
      <nav className="w-full fixed top-0 z-50 px-6 py-4 flex justify-between items-center backdrop-blur-xl border-b border-white/5" style={{background: 'rgba(10,10,15,0.8)'}}>
        <div className="font-display text-xl font-bold tracking-tight">
          UFPS <span className="text-[#BE123C]">·</span> Sistemas
        </div>
        <div className="flex items-center gap-6">
          <a href="https://ww2.ufps.edu.co/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors hidden sm:block">
            Sitio Oficial
          </a>
          <Link href="/portal" className="text-sm font-semibold px-5 py-2 bg-[#BE123C] hover:bg-red-700 rounded-full transition-colors">
            Portal →
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-20 overflow-hidden noise-bg">
        {/* Background orbs */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] pointer-events-none" style={{background: 'radial-gradient(circle, #BE123C, transparent)'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none" style={{background: 'radial-gradient(circle, #7c3aed, transparent)'}}></div>

        {/* Decorative ring */}
        <div className="absolute spin-slow w-[700px] h-[700px] rounded-full border border-white/[0.03] pointer-events-none"></div>
        <div className="absolute spin-slow w-[500px] h-[500px] rounded-full border border-[#BE123C]/10 pointer-events-none" style={{animationDirection:'reverse', animationDuration:'30s'}}></div>

        <div className="relative z-10 max-w-5xl text-center">
          {/* Badge */}
          <div className="fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-white/70 mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BE123C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#BE123C]"></span>
            </span>
            Acreditación de Alta Calidad · UFPS
          </div>

          {/* Heading */}
          <h1 className="fade-up-delay-1 font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-8">
            <span className="gradient-text">Ingeniero</span>
            <br />
            <span className="text-white/90">de Sistemas</span>
          </h1>

          {/* Subheading */}
          <p className="fade-up-delay-2 text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto mb-12">
            Formamos profesionales con visión global que diseñan, construyen y gestionan las soluciones tecnológicas que transforman la sociedad.
          </p>

          {/* CTA */}
          <div className="fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/portal" className="group glow-red inline-flex items-center gap-3 px-8 py-4 bg-[#BE123C] hover:bg-red-700 text-white font-semibold rounded-full transition-all hover:scale-105">
              Explorar el Portal de Inducción
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a href="/ufps-induction/pep.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 border border-white/10 hover:border-white/30 text-white/70 hover:text-white font-semibold rounded-full transition-all">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              Ver PEP Oficial
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/5 py-10 px-6" style={{background: 'rgba(255,255,255,0.02)'}}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-white mb-1">{s.value}</p>
              <p className="text-sm text-white/40">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#BE123C] font-semibold text-sm uppercase tracking-widest mb-4">¿Por qué elegirnos?</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Una carrera con propósito</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="card-hover p-8 rounded-2xl border border-white/8 cursor-default" style={{background: 'rgba(255,255,255,0.03)'}}>
                <div className="w-12 h-12 rounded-xl bg-[#BE123C]/15 text-[#BE123C] flex items-center justify-center mb-6">
                  {f.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-white/50 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden p-12 text-center" style={{background: 'linear-gradient(135deg, #BE123C 0%, #7f0a25 100%)'}}>
            <div className="absolute inset-0 noise-bg opacity-30"></div>
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">¿Listo para comenzar?</h2>
              <p className="text-red-100/80 text-lg mb-8 max-w-xl mx-auto">Explora el portal completo con toda la información del programa: malla curricular, docentes, investigación y más.</p>
              <Link href="/portal" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#BE123C] font-bold rounded-full hover:scale-105 transition-transform shadow-2xl">
                Ingresar al Portal
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <p className="font-display text-lg font-bold text-white mb-2">UFPS <span className="text-[#BE123C]">·</span> Ingeniería de Sistemas</p>
        <p className="text-sm text-white/30">© {new Date().getFullYear()} Universidad Francisco de Paula Santander · Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
