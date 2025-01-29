import React, { useState } from 'react'
import {logo} from '../../assets/index'
import {Link} from 'react-scroll'
import {FiMenu} from 'react-icons/fi'
import { MdClose } from "react-icons/md";
import {navLinksdata} from '../../constants/index.js'
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
const Navbar = () => {
  const [showMenu,setShowmenu] = useState(false);
  return (
    <div className='w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center border-b-[1px] border-b-gray-600'>

      <div>
        <img src={logo} alt="logo" className='h-28 w-28'/>
      </div>

      <div>
        <ul className='hidden md:inline-flex items-center gap-6 lg:gap-10'>
            {
                // non destructured form.
                // navLinksdata.map((navlink)=>
                // {
                //     return(
                //         <li key={navlink._id}>{navlink.title}</li>
                //     ) 
                // })

                // de-structured form
                navLinksdata.map(({_id,title,link})=>
                    {
                         return(
                             <li className='text-base font-normal text-gray-400 tracking-wider cursor-pointer
                              hover:text-designColor duration-300' key={_id}>
                                <Link
                                activeClass='active'
                                to={link}
                                spy={true}
                                offset={-70}
                                smooth={true}
                                duration={700}
                                >
                                    {title}

                                </Link>
                                </li>
                         ) 
                     })
            }
        </ul>
        <span 
          onClick={()=>{setShowmenu(!showMenu)}} 
          className='text-xl md:hidden bg-black w-10 h-10 inline-flex    items-center justify-center rounded-full text-designColor cursor-pointer'>
          <FiMenu/>
        </span>
        {
          showMenu && (
            <div className='w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide'>
                <div className='flex flex-col gap-8 py-6 relative'>
                  <div>
                    <img className='w-32' src={logo} alt="logo" />
                    <p className='text-base font-bodyFont leading-6 tracking-wide'>
                    I am a passionate web developer specializing in full-stack (particularly in MERN Stack) websites using modern technologies. I create responsive, user-friendly applications, ensuring seamless integration from development to production with a focus on clean code and efficient design.
                    </p>
                  </div>
                  <ul className='flex flex-col gap-4 '>
                    {
                      navLinksdata.map((item)=>(
                        <li
                          key={item._id} 
                          className='text-base font-normal text-gray-400 tracking-wider cursor-pointer hover:text-designColor duration-300'>
                          <Link
                          onClick={()=>{setShowmenu(false)}}
                          activeClass='active'
                          to={item.link}
                          spy={true}
                          offset={-70}
                          smooth={true}
                          duration={700}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                  <div className='flex flex-col gap-4'>
                    <h2 className='text-base uppercase font-titleFont mb-4'>Find me in</h2>
                      <div className='flex gap-4'>
                        <span className='bannerIcon'> <FaFacebook/></span>
                        <span className='bannerIcon'> <FaInstagram/></span>
                        <span className='bannerIcon'> <FaLinkedinIn/></span>
                      </div>
                  </div>
                  <span 
                  onClick={()=>{setShowmenu(false)}}
                  className='absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer'
                  >
                    <MdClose/>
                  </span>
                </div>
            </div>
          )
        }
      </div>


    </div>
  )
}

export default Navbar
