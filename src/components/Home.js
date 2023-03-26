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

        <div className={'info'}>

        <div>
            <h4> What do we do?  </h4>
            <p> West Made Creations are about one thing: Building quality PCs.<br />
            We build your PC from the ground up<br />
            whether it is a straight forward, generic build<br />
            or you want the top of the class build<br />
            we will build your PC the way you want it!</p>
            <p> Below is just a few pictures of the work we do<br />
            if you want to see more awesome stuff, head over to<br />
            our contact page and we can start working towards <br />
            your dream build!</p>
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