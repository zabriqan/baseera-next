"use client";

import Image from "next/image";
import poster from "@/public/09 QMH poster.png";
import cover from "@/public/08 IBE cover pic.jpg";
import ibe from "@/public/06 IBE Yt page.png";
import IBElogo from "@/public/IBE Logo.png";
import { Facebook, Youtube, Instagram, Twitter } from "lucide-react";

export default function IBE() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Cover Image */}
      <Image src={cover} alt="Cover" className="w-full" />

      {/* About Section */}
      <section id="about" className="flex flex-col md:flex-row items-center gap-8 py-12 ">
        <div className="md:w-1/2 flex justify-start">
          <Image src={ibe} alt="IBE" className="w-full max-w-md" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left">About</h2>
          <p>
            Islamic Baseera Education (IBE), the media wing of Baseera's World, stands as "The Ambassador of Islam". IBE is dedicated to promoting an integrated approach to learning, where Islamic values meet modern educational practices. Our goal is to create meaningful and impactful content that not only fosters academic excellence but also encourages a deeper connection to the Islamic faith. Through diverse media initiatives, IBE aims to instill values like integrity, compassion, and responsibility in learners, empowering them to navigate the complexities of today's world while staying rooted in their religious beliefs.
            <br /><br />
            We believe that education is not just about knowledge but also about character building. As we guide students in their academic journeys, we also help them strengthen their relationship with Allah, preparing them for both success in this world and the hereafter. By combining timeless wisdom with contemporary learning methods, IBE strives to inspire and prepare the next generation of Muslim leaders and thinkers, grounded in both faith and knowledge.
          </p>
        </div>
      </section>

      {/* Social Links Bar */}
      <div className="w-full flex justify-center mt-10 px-0">
  <div className="relative w-full max-w-7xl rounded-full bg-gradient-to-r from-[#36A9E1] to-[#1D78C1] flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 shadow-md overflow-visible">
    
    {/* Left: Social Icons */}
    <div className="flex-1 flex justify-evenly gap-3 p-2 max-w-[40%]">
      <a href="#" className="rounded-full p-2 hover:bg-[#1D78C1] hover:text-white transition">
        <Youtube className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
      </a>
      <a href="#" className="rounded-full p-2 hover:bg-[#1D78C1] hover:text-white transition">
        <Facebook className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
      </a>
      <a href="#" className="rounded-full p-2 hover:bg-[#1D78C1] hover:text-white transition">
        <Instagram className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
      </a>
      <a href="#" className="rounded-full p-2 hover:bg-[#1D78C1] hover:text-white transition">
        <Twitter className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
      </a>
    </div>

    {/* Center: Logo - overflows on desktop, shrinks on mobile */}
    <div className="absolute left-1/2 -translate-x-1/2 p-1 rounded-full z-10">
      <Image
        src={IBElogo}
        alt="IBE Logo"
        width={80}   // for mobile
        height={80}
        className="rounded-full sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px] object-contain"
      />
    </div>

    {/* Right: Text */}
    <div className="flex-1 flex justify-start max-w-[40%] px-2">
      <div className="text-white text-[14px] sm:text-[24px] md:text-[18px] font-semibold leading-tight">
        <p>Islamic Baseera Education</p>
        <p className="text-white/80">@IslamicBaseera</p>
      </div>
    </div>
  </div>
</div>



      {/* Quran Section */}
      <section id="quran" className="flex flex-col md:flex-row justify-between gap-8 py-12">
        <div className="md:w-1/2 flex justify-start">
          <Image src={poster} alt="Quran Poster" className="w-full max-w-md" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Quran Majeed aur Hum</h2>
          <p className="mb-6">
            "Qur'an Majeed aur Hum" is a transformative video series presented by Islamic Baseera Education, aimed at unlocking the profound wisdom of the Qur'an for modern-day living. Presented every Saturday night by Syed Zain Ul Abideen, the series draws from the revered Tafseer e Quran e Azeez by Syed Masood Ahmed RA, offering an authentic and insightful exploration of Qur'anic teachings. With each episode, viewers are guided through the Qur'an’s divine messages, providing clarity, relevance, and practical guidance on living a life rooted in faith. "Qur'an Majeed aur Hum" encourages believers to embody the principles of Islam in all aspects of life, ensuring success in this world and salvation in the hereafter.
          </p>
          <button
            onClick={() => window.location.href = "#"}
            className="bg-[#D2AB67] text-white px-6 py-2 rounded-md hover:bg-[#b79357] transition"
          >
            Watch
          </button>
        </div>
      </section>
    </div>
  );
}
