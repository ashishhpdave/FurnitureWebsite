import React from 'react'
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";

import { NavLink } from 'react-router-dom';
import Form from './footer/Form';
const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container relative">

                <div className="sofa-img">
                    <img src="images/sofa.png" alt="Images" className="img-fluid"/>
                </div>

                <div className="row">
                    <div className="col-lg-8">
                        <div className="subscription-form">
                            <h3 className="d-flex align-items-center">
                                <span className="me-1">
                                    <img src="/images/envelope-outline.svg" alt="Images" className="img-fluid" />
                                </span>
                                <span>Subscribe to Newsletter</span>
                            </h3>
                            <Form />
                        </div>
                    </div>
                </div>

                <div className="row g-5 mb-5">
                    <div className="col-lg-4">
                        <div className="mb-4 footer-logo-wrap"><NavLink to="#" className="footer-logo">Furni<span>.</span></NavLink></div>
                        <p className="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus
                            malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                            Pellentesque habitant</p>

                        <ul className="list-unstyled custom-social">
                            <li>
                                <NavLink to="#"> <FaFacebookF /></NavLink>
                            </li>
                            <li>
                                <NavLink to="#"> <FaXTwitter /></NavLink>
                            </li>
                            <li>
                                <NavLink to="#"> <IoLogoInstagram /></NavLink>
                            </li>
                            <li>
                                <NavLink to="#"> <FaLinkedinIn /></NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-8">
                        <div className="row links-wrap">
                            <div className="col-6 col-sm-6 col-md-3">
                                <ul className="list-unstyled">
                                    <li><NavLink to="#">About us</NavLink></li>
                                    <li><NavLink to="#">Services</NavLink></li>
                                    <li><NavLink to="#">Blog</NavLink></li>
                                    <li><NavLink to="#">Contact us</NavLink></li>
                                </ul>
                            </div>

                            <div className="col-6 col-sm-6 col-md-3">
                                <ul className="list-unstyled">
                                    <li><NavLink to="#">Support</NavLink></li>
                                    <li><NavLink to="#">Knowledge base</NavLink></li>
                                    <li><NavLink to="#">Live chat</NavLink></li>
                                </ul>
                            </div>

                            <div className="col-6 col-sm-6 col-md-3">
                                <ul className="list-unstyled">
                                    <li><NavLink to="#">Jobs</NavLink></li>
                                    <li><NavLink to="#">Our team</NavLink></li>
                                    <li><NavLink to="#">Leadership</NavLink></li>
                                    <li><NavLink to="#">Privacy Policy</NavLink></li>
                                </ul>
                            </div>

                            <div className="col-6 col-sm-6 col-md-3">
                                <ul className="list-unstyled">
                                    <li><NavLink to="#">Nordic Chair</NavLink></li>
                                    <li><NavLink to="#">Kruzo Aero</NavLink></li>
                                    <li><NavLink to="#">Ergonomic Chair</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="border-top copyright">
                    <div className="row pt-4">
                        <div className="col-lg-6">
                            <p className="mb-2 text-center text-lg-start">Copyright &copy;
                                {new Date().getFullYear()} All Rights Reserved. &mdash;
                                Designed ashishhpdave
                                <NavLink src="https://github.com/ashishhpdave?tab=repositories">ashishhpdave</NavLink> Distributed By
                                <NavLink src="/https://github.com/ashishhpdave">ashishhpdave</NavLink>
                                {/* <!-- License information: https://untree.co/license/ --> */}
                            </p>
                        </div>

                        <div className="col-lg-6 text-center text-lg-end">
                            <ul className="list-unstyled d-inline-flex ms-auto">
                                <li className="me-4"><NavLink to="/">Terms &amp; Conditions</NavLink></li>
                                <li><NavLink to="/">Privacy Policy</NavLink></li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer
