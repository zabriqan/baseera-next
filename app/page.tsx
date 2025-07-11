"use client";

import Header from "./compunents/header";
import Main from "./compunents/main";
// import { useEffect } from 'react';
// import { useNavStore } from '@/lib/store/navstore';

export default function Home() {

  // const setActiveTab = useNavStore((state) => state.setActiveTab);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const about = document.getElementById("about");
  //     const programs = document.getElementById("program");
  
  //     const navbarOffset = 100; // height of your sticky navbar
  
  //     if (!about || !programs) return;
  
  //     const inView = (el: HTMLElement) => {
  //       const rect = el.getBoundingClientRect();
  //       return rect.top <= navbarOffset && rect.bottom > navbarOffset;
  //     };
  
  //     if (inView(programs)) {
  //       setActiveTab("programs");
  //     } else if (inView(about)) {
  //       setActiveTab("about");
  //     } else {
  //       setActiveTab("home");
  //     }
  //   };
  
  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll(); // run on mount
  
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll); // ✅ fixed spelling
  //   };
  // }, [setActiveTab]);
  


  return (
    <>
    <Header/>
    <Main/>
    </>
  );
}
