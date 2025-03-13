import React from 'react'
import Title from '../Layouts/Title'
import { motion } from 'framer-motion'
import ResumeCard from './ResumeCard'
const Experience = () => {
  return (
    
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:0.5}}}>
      <div>
        {/* heading */}
        <div className='flex justify-center items-center text-center mt-10'>
          <Title
            title='CURRENTLY IN MY B.TECH(3rd YEAR)'
            des='Experience'
          />
        </div>

          {/* Card */}
          <div className='mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>

              <ResumeCard
              title='Full Stack web developer intern'
              subTitle='at tastezy Marketplace'
              result='20 Jan - present'
              desc='Currently working in Tastezy Marketplace as a full-stack web developer intern.As an intern i am working on client project using technologies like MERN Stack , Next.js , TypeScript, Redux, RTK Query etc. Collaborating with teams to build scalable web solutions'
              />
        </div>
      </div>
    </motion.div>
  )
}

export default Experience