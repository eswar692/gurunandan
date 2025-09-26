import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Verma",
    location: "Mumbai",
    image: "https://astrologerdeepaksharma.in/images/client-2.png",
    text: "Pandith Raghuvendra Prasad Ji gave me advice on business-related issues. I sought his advice when I was in the midst of a significant loss; his remedies are effective and yield results quickly.",
  },
  {
    name: "Mala Kapoor",
    location: "Goa",
    image: "https://astrologerdeepaksharma.in/images/client-1.png",
    text: "I'm appreciative of Pandith Raghuvendra Prasad Ji. For me, his prophecies come true. The fact that he is constantly there to lead me makes me feel lucky. It was great for me.",
  },

  {
    name: "Pratha Kumari",
    location: "Delhi",
    image: "https://astrologerdeepaksharma.in/images/client-2.png",
    text: "My kids abruptly stopped paying attention to me. I sought his advice when I started to feel concerned. He offered solutions that improved my kids’ behavior and brought peace at home.",
  },
  {
    name: "Ravi Singh",
    location: "Bangalore",
    image: "https://astrologerdeepaksharma.in/images/client-3.png",
    text: "I was having relationship issues with my spouse. I sought his advice, and he provided me with remedies that helped me resolve my issues and brought harmony to my relationship.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-100 py-20 px-6 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-600 via-pink-600 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
          ✨ Client Testimonials ✨
        </h2>
        <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
          Real experiences from people who found solutions with{" "}
          <span className="font-semibold text-red-600">
            Pandith Raghuvendra Prasad
          </span>
          .
        </p>

        {/* Cards Grid */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative group bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 border border-pink-200 hover:scale-105"
            >
              {/* Avatar */}
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-red-500 shadow-md">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="mt-5 text-xl font-bold text-gray-900">{t.name}</h3>
              <span className="text-sm text-gray-500">{t.location}</span>

              {/* Testimonial Text */}
              <p className="mt-4 text-gray-700 leading-relaxed italic">
                "{t.text}"
              </p>

              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 text-red-200 w-10 h-10 group-hover:scale-110 transition-transform" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
