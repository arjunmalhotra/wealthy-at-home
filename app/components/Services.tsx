export default function Services() {
  const services = [
    {
      title: "Portfolio Health Check",
      duration: "15 mins",
      points: [
        "Review of existing investments",
        "Asset allocation analysis",
        "Risk assessment & rebalancing",
        "Performance benchmarking"
      ],
      icon: "📊"
    },
    {
      title: "Tax Optimization Strategy",
      duration: "10 mins",
      points: [
        "Section 80C optimization",
        "LTCG/STCG tax efficiency",
        "Tax-loss harvesting",
        "Tax-saving instruments"
      ],
      icon: "💰"
    },
    {
      title: "Goal-Based Planning",
      duration: "15 mins",
      points: [
        "Retirement planning roadmap",
        "Children's education fund",
        "Wealth creation strategy",
        "Emergency fund check"
      ],
      icon: "🎯"
    },
    {
      title: "Action Plan & Follow-up",
      duration: "5 mins",
      points: [
        "Prioritized recommendations",
        "Unbiased product suggestions",
        "Implementation guidance",
        "Follow-up scheduling"
      ],
      icon: "✅"
    }
  ];

  const products = [
    { name: "Mutual Funds", icon: "📈" },
    { name: "Stocks & ETFs", icon: "💹" },
    { name: "Insurance", icon: "🛡️" },
    { name: "Fixed Deposits", icon: "🏦" },
    { name: "Bonds", icon: "📑" },
    { name: "PMS & AIFs", icon: "💼" }
  ];

  const deliverables = [
    "Detailed written report (within 24 hours)",
    "Personalized investment plan",
    "7-day WhatsApp follow-up support",
    "One free 15-minute phone consultation within 30 days"
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* 1000+ Products Section */}
        <div className="text-center mb-16 bg-primary/5 rounded-3xl p-12 border-2 border-primary/10">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
            Access to 1000+ Financial Products
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your Wealthy advisor brings the entire product ecosystem to your doorstep
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-3">{product.icon}</div>
                <div className="text-sm font-bold text-gray-900">{product.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
            What's Covered in Your Consultation
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive 45-minute session tailored to your financial goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <div className="text-sm text-primary font-semibold mb-4">
                {service.duration}
              </div>
              <ul className="space-y-2">
                {service.points.map((point, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Post-Consultation Deliverables */}
        <div className="bg-primary/5 rounded-2xl p-8 border-2 border-primary/20">
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-6 text-center">
            Post-Consultation Deliverables
          </h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
