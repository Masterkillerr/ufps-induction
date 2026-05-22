import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col overflow-x-hidden selection:bg-[#BE123C] selection:text-white">
      <Head>
        <title>Ingeniería de Sistemas | UFPS</title>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
          .font-display { font-family: 'Playfair Display', serif; }
          .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
          .bg-grid-pattern {
            background-size: 40px 40px;
            background-image: linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
          }
        `}</style>
      </Head>

      {/* Navigation Bar */}
      <nav className="w-full absolute top-0 z-50 py-6 px-8 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
        <div className="font-display text-2xl font-bold text-slate-900">UFPS<span className="text-[#BE123C]">.</span></div>
        <a href="https://ww2.ufps.edu.co/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-500 hover:text-[#BE123C] transition-colors">
          Sitio Oficial UFPS
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 px-6 bg-grid-pattern overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-[#BE123C]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-slate-400/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl text-center space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 mb-4">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BE123C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#BE123C]"></span>
            </span>
            Acreditación de Alta Calidad
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl font-bold text-slate-900 tracking-tight leading-tight">
            Diseña el <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BE123C] to-red-500">Futuro</span> del Software.
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Formando líderes tecnológicos con visión global, pensamiento crítico y la capacidad de construir las soluciones del mañana.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link 
              href="/portal" 
              className="group relative px-8 py-4 bg-slate-900 text-white rounded-full font-semibold overflow-hidden shadow-2xl hover:shadow-slate-900/20 transition-all hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#BE123C] to-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative flex items-center gap-2">
                Ingresar al Portal de Inducción
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: "🚀",
                title: "Vanguardia Tecnológica",
                desc: "Aprende con las metodologías y herramientas que demanda la industria moderna (IA, Cloud, IoT)."
              },
              {
                icon: "🌍",
                title: "Impacto Glocal",
                desc: "Desarrolla soluciones que transforman la región con una visión y estándares internacionales."
              },
              {
                icon: "💡",
                title: "Espíritu Innovador",
                desc: "Más que programar, te enseñamos a pensar sistémicamente para resolver problemas complejos."
              }
            ].map((feature, idx) => (
              <div key={idx} className="space-y-4 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-[#BE123C]/5 transition-colors group cursor-default">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform origin-left">{feature.icon}</div>
                <h3 className="font-display text-2xl font-bold text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-slate-400 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto flex items-center justify-center text-white mb-8">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <p className="font-sans">
            Programa de Ingeniería de Sistemas<br/>
            Universidad Francisco de Paula Santander
          </p>
          <p className="text-sm opacity-50">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
