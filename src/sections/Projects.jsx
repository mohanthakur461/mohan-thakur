import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of Project One.",
    image: "https://via.placeholder.com/300",
    link: "#",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of Project Two.",
    image: "https://via.placeholder.com/300",
    link: "#",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A brief description of Project Three.",
    image: "https://via.placeholder.com/300",
    link: "#",
  },
  {
    id: 4,
    title: "Project Four",
    description: "A brief description of Project Four.",
    image: "https://via.placeholder.com/300",
    link: "#",
  },
];

const Projects = ({info}) => {
  return (
      <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {info.work.map((item, index) =>
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                {/* <p className="text-white text-sm mb-4">{project.description}</p> */}
                <a
                  href={item.url}
                  className="px-4 py-2 bg-white text-black rounded-md font-medium"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects
