import React from 'react';
import Navbar from './Navbar';
import '../styling/Header.css';


export default function Header() {
    return (
<div>
    <div className={'header'} >
    <h2> West Made Creations </h2>
    <h3 > WE DO IT RIGHT!</h3>
    </div>
        <Navbar />
</div>
    )
}