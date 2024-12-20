import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    name: "Resume Builder",
    description: "A greate tool to help the job seekers to make resume.",
    link: "https://resume-builder-editable-downloadable.vercel.app",
    image: "/assets/resume-builder.png",
  },
  {
    name: "Simple MultiPage Website",
    description:
      "A perfect starter for the beginner to learn how to make a website.",
    link: "https://multipage-tailwind-css-website.vercel.app",
    image: "/assets/simple-multipage.png",
  },
  {
    name: "Facebook Login Page Clone",
    description: "Simple facebook login page demonstration",
    link: "https://facebook-login-six-swart.vercel.app",
    image: "/assets/facebook-login.png",
  },
  {
    name: "Personal Portfolio",
    description:
      "A Personal Portfolio where I showcase my skills and projects.",
    link: "https://personal-portfolio-next-js-tailwind-css.vercel.app",
    image: "/assets/personal-portfolio.png",
  },
  {
    name: "Todo App",
    description:"Super Simple beginner friendly Todo App",
    link: "https://todo-app-beginner.vercel.app",
    image: "/assets/todo.png",
  },
  {
    name: "Calculator",
    description:"Simple Standard Calculator for daily use",
    link: "https://simple-standard-calculator.vercel.app",
    image: "/assets/calculator.png",
  },
  {
    name: "Countdown Timer",
    description:"Simple Countdown timer for everyday tasks",
    link: "https://count-down-timer-next.vercel.app",
    image: "/assets/countdown-timer.png",
  },
  {
    name: "Sample Porfolio",
    description:"Sample portfolio UI/UX design for Inspiration",
    link: "https://sample-portfolio-next-app.vercel.app",
    image: "/assets/sample-portfolio.png",
  },
];

const LandingPage = () => {
  return (
    <div className="font-sans bg-gray-50 min-h-screen flex items-center justify-center p-5">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          My Projects
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  width={500}
                  height={500}
                  src={project.image}
                  alt={`${project.name} thumbnail`}
                  className="w-full h-40 object-cover rounded-md hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Project Details */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {project.name}
              </h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <button>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  View Project
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
