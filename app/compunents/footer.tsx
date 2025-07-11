"use client";

import Link from "next/link";
import { Facebook, Linkedin, Youtube, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#6C8CC7] text-white py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Section 1 */}
        <div>
          <h4 className="font-semibold text-lg mb-2">Baseera's World</h4>
          <p className="mb-4">Where Wisdom Shines</p>
          <div className="space-y-2">
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <Link href="#" className="flex items-center justify-center text-white rounded-full p-2 hover:opacity-90 transition">
                <Facebook size={18} />
              </Link>
            
            
              <Link href="#" className="flex items-center justify-center text-white rounded-full p-2 hover:opacity-90 transition">
                <Linkedin size={18} />
              </Link>
            </div>
            <p>
              Email:{" "}
              <a href="mailto:Connect@BaseerasWorld.com" className="underline">
                Connect@BaseerasWorld.com
              </a>
            </p>
            <p>Phone: +62 123 456 789</p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="hidden md:block">
          <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link href="#" className="hover:underline">Home</Link></li>
            <li><Link href="/#about" className="hover:underline">About Us</Link></li>
            <li><Link href="/#program" className="hover:underline">Programs</Link></li>
            <li><Link href="/contact" className="hover:underline">Contacts</Link></li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h4 className="font-semibold text-lg mb-2">Follow Islamic Baseera Education</h4>
          <p className="mb-4">
            Islamic Baseera Education (IBE) is the media arm of Baseera's World, committed to blending Islamic principles with contemporary learning methods to nurture well-rounded individuals.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <Link href="#" className="flex items-center justify-center text-white rounded-full p-2 hover:opacity-90 transition">
              <Youtube size={18} />
            </Link>
            <Link href="#" className="flex items-center justify-center text-white rounded-full p-2 hover:opacity-90 transition">
              <Facebook size={18} />
            </Link>
            <Link href="#" className="flex items-center justify-center text-white rounded-full p-2 hover:opacity-90 transition">
              <Twitter size={18} />
            </Link>
            <Link href="#" className="flex items-center justify-center text-white rounded-full p-2 hover:opacity-90 transition">
              <Instagram size={18} />
            </Link>
            <Link href="#" className="flex items-center justify-center text-white rounded-full p-2 hover:opacity-90 transition">
              <Linkedin size={18} />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-sm">
        &copy; All Rights Reserved - Baseera's World
      </div>
    </footer>
  );
}
