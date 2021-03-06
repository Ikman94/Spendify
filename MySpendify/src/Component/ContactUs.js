import React from 'react'

export default function ContactUs() {
    return (
        <div className="team-boxed pt-3">
           <div className="container p-3">
                <div class="contact-us-card">
                    <h2 className=" pb-3 sub-header-font ">Contact Us</h2>
                    <form class="contact100-form validate-form paragrah-font">
                        <span class="contact100-form-title">
                            Contact Us
				        </span>

                        <div class="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Name is required">
                            <span class="label-input100">Your Name</span>
                            <input class="input100" type="text" name="name" placeholder="Enter your name" />
                            <span class="focus-input100"></span>
                        </div>

                        <div class="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <span class="label-input100">Email</span>
                            <input class="input100" type="text" name="email" placeholder="Enter your email addess" />
                            <span class="focus-input100"></span>
                        </div>

                        <div class="wrap-input100 validate-input" data-validate="Message is required">
                            <span class="label-input100">Message</span>
                            <textarea class="input100" name="message" placeholder="Your message here..."></textarea>
                            <span class="focus-input100"></span>
                        </div>

                        <div class="container-contact100-form-btn">
                            <button class="contact100-form-btn">
                                <span>
                                    Submit
							<i class="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
           </div>
        </div>
    )
}
