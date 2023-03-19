import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import '../styling/Home.css';


export default function Home() {
    return (
<div className={'home'}>
<div>
    <Header />
</div>

<div className={'info'}> What do we do? 
        <Carousel />
</div>

<div>
    <Footer />
</div>

</div>
    )
}