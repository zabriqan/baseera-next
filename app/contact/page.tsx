"use client";

import Image from "next/image";
import landing from "@/public/01 Landing Sec Pic.jpg";

import {
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="relative w-full">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={landing}
          alt="Background"
          fill
          className="object-cover  opacity-50"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0  bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 py-24 flex flex-col md:flex-row gap-10">
        {/* Form Section */}
        <form
          className="bg-primary/40  p-8 md:p-12 rounded-2xl flex-1 space-y-6 shadow-lg text-white"
        >
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">First Name</label>
              <input
                type="text"
                placeholder="Eg. John"
                className="w-full rounded-xl px-4 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <input
                type="text"
                placeholder="Eg. Doe"
                className="w-full rounded-xl px-4 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1 ">Email Address</label>
              <input
                type="email"
                placeholder="Eg. Hello@Email.co"
                className="w-full rounded-xl px-4 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl px-4 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 ">Message</label>
            <textarea
              rows={4}
              placeholder="Your Message Here..."
              className="w-full rounded-xl px-4 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#D2AB67] rounded-xl text-white font-medium px-6 py-2  hover:bg-[#b79357] transition"
          >
            SEND MESSAGE
          </button>
        </form>

        {/* Info Section */}
        <div className="text-white flex-1 flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-bold">Let’s Get In Touch With Us</h2>
          <p className="text-white/80 max-w-md">
            We value your feedback and suggestions! Reach out to us with any
            thoughts or inquiries, and let’s work together to create an even
            better learning experience at Baseera’s World.
          </p>

          <div className="space-y-4 text-sm md:text-base">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="mt-1" />
              <div>
                <p className="font-bold"> Office</p>
                <p>
                  Gresik United East Java<br />
                  Sidomukti Village 60000
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail size={20} className="mt-1" />
              <div>
                <p className="font-bold">Email Address</p>
                <a
                  href="mailto:Connect@BaseerasWorld.com"
                  className="hover:underline"
                >
                  Connect@BaseerasWorld.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone size={20} className="mt-1" />
              <div>
                <p  className="font-bold">Telephone</p>
                <a href="tel:+62 123 456 789"className=" hover:underline">+62 123 456 789</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
