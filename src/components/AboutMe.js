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
        <div className={'ambackground'}>
            <h3 className={'top'}> About Me </h3>
            <div className={'ptext'}>
            <img className={'profilepic'} src={David} alt='profilepicture'/>
            <p>Gakege. Ap;loalegg gkmjekgnaptg gm;lemg=asegag ;lkoikjfgpoopoikjeag-poje oiehjopije-ojkeafaehgHEh.</p>
            <p>Agkmphlokmgeae Egaekmpeojpoejtg Egpejpoejg EGpaegpeklm EgaehgaplopeloEPojpok-egagea EWGaeghehpjmeoh</p> 
            <p>Agkmphlokmgeae Egaekmpeojpoejtg Egpejpoejg EGpaegpeklm EgaehgaplopeloEPojpok-egagea EWGaeghehpjmeoh</p> 
            <p>Agkmphlokmgeae Egaekmpeojpoejtg Egpejpoejg EGpaegpeklm EgaehgaplopeloEPojpok-egagea EWGaeghehpjmeoh</p> 
            <p>Agkmphlokmgeae Egaekmpeojpoejtg Egpejpoejg EGpaegpeklm EgaehgaplopeloEPojpok-egagea EWGaeghehpjmeoh</p> 
        </div>

            <div className={'ptext'}>
                <div className={'pictures'}>
                    <img className={'alma'} src={Danda} alt='alma and david'/>
                    <img className={'doggo'} src={Doggo} alt='doggo'/>
            </div>
                <p>Gakege. Ap;loalegg gkmjekgnaptg gm;lemg=asegag ;lkoikjfgpoopoikjeag-poje oiehjopije-ojkeafaehgHEh.</p>
                <p>Agkmphlokmgeae Egaekmpeojpoejtg Egpejpoejg EGpaegpeklm EgaehgaplopeloEPojpok-egagea EWGaeghehpjmeoh</p> 
                <p>Agkmphlokmgeae Egaekmpeojpoejtg Egpejpoejg EGpaegpeklm EgaehgaplopeloEPojpok-egagea EWGaeghehpjmeoh</p> 
                <p>Agkmphlokmgeae Egaekmpeojpoejtg Egpejpoejg EGpaegpeklm EgaehgaplopeloEPojpok-egagea EWGaeghehpjmeoh</p> 
                <p>Agkmphlokmgeae Egaekmpeojpoejtg Egpejpoejg EGpaegpeklm EgaehgaplopeloEPojpok-egagea EWGaeghehpjmeoh</p> 
            </div>
    </div>

    <div>
        <Footer />
    </div>
</div>
    )
}

