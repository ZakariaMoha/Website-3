import { Metadata } from 'next';
import CarsGrid from '@/components/CarsGrid';

export const metadata: Metadata = {
  title: 'Available Cars - Parklands CarHires',
  description: 'Browse our fleet of premium vehicles available for hire in Nairobi. Sedans, SUVs, and luxury cars with competitive rates.',
};

export default function CarsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Premium Fleet
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully selected vehicles, all fully insured and maintained to the highest standards.
          </p>
        </div>
        <CarsGrid />
      </div>
    </div>
  );
}