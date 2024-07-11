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
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Pursued a Bachelor's degree in {" "}
        <span className="font-medium">Computer Science</span> with a specialization in 
        <span className="font-medium"> Artificial Intelligence and DataScience</span>,  reflecting a keen 
        interest in cutting-edge technology and its transformative applications.{" "}
        Acquired a comprehensive understanding of
        <span className="font-medium">AI fundamentals</span>,
        <span className="font-medium"> machine learning algorithms</span>,
        {/* <span className="font-medium"> deep learning architectures</span> and */}
        <span className="font-medium"> natural language processing</span> techniques.{" "}
        <span className="italic">Apart from them, </span> gained Knowledge in
        web tech like Html,css,js,React.
         {/* I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem.{" "} */}
        {/* <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span> */}
        {/* . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer. */}
      </p>

      <p>
        Engaged in hands-on projects that involved developing
        <span className="font-medium"> AI-driven solutions</span>,
        <span className="font-medium"> hosing teamwork</span> and
        <span className="font-medium"> project management skills</span>.
        Gained a solid foundation in computer science principles while immersing in the dynamic realm of AI innovation.
        {/* <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar. */}
      </p>
    </motion.section>
  );
}
