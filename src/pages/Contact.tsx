import { MessageCircle, Phone } from "lucide-react"; // icons
import Form from "../Genaral/Form";
import { phone_number, whatsapp_number } from "../Genaral/secret";

export default function Contact() {
  return (
    <div className="relative min-h-screen py-20 px-6 bg-gradient-to-br from-purple-900 via-red-900 to-orange-800 overflow-hidden">
      {/* Background Overlay with Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-yellow-300 to-red-500 bg-clip-text text-transparent drop-shadow-md">
          Contact Us
        </h2>
        <p className="text-gray-200 mt-6 text-lg leading-relaxed">
          We’re here to guide you on your{" "}
          <span className="font-medium text-yellow-300">spiritual journey</span>
          . Connect via{" "}
          <span className="font-medium text-yellow-300">WhatsApp</span>,{" "}
          <span className="font-medium text-yellow-300">phone</span>, or fill
          the form below. Guruji will respond personally.
        </p>
      </div>

      {/* Contact Info & Form */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-stretch relative z-10">
        {/* Contact Info */}
        <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-10 flex flex-col justify-center text-white">
          <h3 className="text-3xl font-semibold text-yellow-300 mb-6">
            Get in Touch
          </h3>
          <p className="text-gray-200 mb-6 text-lg leading-relaxed">
            Whether it’s{" "}
            <span className="font-medium text-yellow-300">career</span>,{" "}
            <span className="font-medium text-yellow-300">love life</span>, or{" "}
            <span className="font-medium text-yellow-300">
              spiritual growth
            </span>
            , we’re here to help you find direction.
          </p>

          <div className="space-y-5 text-lg">
            <p className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-yellow-300" />
              <span>
                <span className="font-semibold">Phone:</span> {phone_number}
              </span>
            </p>
            <p className="flex items-center gap-3">
              <MessageCircle className="w-6 h-6 text-yellow-300" />
              <span>
                <span className="font-semibold">WhatsApp:</span>{" "}
                {whatsapp_number}
              </span>
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-black/70  shadow-2xl rounded-3xl p-10 text-white">
          <h3 className="text-3xl font-semibold text-white mb-6 w-full mx-auto text-center">
            Book Now
          </h3>
          <Form />
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-20 max-w-5xl mx-auto text-center relative z-10">
        <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-300 to-red-500 bg-clip-text text-transparent drop-shadow-md">
          Our Astrology Services
        </h3>
        <p className="text-gray-200 mt-6 text-lg leading-relaxed">
          Expert in{" "}
          <span className="font-medium text-yellow-300">palm reading</span>,{" "}
          <span className="font-medium text-yellow-300">
            horoscope matching
          </span>
          , <span className="font-medium text-yellow-300">photo readings</span>,
          and{" "}
          <span className="font-medium text-yellow-300">
            vastu consultation
          </span>
          . Life-changing solutions for{" "}
          <span className="italic text-orange-200">
            love, career, finance, and spiritual growth
          </span>{" "}
          with our trusted astrology services.
        </p>
      </div>
    </div>
  );
}
