'use client';

import Link from 'next/link';
import Image from 'next/image';

import landing from '@/public/landing.jpg';
import program1 from '@/public/En 1.svg';
import program2 from '@/public/En 2.svg';
import program3 from '@/public/Grade 1.svg';

import {
  ArrowRight,
  PlayCircle,
} from 'lucide-react';

export default function Header() {
  const iconFilterStyle = {
    filter:
      'brightness(0) saturate(100%) invert(76%) sepia(15%) saturate(682%) hue-rotate(2deg) brightness(92%) contrast(91%)',
  };

  return (
    <>
      {/* Hero Section */}
      <header className="w-full bg-white py-28 px-4 md:px-10 lg:px-20">
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
              <Link
                href="/contact"
                className="bg-secondary text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-secondary-bold transition flex items-center gap-2"
              >
                Awaken Baseera <ArrowRight size={18} />
              </Link>
              <Link
                href="/"
                className="text-primary flex items-center gap-2 text-lg font-medium"
              >
                <PlayCircle size={24} /> Watch Video
              </Link>
            </div>
          </div>

          {/* Right Image + Stats */}
          <div className=" w-full max-w-md ml-auto">
  {/* Background Layer */}
  <div className="rounded-3xl">
    <Image
      src={landing}
      alt="Tree growing from book"
      className="rounded-3xl w-full h-auto shadow-xl"
    />
  </div>

  {/* Top Left Stat */}
  {/* <div className="absolute -top-8 -left-8 bg-white rounded-xl shadow-md px-4 py-2 flex items-center gap-2 sm:flex z-20">
    <BookOpenText className="text-[#D2AB67]" size={24} />
    <div>
      <p className="text-[#D2AB67] font-bold">03</p>
      <p className="text-sm text-gray-700">
        Core Programs and Expanding Further
      </p>
    </div>
  </div> */}

  {/* Top Right Stat */}
  {/* <div className="absolute top-6 -right-6 bg-white rounded-xl shadow-md px-4 py-2 flex items-center gap-2 sm:flex z-20">
    <Users className="text-[#6C8CC7]" size={24} />
    <div>
      <p className="text-[#6C8CC7] font-bold">6.3K+</p>
      <p className="text-sm text-gray-700">Total Active Students</p>
    </div>
  </div> */}

  {/* Bottom Left Stat */}
  {/* <div className="absolute -bottom-8 left-4 bg-white rounded-xl shadow-md px-4 py-2 flex items-center gap-2 sm:flex z-20">
    <GraduationCap className="text-[#6C8CC7]" size={24} />
    <div>
      <p className="text-[#6C8CC7] font-bold">1.5K+</p>
      <p className="text-sm text-gray-700">
        Tutors and Instructors from around the world
      </p>
    </div>
 */}
</div>

        </div>
      </header>

      {/* Programs Section */}
      <section
        id="program"
        className="bg-primary max-w-[95%] md:max-w-7xl mx-auto items-center rounded-t-2xl scroll-mt-24 text-white py-16 px-4 md:px-10 lg:px-20"
      >
        <div className="mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Left side: heading and text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Programs</h2>
            <p className="text-white/90 max-w-md mx-auto md:mx-0">
              Baseera&apos;s World offers three core educational programs:
              Environment 1, Environment 2 (both garden-style classes), and
              Grade 1. As the institution grows, these programs will gradually
              expand to include higher grades, starting with Grade 2, Grade 3,
              and so on, ensuring a comprehensive and continuous educational
              journey for students.
            </p>
          </div>

          {/* Right side: program icons/cards */}
          <div className="flex flex-col md:flex-row md:justify-evenly gap-6 md:gap-4 flex-1 items-center md:items-start">
            {[{ src: program1, title: 'Environment 1' },
              { src: program2, title: 'Environment 2' },
              { src: program3, title: 'Grade 1' }
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  className="mb-2"
                  width={60}
                  height={60}
                  style={iconFilterStyle}
                />
                <h3 className="font-semibold text-base mb-1 text-white">
                  {item.title}
                </h3>
                <a
                  href="#"
                  className="text-white/80 hover:text-white inline-flex items-center gap-1 text-sm transition"
                >
                  Learn more <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
