import React from 'react'
import Title from '../Layouts/Title'
import ContactLeft from './ContactLeft'
import ContactRight from './ContactRight'

const Contact = () => {
    
    
  return (
    <section 
        id='contacts' 
        className='w-full py-20 border-b-[1px] border-b-black'
     >
        {/* heading */}
        <div className='flex justify-center items-center text-center'>
            <Title
                title='CONTACT'
                des='Contact with Me'
            />
        </div>

        <div className='w-full'>
            <div className='w-full h-auto flex flex-col lg:flex-row justify-between'>
               {/* left part */}
                <ContactLeft/>
               {/* Right part */}
                <ContactRight/>
            </div>
        </div>

    </section>
  )
}

export default Contact
