import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import useInViewOnce from "./InView";
import { person_name, phone_number, whatsapp_number } from "./secret";

export default function Footer() {
  const [ref, inView] = useInViewOnce(0.2);

 const services = [
  "Personal Spiritual Guidance",
  "Relationship Guidance",
  "Astrology Consultation",
  "Love & Relationship Guidance",
  "Love Marriage Guidance",
  "Marriage Compatibility Guidance",
];

  const whyChoose = [
    "Relationship Guidance",
    "Husband-Wife Dispute Guidance",
    "Experienced Astrologer",
    "Online Consultations",
    "Visa-Related Astrology Guidance",
  ];

  return (
    <motion.footer className="relative text-white pt-5 pb-10 open-sans bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-90"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/0c/27/a4/0c27a427b4d1939110bf6ba9a8c170f5.jpg')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-900/90 to-slate-900/90"></div>

      {/* Content */}
      <motion.div
        ref={ref}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="py-5 w-full relative grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto z-10"
      >
        {/* About */}
        <div>
          <h2 className="font-bold text-3xl mb-3 montserrat text-cyan-400">
            About Us
          </h2>
          <p className="text-lg leading-relaxed montserrat text-gray-200">
            <b></b> offers traditional astrology
             consultations led by {person_name}, helping
            clients understand themselves, their goals, aspirations,
            constraints, and potential.
          </p>
        </div>

        {/* Contact */}
        <div className="px-3">
          <h2 className="font-bold text-3xl mb-3 montserrat text-cyan-400">
            Contact Us
          </h2>
          <p className="montserrat text-xl">📞 {phone_number}</p>
          <p className="montserrat text-xl">💬 +91 {whatsapp_number}</p>
          <p className="mt-2 font-bold text-pink-400 montserrat">
            Astro Guidance You Can Trust
          </p>
          <p className="text-sm montserrat text-gray-300">
            AUTHENTIC | RELIABLE | SUPPORTIVE
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="font-bold mb-3 poppins text-3xl text-cyan-400">
            Our Services
          </h2>
          <ul className="text-sm space-y-2 montserrat">
            {services.map((service, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <p className="text-xl text-gray-200">{service}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Why Choose */}
        <div>
          <h2 className="font-bold mb-3 poppins text-3xl text-cyan-400">
            Why Choose Us?
          </h2>
          <ul className="text-sm space-y-2 montserrat">
            {whyChoose.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <p className="text-xl text-gray-200">{item}</p>
              </li>
            ))}
          </ul>

          {/* Legal links - required for Google Ads destination policy compliance */}
          <div className="flex gap-4 mt-4 text-sm montserrat">
            <a
              href="/privacy-policy"
              className="text-gray-300 hover:text-yellow-300 underline transition"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-gray-300 hover:text-yellow-300 underline transition"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </motion.div>

      {/* copy right and my contact */}
      <div className="py-2 z-30 bg-gradient-to-r from-purple-900 via-pink-800 to-red-700 text-white absolute bottom-0 left-0 right-0">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          {/* Left Column */}
          <div className="mb-4 md:mb-0 text-center md:text-left flex flex-col gap-2">
            <a
              href="https://wa.me/918886921826?text=Hello%20Pro%20Daddy%20Agency"
              className="text-lg font-bold font-roboto hover:underline hover:text-yellow-400 transition"
            >
              <p className="font-montserrat text-xl montserrat font-semibold mt-2 text-yellow-300">
                Designed and Developed By Eswar
              </p>

              <button className="text-white bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 py-2 px-4 rounded text-sm shadow-lg hover:scale-105 transition-transform">
                Pro Daddy Agency
              </button>
            </a>
          </div>

          {/* Right Column */}
          <div className="text-center md:text-right poppins text-md">
            <p className="font-montserrat montserrat text-gray-200">
              © {new Date().getFullYear()}{" "}
              <a
                href="https://famouspoduval.in"
                target="_blank"
                className="font-semibold hover:text-yellow-300 transition"
              >
                famouspoduval.in
              </a>{" "}
              – All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}