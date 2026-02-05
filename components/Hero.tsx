
import React from 'react';
import { ArrowRight, CheckCircle2, Landmark } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-slate-200 rounded-full blur-3xl opacity-50 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Now accepting new Q1 clients
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif text-slate-900 leading-[1.1] mb-6">
              Financial Precision <br />
              <span className="text-blue-700 italic">Redefined.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
              We provide modern accounting solutions that go beyond the balance sheet. Partner with us to scale your business with confidence through data-driven advisory.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-0.5">
                Book a Consultation <ArrowRight className="h-4 w-4" />
              </button>
              <button className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-all">
                Our Services
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>99.8% Compliance Rate</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>IRS Certified Agents</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800" 
                alt="Accounting professional" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
            
            {/* Stats card overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden sm:block max-w-[240px]">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-blue-50 rounded-xl">
                  {/* Fixed: Added Landmark to imports from lucide-react */}
                  <Landmark className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">$2.4B+</div>
                  <div className="text-xs text-slate-500 font-medium">Assets Managed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
