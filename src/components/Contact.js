import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Fpic from '../images/Contact_Page_Build.jpg';
import '../styling/Contact.css';

export default function Contact() {
    return (
        <div>

            <div>
                <Header />
            </div>

            <div className={'contactBackground'}>
                <h4>Contact Me</h4>

                <p> If you are interested in a build,<br/> have any questions or difficutlies with your build,<br/> here is how you can get ahold of me. </p>

                <div className={'contact'}>
                <p>Phone: <br /><a href="tel:+" target="_blank" rel="noreferrer">111 111 1111</a> <br /></p>
                <p>Email: <br /><a href="emailto:" target="_blank" rel="noreferrer"> test@test.com</a> <br /></p>
                <p>Linkedin: <br /><a href="linkedin"target="_blank" rel="noreferrer" > David West </a> </p>
                </div>


            <div> 
                <img className={'fpic'} src={Fpic} alt='build pic' />
            </div>

            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}