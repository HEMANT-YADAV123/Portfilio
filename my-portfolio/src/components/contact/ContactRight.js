import React from 'react'
import { useState } from 'react'

// The onChange event in React is used to capture changes to an input element's value. When a user types into an input field, selects an option from a dropdown, or makes any change to the input element, the onChange handler function is called. This allows you to update state, perform validation, or execute any logic whenever the input changes.
const ContactRight = () => {
    const [Username,setUsername] = useState("")
    const [phoneNumber,setphoneNumber] = useState("")
    const [Email,setEmail] = useState("")
    const [Subject,setSubject] = useState("")
    const [Message,setMessage] = useState("")
    const [errMsg,seterrMsg] = useState("")
    const [successMsg,setsuccessMsg] = useState("")

    // Email Validation
    const emailValidation = ()=>{
        return  String(Email).toLocaleLowerCase().match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    }

    const handleSend= async(e) =>{
        e.preventDefault()//taki refresh na ho br br page.

        if(Username === "")
        {
            seterrMsg("UserName is required!")
        }
        else if(phoneNumber === "")
        {
            seterrMsg("Phone Number is required!")
        }
        else if(Email === "")
        {
            seterrMsg("Please Enter your Email")
        }
        else if(!emailValidation() )
        {
            seterrMsg("Please Enter a Valid Email")
        }
        else if(Subject === "")
        {
            seterrMsg("Please Enter Subject")
        }
        else if(Message === "")
        {
                seterrMsg("Message is Required")
        }
        else
        {
            setsuccessMsg(`Thank You ${Username}, We are Sending your Email`);
            seterrMsg("");  // Clear any error messages
            setTimeout(() => {
                setsuccessMsg("");
            }, 3000);


            try {
                // Send data to the server if all fields are valid
                const response = await fetch('https://portfilio-backend-4bet.onrender.com', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ Username, phoneNumber, Email, Subject, Message })
                });
    
                const data = await response.text();
    
                // Display success message if email is sent successfully
                setsuccessMsg(data);
                setTimeout(() => {
                    setsuccessMsg("");
                }, 3000);
    
                // Clear the form fields
                setUsername("");
                setEmail("");
                setMessage("");
                setSubject("");
                setphoneNumber("");
            } catch (error) {
                seterrMsg("Failed to send message. Please try again later.");
                setTimeout(() => {
                    seterrMsg("");
                }, 3000);
            }
            
        }

    }
  return (

    <div className='w-full lg:w-[60%] h-auto py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] p-6 lg:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 mt-9 lg:mt-0'>

                    <form className='w-full flex flex-col gap-6 lg:py-5 py-2'>
                        {/* error message */}
                        {
                            errMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce'>{errMsg}</p>
                        }
                        {/* success message */}
                        {
                            successMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce'>{successMsg}</p>
                        }
                        {/* phone no. and name */}
                        <div className='w-full flex flex-col lg:flex-row gap-10'>
                            <div className='w-full lg:w-1/2 flex flex-col gap-4'>
                                <p className='text-sm text-gray-400 uppercase tracking-wide'>
                                    Your Name
                                </p>
                                <input onChange={(e)=>setUsername(e.target.value)} value={Username} 
                                className={`${errMsg === 'UserName is required!' && "outline-designColor" } contactInput`} type="text"/>
                            </div>
                            <div className='w-full lg:w-1/2 flex flex-col gap-4'>
                                <p className='text-sm text-gray-400 uppercase tracking-wide'>Phone Number</p>
                                <input onChange={(e)=>setphoneNumber(e.target.value)} value={phoneNumber} 
                                className={`${errMsg === 'Phone Number is required!' && "outline-designColor" } contactInput`} type="text" />
                            </div>
                        </div>
                        {/* email */}
                        <div className='flex flex-col gap-4'>
                            <p className='text-sm text-gray-400 uppercase tracking-wide'>Email</p>
                            <input onChange={(e)=>setEmail(e.target.value)} value={Email} 
                            className={`${errMsg === 'Please Enter your Email' && "outline-designColor" } contactInput`} type="email" />
                        </div>

                        {/* subject */}
                        <div className='flex flex-col gap-4'>
                            <p className='text-sm text-gray-400 uppercase tracking-wide'>Subject</p>
                            <input onChange={(e)=>setSubject(e.target.value)} value={Subject} 
                            className={`${errMsg === 'Please Enter Subject' && "outline-designColor"} contactInput`} type="text" />
                        </div>


                        {/* messgae */}
                        <div className='flex flex-col gap-4'>
                            <p className='text-sm text-gray-400 uppercase tracking-wide'>Your Message</p>
                            <textarea onChange={(e)=>setMessage(e.target.value)} value={Message}
                            cols="30" rows="8" 
                            className={`${errMsg === 'Message is Required!' && "outline-designColor"} contactTextarea`} ></textarea>
                        </div>

                        {/* button */}
                        <div className='w-full'>
                        <button onClick={handleSend} className='contactButton'>Send Message</button>
                        </div>
                    </form>
    </div>
  )
}

export default ContactRight
