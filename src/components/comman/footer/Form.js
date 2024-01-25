import React, { useState } from 'react'
import { PiPaperPlaneTiltLight } from "react-icons/pi";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import domain from '../../../domain'
function Form() {
    const router = useNavigate()
    // name 
    const [name, setName] = useState('')

    function handleName(evnet) {
        setName(evnet.target.value)
    }


    const [email, setEmail] = useState('')
    function handleEmail(e) {
        setEmail(e.target.value)
    }

    async function handleSubmit() {
        try {
            const formData = {
                name: name,
                email: email
            }
            if (email != "" && name != "") {
                const res = await axios.post(`${domain}/subscribe`, formData)
                // router('/')
                alert(res.data.message)
                setName('')
                setEmail('')
            } else {
                throw new Error('enter name and email')
            }

        } catch (error) {
            if (error.message) {
                alert(error.message)
            }
        }
    }

    return (
        <form action="#" className="row g-3">
            <div className="col-auto">
                <input type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    value={name}
                    onChange={handleName}
                />
            </div>
            <div className="col-auto">
                <input type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmail}
                />
            </div>
            <div className="col-auto">
                <button type='button' className="btn btn-primary" onClick={handleSubmit}>
                    <PiPaperPlaneTiltLight />
                </button>
            </div>
        </form>
    )
}

export default Form
