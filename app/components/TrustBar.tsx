export default function TrustBar() {
  return (
    <section className="bg-gray-50 py-8 px-4 border-y border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-primary mb-1">50,000+</div>
            <div className="text-sm text-gray-600">Consultations Completed</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl font-bold text-primary mb-1">4.9★</div>
            <div className="text-sm text-gray-600">Customer Rating</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-gray-600">SEBI-Certified Advisors</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl font-bold text-primary mb-1">7 Days</div>
            <div className="text-sm text-gray-600">8 AM - 10 PM</div>
          </div>
        </div>
      </div>
    </section>
  );
}
