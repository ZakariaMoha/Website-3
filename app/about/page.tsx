import { Metadata } from 'next';
import { Clock, MapPin, Shield, Users } from 'lucide-react';
import LocationMap from '@/components/LocationMap';

export const metadata: Metadata = {
  title: 'About Us - Parklands CarHires',
  description: 'Learn about Parklands CarHires - your trusted car rental partner in Nairobi. Professional service, competitive rates, and customer satisfaction.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About Parklands CarHires
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for premium car rental services in Nairobi and beyond. 
            We provide reliable, affordable, and professional vehicle rental solutions.
          </p>
        </div>

        {/* Company Info */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Established with a vision to provide exceptional car rental services, 
                Parklands CarHires has been serving customers in Nairobi with integrity 
                and professionalism.
              </p>
              <p>
                We understand that every journey is important, whether it's for business, 
                leisure, or special occasions. That's why we maintain a fleet of well-maintained, 
                reliable vehicles to ensure your comfort and safety.
              </p>
              <p>
                Our commitment to customer satisfaction, competitive pricing, and flexible 
                rental options has made us a preferred choice for car hire in Nairobi.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-yellow-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Fully Insured</h4>
                  <p className="text-gray-600">All our vehicles are comprehensively insured for your peace of mind.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-yellow-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Professional Drivers</h4>
                  <p className="text-gray-600">Experienced, licensed drivers available upon request.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-yellow-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                  <p className="text-gray-600">Round-the-clock customer support for your convenience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Working Hours & Service Areas */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 text-white p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-yellow-500 mr-3" />
              <h3 className="text-xl font-bold">Working Hours</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>8:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>10:00 AM - 2:00 PM</span>
              </div>
            </div>
            <p className="text-yellow-500 text-sm mt-4">
              Emergency bookings available 24/7 via WhatsApp
            </p>
          </div>

          <div className="bg-yellow-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-yellow-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Service Areas</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <div>
                <h4 className="font-semibold">Primary Service Areas:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm mt-2">
                  <li>Parklands & Surrounding Areas</li>
                  <li>Nairobi CBD</li>
                  <li>Westlands</li>
                  <li>Karen & Langata</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Extended Areas:</h4>
                <p className="text-sm">Airport transfers and long-distance trips available on request.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Location */}
        <LocationMap />
      </div>
    </div>
  );
}