import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { phone_number } from "./secret";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-pink-50 to-purple-100 shadow-lg top-0 z-50">
      <TitleCTA />

      <div className="px-2 md:max-w-[80%] mx-auto flex flex-col gap-6 py-">
        <LogoAndMenu />
      </div>
      <ScrollingMarquee />
    </header>
  );
};

export default Header;

const TitleCTA = () => (
  <div className="relative w-full bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400">
    <div className="w-full md:max-w-[80%] mx-auto flex items-center justify-between px-4 py-3 md:py-4">
      {/* Left Logo/Text */}
      <div className="flex items-center gap-3">
        <h5 className="montserrat font-bold text-white text-sm md:text-2xl">
          Pandith Raghavendra Prasad
        </h5>
      </div>

      {/* Call Now Button */}
      <a
        href={`tel:${phone_number}`}
        className="montserrat px-3 py-2 
  bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600
  hover:from-fuchsia-700 hover:via-purple-700 hover:to-indigo-700
  text-white font-semibold rounded-full shadow-xl
  transition-all duration-300 hover:scale-110 hover:shadow-2xl
  text-sm md:text-base"
      >
        Call Now
      </a>
    </div>
  </div>
);

const LogoAndMenu = () => (
  <div className="py-1 flex flex-row items-center justify-between gap-2">
    {/* Logo */}
    <div className="flex items-center gap-1">
      <img
        src="https://i.pinimg.com/736x/3d/e1/f9/3de1f95bebee24bac17e12b23ea11248.jpg"
        alt="Chamundeswari Astrology Logo"
        className="w-16 h-16 md:w-28 md:h-28 rounded-xl shadow-xl object-cover border-2 border-purple-200"
      />
      <div className="flex flex-col text-center md:text-left">
        <h1 className=" montserrat font-extrabold text-xl md:text-3xl text-gray-900">
          Famous Vashikaran Specialist
        </h1>
        <p className="font-bold text-gray-500 open-sans text-sm md:text-base  mt-1">
          Trusted Astrology Since 1956
        </p>
        <p className="montserrat text-sm md:text-sm text-gray-600 mt-1">
          Powerful Vashikaran solutions with 100% proven results
        </p>
      </div>
    </div>
    <NavigationMenu />
  </div>
);

const NavigationMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-10 font-medium text-gray-900 montserrat text-lg">
        {["Home", "About", "Services", "Contact"].map((item) => (
          <Link key={item} to={`/${item.toLowerCase()}`}>
            <li className="hover:text-fuchsia-500 cursor-pointer transition-colors">
              {item}
            </li>
          </Link>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2 
  bg-gradient-to-r from-amber-400 via-rose-500 to-purple-600
  hover:from-amber-500 hover:via-rose-600 hover:to-purple-700
  shadow-lg rounded-md transition-transform duration-300 hover:scale-110"
        onClick={() => setOpen(!open)}
      >
        <MenuIcon className="w-8 h-8 text-white" strokeWidth={2} />
      </button>

      {open && <MobileNav setOpen={setOpen} />}
    </div>
  );
};

const MobileNav = ({ setOpen }: { setOpen: (open: boolean) => void }) => (
  <div className="fixed inset-0 z-50 bg-white p-8 flex flex-col justify-between shadow-2xl animate-slide-in">
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="montserrat text-2xl font-bold text-gray-900">
          Famous Vashikaran Specialist
        </h1>
        <button
          onClick={() => setOpen(false)}
          className="p-2 bg-gradient-to-r from-fuchsia-500 to-violet-600 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          <X className="w-6 h-6 text-white" />
        </button>
      </div>
      <ul className="flex flex-col gap-5 font-medium montserrat text-lg">
        {["Home", "About", "Services", "Contact"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            onClick={() => setOpen(false)}
          >
            <li className="hover:text-fuchsia-500 cursor-pointer transition-colors">
              {item}
            </li>
          </Link>
        ))}
      </ul>
    </div>
    <p className="open-sans text-gray-700 text-xl mt-6">
      <b className="text-red-700">Pandith Raghavendra Guruji</b> - Expert
      horoscope readings, match-making, career predictions, and spiritual
      remedies for confident living.
    </p>
  </div>
);

const ScrollingMarquee = () => (
  <div className="overflow-hidden bg-gray-900">
    <Marquee
      speed={60}
      className="whitespace-nowrap text-fuchsia-400 font-bold py-2 open-sans text-base md:text-lg"
      gradient={false}
    >
      Facing Love Breakup, Relationship Problems, Marriage Disputes, or Want
      Your Love Back? Consult for Vashikaran solutions with trusted Astrologer
      today!
    </Marquee>
  </div>
);
