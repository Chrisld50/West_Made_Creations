import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image} from 'pure-react-carousel';
import Repair from '../images/Photo_1.jpg';
import BareBones from '../images/Photo_2.jpg';
import CustomB from '../images/Custom_build.gif';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styling/Carousel.css';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function CreatedCarousel () {

    return (
        <div>
            <CarouselProvider className={'carousel'} style={{width:1000, height:1000}} naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={3}>
            <ButtonBack>Back</ButtonBack><ButtonNext>Next</ButtonNext><Slider> 
                    <Slide index={0}><Image style={{width:700, height:500}} src={BareBones} alt={'bareBones'}/>Bare Bones</Slide>
                    <Slide index={1}><Image style={{width:700, height:500}} src={CustomB} alt={'customBuilds'}/>Custom Builds</Slide>
                    <Slide index={2}><Image style={{width:700, height:500}} src={Repair} alt={'repairs'}/>Repairs</Slide>
                </Slider>
                </CarouselProvider>
        </div>
    )
}