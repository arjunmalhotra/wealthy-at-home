'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "General",
      question: "How quickly can an advisor reach me?",
      answer: "In 90% of cases, our advisors reach within 30 minutes. During peak hours (weekends, evenings), it may extend to 45 minutes. You can also schedule appointments up to 7 days in advance."
    },
    {
      category: "General",
      question: "What do I need to prepare for the consultation?",
      answer: "Nothing mandatory! However, having access to your investment statements (mutual funds, stocks, insurance policies) helps the advisor provide more detailed analysis. Don't worry if you don't have physical copies—our advisors can pull up most data digitally."
    },
    {
      category: "Service",
      question: "Is the ₹2,999 fee a one-time charge or recurring?",
      answer: "It's a one-time fee per consultation. No hidden charges, no recurring fees unless you opt for a subscription plan."
    },
    {
      category: "Service",
      question: "What if I'm not satisfied with the consultation?",
      answer: "We offer a 100% money-back guarantee if you're not satisfied. Simply let us know within 24 hours of the consultation, and we'll process a full refund—no questions asked."
    },
    {
      category: "Service",
      question: "Do advisors sell financial products during the visit?",
      answer: "No. Our advisors provide unbiased, commission-free advice only. If you wish to implement their recommendations, they'll guide you on how to invest through the Wealthy platform, but there's zero pressure."
    },
    {
      category: "Advisors",
      question: "Are all advisors SEBI-registered?",
      answer: "Yes, 100% of our advisors are SEBI-registered Investment Advisors (RIA) with valid certifications. You can verify their credentials on the SEBI website."
    },
    {
      category: "Advisors",
      question: "Can I request the same advisor for future consultations?",
      answer: "Absolutely! After your first consultation, you can add that advisor to your favorites and request them for future bookings (subject to availability)."
    },
    {
      category: "Security",
      question: "Is my financial information secure?",
      answer: "Absolutely. All data is encrypted and handled per RBI and SEBI guidelines. Advisors sign strict NDAs, and no information is shared without your consent."
    },
    {
      category: "Booking",
      question: "Can I cancel or reschedule?",
      answer: "Yes. Free cancellation up to 2 hours before the scheduled time. After that, a ₹500 cancellation fee applies. You can reschedule anytime without fees."
    },
    {
      category: "Booking",
      question: "What are your operating hours?",
      answer: "We're available 7 days a week from 8 AM to 10 PM, including weekends and public holidays."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Wealthy at Home
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex-1 pr-4">
                  <div className="text-xs text-primary font-semibold mb-1">
                    {faq.category}
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </div>
                </div>
                <svg
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-primary/5 rounded-2xl p-8 border-2 border-primary/20">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help you make the right decision
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:1800-XXX-XXXX" className="flex items-center gap-2 text-primary font-semibold hover:text-primary-dark">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call 1800-XXX-XXXX
            </a>
            <a href="https://wa.me/91XXXXXXXXXX" className="flex items-center gap-2 text-primary font-semibold hover:text-primary-dark">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp Us
            </a>
            <a href="mailto:home@wealthy.in" className="flex items-center gap-2 text-primary font-semibold hover:text-primary-dark">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              home@wealthy.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
