"use client"; // Required for client-side animations

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  const socialIcons = [
    { src: "/landing/x.png", alt: "X", href: "https://x.com/catcentsio" },
    { src: "/landing/discord.png", alt: "Discord", href: "https://discord.gg/2EjWDPqj5k" },
    { src: "/landing/telegram.png", alt: "Telegram", href: "https://t.me/catcentsio" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/landing/hero1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for Readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(26,11,46,0.9)] z-10" />

      {/* Social Media Icons */}
      <div className="absolute top-4 right-4 flex space-x-4 z-30">
        {socialIcons.map((icon, index) => (
          <motion.a
            key={index}
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(139, 0, 255, 0.8)" }}
            className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full border-2 border-neon-purple"
          >
            <Image
              src={icon.src}
              alt={icon.alt}
              width={24}
              height={24}
              className="object-contain"
            />
          </motion.a>
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
        {/* Title */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 font-inter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Join the Meow-volution
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl mb-8 font-inter text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your onchain playground for games, DAO voting, and rewards.
        </motion.p>

        {/* Enter The Playground Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="https://www.catcents.io">
            <motion.button
              className="relative px-12 py-5 text-xl font-semibold text-white rounded-xl bg-neon-purple hover:bg-neon-purple-dark border-2 border-neon-purple shadow-neon transition-colors duration-300 cursor-none neon-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 10px rgba(139, 0, 255, 0.5)",
                  "0 0 20px rgba(139, 0, 255, 0.8)",
                  "0 0 10px rgba(139, 0, 255, 0.5)",
                ],
              }}
              transition={{
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Shine Effect on Load */}
              <motion.span
                className="absolute top-0 left-0 w-24 h-full bg-white opacity-30 transform -skew-x-12"
                initial={{ x: "-100%" }}
                animate={{ x: "300%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              Enter The Playground
              {/* Custom Cursor */}
              {isHovered && (
                <motion.div
                  className="absolute w-4 h-4 bg-neon-purple rounded-full pointer-events-none"
                  style={{ position: "fixed", zIndex: 9999 }}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}