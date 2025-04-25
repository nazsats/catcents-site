"use client"; // Required for client-side animations

import Image from "next/image";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      title: "Addictive Games",
      description: "Onchain games that keep you hooked, play, compete, and earn every time.",
      image: "/landing/game.png",
    },
    {
      title: "DAO Voting",
      description: "Have a say. Influence Catcents' future through real, onchain community votes.",
      image: "/landing/dao.png",
    },
    {
      title: "Daily Rewards",
      description: "Check in, stay active, and stack up rewards, because consistency pays.",
      image: "/landing/reward.png",
    },
    {
      title: "Badge Hunts",
      description: "Earn exclusive onchain badges to showcase your achievements and flex your grind.",
      image: "/landing/badge.png",
    },
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 font-inter">
          Why Catcents?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-900 rounded-lg border-2 border-neon-pink hover:shadow-neon transition-shadow duration-300 text-center"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                boxShadow: [
                  "0 0 10px rgba(255, 20, 147, 0.5)",
                  "0 0 15px rgba(255, 20, 147, 0.7)",
                  "0 0 10px rgba(255, 20, 147, 0.5)",
                ],
              }}
              transition={{
                opacity: { duration: 0.8, delay: index * 0.2 },
                y: { duration: 0.8, delay: index * 0.2 },
                scale: { duration: 0.8, delay: index * 0.2 },
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 20, 147, 0.9)" }}
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={64}
                height={64}
                className="mx-auto mb-4 border-2 border-neon-pink rounded-lg object-contain"
              />
              <h3 className="text-xl font-semibold text-white mb-2 font-inter">
                {feature.title}
              </h3>
              <p className="text-base text-gray-300 font-inter">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}