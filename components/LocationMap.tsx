export default function LocationMap() {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Location</h3>
        <p className="text-gray-600 mb-6">
          Visit us at our office in Parklands, Nairobi, or contact us for vehicle delivery services.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Address:</h4>
            <p className="text-gray-600 mb-4">
              Parklands Road, Parklands<br />
              Nairobi, Kenya
            </p>
            <div className="space-y-2">
              <a href="tel:+254700000000" className="flex items-center text-yellow-600 hover:text-yellow-700 transition-colors">
                <span>📞 +254 700 000 000</span>
              </a>
              <a href="mailto:info@parklandscarhires.com" className="flex items-center text-yellow-600 hover:text-yellow-700 transition-colors">
                <span>✉️ info@parklandscarhires.com</span>
              </a>
            </div>
          </div>
          <div className="h-64 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7937094165394!2d36.85973731475394!3d-1.2920659990648312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d22c5d8c5d%3A0x8b8b8b8b8b8b8b8b!2sParklands%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1635789012345!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Parklands CarHires Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
}