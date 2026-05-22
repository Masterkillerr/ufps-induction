import React, { useState } from 'react';
import Head from 'next/head';

// --- Section Components ---

const PerfilIngreso = () => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-8 bg-white border border-slate-100 rounded-3xl">
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
      <div className="p-8 bg-slate-900 text-white rounded-3xl">
        <h3 className="font-display text-2xl font-bold mb-4 text-[#BE123C]">Perfil de Egreso</h3>
        <p className="text-slate-300 leading-relaxed font-sans text-sm">
          Profesional autónomo, crítico y creador, capaz de resolver problemas complejos de ingeniería mediante la aplicación de principios científicos y el diseño de software de clase mundial.
        </p>
      </div>
    </div>
    <div className="bg-white p-8 rounded-3xl border border-slate-100">
      <h4 className="font-display text-3xl font-bold text-slate-900 mb-6">Propósitos Formativos</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          { t: "Intelectual", d: "Pensamiento lógico, crítico y sistémico para modelar soluciones complejas." },
          { t: "Humano", d: "Actitudes éticas, honestidad, responsabilidad y respeto hacia la diversidad social." },
          { t: "Social", d: "Capacidad de relacionarse, trabajar en equipo multidisciplinar y cohabitar constructivamente." },
          { t: "Profesional", d: "Saberes teóricos, heurísticos y de gestión de proyectos para favorecer la empleabilidad." }
        ].map(p => (
          <div key={p.t} className="p-6 bg-slate-50 rounded-2xl">
            <h5 className="font-bold text-slate-900 mb-1">{p.t}</h5>
            <p className="text-sm text-slate-600">{p.d}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const MallaCurricular = () => (
  <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { a: "Ciencias Básicas", c: "Cálculo, Física, Discretas.", p: "20.12%" },
        { a: "Básicas de Ingeniería", c: "Probabilidad, Investigación Operaciones.", p: "7.31%" },
        { a: "Ingeniería Aplicada", c: "Fundamentos, POO, Software, Redes.", p: "59.76%" },
        { a: "Complementaria", c: "Ética, Comunicación, Electivas.", p: "12.80%" }
      ].map((area, i) => (
        <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl">
          <h3 className="font-display text-xl font-bold text-slate-900 mb-2">{area.a}</h3>
          <p className="text-[#BE123C] font-bold text-3xl mb-4">{area.p}</p>
          <p className="font-sans text-slate-500 text-sm">{area.c}</p>
        </div>
      ))}
    </div>
    <div className="p-8 bg-slate-900 text-white rounded-3xl">
      <h3 className="font-display text-2xl font-bold mb-4">Metodologías de Innovación</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <p className="text-slate-300">Aprendizaje Basado en Problemas (ABP), Clase Invertida (Flipped Classroom), Gamificación, Resultados de Aprendizaje.</p>
      </div>
    </div>
  </div>
);

