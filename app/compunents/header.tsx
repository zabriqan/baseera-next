"use client";

import Link from 'next/link';
import Image from "next/image";
import vission from '@/public/04 Vision.jpg'
import program1 from "@/public/En 1.svg";
import program2 from "@/public/En 2.svg";
import program3 from "@/public/Grade 1.svg";

// Lucide Icons
import {
  ArrowRight,
  PlayCircle,
  ScrollText,
  GraduationCap,
  UsersRound,
} from "lucide-react";

export default function Header() {
  return (
    <>
      {/* Hero Section */}
      <header className="w-full bg-white py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text Section */}
          <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
             Where <span className="text-primary">Wisdom</span>
            <br /> Shines
         </h1>
            <p className="text-gray-700 text-lg">
              By Nurturing Minds, Cultivating Character, Inspiring Futures
            </p>
            <div className="flex gap-4 items-center flex-wrap">
              <Link href ='/contact' className="bg-secondary text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-secondary-bold transition flex items-center gap-2">
                Awaken Baseera <ArrowRight size={18} />
              </Link>
              <a
                href="/"
                className="text-primary flex items-center gap-2 text-lg font-medium"
              >
                <PlayCircle size={24} /> Watch Video
              </a>
            </div>
          </div>

          {/* Right Image + Stats */}
          <div className="relative w-full">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src={vission}
                alt="Hero Image"
                className="rounded-2xl object-cover"
              />
            </div>

            {/* Top Tag */}
            {/* <div className="absolute -top-6 left-6 bg-white rounded-xl shadow-md px-4 py-2 flex items-center gap-3 text-sm">
              <ScrollText size={20} className="text-[#C7A76C]" />
              <div>
                <span className="font-bold text-[#C7A76C]">03</span>
                <p className="text-xs text-gray-500">
                  Core Programs and Expanding Further
                </p>
              </div>
            </div> */}

            {/* Bottom Left Stat */}
            {/* <div className="absolute -bottom-6 left-4 bg-white rounded-xl shadow-md px-4 py-2 flex items-center gap-2 text-sm">
              <UsersRound size={20} className="text-[#6C8CC7]" />
              <p className="text-[#6C8CC7] font-semibold">
                1.5K+ Tutors Worldwide
              </p>
            </div> */}

            {/* Right Stat */}
            {/* <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white rounded-xl shadow-md px-4 py-2 flex items-center gap-2 text-sm">
              <GraduationCap size={20} className="text-[#6C8CC7]" />
              <p className="text-[#6C8CC7] font-semibold">6.3K+ Students</p>
            </div> */}
          </div>
        </div>
      </header>

      {/* Programs Section */}
      <section
  id="program"
  className="bg-primary max-w-[95%] md:max-w-7xl mx-auto items-center rounded-t-2xl scroll-mt-24 text-white py-16 px-4 md:px-10 lg:px-20"
>
  <div className="mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8 ">
    {/* Left side: heading and text */}
    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl font-bold mb-4">Programs</h2>
      <p className="text-white/90 max-w-md mx-auto md:mx-0">
        Baseera’s World offers three core educational programs: Environment 1,
        Environment 2 (both garden-style classes), and Grade 1. As the
        institution grows, these programs will gradually expand to include
        higher grades, starting with Grade 2, Grade 3, and so on, ensuring a
        comprehensive and continuous educational journey for students.
      </p>
    </div>

    {/* Right side: program icons/cards */}
    <div className="flex flex-col md:flex-row md:justify-evenly gap-6 md:gap-4 flex-1 items-center md:items-start">
      <div className="flex flex-col items-center text-center">
        <Image
          src={program1}
          alt="Environment 1"
          className="mb-2"
          width={60}
          height={60}
          style={{
            color: "#C7A76C",
            filter:
              "brightness(0) saturate(100%) invert(76%) sepia(15%) saturate(682%) hue-rotate(2deg) brightness(92%) contrast(91%)",
          }}
        />
        <h3 className="font-semibold text-base mb-1 text-white">Environment 1</h3>
        <a
          href="#"
          className="text-white/80 hover:text-white inline-flex items-center gap-1 text-sm transition"
        >
          Learn more <ArrowRight size={14} />
        </a>
      </div>

      <div className="flex flex-col items-center text-center">
        <Image
          src={program2}
          alt="Environment 2"
          className="mb-2"
          width={60}
          height={60}
          style={{
            color: "#C7A76C",
            filter:
              "brightness(0) saturate(100%) invert(76%) sepia(15%) saturate(682%) hue-rotate(2deg) brightness(92%) contrast(91%)",
          }}
        />
        <h3 className="font-semibold text-base mb-1 text-white">Environment 2</h3>
        <a
          href="#"
          className="text-white/80 hover:text-white inline-flex items-center gap-1 text-sm transition"
        >
          Learn more <ArrowRight size={14} />
        </a>
      </div>

      <div className="flex flex-col items-center text-center">
        <Image
          src={program3}
          alt="Grade 1"
          className="mb-2"
          width={60}
          height={60}
          style={{
            color: "#C7A76C",
            filter:
              "brightness(0) saturate(100%) invert(76%) sepia(15%) saturate(682%) hue-rotate(2deg) brightness(92%) contrast(91%)",
          }}
        />
        <h3 className="font-semibold text-base mb-1 text-white">Grade 1</h3>
        <a
          href="#"
          className="text-white/80 hover:text-white inline-flex items-center gap-1 text-sm transition"
        >
          Learn more <ArrowRight size={14} />
        </a>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
