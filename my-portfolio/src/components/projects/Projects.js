import React from "react";
import Title from "../Layouts/Title";
import ProjectCard from "./ProjectCard";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
  projectSeven,
  ProjectEight,
  ProjectNine,
} from "../../assets/index.js";
const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK"
          des="My Projects"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        <ProjectCard
          title="Vistaro"
          desc=" Vistaro is a modern event ticketing platform featuring a smart queuing system, real-time updates, and secure payments."
          src={ProjectNine}
          link="https://github.com/HEMANT-YADAV123/Vistaro"
          liveLink=" "
        />

        <ProjectCard
          title="CityCruise"
          desc=" Developed a dynamic ride-booking platform enabling seamless booking, tracking, and real-time updates for users and drivers."
          src={ProjectEight}
          link="https://github.com/HEMANT-YADAV123/CityCruise"
          liveLink="https://citycruise-frontend.onrender.com/"
        />
        <ProjectCard
          title="Xeno AI"
          desc="Developed a full-stack AI-powered web app with advanced features like Text & Summary Generation, Chatbot (Default & Yoda Mode), English-to-JavaScript Code Conversion, and Sci-Fi Image Generation."
          src={projectSeven}
          link="https://github.com/HEMANT-YADAV123/XenoAI"
          liveLink="https://xenoai-frontend.onrender.com/"
        />
        <ProjectCard
          title="PORTFOLIO"
          desc="A professional portfolio site built in React, showcasing responsive design, component reuse, and client-side routing to efficiently display projects and personal information"
          src={projectSix}
          link="https://github.com/HEMANT-YADAV123/Portfilio"
          liveLink="https://portfilio-frontend-t4yb.onrender.com"
        />
        <ProjectCard
          title="Forcastely"
          desc="A React app showing real-time weather data with temperature, wind speed, and humidity, featuring dynamic backgrounds based on conditions using OpenWeatherMap API"
          src={projectFive}
          link="https://github.com/HEMANT-YADAV123/Weather-App"
          liveLink="https://forecastly-ten.vercel.app/"
        />
        <ProjectCard
          title="Taskify"
          desc="A React todo-list application utilizing component-based architecture and state hooks to manage task creation, deletion, and completion, demonstrating efficient CRUD operations and saving tasks in local storage."
          src={projectFour}
          link="https://github.com/HEMANT-YADAV123/TODO-List"
          liveLink="https://taskify-kappa-eight.vercel.app/"
        />
        <ProjectCard
          title="SPOTIFY CLONE"
          desc="A static web application built with HTML, CSS, and JavaScript, emulating Spotify's UI/UX with responsive design and interactive elements"
          src={projectOne}
          link="https://github.com/HEMANT-YADAV123/Spotify-Clone"
          liveLink="https://spotify-clone-black-one.vercel.app/"
        />
        <ProjectCard
          title="SLEEK SPORTS CAR"
          desc="A dynamic landing page developed using HTML, CSS, and JavaScript, featuring responsive layout and image carousel integration for enhanced user engagement"
          src={projectTwo}
          link="https://github.com/HEMANT-YADAV123/Sports-Car"
          liveLink="https://sports-car.vercel.app/"
        />
        <ProjectCard
          title="PASSWORD GENERATOR"
          desc="A React-based utility that leverages state management and algorithmic logic to generate secure, random passwords based on customizable user criteria"
          src={projectThree}
          link="https://github.com/HEMANT-YADAV123/Password-Generator"
          liveLink="https://password-generator-omega-sable.vercel.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
