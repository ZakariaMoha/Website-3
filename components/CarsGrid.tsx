import { Fuel, Settings, Phone } from 'lucide-react';

const cars = [
  {
    id: 1,
    name: 'Toyota Corolla',
    image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 'KSh 3,500',
    fuel: 'Petrol',
    transmission: 'Manual',
    category: 'Economy'
  },
  {
    id: 2,
    name: 'Honda Civic',
    image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 'KSh 4,000',
    fuel: 'Petrol',
    transmission: 'Automatic',
    category: 'Economy'
  },
  {
    id: 3,
    name: 'Nissan X-Trail',
    image: 'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 'KSh 6,000',
    fuel: 'Petrol',
    transmission: 'Automatic',
    category: 'SUV'
  },
  {
    id: 4,
    name: 'Toyota RAV4',
    image: 'https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 'KSh 7,500',
    fuel: 'Hybrid',
    transmission: 'Automatic',
    category: 'SUV'
  },
  {
    id: 5,
    name: 'BMW 3 Series',
    image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 'KSh 10,000',
    fuel: 'Petrol',
    transmission: 'Automatic',
    category: 'Luxury'
  },
  {
    id: 6,
    name: 'Mercedes C-Class',
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 'KSh 12,000',
    fuel: 'Petrol',
    transmission: 'Automatic',
    category: 'Luxury'
  },
  {
    id: 7,
    name: 'Toyota Hiace',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 'KSh 8,000',
    fuel: 'Diesel',
    transmission: 'Manual',
    category: '14-Seater'
  },
  {
    id: 8,
    name: 'Isuzu D-Max',
    image: 'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 'KSh 5,500',
    fuel: 'Diesel',
    transmission: 'Manual',
    category: 'Pickup'
  }
];

export default function CarsGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {cars.map((car) => (
        <div
          key={car.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-yellow-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                {car.category}
              </span>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {car.name}
            </h3>
            
            <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Fuel className="h-4 w-4" />
                <span>{car.fuel}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Settings className="h-4 w-4" />
                <span>{car.transmission}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold text-yellow-600">
                  {car.price}
                </span>
                <span className="text-gray-500 text-sm">/day</span>
              </div>
              <div className="flex space-x-2">
                <a
                  href="tel:+254700000000"
                  className="bg-gray-900 text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center"
                  title="Call to book"
                >
                  <Phone className="h-4 w-4" />
                </a>
                <a
                  href={`https://wa.me/254700000000?text=Hi, I'm interested in booking the ${car.name} (${car.category}) at ${car.price}/day. Please provide more details about availability and booking process.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium text-sm"
                >
                  Hire Now
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}