"use client";
import { useState } from "react";
import Image from "next/image";
import landing from "@/public/01 Landing Sec Pic.jpg";

import {
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export default function ContactPage() {

  const [error, setError] = useState("");
const [success, setSuccess] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // clear previous error
    setSuccess("");
  
    const { firstName, lastName, email, subject, message } = formData;
  
    // Basic validation
    if (!firstName || !lastName || !email || !subject || !message) {
      setError("Please fill out all fields.");
      return;
    }
  
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  
    if (res.ok) {
      setSuccess("Message sent successfully!");
      setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
    } else {
      setError("Failed to send message. Please try again.");
    }
  };
  
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
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
      <div className="relative z-10 md:w-7xl w-80 mx-auto  md:px-10 py-24 flex flex-col md:flex-row gap-10">
        {/* Form Section */}
        <form onSubmit={handleSubmit}
          className="bg-primary/40  p-8 md:p-12 rounded-2xl flex-1 space-y-6 shadow-lg text-white"
        >
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">First Name</label>
              <input
                type="text" name="firstName"
                value={formData.firstName} onChange={handleChange}
                required
                placeholder="Eg. John"
                className="w-full rounded-xl text-[10px] md:text-sm px-4 py-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"  value={formData.lastName}  onChange={handleChange}
                placeholder="Eg. Doe"
                className="w-full rounded-xl text-[10px] md:text-sm px-4 py-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1 ">Email Address</label>
              <input
                type="email"
                name="email"  value={formData.email}  onChange={handleChange}
                required
                placeholder="Eg. Hello@Email.co"
                className="w-full text-[10px] md:text-sm rounded-xl px-4 py-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                name="subject"  value={formData.subject}  onChange={handleChange}
                placeholder="Subject"
                className="w-full text-[10px] md:text-sm rounded-xl px-4 py-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 ">Message</label>
            <textarea
              rows={4}
              name="message"  value={formData.message}  onChange={handleChange}
              placeholder="Your Message Here..."
              className="w-full text-[10px] md:text-sm rounded-xl px-4 py-4 bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
            ></textarea>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}
          <button
            type="submit"
            className="bg-[#D2AB67] rounded-xl text-white font-medium px-6 py-2  hover:bg-[#b79357] transition"
          >
            SEND MESSAGE
          </button>
        </form>

        {/* Info Section */}
        <div className="text-white flex-1 flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-bold">Let&apos;s Get In Touch With Us</h2>
          <p className="text-white/80 max-w-md">
            We value your feedback and suggestions! Reach out to us with any
            thoughts or inquiries, and let&apos;s work together to create an even
            better learning experience at Baseera&apos;s World.
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
