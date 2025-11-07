export default function Testimonials() {
  const testimonials = [
    {
      quote: "Finally, wealth management that fits my schedule! As a busy entrepreneur, I never had time to visit financial advisors. Wealthy at Home brought an expert to my office during lunch. Discovered I was over-allocated in small caps and saved ₹80,000 in taxes!",
      author: "Sanjay Reddy",
      location: "Bangalore",
      occupation: "Business Owner",
      rating: 5
    },
    {
      quote: "Professional, knowledgeable, and zero pressure. The advisor spent 45 minutes understanding my goals and gave me a clear roadmap. No product pushing, just honest advice. Got my detailed report the next day!",
      author: "Meera Krishnan",
      location: "Mumbai",
      occupation: "Software Engineer",
      rating: 5
    },
    {
      quote: "Best investment I made for my family's future. We took the Family Wealth Plan. Having quarterly check-ins has kept us on track for our daughter's education and our retirement. The convenience is unmatched.",
      author: "Amit & Neha Sharma",
      location: "Delhi",
      occupation: "Marketing Executive & Doctor",
      rating: 5
    }
  ];

  const stats = [
    { value: "50,000+", label: "Consultations Completed" },
    { value: "₹12,000 Cr+", label: "AUM Reviewed" },
    { value: "₹450 Cr+", label: "Tax Saved for Clients" },
    { value: "28 Minutes", label: "Average Arrival Time" }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Thousands of Indians
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from people who transformed their wealth journey
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.location} | {testimonial.occupation}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-700">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
