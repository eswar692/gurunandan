"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, Phone, MessageCircle } from "lucide-react";
import { useCallback } from "react";
import { phone_number, whatsapp_number } from "./secret";

const CardCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      containScroll: "trimSnaps",
      dragFree: true,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  // useEffect(() => {
  //   if (!emblaApi) return;

  //   let rafId: number;

  //   const linearScroll = () => {
  //     (emblaApi as any).scrollBy(0.002, false); // very small scroll increment
  //     rafId = requestAnimationFrame(linearScroll);
  //   };

  //   linearScroll();

  //   return () => cancelAnimationFrame(rafId);
  // }, [emblaApi]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const cards = [
    {
      title: "Get Your Love Back",
      desc: "Reunite with your lost love and restore peace in your relationship. Powerful astrology remedies heal misunderstandings, remove negativity, and attract harmony into your love life.",
      img: "https://i.pinimg.com/736x/9e/62/89/9e6289902fb93c22b7245c4a72ab355d.jpg",
    },
    {
      title: "Psychic Reading",
      desc: "Gain clarity about your future with accurate psychic readings. Discover insights about love, marriage, career, and finances while removing negative energies blocking your path.",
      img: "https://i.pinimg.com/736x/d1/7b/6e/d17b6e6bbe4cb76812aea53029b0182d.jpg",
    },
    {
      title: "Solve Business Problem",
      desc: "Overcome financial struggles and business obstacles with spiritual solutions. Boost growth, attract prosperity, and create long-lasting stability with divine guidance.",
      img: "https://i.pinimg.com/736x/84/dd/e6/84dde6e4a1641f19a2f53577ec4b9f4c.jpg",
    },
  ];

  return (
    <div className="relative w-full  ">
      {/* Main Gradient Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-tr from-purple-800 via-red-600 to-orange-500 rounded-3xl shadow-2xl -z-20"></div> */}

      {/* Top Feathered Gradient */}
      {/* <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/50 via-white/0 to-transparent pointer-events-none z-10 rounded-t-3xl"></div> */}

      {/* Bottom Feathered Gradient */}
      {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/50 via-white/0 to-transparent pointer-events-none z-10 rounded-b-3xl"></div> */}

      {/* Carousel Container */}
      <div className="w-full overflow-hidden relative z-20" ref={emblaRef}>
        <div className="flex relative h-[650px] items-center  w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] sm:flex-[0_0_100%] md:flex-[0_0_33%] px-4 rounded-2xl"
            >
              <div className="relative bg-gradient-to-b from-pink-200 via-purple-300 to-indigo-200 rounded-3xl shadow-xl p-8 text-gray-900 h-[520px] flex flex-col items-center text-center transition transform hover:-translate-y-3 hover:shadow-2xl duration-500">
                {/* Soft Blurred Chakra / Background */}
                <div className="absolute -top-10 -z-10 w-60 h-60 rounded-full bg-purple-400 opacity-20 blur-3xl animate-spin-slow"></div>

                {/* Circular Image with subtle glow */}
                <div className="w-30 h-30 rounded-full border-2 border-purple-500 overflow-hidden shadow-md mb-6 ring-4 ring-purple-100">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Content */}
                <h3 className="text-3xl md:text-3xl font-bold mb-3 poppins text-purple-900">
                  {card.title}
                </h3>
                <p className="text-lg md:text-lg open-sans leading-relaxed text-purple-800 opacity-90">
                  {card.desc}
                </p>

                {/* Buttons */}
                <div className="mt-6 flex gap-1">
                  {/* Call Button */}
                  <a
                    href={`tel:${phone_number}`}
                    className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-5 py-1 sm:px-5 sm:py-1 rounded-full flex items-center  font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition transform duration-300"
                  >
                    <Phone size={18} />
                    <h5 className="text-sm">Call</h5>
                  </a>

                  {/* WhatsApp Button */}
                  <a
                    href={`https://wa.me/${whatsapp_number}`}
                    target="_blank"
                    className="bg-gradient-to-r from-green-400 to-green-600 text-white px-10 py-4  rounded-full flex items-center gap-2 font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition transform duration-300"
                  >
                    <MessageCircle size={18} />
                    <h5 className="text-sm">WhatsApp</h5>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-6 top-1/2 bg-white/90 text-purple-700 p-3 rounded-full shadow-lg hover:scale-110 transition z-30"
      >
        <ChevronLeft size={22} strokeWidth={3} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-6 top-1/2 bg-white/90 text-purple-700 p-3 rounded-full shadow-lg hover:scale-110 transition z-30"
      >
        <ChevronLeft className="rotate-180" size={22} strokeWidth={3} />
      </button>
    </div>
  );
};

export default CardCarousel;
