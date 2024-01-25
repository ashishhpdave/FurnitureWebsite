import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
function Testimonial() {
    return (
        <div className="testimonial-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 mx-auto text-center">
                        <h2 className="section-title">Testimonials</h2>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="testimonial-slider-wrap text-center">

                            <div id="testimonial-nav">
                                <span className="prev" data-controls="prev">
                                    <IoIosArrowBack />
                                </span>
                                <span className="next" data-controls="next">
                                    <IoIosArrowForward />
                                </span>
                            </div>

                            <div className="testimonial-slider">
                                <div className="item">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8 mx-auto">

                                            <div className="testimonial-block text-center">
                                                <blockquote className="mb-5">
                                                    <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                                                        odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                                                        vulputate velit imperdiet dolor tempor tristique. Pellentesque
                                                        habitant morbi tristique senectus et netus et malesuada fames ac
                                                        turpis egestas. Integer convallis volutpat dui quis
                                                        scelerisque.&rdquo;</p>
                                                </blockquote>

                                                <div className="author-info">
                                                    <div className="author-pic">
                                                        <img src="images/person-1.png" alt="Maria Jones" className="img-fluid" />
                                                    </div>
                                                    <h3 className="font-weight-bold">Maria Jones</h3>
                                                    <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* <!-- END item --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
