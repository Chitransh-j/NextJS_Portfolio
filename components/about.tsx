"use client";

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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay:0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I&apos;m currently pursuing my <span className="font-medium">Bachelors of Technology</span> in <span className="italic">Information Technology</span>{" "}
        at <br/> <span className="font-bold"><a className="" href="https://www.nitrr.ac.in/" target="_blank"> National Institute of Technology Raipur. {" "}</a></span>
        I started learning <span className="font-medium"> Algorithms </span> and <span className="font-medium">Web Development</span>  as a part of the curriculum {" "}
        and immediately fell in love with both of them.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of figuring out an optimal solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and Express.js
        </span>
        . I am also familiar with TypeScript and Tailwind CSS. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">Apart from Coding </span>, I enjoy playing
        video games, watching football and also movies.  As a matter of fact I am a Gold III title-holder for Colt in Brawl Stars, <span className="font-medium">&apos; The Pretty &apos; .</span>
         {" "}I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
        <span className="font-medium"></span>. 
      </p>
    </motion.section>
  );
}