import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "RestaurantBookingApp",
    description:
      "I worked as a full-stack developer on this project for 2 months. This is Restaurant reservation application where people can view restaurants and reserve tables",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl:
      "https://res.cloudinary.com/dwg3olxlh/image/upload/v1699973168/pramodkangare.dev/x4rspzfgaz0hrax9tmy5.png",
  },
  {
    title: "ECommerceApp",
    description:
      "An ecommerce app allows users to shop online, browse product catalogs, create wish lists, add items to a cart, and complete purchases. It also provides payment processing, shipping, and order management capabilities.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl:
      "https://res.cloudinary.com/dwg3olxlh/image/upload/v1699973493/pramodkangare.dev/r2qhikcwqvgthhvby8bz.png",
  },
  {
    title: "MovieReviewApp",
    description:
      "Consumers are often the best critics, and this app lets users see real opinions and reviews from those that have seen the movie first. It also provides details about casting, production, and the crews that worked to create the film. Users can create an account to keep track of listings and their own personal favorites. This app is easy to navigate, useful, and free.",
    tags: ["React", "MongoDB", "Express", "Node", "Cloudinary", "Tailwind"],
    imageUrl:
      "https://res.cloudinary.com/dwg3olxlh/image/upload/v1699973627/pramodkangare.dev/khdjohl56vgpoz2xkm5a.png",
  },
] as const;

export const skillsData = [
  "C#",
  "SQL",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
