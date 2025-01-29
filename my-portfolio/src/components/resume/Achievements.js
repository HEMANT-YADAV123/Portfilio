import React from 'react'
import { motion } from 'framer-motion'
import Title from '../Layouts/Title'
import ResumeCard from './ResumeCard'
const Achievements = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:0.5}}}>
      {/* heading */}
      <div className='flex justify-center items-center text-center mt-10'>
          <Title
            title=''
            des='Achievements'

          />
      </div>


       {/* Card */}
       <div className='mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>

          <ResumeCard
          title='Training And Placement Cell Coordinator'
          subTitle='Appointed as training and placement cell coordinator in my B.tech(3rd year)'
          result='Sucess'
          desc='Responsible for facilitating communication between students and potential employers, organizing placement drives, and coordinating training sessions. Developed strong teamwork, communication, and organizational skills through active engagement in student placement activities.'
          />

          <ResumeCard
          title='Smart India Hackethon'
          subTitle='Participated in SIH 2024'
          result='Cleared internal Round'
          desc='Cleared the internal round of SIH 2024 with a project focused on  contract farming to benefit farmers of India.'
          />

          <ResumeCard
          title='Software Engineering Job Simulation'
          subTitle=' JPMorgan Chase & Co. (via Forage) January 2025'
          result='Completed'
          desc=' Completed tasks on Project Setup, Kafka Integration, H2 Integration, REST API Integration, and REST API Controller.'
          />

          <ResumeCard
          title='250+ DSA Questions'
          result='150+ Questions on Leetcode'
          desc='  Solved 250+ coding problems, including 150+ problems on LeetCode, showcasing strong problem-solving skills.'
          />

        </div>


    </motion.div>
  )
}

export default Achievements
