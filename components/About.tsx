"use client"; // Required for client-side animations

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-inter">
            About Catcents
          </h2>
          <p className="text-lg text-gray-300 font-inter">
            Catcents is your onchain playground where NFTs meet strategy, rewards, and pure degen fun. Dive into a world of competitive games, DAO votes, daily rewards, and exclusive onchain badge hunts. Every action you take fuels your journey, boosts your status, and shows the community how hard you grind. This isn’t just a platform, it’s where your Web3 story gets legendary.
          </p>
        </motion.div>
        {/* Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(45, 45, 45, 0.9)" }}
        >
          <Image
            src="/landing/char.png"
            alt="Character"
            width={300}
            height={300}
            className="object-contain rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}