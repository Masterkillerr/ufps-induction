import React, { useState } from 'react';
import Link from "next/link";

// --- Data & Components ---

const Data = {
  identidad: {
    title: "Identidad Institucional",
    content: (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-display text-2xl font-bold mb-4 text-[#BE123C]">Misión</h3>
            <p className="text-slate-600 leading-relaxed font-sans text-sm">
              El Programa de Ingeniería de Sistemas de la UFPS está comprometido en la formación integral de profesionales competentes en el Gestión y Desarrollo de Software, caracterizados por una sólida fundamentación en las áreas de las ciencias de la computación e informática, enmarcado en un Proyecto Educativo fundamentado en el mejoramiento continuo de los procesos misionales; basados en los principios de excelencia académica, con responsabilidad y compromiso con los procesos de transformación de la región y del país; contando con docentes de calidad y con una adecuada infraestructura física y tecnológica.
            </p>
          </div>
          <div className="p-8 bg-slate-900 text-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow">
            <h3 className="font-display text-2xl font-bold mb-4 text-[#BE123C]">Visión</h3>
            <p className="text-slate-300 leading-relaxed font-sans text-sm">
              En el año 2027, el Programa de Ingeniería de Sistemas de la UFPS alcanzará niveles de alta calidad, enmarcados en procesos continuos de mejoramiento, líder en la formación de profesionales competentes en la Gestión y Desarrollo de Software, comprometidos con el desarrollo regional, nacional e internacional, afrontando las situaciones cambiantes del medio. Apoyados en una estructura curricular flexible, con un equipo administrativo idóneo, con docentes de calidad, con una adecuada infraestructura física y tecnológica.
            </p>
          </div>
        </div>
      </div>
    )
  },
  objetivos: {
    title: "Objetivos del Programa",
    content: (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
          <h3 className="font-display text-2xl font-bold mb-4 text-slate-900">Objetivo General</h3>
          <p className="text-slate-600 leading-relaxed font-sans">
            Diseñar y consolidar un modelo educativo innovador y de alta calidad en Ingeniería de Sistemas, que forme profesionales con competencias técnicas, investigativas y éticas, capaces de desarrollar, gestionar y optimizar soluciones tecnológicas para la transformación digital y la innovación en diversos sectores.
          </p>
        </div>
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
          <h4 className="font-display text-2xl font-bold text-slate-900 mb-6">Objetivos Específicos</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Formación Integral", d: "Desarrollar en los estudiantes competencias en desarrollo de software, infraestructura tecnológica, seguridad informática y gestión de proyectos." },
              { t: "Innovación y Tecnología", d: "Incorporar tecnologías emergentes como inteligencia artificial, big data, blockchain, IoT y computación en la nube en la formación académica." },
              { t: "Investigación y Desarrollo", d: "Fomentar la investigación aplicada y la producción de conocimiento en áreas clave de la Ingeniería de Sistemas." },
              { t: "Vinculación Sector Productivo", d: "Promover la interacción entre la academia y la industria a través de prácticas, convenios y proyectos de impacto social y tecnológico." },
              { t: "Internacionalización", d: "Fortalecer la participación de estudiantes y docentes en redes académicas y de investigación a nivel internacional." },
              { t: "Responsabilidad Social", d: "Formar ingenieros con un alto sentido de ética y compromiso con el desarrollo sostenible." }
            ].map((p, i) => (
              <div key={i} className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all group hover:-translate-y-1 cursor-default">
                <div className="w-10 h-10 bg-red-50 text-[#BE123C] rounded-full flex items-center justify-center font-bold mb-4 group-hover:bg-[#BE123C] group-hover:text-white transition-colors">{i+1}</div>
                <h5 className="font-bold text-slate-900 mb-2">{p.t}</h5>
                <p className="text-sm text-slate-600 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  perfil: {
    title: "Perfil de Ingreso y Egreso",
    content: (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
            <h3 className="font-display text-2xl font-bold mb-6 text-slate-900">Ponderación Saber 11</h3>
            {[
              { area: "Matemáticas", val: 30, color: "bg-[#BE123C]" },
              { area: "Lectura Crítica", val: 30, color: "bg-[#BE123C]" },
              { area: "Inglés", val: 20, color: "bg-slate-800" },
              { area: "Ciencias Naturales", val: 10, color: "bg-slate-400" },
              { area: "Sociales y Ciudadanas", val: 10, color: "bg-slate-400" }
            ].map(item => (
              <div key={item.area} className="space-y-1 mb-4">
                <div className="flex justify-between text-sm font-semibold text-slate-700">
                  <span>{item.area}</span> <span>{item.val}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className={`${item.color} h-full rounded-full`} style={{ width: `${item.val}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-8 bg-slate-900 text-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow">
            <h3 className="font-display text-2xl font-bold mb-4 text-[#BE123C]">Perfil de Egreso</h3>
            <p className="text-slate-300 leading-relaxed font-sans text-sm">
              Profesional autónomo, crítico y creador, capaz de resolver problemas complejos de ingeniería mediante la aplicación de principios científicos y el diseño de software de clase mundial con ética y responsabilidad social.
            </p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h4 className="font-display text-3xl font-bold text-slate-900 mb-6">Propósitos Formativos</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { t: "Intelectual", d: "Fomento de pensamiento crítico, lógico y sistémico para modelar soluciones complejas." },
              { t: "Humano", d: "Actitudes éticas, honestidad, responsabilidad y respeto hacia la diversidad social." },
              { t: "Social", d: "Capacidad de relacionarse, trabajar en equipo multidisciplinar y cohabitar constructivamente." },
              { t: "Profesional", d: "Saberes teóricos, heurísticos y de gestión de proyectos para favorecer la empleabilidad." }
            ].map(p => (
              <div key={p.t} className="p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
                <h5 className="font-bold text-slate-900 mb-1">{p.t}</h5>
                <p className="text-sm text-slate-600">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  malla: {
    title: "Malla Curricular",
    content: (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { a: "Ciencias Básicas", c: "Cálculo, Física, Discretas.", p: "20.12%" },
            { a: "Básicas de Ingeniería", c: "Probabilidad, Investigación Operaciones.", p: "7.31%" },
            { a: "Ingeniería Aplicada", c: "Fundamentos, POO, Software, Redes.", p: "59.76%" },
            { a: "Complementaria", c: "Ética, Comunicación, Electivas.", p: "12.80%" }
          ].map((area, i) => (
            <div key={i} className="p-8 bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow rounded-3xl cursor-default">
              <h3 className="font-display text-xl font-bold text-slate-900 mb-2">{area.a}</h3>
              <p className="text-[#BE123C] font-bold text-3xl mb-4">{area.p}</p>
              <p className="font-sans text-slate-500 text-sm">{area.c}</p>
            </div>
          ))}
        </div>
        <div className="p-8 bg-slate-900 text-white rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold mb-2">Metodologías de Innovación</h3>
            <p className="text-slate-300 text-sm">Aprendizaje Basado en Problemas (ABP), Clase Invertida, Gamificación, Resultados de Aprendizaje.</p>
          </div>
          <a href="/ufps-induction-landing/pensum_ufps_sistemas.pdf" target="_blank" rel="noopener noreferrer" className="bg-[#BE123C] hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold whitespace-nowrap transition-transform hover:scale-105 shadow-lg">
            Descargar Malla PDF
          </a>
        </div>
      </div>
    )
  },
  investigacion: {
    title: "Investigación",
    content: (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {["SILUX", "SIA", "SIAWEB", "VIRAL", "SIDSMOVIL", "SIENSI", "DATASCIENCE", "SIREDSE"].map(s => (
                    <div key={s} className="p-4 bg-white border border-slate-100 rounded-xl font-bold text-center text-sm shadow-sm hover:bg-[#BE123C] hover:text-white hover:border-[#BE123C] transition-colors cursor-default">
                        {s}
                    </div>
                ))}
            </div>
            <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-display text-2xl font-bold mb-4 text-slate-900">Grupos GIDISOFT y GIA</h3>
                <p className="text-slate-600 leading-relaxed">Investigación multidisciplinar con impacto regional e internacional, apoyada por FINU (Fondo de Investigaciones Universitarias).</p>
            </div>
        </div>
    )
  },
  infraestructura: {
    title: "Infraestructura",
    content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="p-8 bg-slate-900 text-white rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-default">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">🌐</div>
                <h3 className="font-display text-xl font-bold mb-2">Conectividad</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Fibra 10Gbps y 2.0Gbps dedicado, garantizando acceso a alta velocidad en todos los espacios del programa.</p>
            </div>
            <div className="p-8 bg-slate-900 text-white rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-default">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">🛠️</div>
                <h3 className="font-display text-xl font-bold mb-2">FAB-LAB</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Laboratorios de última generación para Fabricación digital, Internet de las Cosas (IoT) y Realidad Virtual.</p>
            </div>
            <div className="p-8 bg-slate-900 text-white rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-default">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">📚</div>
                <h3 className="font-display text-xl font-bold mb-2">Recursos Digitales</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Acceso premium a bases de datos científicas internacionales: IEEE, Scopus, Proquest y Emerald.</p>
            </div>
        </div>
    )
  },
  profesores: {
    title: "Cuerpo Docente",
    content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {[
              { "name": "Marco Antonio Adarme Jaimes", "title": "Doctor en Ingeniería", "img": "/profesores/Marco Antonio Adarme Jaimes/img.jpeg" },
              { "name": "José Martín Calixto Cely", "title": "Magister en Proyectos", "img": "/profesores/José Martín Calixto Cely/img.jpeg" },
              { "name": "Nelly Rosana Diaz Leal", "title": "Magister en Gerencia", "img": "/profesores/Nelly Rosana Diaz Leal/img.jpeg" },
              { "name": "Judith del Pilar Rodriguez Tenjo", "title": "Doctor en Educación", "img": "/profesores/Judith del Pilar Rodriguez Tenjo/img.jpeg" },
              { "name": "Carmen Janeth Parada", "title": "Magister en Ciencias", "img": "/profesores/Carmen Janeth Parada/img.jpeg" },
              { "name": "María del Pilar Rojas Puentes", "title": "Maestria en Proyectos", "img": "/profesores/María del Pilar Rojas Puentes/img.jpeg" },
              { "name": "Carlos Eduardo Pardo", "title": "Doctor en Educación", "img": "/profesores/Carlos Eduardo Pardo/img.jpg" },
              { "name": "Freddy Humberto Vera Rivera", "title": "Doctor en Ingeniería", "img": "/profesores/Freddy Humberto Vera Rivera/img.jpg" },
              { "name": "Eduard Gilberto Puerto Cuadros", "title": "Doctor en Ingeniería", "img": "/profesores/Eduard Gilberto Puerto Cuadros/img.jpg" },
              { "name": "Boris Rainiero Pérez Gutiérrez", "title": "Doctor en Ingeniería", "img": "/profesores/Boris Rainiero Pérez Gutiérrez/img.jpeg" },
              { "name": "Mátias Herrera Cáceres", "title": "Doctor en Educación", "img": "/profesores/Mátias Herrera Cáceres/img.jpg" },
              { "name": "Nelson Beltrán Galvis", "title": "Magister en Ciencias", "img": "/profesores/Nelson Beltrán Galvis/img.jpg" },
              { "name": "Milton Jesús Vera Contreras", "title": "Magister en Ingeniería", "img": "/profesores/Milton Jesús Vera Contreras/img.png" }
            ].map((p, i) => (
                <div key={i} className="bg-white border border-slate-100 rounded-2xl p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow group">
                    <img src={`/ufps-induction-landing/profesores/${encodeURIComponent(p.name)}/${p.img.split('/').pop()}`} alt={p.name} className="w-16 h-16 rounded-full object-cover group-hover:scale-105 transition-transform"/>
                    <div>
                        <h4 className="font-bold text-slate-900 text-sm">{p.name}</h4>
                        <p className="text-xs text-[#BE123C] font-semibold mt-1">{p.title}</p>
                    </div>
                </div>
            ))}
        </div>
    )
  }
};

// --- Portal View ---

const PortalPage = () => {
  const [activeTab, setActiveTab] = useState('identidad');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const tabs = [
    { id: 'identidad', label: 'Identidad (Misión)', icon: 'M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9' },
    { id: 'objetivos', label: 'Objetivos del Programa', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { id: 'perfil', label: 'Perfil de Ingreso', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { id: 'malla', label: 'Malla Curricular', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
    { id: 'investigacion', label: 'Investigación', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
    { id: 'infraestructura', label: 'Infraestructura', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
    { id: 'profesores', label: 'Cuerpo Docente', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' }
  ];

  return (
    <div className="h-screen bg-[#FDFDFD] text-[#1E293B] font-sans flex overflow-hidden">
      
      {/* Sidebar */}
      <aside className={`${sidebarCollapsed ? 'w-24' : 'w-72'} bg-slate-900 text-white p-6 sm:p-8 flex flex-col transition-all duration-300 relative z-20 shadow-2xl`}>
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          {!sidebarCollapsed && <h1 className="font-display text-2xl font-bold text-white tracking-tight">UFPS <span className="text-[#BE123C]">Sistemas</span></h1>}
          <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} className="p-2 hover:bg-white/10 rounded-lg transition-colors focus:outline-none">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={sidebarCollapsed ? "M4 6h16M4 12h16M4 18h16" : "M4 6h16M4 12h16M4 18h7"} />
            </svg>
          </button>
        </div>
        
        <nav className="flex-1 space-y-2 overflow-y-auto pr-2 custom-scrollbar">
          {tabs.map(tab => (
            <button 
              key={tab.id} 
              onClick={() => setActiveTab(tab.id)} 
              className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group ${
                activeTab === tab.id 
                  ? 'bg-[#BE123C] text-white shadow-lg shadow-[#BE123C]/20 font-medium' 
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <svg className={`w-5 h-5 flex-shrink-0 ${activeTab === tab.id ? 'text-white' : 'text-slate-500 group-hover:text-white transition-colors'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={tab.icon} />
              </svg>
              {!sidebarCollapsed && <span className="text-sm whitespace-nowrap">{tab.label}</span>}
            </button>
          ))}
        </nav>

        {/* Action Bottom */}
        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col gap-4">
          {!sidebarCollapsed ? (
            <a href="/ufps-induction-landing/pep.pdf" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white p-4 rounded-xl text-sm font-medium transition-colors border border-slate-700">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Descargar PEP Oficial
            </a>
          ) : (
            <a href="/ufps-induction-landing/pep.pdf" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white p-4 rounded-xl transition-colors border border-slate-700" title="Descargar PEP Oficial">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </a>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto p-8 sm:p-12 lg:p-16">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 mb-8 hover:text-[#BE123C] transition-colors bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Volver al Inicio
          </Link>
          
          <div className="flex justify-between items-end mb-12 border-b border-slate-200 pb-8">
            <div>
              <p className="text-[#BE123C] font-semibold text-sm mb-2 tracking-wider uppercase">Portal Académico</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
                {Data[activeTab as keyof typeof Data].title}
              </h2>
            </div>
          </div>
          
          <div className="pb-24">
            {Data[activeTab as keyof typeof Data].content}
          </div>
        </div>
      </main>
      
      {/* Global styles for custom scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #475569;
        }
      `}} />
    </div>
  );
};

export default PortalPage;
