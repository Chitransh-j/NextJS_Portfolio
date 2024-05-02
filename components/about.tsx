"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-24 scroll-mt-28"
      initial={{
        opacity:0,
      }}
      whileInView={{opacity:1}}

      transition={{duration:2.5}}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Currently, I&apos;m pursuing a{" "}
        <span className="font-medium">Bachelor of Technology</span> degree in{" "}
        <span className="italic">Information Technology</span> at <br />{" "}
        <span className="font-bold">
          {" "}
          <a className="" href="https://www.nitrr.ac.in/" target="_blank">
            {" "}
            National Institute of Technology Raipur.{" "}
          </a>{" "}
        </span>{" "}
        {" "}My journey began with delving into{" "}
        <span className="font-medium">Algorithms</span> and{" "}
        <span className="font-medium">Web Development</span> as integral parts
        of my curriculum, and it was instant love for both disciplines. My
        expertise lies in the{" "}
        <span className="font-medium">MERN stack and Next.js</span>.
        Additionally, I possess proficiency in TypeScript and Tailwind CSS.
        Always eager to embrace new technologies, I am currently seeking a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        I am a knight (rated 1875) on{" "}
        <span className="font-semibold">LeetCode</span> and  ⭐⭐⭐ on{" "}
        <span className="font-semibold">CodeChef</span>. <br />{" "}
        <span className="font-medium"></span>
      </p>
    </motion.section>
  );
}
