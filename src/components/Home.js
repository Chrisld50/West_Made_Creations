import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer'


export default function Home() {
    return (
<div>
<div>

    <Header />
</div>

<div> What do we do? 
        <Carousel />
</div>

<div>
    <Footer />
</div>

</div>
    )
}