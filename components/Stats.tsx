"use client"; // Required for client-side animations

import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: "5,000+", label: "Wallets Connected" },
    { value: "20,000+", label: "Games Played" },
    { value: "10,000+", label: "Badges Claimed" },
    { value: "50+", label: "DAO Proposals Voted" },
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-900 rounded-lg border-2 border-neon-pink hover:shadow-neon transition-shadow duration-300"
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
              <h3 className="text-4xl font-bold text-white font-inter">{stat.value}</h3>
              <p className="text-lg text-gray-300 font-inter">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}