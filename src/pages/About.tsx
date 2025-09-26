import ImageGrid from "../Genaral/ImageGrid";
import { person_name } from "../Genaral/secret";

export default function About() {
  return (
    <section className="relative py-16 px-2 font-sans overflow-hidden">
      {/* Fancy Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-red-800 to-orange-600"></div>

      {/* Subtle Overlay Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative max-w-6xl w-full mx-auto items-center text-white">
        {/* Left Content */}
        <div className="w-full mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-300 to-red-500 bg-clip-text text-transparent mb-8">
            About Us
          </h2>
          <p className="text-lg leading-relaxed space-y-4">
            Astrologer{" "}
            <span className="font-bold text-yellow-300">{person_name}</span> is
            a renowned and respected spiritual leader in India. With his deep
            knowledge of astrology and unwavering commitment to helping others,
            he has established himself as a trusted advisor to people across the
            country.
            <br />
            <br />
            Through his extensive experience and intuitive abilities, Astrologer
            <span className="font-semibold text-orange-300">
              {" "}
              {person_name}
            </span>{" "}
            offers a wide range of services, including palm readings, face
            readings, photo readings, and phone consultations.
            <br />
            <br />
            Renowned for his{" "}
            <span className="font-semibold text-red-400">accuracy</span> and
            insightful interpretations, he has built a loyal following of
            clients who attest to the transformative power of his readings.
            <br />
            <br />
            If you’re in need of a trusted spiritual guide, look no further.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="relative max-w-6xl mx-auto mt-16">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-300 to-red-500 bg-clip-text text-transparent mb-10">
          Gallery
        </h2>

        <ImageGrid />
      </div>
    </section>
  );
}
