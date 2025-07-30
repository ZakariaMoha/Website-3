import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

const featuredCars = [
  {
    id: 1,
    name: 'Toyota Corolla',
    image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 'KSh 3,500',
    fuel: 'Petrol',
    transmission: 'Manual'
  },
  {
    id: 2,
    name: 'Nissan X-Trail',
    image: 'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 'KSh 6,000',
    fuel: 'Petrol',
    transmission: 'Automatic'
  },
  {
    id: 3,
    name: 'Mercedes C-Class',
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 'KSh 12,000',
    fuel: 'Petrol',
    transmission: 'Automatic'
  }
];

export default function CarShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Vehicles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our premium selection of vehicles, from economic options to luxury cars.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {car.name}
                </h3>
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>Fuel: {car.fuel}</span>
                  <span>{car.transmission}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-yellow-600">
                    {car.price}/day
                  </span>
                  <div className="flex space-x-2">
                    <a
                      href="tel:+254700000000"
                      className="bg-gray-900 text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center space-x-1"
                      title="Call to book"
                    >
                      <Phone className="h-4 w-4" />
                    </a>
                    <a
                      href={`https://wa.me/254700000000?text=Hi, I'm interested in booking the ${car.name} at ${car.price}/day. Could you please provide more details?`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
                    >
                      Hire Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link
            href="/cars"
            className="inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium text-lg"
          >
            <span>View All Cars</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}