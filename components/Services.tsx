
import React from 'react';
import { Calculator, ShieldCheck, LineChart, Briefcase, Users, FileText } from 'lucide-react';

const services = [
  {
    icon: <Calculator className="h-8 w-8 text-blue-600" />,
    title: "Tax Strategy",
    description: "Advanced planning to minimize liabilities and ensure total compliance with ever-changing tax codes."
  },
  {
    icon: <LineChart className="h-8 w-8 text-blue-600" />,
    title: "Financial Advisory",
    description: "Deep-dive analysis and forecasting to guide your business through expansion and investment stages."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
    title: "Audit & Assurance",
    description: "Rigorous internal and external auditing services to maintain transparency and stakeholder trust."
  },
  {
    icon: <Briefcase className="h-8 w-8 text-blue-600" />,
    title: "CFO Services",
    description: "Fractional leadership for growing enterprises needing top-tier financial oversight without the full-time cost."
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Payroll & HR",
    description: "Automated systems that ensure your team is paid accurately and on time, every single period."
  },
  {
    icon: <FileText className="h-8 w-8 text-blue-600" />,
    title: "Bookkeeping",
    description: "Meticulous day-to-day record keeping using cloud-integrated technology for real-time visibility."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-700 font-bold text-sm uppercase tracking-[0.2em] mb-4">What we do</h2>
          <h3 className="text-4xl lg:text-5xl font-serif text-slate-900 mb-6">Expert Solutions for Growth</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We combine traditional expertise with modern technological tools to provide a seamless financial management experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="mb-6 inline-block p-4 bg-white rounded-xl shadow-sm group-hover:bg-blue-50 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#" className="text-blue-700 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <span className="text-lg">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
