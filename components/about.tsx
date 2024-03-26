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
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I&apos;m currently pursuing my{" "}
        <span className="font-medium">Bachelors of Technology</span> in{" "}
        <span className="italic">Information Technology</span> at <br />{" "}
        <span className="font-bold">
          <a className="" href="https://www.nitrr.ac.in/" target="_blank">
            {" "}
            National Institute of Technology Raipur.{" "}
          </a>
        </span>
        I started learning <span className="font-medium">
          {" "}
          Algorithms{" "}
        </span> and <span className="font-medium">Web Development</span> as a
        part of the curriculum and immediately fell in love with both of them.{" "}
        My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and Express.js
        </span>
        . I am also familiar with TypeScript and Tailwind CSS. I am always
        looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        I am also rated 1848 on <span className="font-semibold">LeetCode</span>{" "}
        and ⭐⭐⭐ at <span className="font-semibold">CodeChef</span>. <br />{" "}
        <span className="font-medium"></span>
      </p>
    </motion.section>
  );
}