const Profesores = () => {
    const profs = [
      { "name": "Marco Antonio Adarme Jaimes", "title": "Doctor en Ingenieria", "img": "/profesores/Marco Antonio Adarme Jaimes/img.jpeg" },
      { "name": "José Martín Calixto Cely", "title": "Magister en Proyectos", "img": "/profesores/José Martín Calixto Cely/img.jpeg" },
      { "name": "Nelly Rosana Diaz Leal", "title": "Magister en Gerencia", "img": "/profesores/Nelly Rosana Diaz Leal/img.jpeg" },
      { "name": "Judith del Pilar Rodriguez Tenjo", "title": "Doctor en Educacion", "img": "/profesores/Judith del Pilar Rodriguez Tenjo/img.jpeg" },
      { "name": "Carmen Janeth Parada", "title": "Magister en Ciencias", "img": "/profesores/Carmen Janeth Parada/img.jpeg" },
      { "name": "María del Pilar Rojas Puentes", "title": "Maestria en Proyectos", "img": "/profesores/María del Pilar Rojas Puentes/img.jpeg" },
      { "name": "Carlos Eduardo Pardo", "title": "Doctor en Educacion", "img": "/profesores/Carlos Eduardo Pardo/img.jpg" },
      { "name": "Freddy Humberto Vera Rivera", "title": "Doctor en Ingenieria", "img": "/profesores/Freddy Humberto Vera Rivera/img.jpg" },
      { "name": "Eduard Gilberto Puerto Cuadros", "title": "Doctor en Ingenieria", "img": "/profesores/Eduard Gilberto Puerto Cuadros/img.jpg" },
      { "name": "Boris Rainiero Pérez Gutiérrez", "title": "Doctor en Ingenieria", "img": "/profesores/Boris Rainiero Pérez Gutiérrez/img.jpeg" },
      { "name": "Mátias Herrera Cáceres", "title": "Doctor en Educacion", "img": "/profesores/Mátias Herrera Cáceres/img.jpg" },
      { "name": "Nelson Beltrán Galvis", "title": "Magister en Ciencias", "img": "/profesores/Nelson Beltrán Galvis/img.jpg" },
      { "name": "Milton Jesús Vera Contreras", "title": "Magister en Ingenieria", "img": "/profesores/Milton Jesús Vera Contreras/img.png" }
    ];
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {profs.map((p, i) => (
                <div key={i} className="bg-white border border-slate-100 rounded-2xl overflow-hidden p-6 hover:shadow-lg transition">
                    <img src={`/profesores/${encodeURIComponent(p.name)}/${p.img.split('/').pop()}`} alt={p.name} className="w-20 h-20 rounded-full object-cover mb-4"/>
                    <h4 className="font-bold text-slate-900 mb-1">{p.name}</h4>
                    <p className="text-sm text-[#BE123C] font-semibold">{p.title}</p>
                </div>
            ))}
        </div>
    );
};

const Investigacion = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["SILUX", "SIA", "SIAWEB", "VIRAL", "SIDSMOVIL", "SIENSI", "DATASCIENCE", "SIREDSE"].map(s => (
                <div key={s} className="p-6 bg-white border border-slate-100 rounded-2xl font-bold text-center">
                    Semillero {s}
                </div>
            ))}
        </div>
    </div>
);

const Infraestructura = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="p-8 bg-slate-900 text-white rounded-3xl">
            <h3 className="text-xl font-bold mb-4">Conectividad 10Gbps</h3>
            <p className="text-slate-400">Backbone de fibra óptica interconectando 19 edificios.</p>
        </div>
        <div className="p-8 bg-slate-900 text-white rounded-3xl">
            <h3 className="text-xl font-bold mb-4">FAB-LAB</h3>
            <p className="text-slate-400">Fabricación digital, impresión 3D, IoT y Drones.</p>
        </div>
        <div className="p-8 bg-slate-900 text-white rounded-3xl">
            <h3 className="text-xl font-bold mb-4">Bibliotecas</h3>
            <p className="text-slate-400">Acceso a IEEE, Science Direct, Scopus y Emerald.</p>
        </div>
    </div>
);

// --- Layout ---

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState('perfil');

  const tabs = [
    { id: 'perfil', label: 'Perfil e Ingreso', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', component: <PerfilIngreso /> },
    { id: 'malla', label: 'Plan de Estudios', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01', component: <MallaCurricular /> },
    { id: 'investigacion', label: 'Investigación', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z', component: <Investigacion /> },
    { id: 'recursos', label: 'Infraestructura', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', component: <Infraestructura /> },
    { id: 'profesores', label: 'Cuerpo Docente', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', component: <Profesores /> }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1E293B] font-sans">
      <Head>
        <title>UFPS Induction - Portal</title>
      </Head>
      <div className="flex h-screen overflow-hidden">
        <aside className="w-72 bg-slate-900 text-white p-8 flex flex-col hidden lg:flex">
          <h1 className="font-display text-2xl font-bold mb-12 text-[#BE123C]">UFPS Induction</h1>
          <nav className="space-y-4">
            {tabs.map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-full flex items-center gap-4 p-4 rounded-xl transition ${activeTab === tab.id ? 'bg-[#BE123C]' : 'hover:bg-white/5'}`}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={tab.icon} /></svg>
                {tab.label}
              </button>
            ))}
          </nav>
        </aside>
        <main className="flex-1 overflow-y-auto p-16">
          <h2 className="font-display text-5xl font-bold mb-12">{tabs.find(t => t.id === activeTab)?.label}</h2>
          {tabs.find(t => t.id === activeTab)?.component}
        </main>
      </div>
    </div>
  );
};

export default LandingPage;
