
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden grid lg:grid-cols-5">
          {/* Info Side */}
          <div className="lg:col-span-2 bg-slate-900 p-8 lg:p-12 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-serif mb-6">Let's Discuss Your Future.</h3>
              <p className="text-slate-400 mb-10 leading-relaxed">
                Ready to take your financial management to the next level? Our consultants are ready to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-800 rounded-xl">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Email Us</div>
                    <div className="text-slate-400 text-sm">hello@equilibrium.partners</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-800 rounded-xl">
                    <Phone className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Call Us</div>
                    <div className="text-slate-400 text-sm">+1 (555) 902-3401</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-800 rounded-xl">
                    <MapPin className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Visit Us</div>
                    <div className="text-slate-400 text-sm">750 Financial Plaza, Suite 1200<br />New York, NY 10004</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
              <div className="text-blue-400 font-bold text-xs uppercase mb-2">Office Hours</div>
              <div className="text-sm text-slate-300">Mon - Fri: 8:00 AM - 6:00 PM EST</div>
              <div className="text-sm text-slate-300">Sat: 10:00 AM - 2:00 PM EST</div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3 p-8 lg:p-12">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Work Email</label>
                  <input type="email" placeholder="john@company.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all outline-none" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Subject</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all outline-none appearance-none">
                  <option>Tax Planning Inquiry</option>
                  <option>Business Advisory</option>
                  <option>Audit Services</option>
                  <option>General Support</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Message</label>
                <textarea rows={4} placeholder="How can we help your business?" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all outline-none resize-none"></textarea>
              </div>

              <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2">
                Send Message <Send className="h-4 w-4" />
              </button>

              <p className="text-center text-xs text-slate-400">
                By submitting this form, you agree to our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
