import React, { useState } from 'react'
import Title from '../Layouts/Title'
import Education from './Education'
import Skills from './Skills'
import Achievements from './Achievements'
import Experience from './Experience'


const Resume = () => {
const [EducationData,setEducationData] = useState(true);
const [SkillsData,setSkillsData] = useState(false);
const [experienceData,setexperienceData] = useState(false);
const [achievementsData,setachievementsData] = useState(false);

  return (
    <section id='resume' 
    className='w-full py-20 border-b-[1px] border-b-black'>
        {/* title */}
      <div className='flex justify-center items-center text-center'>
      <Title
        title='RESUME'
        des='My Resume'
      />
      </div>
        {/* Navigation Bar */}
        <div>
            <ul className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <li onClick={()=>setEducationData(true) & 
                    setSkillsData(false) & 
                    setachievementsData(false) & 
                    setexperienceData(false)} 
                    className={`${EducationData ? "border-designColor rounded-lg" : "border-transparent" } resumeli`} >
                    Education
                </li>

                <li onClick={()=>setEducationData(false)  &
                    setSkillsData(true) &
                    setachievementsData(false) & 
                    setexperienceData(false)} 
                    className={`${SkillsData ? "border-designColor rounded-lg" : "border-transparent" } resumeli`}>
                    Professional Skills
                </li>

                <li onClick={()=>setEducationData(false)  &
                    setSkillsData(false) &
                    setachievementsData(false) & 
                    setexperienceData(true)} 
                    className={`${experienceData ? "border-designColor rounded-lg" : "border-transparent" } resumeli`}>
                    Experience
                </li>

                <li onClick={()=>setEducationData(false)  &
                    setSkillsData(false) &
                    setachievementsData(true) & 
                    setexperienceData(false)} 
                    className={`${achievementsData ? "border-designColor rounded-lg" : "border-transparent" } resumeli`}>
                    Achivements
                    </li>
            </ul>
        </div>

        {
            EducationData && <Education/>
        }

        {
            SkillsData && <Skills/>
        }
        
        {
            experienceData && <Experience/>
        }

        {
            achievementsData && <Achievements/>
        }
    </section>
  )
}

export default Resume