"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center max-sm:mt-12 sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center pb-[0.5rem]">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.3,
            }}
          >
            <Image
              width="250"
              height="250"
              quality="95"
              priority={true}
              src="https://i.pinimg.com/originals/59/9c/b9/599cb96a0adc21064c635d3de237fc04.jpg"
              alt="colt-pfp"
              className="h-36 w-30 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">{`Hello, I'm Chitransh.`}</span> {`I'm an`}{" "}aspiring
        <span className="font-bold"> Full-Stack Developer</span> with{" "} a deep
        interest in serverless utilies. I love Problem Solving and Algorithms.{" "} I am also a 
        competitive programmer at times
        <span className="italic"></span>. <br/>My focus is{" "}
        <span className="">
          <span className="font-bold">Nextjs</span> 
        </span>
        .
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {/* group hovering */}
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-gray-950 transition-all"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition " />
        </Link>

        <a
          className="group bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 transition-all cursor-pointer border border-black/10 "
          href="/CV.pdf"
          download={true}
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <div className="flex flex-row gap-3">
          <a
            className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full hover:scale-[1.15] transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/chitransh-jawere-878497232/"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white text-gray-700 text-[1.35rem] p-4 flex items-center gap-2 rounded-full hover:scale-[1.15] transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
            href="https://github.com/Chitransh-j"
            target="_blank"
          >
            <BsGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
