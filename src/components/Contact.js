import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function Contact() {
    return (
        <div>

            <div>
                <Header />
            </div>

            <div>
                <h4>Contact Me</h4>

                <p> If you are interested in a build,<br/> have any questions or difficutlies with your build,<br/> here is how you can get ahold of me. </p>

                <ul>
                <li><a href="tel:+" target="_blank" rel="noreferrer">111 111 1111</a></li>
                <li><a href="emailto:" target="_blank" rel="noreferrer"> test@test.com</a></li>
                <li><a href="linkedin"target="_blank" rel="noreferrer" > Linkedin </a></li>
                </ul>
            </div>

            <div> 
                <h5> Build Info </h5>
                <p> Each build is made only with premium parts</p>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}