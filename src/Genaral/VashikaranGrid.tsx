import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { phone_number, whatsapp_number } from "./secret";

export default function VashikaranGrid() {
  const items = [
    {
      title: "Sthri Vashikaran",
      img: "https://i.pinimg.com/736x/b7/b4/f0/b7b4f0be7f149bd13a3717bf894b4441.jpg",
      desc: "Specialized remedies focused on attracting and resolving women-related relationship issues.",
    },
    {
      title: "Purush Vashikaran",
      img: "https://i.pinimg.com/1200x/3a/6d/2c/3a6d2c49a66ca4971d915430079bfaca.jpg",
      desc: "Powerful techniques to influence and heal male partner relationships with ethical guidance.",
    },
    {
      title: "Samboga Vashikaran",
      img: "https://i.pinimg.com/736x/d6/81/00/d68100dde806c12c6ccef9458435a94b.jpg",
      desc: "Remedies to rekindle attraction and closeness between partners.",
    },
    {
      title: "Prema Vashikaran",
      img: "https://i.pinimg.com/1200x/65/d5/01/65d501e3d8df04fb41289e577b67b9da.jpg",
      desc: "Love-attraction solutions to bring hearts closer and resolve misunderstandings.",
    },
    {
      title: "Marriage Vashikaran",
      img: "https://i.pinimg.com/1200x/65/b5/7a/65b57ad4bc6f7bc20fcbd8ea7bfe3191.jpg",
      desc: "Solutions for marriage disputes, approvals & smooth marital life.",
    },
    {
      title: "Vastu Remedies",
      img: "https://i.pinimg.com/736x/d0/a8/b0/d0a8b0eac277064d1f698326f55f8abf.jpg",
      desc: "Vastu corrections with spiritual remedies to harmonize home & business.",
    },
    {
      title: "Job / Career Vashikaran",
      img: "https://i.pinimg.com/736x/35/47/48/354748471cbad482eccf036d1db1a86c.jpg",
      desc: "Career-boosting rituals and remedies for interviews, promotions and growth.",
    },
    {
      title: "Family Harmony",
      img: "https://i.pinimg.com/736x/9a/ab/ac/9aabac56c514a27cbcc112b5fc220642.jpg",
      desc: "Restore peace in household relationships, mend rifts & misunderstandings.",
    },
    {
      title: "Breakup Recovery",
      img: "https://i.pinimg.com/736x/f9/83/a2/f983a2bb11d4e8058f3d65aa178c13d4.jpg",
      desc: "Guidance to recover from breakup and attract reconciliation.",
    },
    {
      title: "Protection / Enemies",
      img: "https://i0.wp.com/www.royalperspectives.com/wp-content/uploads/2023/08/what-do-your-enemies-hate-about-you-the-most-2-354-1574696841-0_dblbig.jpg?fit=1200%2C797&ssl=1",
      desc: "Safe, ethical solutions to remove negative influences and protection remedies.",
    },
    {
      title: "Marriage Couples remedies",
      img: "https://i.pinimg.com/736x/52/08/b9/5208b9f29d6163bb20c66768a3e03969.jpg",
      desc: "Astrological remedies and rituals to assist couples seeking children.",
    },
    {
      title: "Specialized Puja & Mantras",
      img: "https://i.pinimg.com/736x/43/8a/12/438a12dde5f045a8a6a4a25b1b1cccce.jpg ",
      desc: "Tailored pujas, mantra remedies and yantra solutions for difficult problems.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold montserrat">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500">
              Vashikaran Guruji
            </span>
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Solutions across{" "}
            <span className="font-semibold text-yellow-600">Hindu</span> ·{" "}
            <span className="font-semibold text-yellow-600">Muslim</span> ·{" "}
            <span className="font-semibold text-yellow-600">Christian</span>{" "}
            traditions — for love, marriage, career, health & family issues.
          </p>
        </div>

        {/* 12 Boxes Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {items.map((it, idx) => (
            <motion.article
              key={idx}
              className="group relative bg-white/75 backdrop-blur-md rounded-3xl overflow-hidden border border-pink-100 shadow-lg hover:shadow-2xl transition-transform hover:scale-105"
              whileHover={{ y: -8 }}
            >
              {/* image */}
              <div className="relative h-58 w-full overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute left-4 bottom-4 bg-gradient-to-r from-yellow-400 to-pink-500 px-3 py-1 rounded-full text-xs font-semibold text-white shadow-sm">
                  {it.title}
                </div>
              </div>

              {/* content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold montserrat mb-2 text-purple-800">
                  {it.title}
                </h3>
                <p className="text-sm text-gray-700 mb-4">{it.desc}</p>

                <div className="flex items-center justify-center gap-3">
                  <a
                    href={`tel:${phone_number}`}
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow"
                  >
                    <Phone className="w-4 h-4" />
                    Call
                  </a>

                  <a
                    href={`https://wa.me/${whatsapp_number}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-10 py-2 rounded-full bg-green-400 text-purple-700 border border-purple-200 font-semibold shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
