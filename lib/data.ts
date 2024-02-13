import React from "react";
import { FaBook, FaGraduationCap } from "react-icons/fa";
import { LuGraduationCap,LuSchool } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Background",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;



export const profileData = [
  {
    name: "Leetcode",
    link: "https://leetcode.com/IchigoGoes/",
  },
  {
    name: "CodeChef",
    link: "https://www.codechef.com/users/chitransh34",
  },
  {
    name: "GFG",
    link: "https://auth.geeksforgeeks.org/user/chitranshjawere/practice",
  },
  {
    name: "CodeForces",
    link: "https://codeforces.com/profile/chitransh34",
  },
] as const;

export const subjectSkillsData = [
  "OOPS",
  "Operating System",
  "Computer Networks",
  "Data Structures",
  "Algorithms",
  "DBMS"
] as const;



export const experiencesData = [
  {
    title: "Indore Public School",
    location: "Indore, MP",
    description:
      "I completed my schooling from Indore Public School, Indore. I scored 93.6% in 10th and 95.6% in 12th.",
    icon: React.createElement(FaBook),
    date: "2011-2021",
  },
  {
    title: "National Institute of Technology Raipur",
    location: "Raipur, CG",
    description:
      "I am currenly enrolled in Bachelors of Engineering at National Institute of Raipur. My current CPI (till 5th Semester) is 8.71 .",
    icon: React.createElement(FaGraduationCap),
    date: "2019 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Manchester City Website",
    description:
      " I Designed a completely dyanmic Front-end for my Favourite Football Club.",
    tags: ["React", "Vanilla CSS","AOS","Canva"],
    imageUrl: corpcommentImg,
  },
  {
    title: "C-Sync",
    description:
      "Sahyog Hackathon Group Project. I was the API Handler and the ReactJS in-charge .",
    tags: ["React", "Tailwind", "SheetDB", "FIGMA","Git"],
    imageUrl: rmtdevImg,
  },
  {
    title: "CryptoTracker",
    description:
      "A public web app for quick insights on the current trends of Cryptocurrency.",
    tags: ["React", "Vanilla CSS"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Github",
  "C++",
  "Express",
  "MYSQL",
  "Framer Motion",
] as const;
