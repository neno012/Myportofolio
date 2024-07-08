import About from "@/components/About";
import Achievment from "@/components/Achievment";
import Email from "@/components/Email";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import React from "react";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Hero />
        <Achievment />
        <About />
        <Skills />
        <Project />
        <Email />
      </div>
      <Footer />
    </main>
  );
};

export default page;
