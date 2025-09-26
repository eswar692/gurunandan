const AllReligion = () => {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-pink-800 to-red-700 py-16 px-2 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left text-white">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
              Famous Vashikaran Specialist
            </span>
            <div className="mt-2 text-lg md:text-xl font-semibold tracking-wide text-yellow-300">
              Hindu · Muslim · Jesus — All Religions
            </div>
          </h1>

          {/* Name */}
          <h2 className="mt-6 text-2xl md:text-3xl font-bold text-yellow-200 drop-shadow-md">
            Pandith Raghuvendra Prasad
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-100 max-w-xl">
            With deep spiritual knowledge across{" "}
            <span className="font-semibold text-yellow-300">all faiths</span>,
            Pandith Raghuvendra Prasad provides{" "}
            <span className="text-pink-200">
              powerful & permanent solutions
            </span>
            for love, marriage, business, family, health, and enemy-related
            problems. Trusted globally for guiding people from every community.
          </p>
        </div>

        {/* Right Images - Innovative Layout */}
        <div className="relative flex justify-center md:justify-end">
          {/* Circle Glow Backdrop */}
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl -z-10"></div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://i.pinimg.com/1200x/bd/97/40/bd97409df623fa54bddffa46c0997733.jpg"
              alt="Astrology 1"
              className="w-40 h-40 md:w-48 md:h-48 rounded-2xl shadow-2xl object-cover border-4 border-yellow-400 transform rotate-[-3deg] hover:scale-105 transition"
            />
            <img
              src="https://i.pinimg.com/1200x/f5/82/da/f582dab7a0f7f26ba5184b24cb7bcf04.jpg"
              alt="Astrology 2"
              className="w-40 h-40 md:w-48 md:h-48 rounded-2xl shadow-2xl object-cover border-4 border-pink-500 transform rotate-[3deg] hover:scale-105 transition"
            />
            <img
              src="https://i.pinimg.com/736x/1f/64/18/1f64185a8bb1984e8cb57884460f6b58.jpg"
              alt="Astrology 3"
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-xl object-cover border-4 border-purple-400 col-span-2 mx-auto -mt-4 hover:scale-105 transition"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllReligion;
