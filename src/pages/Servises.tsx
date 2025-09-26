import { Phone, MessageCircle } from "lucide-react";
import { phone_number, whatsapp_number } from "../Genaral/secret";

const services = [
  {
    name: "Love Problems",
    desc: "Solutions for lost love, misunderstandings, and building strong relationships.",
    img: "https://i.pinimg.com/1200x/3f/f5/89/3ff5895bca8970847577656ffe788eff.jpg",
  },
  {
    name: "Marriage Issues",
    desc: "Guidance for happy married life, compatibility, and resolving conflicts.",
    img: "https://i.pinimg.com/736x/fa/ee/46/faee46287149c9a2470c20d26318fee1.jpg",
  },
  {
    name: "Court Cases",
    desc: "Astrological remedies to overcome legal challenges and disputes.",
    img: "https://i.pinimg.com/1200x/fb/4e/36/fb4e36b171a92fb4d391f3bc6a90e8a5.jpg",
  },
  {
    name: "Finance Problems",
    desc: "Effective remedies for wealth, investments, and financial stability.",
    img: "https://i.pinimg.com/736x/53/3a/25/533a25d0fd940cc5fc8b5fdaf457b14a.jpg",
  },
  {
    name: "Education Guidance",
    desc: "Astrology support for students seeking focus, success, and higher studies.",
    img: "https://i.pinimg.com/736x/7f/8a/60/7f8a6099a523cc79342eaee0a29e92f8.jpg",
  },
  {
    name: "Career Growth",
    desc: "Clarity for job opportunities, promotions, and professional success.",
    img: "https://i.pinimg.com/736x/2d/21/ff/2d21ff0997bd7bdfb46491c3d13798c3.jpg",
  },
  {
    name: "Vashikaran",
    desc: "Powerful vashikaran solutions to influence situations positively.",
    img: "https://i.pinimg.com/1200x/bd/dc/94/bddc94a7fcefc3598976dec33665645a.jpg",
  },
  {
    name: "Future Predictions",
    desc: "Accurate horoscope readings to understand your destiny and future.",
    img: "https://i.pinimg.com/1200x/40/6d/94/406d941b9978384bd9008b1f81c613a3.jpg",
  },
  {
    name: "All Types of Vashikaran",
    desc: "Specialized remedies for love, family, and professional life.",
    img: "https://i.pinimg.com/736x/34/1d/eb/341deb4d9ba9bd2934f0d996567b37a3.jpg",
  },
];

const reverseServices = [...services].reverse();

export default function Services() {
  return (
    <div className="relative py-20 px-6 bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-800 text-white overflow-hidden">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-yellow-300 to-red-500 bg-clip-text text-transparent drop-shadow-xl montserrat">
          Our Astrology Services
        </h2>
        <p className="text-gray-300 mt-6 text-lg md:text-xl leading-relaxed roboto">
          Explore our wide range of astrology services designed to bring
          clarity, peace, and solutions to your life problems.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
        {reverseServices.map((service, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl flex flex-col hover:scale-105 hover:shadow-3xl transition-transform duration-300"
          >
            {/* Image */}
            <div className="relative h-80 w-full overflow-hidden rounded-t-3xl">
              <img
                src={service.img}
                alt={service.name}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-yellow-300 mb-3 montserrat">
                {service.name}
              </h3>
              <p className="text-gray-200 flex-grow roboto">{service.desc}</p>

              {/* Buttons */}
              <div className="mt-6 flex gap-4 roboto">
                <a href={`tel:${phone_number}`}>
                  <button className="flex items-center gap-2 bg-yellow-400/90 hover:bg-yellow-500/90 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300">
                    <Phone size={18} /> Call
                  </button>
                </a>
                <a
                  href={`https://wa.me/${whatsapp_number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex items-center gap-2 bg-green-500/90 hover:bg-green-600/90 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300">
                    <MessageCircle size={18} /> WhatsApp
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cosmic Stars Overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1), transparent 25%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.08), transparent 25%)",
          backgroundSize: "100% 100%",
        }}
      ></div>
    </div>
  );
}
