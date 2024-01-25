import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import domain from '../../domain'

function ContactFrom(){
    const router = useNavigate()
    // Frist Name
    
    const [f_name,setFname]= useState('')
    function handleFname(eventfname){
        setFname(eventfname.target.value)
    }

    // L Name

    const [l_name,setLname] = useState('')
    function handleLname(eventl_name){
        setLname(eventl_name.target.value)
    }

    // Email 

    const [email,setEmail] = useState('')
    function handleEmail(eventemail){
        setEmail(eventemail.target.value)
    }

    // Message 

    const [message,setMessage] = useState('')
    function handleMessage(eventmessage){
        setMessage(eventmessage.target.value)
    }

    async function handleSubmitCon(){
        try {
            const ContactFromData = {
                f_name : f_name,
                l_name : l_name,
                email : email,
                message: message
            }
            console.log(ContactFromData)


            if(f_name !== "" && l_name !== "" && email !== "" && message !== ""){
                const res = await axios.post(`${domain}/contactSub`, ContactFromData)
                alert(res.data.message)
                setFname('')
                setLname('')
                setEmail('')
                setMessage('')
            }else{
                throw new Error ("Enter contact Deatils....")

            }
        } catch (error) {
             if (error.message) {
                alert(error?.message)
            }
        }
    }

    return(
  
        <form>
        <div className="row">
            <div className="col-6">
                <div className="form-group">
                    <label className="text-black" htmlFor="f_name">First name</label>
                    <input type="text" 
                    value={f_name} 
                    className="form-control" 
                    id="fname" 
                    onChange={handleFname}/>
                </div>

            </div>
            <div className="col-6">
                <div className="form-group">
                    <label className="text-black" htmlFor="lname">Last name</label>
                    <input type="text" 
                    value={l_name} 
                    className="form-control" 
                    id="lname" 
                    onChange={handleLname}/>
                </div>
            </div>
        </div>
        <div className="form-group">
            <label className="text-black" htmlFor="email">Email address</label>
            <input type="email" 
             value={email} 
             className="form-control"
             id="email"
             onChange={handleEmail}/>
        </div>

        <div className="form-group mb-5">
            <label className="text-black" htmlFor="message">Message</label>
            <textarea  
            type = "text" 
            value={message} 
            className="form-control" 
            id="message" cols="30" rows="5" 
            onChange={handleMessage}>

         </textarea>
        </div>

        <button type="button" className="btn btn-primary-hover-outline" onClick={handleSubmitCon}>Send Message</button>
    </form>
    )

}

export default ContactFrom