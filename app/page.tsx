"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code, Award, Trophy, BookOpen, Terminal, ChevronDown, Linkedin } from "lucide-react";

export default function Home() {

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projects = [
    {
      title: "PDF Merger",
      description: "A web application that allows users to effortlessly upload and merge multiple PDF files into a single document with a modern, responsive interface.",
      image: "/pdfmerger.png",
      github: "https://github.com/ArpitSingh4010/PDF-Merger",
      demo: "https://pdf-merger-taupe.vercel.app/",
      tech: ["Next.js", "TypeScript", "JavaScript"]
    },
    {
      title: "Multi-Core CPU Simulator",
      description: "An interactive simulator that visualizes task execution, scheduling, and performance across multiple CPU cores, demonstrating parallel processing concepts.",
      image: "/multicorecpu.png",
      github: "https://github.com/ArpitSingh4010/Multi-Core_CPU-Simulator",
      demo: "https://multi-core-cpu-simulator.vercel.app/",
      tech: ["Next.js", "TypeScript", "JavaScript"]
    },
    {
      title: "InspireList (Todo-List)",
      description: "A motivational task management web app with interactive interface for adding, editing, and deleting daily goals while tracking progress.",
      image: "/todo.png",
      github: "https://github.com/ArpitSingh4010/InspireList",
      demo: "https://inspire-list.vercel.app/app",
      tech: ["React.js", "JavaScript"]
    },
    {
      title: "Snaky (Snake Game)",
      description: "Modern web-based version of the classic Snake game featuring smooth gameplay, dynamic speed increase, colorful effects, and sound integration.",
      image: "/snaky.png",
      github: "https://github.com/ArpitSingh4010/Snake-Game",
      demo: "https://snake-game-ochre-nine.vercel.app/",
      tech: ["HTML5", "CSS3", "JavaScript"]
    }
  ];

  const certificates = [
    {
      title: "NPTEL - Programming in Java",
      issuer: "IIT Kharagpur",
      description: "Comprehensive course covering Java fundamentals, OOP principles, and practical coding exercises.",
      image: "/nptel.png",
      link: "https://drive.google.com/file/d/1poHgeqYqF5mh2mg1oOLO-l12yld_-eoo/view?usp=sharing"
    },
    {
      title: "Google Vertex AI Badge",
      issuer: "Google Cloud",
      description: "Hands-on experience with building, training, and deploying ML models using Vertex AI platform.",
      image: "/genai.png",
      link: "https://drive.google.com/file/d/1gZL2FAUf8_bH008yqJe6x3pVqx9Kwn25/view?usp=sharing"
    },
    {
      title: "OCI 2025 Certified GenAI Professional",
      issuer: "Oracle University",
      description: "Expertise in deploying and managing generative AI solutions on Oracle Cloud Infrastructure.",
      image: "/orcale.png",
      link: "https://drive.google.com/file/d/1wIhKxSA_loCtHUjqYZUzxlHDEenaS9-j/view?usp=sharing"
    },
    {
      title: "Java Programming Certification",
      issuer: "Udemy",
      description: "Advanced Java programming concepts and best practices.",
      image: "/udemy.png",
      link: "https://drive.google.com/file/d/11fMqhKOmeiA512Xe0b5dcVLpIyZfo0JT/view?usp=sharing"
    },
    {
      title: "Hackathon Participation",
      issuer: "Coding Competition",
      description: "Active participation in hackathons and coding competitions.",
      image: "/hackathon.png",
      link: "https://drive.google.com/file/d/1NZ48_B7cGcR-QaRGpQCvR9cHekBQ-9GT/view?usp=sharing"
    }
  ];

  const hackerRankProblems = {
    easy: [
      { title: "Easy Problem 1", image: "/easy-q1.png" },
      { title: "Easy Problem 2", image: "/easy-q2.png" }
    ],
    medium: [
      { title: "Medium Problem 1", image: "/medium-q1.png" },
      { title: "Medium Problem 2", image: "/medium-q2.png" }
    ],
    hard: [
      { title: "Hard Problem 1", image: "/hard-q1.png" },
      { title: "Hard Problem 2", image: "/hard-q2.png" }
    ]
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="text-2xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              Arpit Singh
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["About", "Projects", "Certificates", "HackerRank", "E-Curricula"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/ArpitSingh4010"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/arpitsinght/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="gradient-text">Arpit Singh</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2">
                Aspiring Java Developer & Software Engineer
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                RA2411003010930 | Section O1 | 21CSC203P – Advanced Programming Practice
              </p>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
            >
              Department of Computing Technologies<br />
              Faculty of Engineering and Technology<br />
              School of Computing<br />
              SRM Institute of Science and Technology, Kattankulathur
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="animate-bounce mt-12"
            >
              <ChevronDown className="w-8 h-8 mx-auto text-blue-600 dark:text-blue-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text flex items-center justify-center gap-3">
              <Code className="w-10 h-10" />
              About Me
            </h2>
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I am an aspiring Java developer with a strong passion for software development, problem-solving, 
                and building efficient applications. I enjoy learning new technologies and applying them to real-world 
                challenges. My goal is to grow as a proficient software engineer specializing in Java development and 
                contribute to innovative, high-quality software solutions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text flex items-center justify-center gap-3">
              <Terminal className="w-10 h-10" />
              Projects
            </h2>
            <motion.div 
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className="relative h-48 bg-linear-to-br from-blue-500 to-purple-600">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-5 h-5" />
                        Code
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text flex items-center justify-center gap-3">
              <Award className="w-10 h-10" />
              Certificates & Achievements
            </h2>
            <motion.div 
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="relative h-40 bg-linear-to-br from-purple-500 to-pink-600">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-1 text-gray-800 dark:text-white">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      {cert.description}
                    </p>
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Certificate
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* HackerRank Section */}
      <section id="hackerrank" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text flex items-center justify-center gap-3">
              <Trophy className="w-10 h-10" />
              HackerRank Problem Completion
            </h2>
            
            {/* Easy Problems */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-green-600 dark:text-green-400">Easy Problems</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {hackerRankProblems.easy.map((problem, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                  >
                    <div className="relative h-64">
                      <Image
                        src={problem.image}
                        alt={problem.title}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Medium Problems */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-yellow-600 dark:text-yellow-400">Medium Problems</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {hackerRankProblems.medium.map((problem, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                  >
                    <div className="relative h-64">
                      <Image
                        src={problem.image}
                        alt={problem.title}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Hard Problems */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-red-600 dark:text-red-400">Hard Problems</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {hackerRankProblems.hard.map((problem, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                  >
                    <div className="relative h-64">
                      <Image
                        src={problem.image}
                        alt={problem.title}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* E-Curricula Section */}
      <section id="e-curricula" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text flex items-center justify-center gap-3">
              <BookOpen className="w-10 h-10" />
              E-Curricula Completion
            </h2>
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-96">
                <Image
                  src="/ecuriculla.png"
                  alt="E-Curricula Completion"
                  fill
                  className="object-contain p-8"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  Program Completion Certificate
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Successfully completed the e-Curricula program, covering 5 units with 4 sessions in each unit. 
                  The program provided comprehensive learning across multiple topics, enhancing theoretical knowledge 
                  and practical understanding.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">5</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Units Completed</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4">
                    <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">20</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Total Sessions</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Let&apos;s Connect</h3>
            <div className="flex justify-center gap-6 mb-6">
              <motion.a
                href="https://github.com/ArpitSingh4010"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/arpitsinght/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-8 h-8" />
              </motion.a>
            </div>
            <p className="text-gray-400">
              © 2025 Arpit Singh. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              SRM Institute of Science and Technology
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
