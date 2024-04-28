"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import {motion} from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import {sendEmail} from '@/actions/sendEmail'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const {ref} = useSectionInView("Contact",0.3)

    const notify = () => {
        toast("Message sent Successfully !");
    };

  return (
    <motion.section ref={ref} id="contact" className='mb-20 sm:mb-28 scroll-mt-28 w-[min(100%,38rem)] text-center'
    initial={{
        opacity:0,
    }}
    whileInView={{opacity:1}}

    transition={{duration:1.5}}
    >
        <SectionHeading>Contact Me : </SectionHeading>
        <p className='text-gray-700 -mt-6 dark:text-white/80'>Please contact me directly at <a className='underline' href="mailto:chitranshjawere3@gmail.com">chitranshjawere3@gmail.com</a> or through this form.</p>

        <form className='mt-10 flex flex-col dark:text-black' action={ async (formData) =>{
            await sendEmail(formData)
            await notify();
        }}>
            <input name="senderEmail"  className='h-14 rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' required maxLength={500} type="email" placeholder=' Email'/>
            <textarea maxLength={5000} name="message" required className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' placeholder='Your Message'/>

            <button className=' m-auto group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65' type="submit" >Submit <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 '/> {" "}</button>

        </form>
        <ToastContainer />
    </motion.section>

  )
}

export default Contact
