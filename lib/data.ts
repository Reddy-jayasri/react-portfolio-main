import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import phonebookImg from "@/public/phonebook.png";
import aichat from "@/public/ai-chat-bot.jpg";
import ecommImg from "@/public/eCommerce.png";

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
    name: "Education",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Technology (B.Tech)",
    location: "KIET - Korangi",
    description:
      "Aspiring AI engineer pursuing B.Tech in Computer Science and Engineering with AI&DS specialization at KIET College.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2025",
  },
  {
    title: "Higher Secondary Education(M.P.C)",
    location: "Narayana jr college- RCpuram",
    description:
      "I completed my intermediate education at Narayana junior college, where I specialized in the M.P.C (Mathematics, Physics, and Chemistry) branch.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2021",
  },
  {
    title: "Secondary Education",
    location: "Zpp High school - Hasanbada",
    description:
      "I completed my secondary education (S.S.C) at Zpp Highschool Hasanbada, graduating in 2019",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2019",
  },
] as const;

export const projectsData = [
  {
    title: "PhoneBook-MERN Stack",
    description:
      "PhoneKeeper is a sleek and efficient contact management application built using the MERN-stack.",
    tags: ["React", "Node.js", "MongoDB","express", "mern-stack"],
    imageUrl: phonebookImg,
  },
  {
    title: "Ai chatbot",
    description:
      "Ai chatbot is Machine learning application developed by using RASA nlu module for training module and produce generalised answers .",
    tags: ["Machine-learning", "Natural Language Processing", "numpy", "pandas"],
    imageUrl: aichat,
  },
  {
    title: "E-commerce website",
    description:
      "A responsive React-based E-commerce website  offering real-time shopping Experience. Designed bt the inspiration of Flipkart and Amazon Websites, providing user-friendly interface for shopping.",
    tags: ["React"],
    imageUrl: ecommImg,
  },
] as const;

export const skillsData = [
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "Express",
  "React",
  "Flask",
  "Machine Learning",
  
] as const;
