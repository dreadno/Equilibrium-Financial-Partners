
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';
import { Star, Shield, TrendingUp, Clock } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Social Proof Bar */}
        <section className="bg-slate-50 py-12 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 overflow-hidden">
            <p className="text-center text-slate-400 font-semibold text-xs uppercase tracking-widest mb-10">Trusted by over 1,500+ global enterprises</p>
            <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-40 grayscale contrast-125">
              <span className="text-2xl font-black italic">VANGUARD</span>
              <span className="text-2xl font-black italic">APEX CORP</span>
              <span className="text-2xl font-black italic">NOVA TECH</span>
              <span className="text-2xl font-black italic">LUMEN</span>
              <span className="text-2xl font-black italic">CITADEL</span>
            </div>
          </div>
        </section>

        <Services />

        {/* Why Choose Us */}
        <section id="about" className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/10 skew-x-12 translate-x-1/4"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-blue-400 font-bold text-sm uppercase tracking-[0.2em] mb-4">Our Advantage</h2>
                <h3 className="text-4xl lg:text-5xl font-serif mb-8">Financial Clarity for the Digital Age</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-10">
                  Unlike traditional firms, we leverage cloud technology and real-time data analytics to give you visibility into your finances every single day—not just at the end of the quarter.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 p-3 bg-blue-700/20 rounded-xl border border-blue-500/20">
                      <Shield className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Unmatched Security</h4>
                      <p className="text-slate-400 text-sm">Military-grade encryption for all your financial documents and sensitive data.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 p-3 bg-blue-700/20 rounded-xl border border-blue-500/20">
                      <TrendingUp className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Scale-Focused Advisory</h4>
                      <p className="text-slate-400 text-sm">We don't just count numbers; we help you identify growth levers in your P&L.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 p-3 bg-blue-700/20 rounded-xl border border-blue-500/20">
                      <Clock className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">24/7 Accessibility</h4>
                      <p className="text-slate-400 text-sm">Access your personalized dashboard from any device, anywhere in the world.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-blue-700/10 rounded-[3rem] border border-white/10 p-4">
                  <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-br from-slate-800 to-slate-900 shadow-inner flex flex-col p-8">
                     <div className="flex justify-between items-start mb-12">
                        <div className="space-y-1">
                           <div className="text-xs text-slate-500 uppercase font-bold">Total Portfolio Value</div>
                           <div className="text-3xl font-bold font-mono">$12,450,293.10</div>
                        </div>
                        <div className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-[10px] font-bold">+12.4% YOY</div>
                     </div>
                     <div className="flex-1 flex items-end gap-2">
                        {[40, 60, 45, 80, 55, 95, 70, 85].map((h, i) => (
                          <div key={i} className="flex-1 bg-blue-600/30 rounded-t-lg relative group transition-all" style={{ height: `${h}%` }}>
                            <div className="absolute inset-0 bg-blue-500 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          </div>
                        ))}
                     </div>
                     <div className="mt-8 flex justify-between items-center text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                        <span>Jan 2024</span>
                        <span>Aug 2024</span>
                     </div>
                  </div>
                </div>
                {/* Floaties */}
                <div className="absolute -top-6 -right-6 bg-blue-600 p-6 rounded-2xl shadow-xl animate-bounce duration-[3000ms]">
                  <Star className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-blue-700 font-bold text-sm uppercase tracking-[0.2em] mb-4">Success Stories</h2>
              <h3 className="text-4xl lg:text-5xl font-serif text-slate-900">What Our Partners Say</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Jenkins",
                  role: "CEO, TechNova Solutions",
                  content: "Equilibrium transformed how we look at our burn rate. Their CFO services helped us secure our Series B funding with ease.",
                  img: "https://picsum.photos/100/100?random=1"
                },
                {
                  name: "Marcus Thorne",
                  role: "Founder, Thorne Logistics",
                  content: "The level of detail they provide during tax season is incredible. I've saved over $150k in liabilities over the last two years.",
                  img: "https://picsum.photos/100/100?random=2"
                },
                {
                  name: "Elena Rodriguez",
                  role: "Director, Global Health NGO",
                  content: "Transparent, professional, and highly responsive. Their audit team is the best we've ever worked with in 15 years.",
                  img: "https://picsum.photos/100/100?random=3"
                }
              ].map((t, i) => (
                <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between hover:shadow-lg transition-all">
                  <div>
                    <div className="flex gap-1 mb-6 text-amber-400">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                    </div>
                    <p className="text-slate-600 italic mb-8 leading-relaxed">"{t.content}"</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                      <div className="text-xs text-slate-400 font-medium">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactForm />
      </main>

      <ChatWidget />
      <Footer />
    </div>
  );
};

export default App;
