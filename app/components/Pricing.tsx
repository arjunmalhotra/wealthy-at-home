'use client';

export default function Pricing() {
  const plans = [
    {
      name: "Pay Per Consultation",
      price: "₹2,999",
      period: "per session",
      popular: false,
      features: [
        "Single 45-minute home consultation",
        "Comprehensive portfolio review",
        "Written report & action plan",
        "7-day follow-up support"
      ],
      cta: "Book Now",
      badge: "Most popular for first-time users"
    },
    {
      name: "Wealth Partner Plan",
      price: "₹7,999",
      period: "for 3 months",
      savings: "Save ₹1,000",
      popular: true,
      features: [
        "3 home consultations (one per month)",
        "Unlimited phone/WhatsApp support",
        "Priority booking (15-min arrival)",
        "Quarterly portfolio rebalancing",
        "Tax planning workshop access"
      ],
      cta: "Get Started",
      badge: "Best for active wealth builders"
    },
    {
      name: "Family Wealth Plan",
      price: "₹19,999",
      period: "per year",
      savings: "Save ₹6,000",
      popular: false,
      features: [
        "6 home consultations across the year",
        "Dedicated relationship advisor",
        "Priority 24/7 support",
        "Annual tax filing guidance",
        "Free family members coverage (up to 4)",
        "Exclusive wealth-building workshops"
      ],
      cta: "Contact Us",
      badge: "Ideal for HNI families"
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Pricing & Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your wealth management needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                plan.popular ? 'border-4 border-primary transform scale-105' : 'border border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                  RECOMMENDED
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>

                {/* Badge */}
                <p className="text-sm text-gray-600 mb-6 h-12">
                  {plan.badge}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  {plan.savings && (
                    <div className="text-green-600 font-semibold mt-2">
                      {plan.savings}
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offer Banner */}
        <div className="bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-2xl p-8 text-center border-2 border-accent/30">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              🎉 Special Launch Offer
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-bold text-accent-dark">First 500 users get ₹1,000 OFF!</span>
              <br />
              Use code: <span className="font-mono font-bold bg-white px-3 py-1 rounded text-primary">WEALTHYHOME1999</span>
            </p>
            <p className="text-sm text-gray-600">
              Limited time offer. Applicable on all first-time consultations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
