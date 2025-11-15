const faqs = [
  { question: 'Why is compressed air needed?', answer: 'Compressed air is essential for various industrial applications.' },
  { question: 'What is Dew Point?', answer: 'Dew point is the temperature at which air becomes saturated.' },
  { question: 'How do Dryers work?', answer: 'Dryers remove moisture from compressed air.' },
];

export default function FAQs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="#" className="text-primary hover:underline">View Troubleshooting Resources</a>
        </div>
      </div>
    </section>
  );
}