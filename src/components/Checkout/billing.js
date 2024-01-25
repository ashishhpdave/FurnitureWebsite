import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import domain from '../../domain'

function BillingFrom() {
    const router = useNavigate()

    // Country

    const [Country, setC_country] = useState('')
    function handleC_country(countryEvent) {
        setC_country(countryEvent.target.value)
    }

    // c_fname 

    const [f_name, setC_fname] = useState('')
    function handleC_fname(CfnameEvent) {
        setC_fname(CfnameEvent.target.value)
    }

    // c_lname

    const [l_name, setC_lname] = useState('')
    function handleC_lname(ClnameEvent) {
        setC_lname(ClnameEvent.target.value)
    }

    // Company_Name

    const [Company_Name, setC_companyname] = useState('')
    function handleC_companyname(c_companynameEvent) {
        setC_companyname(c_companynameEvent.target.value)
    }

    // Address

    const [Address, setC_address] = useState('')
    function handleC_address(c_addressEvent) {
        setC_address(c_addressEvent.target.value)
    }

    // Appartment

    const [Apartment, setC_Apartment] = useState('')
    function handleC_Apartment(c_ApartmentEvent) {
        setC_Apartment(c_ApartmentEvent.target.value)
    }

    // State_Country

    const [State_Country, setC_state_country] = useState('')
    function handleC_state_country(c_state_countryEvent) {
        setC_state_country(c_state_countryEvent.target.value)
    }

    // Posta

    const [Posta, setC_postal_zip] = useState('')
    function handleC_postal_zip(c_postal_zipEvent) {
        setC_postal_zip(c_postal_zipEvent.target.value)
    }

    // Email_Address

    const [Email_Address, setC_email_address] = useState('')
    function handleC_email_address(c_email_addressEvent) {
        setC_email_address(c_email_addressEvent.target.value)
    }

    // Notes

    const [Notes, setC_Notes] = useState('')
    function handleC_Notes(c_EventNotesEvent) {
        setC_Notes(c_EventNotesEvent.target.value)
    }


    // Phone

    const [Phone, setC_phone] = useState('')
    function handleC_phone(c_phoneEvent) {
        setC_phone(c_phoneEvent.target.value)
    }

    async function BillingDataSubmit() {
        try {
            const BillingFromData = {
                f_name: f_name,
                l_name: l_name,
                Notes: Notes,
                Country: Country,
                Company_Name: Company_Name,
                Address: Address,
                Apartment: Apartment,
                State_Country: State_Country,
                Posta: Posta,
                Email_Address: Email_Address,
                Phone: Phone,
            }

            console.log(BillingFromData)
            if (Country !== "" &&
                f_name !== "" &&
                l_name !== "" &&
                Company_Name !== "" &&
                Address !== "" &&
                Apartment !== "" &&
                State_Country !== "" &&
                Posta !== "" &&
                Email_Address !== "" &&
                Notes !== "" &&
                Phone !== "") {
                const res = await axios.post(`${domain}/biling`, BillingFromData)

                alert(res.data.Notes)
                setC_country('')
                setC_fname('')
                setC_lname('')
                setC_companyname('')
                setC_address('')
                setC_Apartment('')
                setC_state_country('')
                setC_postal_zip('')
                setC_email_address('')
                setC_Notes('')
                setC_phone('')
            } else {
                throw new Error('Enter Billing Deatiels....')
            }

        } catch (error) {
            if (error.Notes) {
                alert(error?.Notes)
            }
        }
    } 

    return (
        <>
            <div className="form-group">
                <label htmlFor="Country" className="text-black">Country <span className="text-danger">*</span></label>
                <select id="Country" value={Country} className="form-control" onChange={handleC_country}>
                    <option value="1">Select a country</option>
                    <option value="2">bangladesh</option>
                    <option value="3">Algeria</option>
                    <option value="4">Afghanistan</option>
                    <option value="5">Ghana</option>
                    <option value="6">Albania</option>
                    <option value="7">Bahrain</option>
                    <option value="8">Colombia</option>
                    <option value="9">Dominican Republic</option>
                </select>
            </div>
            <div className="form-group row">  
                <div className="col-md-6">
                    <label htmlFor="f_name" className="text-black">First Name <span className="text-danger">*</span></label>
                    <input type="text"
                        value={f_name}
                        className="form-control"
                        id="f_name"
                        onChange={handleC_fname}
                        name="f_name" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="l_name" className="text-black">Last Name <span className="text-danger">*</span></label>
                    <input type="text"
                        value={l_name}
                        onChange={handleC_lname}
                        className="form-control"
                        id="l_name"
                        name="l_name" />
                </div>
            </div>

            <div className="form-group row">
                <div className="col-md-12">
                    <label htmlFor="Company_Name" className="text-black">Company Name </label>
                    <input type="text"
                        value={Company_Name}
                        onChange={handleC_companyname}
                        className="form-control"
                        id="Company_Name"
                        name="Company_Name" />
                </div>
            </div>

            <div className="form-group row">
                <div className="col-md-12">
                    <label htmlFor="Address" className="text-black">Address <span className="text-danger">*</span></label>
                    <input type="text"
                        value={Address}
                        onChange={handleC_address}
                        className="form-control" id="Address"
                        name="Address"
                        placeholder="Street address" />
                </div>
            </div>

            <div className="form-group mt-3">
                <input type="text" value={Apartment} onChange={handleC_Apartment} className="form-control" placeholder="Apartment, suite, unit etc. (optional)" />
            </div>

            <div className="form-group row">
                <div className="col-md-6">
                    <label htmlFor="State_Country" className="text-black">State / Country <span className="text-danger">*</span></label>
                    <input type="text"
                        value={State_Country}
                        onChange={handleC_state_country}
                        className="form-control"
                        id="State_Country"
                        name="State_Country" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="Posta" className="text-black">Posta / Zip <span className="text-danger">*</span></label>
                    <input type="text"
                        value={Posta}
                        onChange={handleC_postal_zip}
                        className="form-control"
                        id="Posta"
                        name="Posta" />
                </div>
            </div>

            <div className="form-group row mb-5">
                <div className="col-md-6">
                    <label htmlFor="Email_Address" className="text-black">Email Address <span className="text-danger">*</span></label>
                    <input type="text"
                        value={Email_Address}
                        onChange={handleC_email_address}
                        className="form-control"
                        id="Email_Address"
                        name="Email_Address" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="Phone" className="text-black">Phone <span className="text-danger">*</span></label>
                    <input type="text"
                        value={Phone}
                        onChange={handleC_phone}
                        className="form-control"
                        id="Phone"
                        name="Phone"
                        placeholder="Phone Number" />
                </div>
            </div>

            <div class="form-group">
                <label htmlFor="c_order_notes" className="text-black">Order Notes</label>
                <textarea name="c_order_notes"
                    value={Notes}
                    onChange={handleC_Notes}
                    id="Notes" cols="30" rows="5"
                    class="form-control"
                    placeholder="Write your notes here..."></textarea>
            </div>

            <div className="form-group">
                <button className="btn btn-black btn-lg py-3 btn-block" onClick={BillingDataSubmit}>Place Order</button>
            </div>
        </>
    )
}

export default BillingFrom