import React from 'react';
import Navbar from './Navbar';
import '../styling/Header.css';


export default function Header() {
    return (
<div>
    <h2 className={'header'}> West Made Creations </h2>
        <Navbar />
</div>
    )
}