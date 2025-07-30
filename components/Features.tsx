import { Shield, DollarSign, Users, Clock, Headphones, MapPin } from 'lucide-react';

const features = [
  {
    icon: DollarSign,
    title: 'Affordable Rates',
    description: 'Competitive pricing with no hidden fees. Best value for money in Nairobi.'
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'All vehicles are comprehensively insured for your complete peace of mind.'
  },
  {
    icon: Users,
    title: 'Driver Option',
    description: 'Professional, experienced drivers available for your convenience.'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock booking and support services via WhatsApp.'
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    description: 'Dedicated customer service team ready to assist you anytime.'
  },
  {
    icon: MapPin,
    title: 'Wide Coverage',
    description: 'Serving Nairobi, Parklands, and surrounding areas with delivery options.'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Parklands CarHires?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide exceptional car rental services with a commitment to quality, 
            reliability, and customer satisfaction.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gray-50 p-8 rounded-xl hover:bg-yellow-50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-3 rounded-lg group-hover:bg-yellow-200 transition-colors">
                  <feature.icon className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}