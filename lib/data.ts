import React from "react";
import { FaBook, FaGraduationCap } from "react-icons/fa";
import mancity from "@/public/mancity.png";
import csync from "@/public/csync.png";
import cryptrack from "@/public/cryptrack.png";
import journalize from '@/public/journalize.png';
import farmstack from '@/public/farmstack.jpeg'
import mentibuddy from '@/public/mentibuddy.png'
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
  "OS",
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
      "I am currenly enrolled in Bachelors of Technology at National Institute of Raipur in the brach Information Tech. My current CPI (till 6th Semester) is 8.76.",
    icon: React.createElement(FaGraduationCap),
    date: "Dec 2021 - Present",

  },
] as const;

export const projectsData = [
  {
    title: "Mentibuddy",
    description:
      " I created a full stack web application for mental coaches",
    tags: ["Nextjs", "TypeScript","Prisma","React-Query","Zod"],
    imageUrl: mentibuddy,
    link : "https://mentibuddy.vercel.app/"
  },
  {
    title: "Manchester City Website",
    description:
      " I Designed a completely dyanmic Front-end for my Favourite Football Club.",
    tags: ["React", "Vanilla CSS","AOS","Canva"],
    imageUrl: mancity,
    link : "https://manchester-city-react.netlify.app/"
  },
  {
    title: "C-Sync",
    description:
      "Sahyog Hackathon Group Project. I was the API Handler and the ReactJS in-charge .",
    tags: ["React", "Tailwind", "SheetDB", "FIGMA","Git"],
    imageUrl: csync,
    link : "https://csync.netlify.app/"
  },
  {
    title: "Journalize",
    description:
      "Journalize simplifies the process of journaling, providing a secure and intuitive platform for documenting your thoughts.",
    tags: ["ElectronJS", "MSI Packager","Nodejs"],
    imageUrl: journalize,
    link: 'https://github.com/Chitransh-j/journalize'
  },
  {
    title: "CryptoTracker",
    description:
      "A public web app for quick insights on the current trends of Cryptocurrency.",
    tags: ["React", "Vanilla CSS"],
    imageUrl: cryptrack,
    link : "https://cryptotracker-online-react.netlify.app/"
  },
  {
    title: "FarmStack",
    description:
      " A full stack Saas application with basic CRUD and next-auth. ",
    tags: ["Nextjs", "Next-auth","MongoDB","Reactjs","Tailwind"],
    imageUrl: farmstack,
    link : "https://github.com/Chitransh-j/farmStack"
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
  "Electron.js",
  "Framer Motion",
  "MongoDB"
] as const;
