'use client';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main CTA Section */}
      <div className="bg-gradient-to-r from-primary to-primary-dark py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Ready to Take Control of Your Wealth?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Your wealth deserves expert attention. And you deserve the convenience.
          </p>
          <button
            onClick={() => scrollToSection('pricing')}
            className="bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Book Now - ₹2,999 →
          </button>
          <p className="text-sm text-white/80 mt-4">
            Use code <span className="font-bold">WEALTHYHOME1999</span> for ₹1,000 off
          </p>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <img
              src="https://i.wlycdn.com/wealthy-home-page/wealthy-new-purple-logo.svg"
              alt="Wealthy"
              className="h-8 mb-4 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed">
              On-demand wealth advisory service by Wealthy, bringing expert advisors
              to your doorstep in 30 minutes.
            </p>
            <div className="mt-4">
              <a href="https://wealthy.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light transition-colors text-sm">
                Visit Wealthy.in →
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('how-it-works')} className="hover:text-primary transition-colors">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition-colors">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('advisors')} className="hover:text-primary transition-colors">
                  Our Advisors
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="hover:text-primary transition-colors">
                  FAQ
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Blog: Wealth Tips</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Careers</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Refund Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">SEBI Compliance</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Grievance Redressal</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:home@wealthy.in" className="hover:text-primary transition-colors">
                  home@wealthy.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:1800-XXX-XXXX" className="hover:text-primary transition-colors">
                  1800-XXX-XXXX (Toll-free)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <a href="https://wa.me/91XXXXXXXXXX" className="hover:text-primary transition-colors">
                  WhatsApp: +91-XXXXX-XXXXX
                </a>
              </li>
              <li className="pt-2">
                <p className="text-xs text-gray-400">Live Chat: 8 AM - 10 PM</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Available Cities */}
      <div className="border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-white font-bold text-center mb-4">Available In</h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-gray-800 px-4 py-2 rounded-full">Mumbai & Navi Mumbai</span>
            <span className="bg-gray-800 px-4 py-2 rounded-full">Delhi-NCR</span>
            <span className="bg-gray-800 px-4 py-2 rounded-full">Bangalore</span>
            <span className="bg-gray-700 px-4 py-2 rounded-full text-gray-400">Pune (Coming Soon)</span>
            <span className="bg-gray-700 px-4 py-2 rounded-full text-gray-400">Hyderabad (Coming Soon)</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © 2025 Wealthy. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 text-center">
              A service by Wealthy - India's leading platform for wealth management
            </p>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              All advice provided is subject to SEBI guidelines and fiduciary duty standards.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
