import React from 'react';
import Navbar from './Navbar';
import Logo from '../images/Logo.png';
import '../styling/Header.css';



export default function Header() {
    return (
<div>
    <div className={'header'} >
        <img className={'logo'} src={Logo} alt={'logo'} />
        <div className={'header2'}>
            <h2 className ={'item'}> West Made Creations </h2>
            <h3 className ={'item'}> WE DO IT RIGHT!</h3>
        </div>
    </div>
        <Navbar />
</div>
    )
}