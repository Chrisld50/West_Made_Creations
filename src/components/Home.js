import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import '../styling/Home.css';


export default function Home() {
    return (
<div>
    <div>
        <div>
            <Header />
        </div>

        <div className={'spacer'}></div>

        <div className={'info'}>

        <div>
            <h4> What do we do?  </h4>
            <p>At West Made Creations are about one thing:<br /> 
            Building quality PCs within budget.<br />
            We will build your PC from the ground up<br />
            whether it is a small, generic build<br />
            to a top of the line custom build.<br />
            We will make it the way you want<br />
            while fitting budget needs.</p>
            <p> Below are just a few pictures of the work we do.<br />
            if you want to see more awesome work please head over<br />
            to our contact page and we can start building towards <br />
            your dream build.</p>
        </div>
             
            <Carousel />
        </div>

        <div>
            <Footer />
        </div>
    </div>
</div>
    )
}