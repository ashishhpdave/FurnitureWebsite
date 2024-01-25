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
                    <img src="images/sofa.png" alt="Image" className="img-fluid" />
                </div>

                <div className="row">
                    <div className="col-lg-8">
                        <div className="subscription-form">
                            <h3 className="d-flex align-items-center">
                                <span className="me-1">
                                    <img src="/images/envelope-outline.svg" alt="Image" className="img-fluid" />
                                </span>
                                <span>Subscribe to Newsletter</span>
                            </h3>
                            <Form />
                        </div>
                    </div>
                </div>

                <div className="row g-5 mb-5">
                    <div className="col-lg-4">
                        <div className="mb-4 footer-logo-wrap"><a href="#" className="footer-logo">Furni<span>.</span></a></div>
                        <p className="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus
                            malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                            Pellentesque habitant</p>

                        <ul className="list-unstyled custom-social">
                            <li>
                                <a href="#"> <FaFacebookF /></a>
                            </li>
                            <li>
                                <a href="#"> <FaXTwitter /></a>
                            </li>
                            <li>
                                <a href="#"> <IoLogoInstagram /></a>
                            </li>
                            <li>
                                <a href="#"> <FaLinkedinIn /></a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-8">
                        <div className="row links-wrap">
                            <div className="col-6 col-sm-6 col-md-3">
                                <ul className="list-unstyled">
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Contact us</a></li>
                                </ul>
                            </div>

                            <div className="col-6 col-sm-6 col-md-3">
                                <ul className="list-unstyled">
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">Knowledge base</a></li>
                                    <li><a href="#">Live chat</a></li>
                                </ul>
                            </div>

                            <div className="col-6 col-sm-6 col-md-3">
                                <ul className="list-unstyled">
                                    <li><a href="#">Jobs</a></li>
                                    <li><a href="#">Our team</a></li>
                                    <li><a href="#">Leadership</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>

                            <div className="col-6 col-sm-6 col-md-3">
                                <ul className="list-unstyled">
                                    <li><a href="#">Nordic Chair</a></li>
                                    <li><a href="#">Kruzo Aero</a></li>
                                    <li><a href="#">Ergonomic Chair</a></li>
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
                                Designed with love by
                                <NavLink to="/">Untree.co</NavLink> Distributed By
                                <NavLink to="/">ThemeWagon</NavLink>
                                {/* <!-- License information: https://untree.co/license/ --> */}
                            </p>
                        </div>

                        <div className="col-lg-6 text-center text-lg-end">
                            <ul className="list-unstyled d-inline-flex ms-auto">
                                <li className="me-4"><a href="/">Terms &amp; Conditions</a></li>
                                <li><a href="/">Privacy Policy</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer
