export default function Advisors() {
  const advisors = [
    {
      name: "Rajesh Mehta",
      credentials: "CFP, CFA",
      experience: "15 years",
      previousOrg: "Ex-ICICI Prudential",
      specialization: "Retirement & Tax Planning",
      rating: "4.9"
    },
    {
      name: "Priya Deshmukh",
      credentials: "CA, CFP",
      experience: "12 years",
      previousOrg: "Ex-Kotak Wealth",
      specialization: "HNI Portfolio Management",
      rating: "4.8"
    },
    {
      name: "Arun Kumar",
      credentials: "MBA Finance",
      experience: "11 years",
      previousOrg: "Ex-HDFC Securities",
      specialization: "Equity & Goal Planning",
      rating: "4.9"
    }
  ];

  const qualityMetrics = [
    { label: "Customer Satisfaction", value: "91%", icon: "😊" },
    { label: "Average Rating", value: "4.8/5", icon: "⭐" },
    { label: "Repeat Clients", value: "30%", icon: "🔄" },
    { label: "Zero Violations", value: "100%", icon: "✅" }
  ];

  return (
    <section id="advisors" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Advisor Excellence Framework
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Only the most qualified and experienced advisors make it to your home
          </p>
        </div>

        {/* Selection Criteria */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="text-3xl mb-3">🎓</div>
            <h3 className="font-bold text-gray-900 mb-2">Rigorous Selection</h3>
            <p className="text-sm text-gray-600">100% SEBI-registered with 10+ years experience</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="font-bold text-gray-900 mb-2">Mandatory Training</h3>
            <p className="text-sm text-gray-600">30-day academy program with 25+ assessments</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-bold text-gray-900 mb-2">Background Verified</h3>
            <p className="text-sm text-gray-600">Complete verification & NDA compliance</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-bold text-gray-900 mb-2">Continuous Monitoring</h3>
            <p className="text-sm text-gray-600">Regular performance audits & re-certification</p>
          </div>
        </div>

        {/* Sample Advisor Profiles */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Meet Some of Our Expert Advisors
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                {/* Avatar Placeholder */}
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                  {advisor.name.split(' ').map(n => n[0]).join('')}
                </div>

                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    {advisor.name}
                  </h4>
                  <p className="text-sm text-primary font-semibold mb-2">
                    {advisor.credentials}
                  </p>
                  <div className="text-sm text-gray-600 space-y-1 mb-4">
                    <p><span className="font-medium">{advisor.experience}</span> experience</p>
                    <p>{advisor.previousOrg}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 mb-3">
                    <p className="text-xs text-gray-500 mb-1">Specialization</p>
                    <p className="text-sm font-medium text-gray-900">{advisor.specialization}</p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-yellow-500">⭐</span>
                    <span className="font-bold text-gray-900">{advisor.rating}</span>
                    <span className="text-xs text-gray-500">/5</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Metrics */}
        <div className="bg-primary/5 rounded-2xl p-8 border-2 border-primary/20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Quality Metrics We're Proud Of
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {qualityMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{metric.icon}</div>
                <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
