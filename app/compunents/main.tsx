'use client';

import Image from 'next/image';
import aboutImage from "@/public/02 About Sec Pic.jpg";
import missionImage from "@/public/03 Mission Pic.jpg";
import visionImage from "@/public/01 Landing Sec Pic.jpg";

export default function Main() {
  return (
    <div>

      {/* About Us Section */}
      <section id="about" className="w-full bg-white py-12 scroll-mt-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center ">
          <Image
            src={aboutImage}
            alt="About Us"
            className=" md:w-5/12 h-[300px] md:h-[500px] object-cover rounded-lg mx-auto max-w-[95%]"
          />
          <div className="max-w-[95%] mx-auto md:w-7/12 ">
            <h2 className="text-3xl font-bold mb-4 text-center md:text-left">ABOUT US</h2>
            <p>
            Baseera&apos;s World is a dynamic and forward-thinking educational institution that strives to ignite the potential of every learner. We are committed to creating an environment where students are encouraged to think critically, embrace curiosity, and develop both intellectual and moral strength. At Baseera&apos;s World, education is not just about academic success; it&apos;s about nurturing the mind, cultivating strong character, and inspiring futures that will have a lasting positive impact on the world. <br />
            With a strong foundation in both Islamic values and modern education, Baseera&apos;s World serves as a beacon of knowledge and wisdom. Our approach integrates religious and worldly education, ensuring that our students are well-equipped to navigate life with purpose, responsibility, and confidence. We believe in educating the whole person, and our students are taught to balance spiritual depth with academic excellence, setting them on a path to become well-rounded, socially conscious individuals who will make a difference in the world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full bg-white py-12 ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-12 items-center">
          <Image
            src={missionImage}
            alt="Mission"
            className="w-full md:w-5/12 h-[375px] md:h-[375px] object-cover rounded-lg mx-auto max-w-full"
          />
          <div className="w-full md:w-7/12 ">
            <h2 className="text-3xl font-bold mb-4 text-center md:text-left">Our Mission</h2>
            <p>
            Baseera&apos;s World empowers learners to reach their full potential by nurturing curious minds, cultivating resilient character, and inspiring futures that will shape a better world for all. Our commitment to education is rooted in the belief that knowledge and wisdom, when combined, have the power to transform individuals and communities. At Baseera&apos;s World, we are &apos;Nurturing Minds, Cultivating Character, Inspiring Futures,&apos; providing students with the tools to excel academically and morally, while embracing the courage and creativity needed to foster positive change.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center ">
          <Image
            src={visionImage}
            alt="Vision"
            className="w-full md:w-5/12 h-[300px] md:h-[300px] object-cover rounded-lg mx-auto max-w-full"
          />
          <div className="w-full md:w-7/12 ">
            <h2 className="text-3xl font-bold mb-4 text-center md:text-left">Our Vision</h2>
            <p>
            Baseera&apos;s World envisions a global community of learners who will transform the world with courage, creativity, and compassion, fostering a brighter future for generations to come. Our dream is to see Baseera&apos;s World expand into every city and community, establishing campuses that blend Islamic values with modern education, ensuring that every child has the opportunity to grow and succeed in an environment where wisdom truly shines.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="w-full bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left">Our Philosophy</h2>
          <p>
          Rooted in the timeless teachings of Prophet Muhammad (Peace be upon him), we believe that true progress stems from an education that harmoniously blends faith and knowledge. At Baseera&apos;s World, we understand that the integration of religious and worldly education is key to nurturing individuals who are both spiritually enriched and intellectually empowered. Our mission is to redefine education by aligning the Islamic worldview with modern sciences, preparing students to not only excel in their professional pursuits but also to contribute positively to the world through their strong moral foundation. <br />
          Our approach embraces a holistic curriculum designed to enrich both the mind and the soul. By combining academic excellence with ethical and spiritual guidance, we aim to develop well-rounded individuals capable of shaping society for the better and upholding a complete Islamic way of life. Our learners are equipped to lead with courage, creativity, and compassion—pillars of a brighter, more just future.
          </p>
        </div>
      </section>

      {/* Future Goals Section */}
      <section className="w-full bg-white py-12 mb-15 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left">Future Goals</h2>
          <p>
          We aspire to see Baseera&apos;s World campuses flourishing in every major city, where students can access a transformative education that fuses Islamic values with contemporary subjects. Our vision is to create a world where every child has the opportunity to grow in an environment that fosters both spiritual growth and academic achievement, equipping them with the tools to lead with wisdom, integrity, and humility. <br />
          In a world often fragmented by materialism and misunderstanding, Baseera&apos;s World stands as a beacon of hope, guiding the way towards a unified and compassionate future. Through our innovative educational model, we are committed to building a legacy of knowledge, character, and success—ensuring that future generations have the strength, skills, and spirit to positively impact the world and contribute to the greater good.
          </p>
        </div>
      </section>

    </div>
  );
}
