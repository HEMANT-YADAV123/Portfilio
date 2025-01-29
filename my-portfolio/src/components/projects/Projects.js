import React from 'react'
import Title from '../Layouts/Title'
import ProjectCard from './ProjectCard'
import { projectOne ,projectTwo,projectThree,projectFour,projectFive,projectSix} from '../../assets/index.js'
const Projects = () => {
  return (
    <section id='projects' 
    className='w-full py-20 border-b-[1px] border-b-black'
    >
      <div className='flex justify-center items-center text-center'>
      <Title
        title='VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK'
        des='My Projects'
      />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14'>
        <ProjectCard
        title = "SPOTIFY CLONE"
        desc = "A static web application built with HTML, CSS, and JavaScript, emulating Spotify's UI/UX with responsive design and interactive elements"
        src = {projectOne}
        link= "https://github.com/HEMANT-YADAV123/Spotify-Clone.git"
        />
        <ProjectCard
        title = "SLEEK SPORTS CAR"
        desc = 'A dynamic landing page developed using HTML, CSS, and JavaScript, featuring responsive layout and image carousel integration for enhanced user engagement'
        src = {projectTwo}
        link="https://github.com/HEMANT-YADAV123/Sports-Car.git"
        />
        <ProjectCard
        title = "PASSWORD GENERATOR"
        desc = 'A React-based utility that leverages state management and algorithmic logic to generate secure, random passwords based on customizable user criteria'
        src = {projectThree}
        link="https://github.com/HEMANT-YADAV123/Password-Generator.git"
        />
        <ProjectCard
        title = "TODOLIST"
        desc = 'A React application utilizing component-based architecture and state hooks to manage task creation, deletion, and completion, demonstrating efficient CRUD operations'
        src = {projectFour}
        link="https://github.com/HEMANT-YADAV123/TODO-List.git"
        />
        <ProjectCard
        title = "WEATHER APP"
        desc = 'A React app showing real-time weather data with temperature, wind speed, and humidity, featuring dynamic backgrounds based on conditions using OpenWeatherMap API'
        src = {projectFive}
        link="https://github.com/HEMANT-YADAV123/Weather-App.git"
        />
        <ProjectCard
        title = "PORTFOLIO"
        desc = 'A professional portfolio site built in React, showcasing responsive design, component reuse, and client-side routing to efficiently display projects and personal information'
        src = {projectSix}
        link="https://github.com/HEMANT-YADAV123/Personal-Portfolio.git"
        
        />
      </div>
    </section>
  )
}

export default Projects
