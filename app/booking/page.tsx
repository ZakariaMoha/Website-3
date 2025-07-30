import { Metadata } from 'next';
import BookingForm from '@/components/BookingForm';

export const metadata: Metadata = {
  title: 'Book a Car - Parklands CarHires',
  description: 'Book your car rental quickly and easily. Fill out our form and well contact you via WhatsApp to confirm your booking.',
};

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Book Your Car
          </h1>
          <p className="text-xl text-gray-600">
            Fill out the form below and we'll contact you via WhatsApp to confirm your booking.
          </p>
        </div>
        <BookingForm />
      </div>
    </div>
  );
}