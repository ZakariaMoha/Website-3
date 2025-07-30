'use client';

import { useState } from 'react';
import { Calendar, MapPin, User, Car } from 'lucide-react';

const cars = [
  { id: 1, name: 'Toyota Corolla', price: 'KSh 3,500' },
  { id: 2, name: 'Honda Civic', price: 'KSh 4,000' },
  { id: 3, name: 'Nissan X-Trail', price: 'KSh 6,000' },
  { id: 4, name: 'Toyota RAV4', price: 'KSh 7,500' },
  { id: 5, name: 'BMW 3 Series', price: 'KSh 10,000' },
  { id: 6, name: 'Mercedes C-Class', price: 'KSh 12,000' },
  { id: 7, name: 'Toyota Hiace', price: 'KSh 8,000' },
  { id: 8, name: 'Isuzu D-Max', price: 'KSh 5,500' },
];

const locations = [
  'Parklands Office',
  'Nairobi CBD',
  'JKIA Airport',
  'Westlands',
  'Karen',
  'Delivery to Location'
];

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    pickupDate: '',
    returnDate: '',
    selectedCar: '',
    pickupLocation: '',
    phoneNumber: '',
    additionalNotes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedCarInfo = cars.find(car => car.name === formData.selectedCar);
    const carPrice = selectedCarInfo ? selectedCarInfo.price : '';
    
    const message = `
🚗 *Car Booking Request*

*Customer Details:*
Name: ${formData.fullName}
Phone: ${formData.phoneNumber}

*Booking Details:*
Car: ${formData.selectedCar} ${carPrice ? `(${carPrice}/day)` : ''}
Pickup Date: ${formData.pickupDate}
Return Date: ${formData.returnDate}
Pickup Location: ${formData.pickupLocation}

${formData.additionalNotes ? `*Additional Notes:*\n${formData.additionalNotes}` : ''}

Please confirm availability and provide booking details.
    `.trim();

    const whatsappUrl = `https://wa.me/254700000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
              <User className="inline h-4 w-4 mr-1" />
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
              placeholder="Enter your full name"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
              📱 Phone Number *
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              required
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
              placeholder="+254 700 000 000"
            />
          </div>

          {/* Pickup Date */}
          <div>
            <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="inline h-4 w-4 mr-1" />
              Pickup Date *
            </label>
            <input
              type="date"
              id="pickupDate"
              name="pickupDate"
              required
              value={formData.pickupDate}
              onChange={handleInputChange}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
            />
          </div>

          {/* Return Date */}
          <div>
            <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="inline h-4 w-4 mr-1" />
              Return Date *
            </label>
            <input
              type="date"
              id="returnDate"
              name="returnDate"
              required
              value={formData.returnDate}
              onChange={handleInputChange}
              min={formData.pickupDate || new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
            />
          </div>

          {/* Car Selection */}
          <div>
            <label htmlFor="selectedCar" className="block text-sm font-medium text-gray-700 mb-2">
              <Car className="inline h-4 w-4 mr-1" />
              Select Car *
            </label>
            <select
              id="selectedCar"
              name="selectedCar"
              required
              value={formData.selectedCar}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
            >
              <option value="">Choose a car</option>
              {cars.map((car) => (
                <option key={car.id} value={car.name}>
                  {car.name} - {car.price}/day
                </option>
              ))}
            </select>
          </div>

          {/* Pickup Location */}
          <div>
            <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin className="inline h-4 w-4 mr-1" />
              Pickup Location *
            </label>
            <select
              id="pickupLocation"
              name="pickupLocation"
              required
              value={formData.pickupLocation}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
            >
              <option value="">Select pickup location</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Additional Notes */}
        <div>
          <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-2">
            📝 Additional Notes (Optional)
          </label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            rows={4}
            value={formData.additionalNotes}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
            placeholder="Any special requirements, preferred features, or additional information..."
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+254700000000"
              className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105 flex items-center space-x-2 justify-center"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>Call to Book</span>
            </a>
            <button
              type="submit"
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors duration-300 transform hover:scale-105 flex items-center space-x-2 justify-center"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span>Send via WhatsApp</span>
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-3">
            Choose to call directly or send booking details via WhatsApp
          </p>
        </div>
      </form>
    </div>
  );
}