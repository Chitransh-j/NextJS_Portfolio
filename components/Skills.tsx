"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { profileData, skillsData, subjectSkillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import coding from "@/public/coding.json";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const fadeInAnimationVariants1 = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coding,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { ref } = useSectionInView("Skills", 0.1);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Skills & Coding Profiles</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 hover:bg-slate-300 cursor-pointer"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>

      <ul className=" mt-10 flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {subjectSkillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 hover:bg-slate-300 cursor-pointer"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index + skillsData.length}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
      <motion.div className="flex flex-wrap flex-row mt-10 items-center justify-center"
        initial={{
          opacity:0,
      }}
      whileInView={{opacity:1}}

      transition={{duration:2.5}}
      >
        <div className="m-auto">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
        <div className="m-auto">
          <motion.span
            className="font-bold text-2xl"
            key={1}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            {" "}
            Profiles :
          </motion.span>
          <ul className="p-5">
            {profileData.map((profile, index) => (
              <motion.li
                className="bg-slate-50 border font-semibold Black rounded-xl px-5 py-2 m-5 hover:bg-slate-100 cursor-pointer
                    even:ml-[5rem] odd:mr-[5rem] dark:bg-gray-400 dark:text-black dark:hover:bg-white"
                key={index}
                variants={fadeInAnimationVariants1}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index+skillsData.length}
              >
                <a href={profile.link} target="_blank">
                  {profile.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
