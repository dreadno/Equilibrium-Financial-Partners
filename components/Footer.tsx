
import React from 'react';
import { Landmark, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Landmark className="h-8 w-8 text-blue-700" />
              <span className="text-xl font-bold tracking-tight text-slate-900 uppercase">Equilibrium</span>
            </div>
            <p className="text-slate-500 leading-relaxed text-sm">
              Providing modern accounting, financial planning, and advisory services to help businesses thrive in an ever-evolving market.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-400 hover:text-blue-700 transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-blue-700 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-blue-700 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-blue-700 transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-700 transition-colors">Tax Strategy</a></li>
              <li><a href="#" className="hover:text-blue-700 transition-colors">Audit & Assurance</a></li>
              <li><a href="#" className="hover:text-blue-700 transition-colors">Business Advisory</a></li>
              <li><a href="#" className="hover:text-blue-700 transition-colors">Fractional CFO</a></li>
              <li><a href="#" className="hover:text-blue-700 transition-colors">Bookkeeping</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-700 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-700 transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-blue-700 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-700 transition-colors">News & Press</a></li>
              <li><a href="#" className="hover:text-blue-700 transition-colors">Client Portal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-700 transition-colors">Tax Deadlines 2024</a></li>
              <li><a href="#" className="hover:text-blue-700 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-700 transition-colors">Financial Blog</a></li>
              <li><a href="#" className="hover:text-blue-700 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-700 transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2024 Equilibrium Financial Partners LLC. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-600">Cookie Settings</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
