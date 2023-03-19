import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import David from '../images/David_About_Me.jpg';
import Danda from '../images/Alma_David.jpg';
import Doggo from '../images/Doggo.jpg';
import '../styling/AboutMe.css';

export default function AboutMe() {
    return (
<div> 
    <div>
    <Header />
    </div>

    <h3 className={'top'}> About Me </h3>
    <div className={'text'}>
    <img className={'profilepic'} src={David} alt='profilepicture'/>
    <p>Gakege. Ap;loalegg gkmjekgnaptg gm;lemg=asegag ;lkoikjfgpoopoikjeag-poje oiehjopije-ojkeafaehgHEh.</p>
    <p>Agkmphlokmgeae Egaekmpeojpoejtg Egpejpoejg EGpaegpeklm EgaehgaplopeloEPojpok-egagea EWGaeghehpjmeoh</p> 
    <p>Agkmphlokmgeae Egaekmpeojpoejtg Egpejpoejg EGpaegpeklm EgaehgaplopeloEPojpok-egagea EWGaeghehpjmeoh</p> 
    <p>Agkmphlokmgeae Egaekmpeojpoejtg Egpejpoejg EGpaegpeklm EgaehgaplopeloEPojpok-egagea EWGaeghehpjmeoh</p> 
    <p>Agkmphlokmgeae Egaekmpeojpoejtg Egpejpoejg EGpaegpeklm EgaehgaplopeloEPojpok-egagea EWGaeghehpjmeoh</p> 
    </div>

    <div className={'text'}>
        <img className={'alma'} src={Danda} alt='alma and david'/>
        <img className={'doggo'} src={Doggo} alt='doggo'/>
        <p>Gakege. Ap;loalegg gkmjekgnaptg gm;lemg=asegag ;lkoikjfgpoopoikjeag-poje oiehjopije-ojkeafaehgHEh.</p>
    <p>Agkmphlokmgeae Egaekmpeojpoejtg Egpejpoejg EGpaegpeklm EgaehgaplopeloEPojpok-egagea EWGaeghehpjmeoh</p> 
    <p>Agkmphlokmgeae Egaekmpeojpoejtg Egpejpoejg EGpaegpeklm EgaehgaplopeloEPojpok-egagea EWGaeghehpjmeoh</p> 
    <p>Agkmphlokmgeae Egaekmpeojpoejtg Egpejpoejg EGpaegpeklm EgaehgaplopeloEPojpok-egagea EWGaeghehpjmeoh</p> 
    <p>Agkmphlokmgeae Egaekmpeojpoejtg Egpejpoejg EGpaegpeklm EgaehgaplopeloEPojpok-egagea EWGaeghehpjmeoh</p> 
    </div>

    <div>
        <Footer />
    </div>
</div>
    )
}

