"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const projectsData = [
    {
      id: 1,
      title: "Renting Website",
      image: "/images/a.jpeg",
      tag: ["All", "Web"],
    },
    {
      id: 2,
      title: "Potography Portfolio Website",
      image: "/images/b.jpg",
      tag: ["All", "Web"],
    },
    {
      id: 3,
      title: "E-commerce Application",
      image: "/images/c.jpg",
      tag: ["All", "Web"],
    },
    {
      id: 4,
      title: "Food Ordering Application",
      image: "/images/d.jpg",
      tag: ["All", "Mobile"],
    },
    {
      id: 5,
      title: "React Firebase Template",
      image: "/images/e.jpg",
      tag: ["All", "Web"],
    },
    {
      id: 6,
      title: "Full-stack Roadmap",
      image: "/images/f.jpg",
      tag: ["All", "Web"],
    },
  ];

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll on next/prev
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <section id="projects">
      <Slider {...settings}>
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.3 }}
          >
            <ProjectCard
              title={project.title}
              imgUrl={project.image}
            />
          </motion.div>
        ))}
      </Slider>
    </section>
  );
};

export default ProjectsSection;
