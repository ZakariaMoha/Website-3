import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gray-900 min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Drive in Style –{' '}
          <span className="text-yellow-500">Parklands CarHires</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Premium car rental services in Nairobi. Affordable rates, fully insured vehicles, 
          and professional drivers available.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/cars"
            className="group bg-yellow-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 min-w-[200px] justify-center"
          >
            <span>View Cars</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <a
            href="https://wa.me/254700000000?text=Hello, I'd like to book a car from Parklands CarHires. Could you please help me with the available options?"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 min-w-[200px] justify-center"
          >
            <Phone className="h-5 w-5" />
            <span>Book via WhatsApp</span>
          </a>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
            <span className="text-sm">5+ Years Experience</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
            <span className="text-sm">24/7 Support</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
            <span className="text-sm">Fully Insured</span>
          </div>
        </div>
      </div>
    </div>
  );
}