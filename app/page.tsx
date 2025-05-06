"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCamera,
} from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import PhotoGallery from "./components/PhotoGallery";
import { contractGallery, mainGallery, otherGallery } from "./data/galleries";

// Add Parisienne font
import { Parisienne } from "next/font/google";

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            className={`text-3xl text-purple-600 ${parisienne.className}`}
          >
            Ari Bechtel Photography
          </motion.div>
          <div className="flex space-x-8">
            <a
              href="#gallery"
              className="text-purple-600 hover:text-orange-500 transition-colors font-medium"
            >
              Gallery
            </a>
            <a
              href="#packages"
              className="text-purple-600 hover:text-orange-500 transition-colors font-medium"
            >
              Packages
            </a>
            <a
              href="#contact"
              className="text-purple-600 hover:text-orange-500 transition-colors font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        style={{ opacity, scale }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/forest.jpg"
            alt="Forest Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 to-orange-900/60" />
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-6xl md:text-9xl mb-6 ${parisienne.className}`}
          >
            Timeless Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            From Duke's campus to the Australian outback, documenting life's
            most meaningful moments
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            href="#contact"
            className="inline-block bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book Your Session
          </motion.a>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-[95%] mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2
            className={`text-5xl md:text-7xl text-purple-600 mb-8 ${parisienne.className}`}
          >
            Featured Stories
          </h2>
          <p className="text-xl text-purple-800 max-w-3xl mx-auto">
            Each photograph captures a unique narrative, preserving the essence
            of your journey
          </p>
        </motion.div>

        {/* Contract Photos Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
          id="gallery"
        >
          <PhotoGallery {...contractGallery} />
        </motion.div>

        {/* Packages Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="package-card bg-white rounded-3xl shadow-2xl p-12 mb-24 border border-purple-200"
          id="packages"
        >
          <h2
            className={`text-6xl text-purple-600 mb-12 text-center tracking-tight ${parisienne.className}`}
          >
            Photography Packages
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-purple-50 p-8 rounded-2xl"
            >
              <h3 className="text-3xl font-bold text-purple-500 mb-6">
                Explorer: $199
              </h3>
              <ul className="list-disc pl-6 text-purple-800 space-y-3 font-medium">
                <li>1 hour session</li>
                <li>Perfect for individual portraits</li>
                <li>On-location at Duke Chapel or your preferred spot</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-purple-50 p-8 rounded-2xl"
            >
              <h3 className="text-3xl font-bold text-purple-500 mb-6">
                Adventurer: $299
              </h3>
              <ul className="list-disc pl-6 text-purple-800 space-y-3 font-medium">
                <li>1.5 hour session</li>
                <li>Ideal for small groups or families</li>
                <li>Multiple locations and outfit changes</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-purple-50 p-8 rounded-2xl"
            >
              <h3 className="text-3xl font-bold text-purple-500 mb-6">
                Voyager: $399
              </h3>
              <ul className="list-disc pl-6 text-purple-800 space-y-3 font-medium">
                <li>2 hour session</li>
                <li>Perfect for larger groups or special events</li>
                <li>Full creative direction and multiple locations</li>
                <li>Custom packages available</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="mt-12 bg-purple-50 p-8 rounded-2xl"
          >
            <h3 className="text-3xl font-bold text-purple-500 mb-6">
              What's Included:
            </h3>
            <p className="text-purple-800 space-y-3 font-medium text-lg">
              All packages include 30+ professionally edited digital images
              <br />
              Locations include Duke University Chapel, Duke Gardens, or custom
              locations
              <br />
              Optional props and additional locations available
              <br />
              $50 non-refundable deposit required at booking
              <br />
              Remaining balance due upon receiving photos
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center my-16 bg-gradient-to-r from-purple-50 to-orange-50 p-12 rounded-3xl"
          id="contact"
        >
          <h2
            className={`text-5xl text-purple-600 mb-8 ${parisienne.className}`}
          >
            Let's Create Your Story
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
            <a
              href="https://calendly.com/dessertgracephoto"
              className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Your Session
            </a>
            <a
              href="mailto:dessertgrace@gmail.com"
              className="flex items-center gap-2 text-purple-800 hover:text-orange-500 transition-colors"
            >
              <FaEnvelope className="text-xl" />
              dessertgrace@gmail.com
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="text-purple-600 hover:text-orange-500 transition-colors"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-purple-600 hover:text-orange-500 transition-colors"
            >
              <FaCamera className="text-2xl" />
            </a>
          </div>
        </motion.div>

        {/* Additional Galleries */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-5xl text-purple-600 mb-12 text-center ${parisienne.className}`}
        >
          Explore More Stories:
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <PhotoGallery {...mainGallery} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <PhotoGallery {...otherGallery} />
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="w-full bg-gradient-to-r from-purple-200 to-orange-200 py-16"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center space-x-8 mb-8"></div>
        </div>
      </motion.footer>
    </main>
  );
}
