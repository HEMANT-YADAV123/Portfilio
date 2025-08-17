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
          title=' Solutions Architecture Job Simulation - AWS'
          subTitle=' Amazon Web Service'
          result='Completed'
          desc=' Completed Solution Architecture Job Simulation by AWS and earned a certificate.'
          />

          <ResumeCard
          title=' Generational AI certification by IBM'
          subTitle=' IBM'
          result='Completed'
          desc=' Completed Generative AI course by IBM and earned their certification.'
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
          title='300+ DSA Questions'
          result='250+ Questions on Leetcode'
          desc='  Solved 300+ coding problems, including 250+ problems on LeetCode, showcasing strong problem-solving skills.'
          />

        </div>


    </motion.div>
  )
}

export default Achievements
