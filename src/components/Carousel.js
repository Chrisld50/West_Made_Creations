import Carousel from 'react-bootstrap/Carousel';
import Repair from '../images/Photo_1.jpg';
import BareBones from '../images/Photo_2.jpg';
import CustomB from '../images/Custom_build.gif';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styling/Carousel.css';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function CreatedCarousel () {

    return (
        <div className={'background'}>
<Carousel className={'carousel'} style={{width:700, height:700,}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BareBones}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className={'text'}>Bare Bones Build</h5>
          <p className={'text'}>Built from the ground up.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Repair}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className={'text'}>Repairs of any kind</h5>
          <p className={'text'}>Only using premium parts.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CustomB}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className={'text'}>Custom Builds</h5>
          <p className={'text'}>
            Get the build of your dreams!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    )
}