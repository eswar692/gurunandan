import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { person_name, phone_number, whatsapp_number } from "./secret";

const faqs = [
  {
    question: `Can We Meet Astrologer ${person_name}`,
    answer: `Yes, personal meetings are available with prior appointment. Whatsapp Number:${whatsapp_number} `,
  },
  {
    question: "Is Telephonic Consultation Available?",
    answer: `Yes, you can connect via phone from anywhere in the world. Phone Number:${phone_number}`,
  },
  {
    question: "What Kind Of Astrology Services Are Available Here?",
    answer:
      "We provide Vastu, horoscope, career, marriage, health, and business guidance.",
  },
  {
    question: "What Kind Of Products Are Available?",
    answer:
      "Astrological remedies, gemstones, yantras, and spiritual products are available.",
  },
  {
    question: "Do We Avail Courses On Astrology?",
    answer: "Yes, astrology learning courses are offered for different levels.",
  },
  {
    question: "What Do We Teach In The Astrology Course?",
    answer:
      "We cover horoscope reading, palmistry basics, and predictive astrology.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-tr from-orange-200 via-red-300 to-pink-400 py-20 px-4">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white montserrat drop-shadow-lg">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="w-full bg-white/90 backdrop-blur-md border border-red-300 rounded-3xl shadow-xl overflow-hidden transition hover:shadow-2xl duration-300"
            >
              {/* Question */}
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg md:text-xl font-semibold text-red-700 hover:bg-red-50 transition montserrat"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <Minus className="text-red-600 w-6 h-6" />
                ) : (
                  <Plus className="text-red-600 w-6 h-6" />
                )}
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-700 leading-relaxed animate-fadeIn text-base md:text-lg open-sans">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
