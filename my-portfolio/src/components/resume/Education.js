import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from 'framer-motion'
import Title from '../Layouts/Title'

const Education = () => {
  return (
    <motion.div 
    initial={{opacity:0}} 
    animate={{opacity:1, 
    transition:{duration:0.5}}
    } 
    className='w-full flex flex-col lg:flex-row gap-10 lg:gap-16'>
        {/* Education Section */}
            <div>
                <div className='flex justify-center items-center text-center mt-10'>
                    <Title
                    title='2019 - 2025(Currently)'
                    des='Education Qualification'
                    />
                </div>        

                {/* Card */}
                <div className='mt-6 lg:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>

                    <ResumeCard
                    title = 'Bachelor of Technology in Computer Science and Engineering'
                    subTitle = 'Guru Jambheshwar University of Science and Technology, Hisar(2022 - currently)'
                    result = '7.2/10(CGPA)'
                    desc = 'Currently pursuing a Bachelor of Technology in Computer Science and Engineering (2022-2026) building expertise in software development, algorithms, and full-stack web applications.'
                    />
                    <ResumeCard
                    title = 'Senior Secondary Education'
                    subTitle = 'St. Xavier School,Behror(Rajasthan) (2021)'
                    result = '84.8%'
                    desc = 'Scored 84.8% in the Class 12 CBSE Examination, with a focus on Science and Mathematics.'
                    />
                    <ResumeCard
                    title = 'Secondary Education'
                    subTitle = 'St. Xavier School,Behror(Rajasthan) (2019)'
                    result = '90.4%'
                    desc = 'Achieved 90.4% in the Class 10 CBSE Examination, demonstrating a strong foundation in core subjects.'
                    />
                    
                </div>
            </div>

        {/* Job Section */}
            <div>
                <div className='flex justify-center items-center text-center mt-10'>
                    <Title
                    title='Currently in B.Tech 3rd year'
                    des='Job Experience'
                    />
                </div>

                {/* Card */}
                <div className='mt-6 lg:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>

                <ResumeCard
                title='Full Stack web developer intern'
                subTitle='at tastezy Marketplace'
                result='20 Jan - present'
                desc='Currently working in Tastezy Marketplace as a full-stack web developer intern.As an intern i am working on client project using technologies like MERN Stack , Next.js , TypeScript etc.'
                />
                    
                </div>
            </div>

        </motion.div>
  )
}

export default Education
