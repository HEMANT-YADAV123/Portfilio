import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaFacebookF, FaGithub, FaInstagram, FaJava, FaLinkedin, FaLinux, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiNodedotjs, SiHtml5, SiCss3, SiTypescript, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiGraphql, SiRedux, SiCplusplus, SiNextdotjs, SiClerk, SiC } from "react-icons/si";


const LeftBanner = () => {

    const [text] = useTypewriter({
        words: ['Full Stack Developer.', 'Software Engineer.', 'UI/UX Designer.'],
        loop:true,
        typeSpeed:20,
        deleteSpeed:20,
        delaySpeed:2000
      });

  return (
    // left div 
<div className='w-full lg:w-1/2 flex flex-col gap-20'>
    <div className='flex flex-col gap-5'>
        <h4 className='text-lg font-normal'>WELCOME TO MY PORTFOLIO</h4>
        <h1 className='text-5xl font-bold text-white'>
          Hi, I'm {" "}
          <span className="text-designColor capitalize">Hemant Yadav</span>
        </h1>

        <h2 className='text-3xl font-bold text-white'>a <span>{text}</span>
        <Cursor 
        cursorBlinking="false"
        cursorStyle="|"
        cursorColor='#ff014f'
        />
        </h2>

                        {/*leading is used to control the line height btw any two lines.*/}
        <p className='text-base font-bodyFont leading-6 tracking-wide'>
        I am a passionate web developer specializing in full-stack (particularly in MERN Stack) websites using modern technologies. I create responsive, user-friendly applications, ensuring seamless integration from development to production with a focus on clean code and efficient design.
        </p>
    </div>

    {/* for icons */}
    <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between'>

      <div className='gap-0'>
        <h2 className='text-base uppercase font-titleFont lg:mb-5 mb-3'>
          Find in me
        </h2>

        <div className='flex lg:gap-4 gap-3'>
            <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className='bannerIcon'>
                <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/in/hemant-yadav-88b100258/" target="_blank" rel="noopener noreferrer" className='bannerIcon'>
                <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/i_hemant.yadav/?next=%2F" target="_blank" rel="noopener noreferrer" className='bannerIcon'>
                <FaInstagram />
            </a>
        </div>
      </div>

      <div className='gap-2'>
        <h2 className='text-base uppercase font-titleFont lg:mb-5 mb-3'>
          BEST SKILLS ON
        </h2>

        <div className='grid grid-cols-5 lg:grid-cols-5 lg:gap-4 gap-2 md:grid-cols-8'>
              <span className="bannerIcon">
                  <SiMongodb />
              </span>
              <span className="bannerIcon">
                  <SiExpress />
              </span>
              <span className='bannerIcon'>
                  <FaReact/>
              </span>
              <span className='bannerIcon'>
                  <SiNodedotjs/>
              </span>
              <span className="bannerIcon">
                  <SiNextdotjs />
              </span>
              <span className="bannerIcon">
                  <FaJava />
              </span>
              <span className='bannerIcon'>
                  <SiJavascript />
              </span>
              <span className="bannerIcon">
                  <SiTypescript />
              </span>
              <span className='bannerIcon'>
                  <SiTailwindcss/>
              </span>
              <span className="bannerIcon">
                  <SiHtml5 />
              </span>
              <span className="bannerIcon">
                  <SiCss3 />
              </span>
              <span className="bannerIcon">
                  <SiMysql />
              </span>
              <span className="bannerIcon">
                  <SiPostgresql />
              </span>
              <span className="bannerIcon">
                  <SiGraphql />
              </span>
              <span className="bannerIcon">
                  <SiRedux />
              </span>
              <span className="bannerIcon">
                  <SiC/>
              </span>
              <span className="bannerIcon">
                  <SiCplusplus />
              </span>
              <span className="bannerIcon">
                  <FaGithub />
              </span>
              <span className='bannerIcon'>
                  <FaLinux />
              </span>
              <span className="bannerIcon">
                  <SiClerk/>
              </span>

        </div>
      </div>

    </div>
</div>

  )
}

export default LeftBanner
