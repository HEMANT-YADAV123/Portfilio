import React from 'react'
import Title from '../Layouts/Title'
import Card from './Card'
import {AiFillCode,AiFillLayout,AiFillInteraction,AiFillSignal,AiFillEdit} from 'react-icons/ai';
// import { FaBars } from 'react-icons/fa';

function Features() {
  return (
    <section 
      id='features' 
      className='w-full py-20 border-b-[1px] border-b-black'>

     <div className='flex justify-center items-center text-center'>
        <Title  
        title="Features" 
        des="What I do"/>
      </div> 
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-20'>
              <Card
                title="Web Development"
                des="Building responsive, high-performance websites using modern frameworks for seamless user experiences."
                icon={<AiFillCode />}  
              />
              <Card
                title="UI Design"
                des="Designing sleek, user-friendly interfaces that prioritize aesthetics and usability for an enhanced user experience."
                icon={<AiFillLayout />}  
              />
              <Card
                title="UX Design"
                des="Crafting intuitive, user-focused designs that align with business goals, ensuring seamless and satisfying experiences."
                icon={<AiFillInteraction />} 
              />
              <Card
                title="SEO Optimization"
                des="Enhancing website visibility on search engines to boost organic traffic and improve rankings with effective SEO."
                icon={<AiFillSignal />}  
              />
              <Card
                title="AI Integration"
                des="Seamlessly integrating AI to enhance automation, decision-making, and user interactions with smart solutions."
                icon={<AiFillEdit />}  
              />
        </div>
    </section>  
  )
}

export default Features
