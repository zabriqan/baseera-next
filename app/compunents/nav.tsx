'use client';

import Image from 'next/image';
import logo from '@/public/logo.png';
import Link from 'next/link';
import { useState } from 'react';
import { useNavStore } from '@/lib/store/navstore';
import { X } from 'lucide-react';


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { activeTab, setActiveTab } = useNavStore();

  const handleScroll = (id: string, tab: string) => {
    setActiveTab(tab);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // close mobile menu
  };

  const navItems = [
    { label: 'Home', href: '/', tab: 'home' },
    { label: 'About', href: '/#about', tab: 'about' },
    { label: 'Programs', href: '/#program', tab: 'programs' },
    { label: 'IBE', href: '/IBE', tab: 'ibe' },
  ];

  return (
    <nav className="w-full bg-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto  flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src={logo} alt="Logo"  />
          </Link>
        </div>

        {/* Desktop Links */}
       <div className="hidden md:flex gap-10 items-center">
  {navItems.map((item) => (
    <Link
      key={item.tab}
      href={item.href}
      onClick={() => setActiveTab(item.tab)}
      className={`transition-opacity duration-300 text-[16px] font-medium hover:opacity-100 ${
        activeTab === item.tab
          ? 'text-[#6C8CC7] opacity-100'
          : 'text-[#6C8CC7] opacity-50'
      }`}
    >
      {item.label}
    </Link>
  ))}
</div>

        {/* Contact Button */}
        <div className="hidden md:block">
        <Link
  href="/contact"
  className="bg-[#C7A76C]  text-white font-semibold text-[16px] hover:bg-[#b48f57] opacity-80 px-4 py-2 rounded-lg transition"
>
  Contact
</Link>

        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-[#6C8CC7]"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
  <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-6 px-4">
    {/* Close Button */}
    <button
      onClick={() => setMenuOpen(false)}
      className="absolute top-4 right-4 text-[#6C8CC7] hover:opacity-100 opacity-70"
    >
      <X size={32} />
    </button>

    {navItems.map((item) => (
      <Link
        key={item.tab}
        href={item.href!}
        onClick={() => {
          setActiveTab(item.tab);
          setMenuOpen(false);
        }}
        className={`text-xl font-semibold hover:opacity-100 ${
          activeTab === item.tab
            ? 'text-[#6C8CC7] opacity-100'
            : 'text-[#6C8CC7] opacity-50'
        }`}
      >
        {item.label}
      </Link>
    ))}

    <Link
      href="/contact"
      onClick={() => setMenuOpen(false)}
      className="text-xl font-semibold text-[#6C8CC7]"
    >
      Contact
    </Link>
  </div>
)}

    </nav>
  );
}
