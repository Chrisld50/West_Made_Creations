import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styling/Contact.css';
import MyPhoto from '../images/David.jpg';

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

                    <div className='myphoto'>
                        <p>Hope to hear from you soon!</p>
                        <img className={'fpic'} src={MyPhoto} alt='me'/>
                    </div> 


            <div> 
                <h4>About This Page</h4>
                <p>The background image used was originally created by starline on Freepik. 
                    <br/> The webpage was created by Web Developer Christian Quarles</p>
            </div>

            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}