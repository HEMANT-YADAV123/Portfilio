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
            title="SDE Intern"
            subTitle="Meru Accounting"
            result="April - July"
            desc=" Built two microservices (Mongo/REST, Postgres/gRPC) integrating QuickBooks and Xero with our application, automating 100% CRUD and ensuring 99% data accuracy for over  250k+ records.Developed Jest test suite (95%+ coverage), cutting deployment rollbacks by 90% and enabling stable weekly CI/CD.Reduced manual bookkeeping hours by over 80% through API-first design and service orchestration."
          />

          <ResumeCard
            title="Full Stack web developer"
            subTitle="Raro Professionals"
            result="April - May"
            desc="  Built an animated portfolio site for Raro Professional using React, Node.js, and MongoDB with Framer Motion.Achieved 91+ Lighthouse score (95 in performance, 99 in SEO) by implement in lazy loading, image optimization, and secure email integration."
          />

          <ResumeCard
            title="Full Stack web developer Intern"
            subTitle="at tastezy Marketplace"
            result="Jan - April"
            desc={`Led a 12-member team to develop full-stack web platforms using Next.js and MongoDB, achieving 35% reduction in API latency and improving page load time by ~1.2s.
                Developed the mobile app frontend in React Native and boosted web engagement by 15% with GSAP/Tailwind UI.
                Shipped 10+ features with 95% test coverage.
                Optimized state management and caching, improving responsiveness by 25% and cutting redundant API calls by 50%.`}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Experience