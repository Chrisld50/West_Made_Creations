import { Carousel } from "react-responsive-carousel";
import PC from '../images/PC.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function createdCarousel () {


    return (
        <div className='carousel-container'>
            <Carousel>
                <div>
                    <img src={PC} alt='pc'/>
                    <p className={'legend'}>We build your pc!!</p>
                </div>
                <div>

                </div>
                <div>

                </div>
            </Carousel>
        </div>
    )
}