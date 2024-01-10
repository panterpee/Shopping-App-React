import Carousel from 'react-bootstrap/Carousel';
import { useCart } from "./context/context";
import "./Carosel.css"

function ControlledCarousel() {
  const { index,handleSelect} = useCart();

  return (
    <>
    <h1 style={{textAlign:"center",paddingTop:"1rem",paddingBottom:"0.5rem",fontSize:"3rem",fontFamily:"fantasy"}}>Style your Confidence</h1><br/>
    <Carousel activeIndex={index} variant="dark" onSelect={handleSelect} controls={false}>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://images.yen.com.gh/images/768ebf48606b4d65.jpg?imwidth=900"
          alt="First slide"
          style={{display:"block", marginLeft:"auto", marginRight:"auto",maxHeight:"500px"}}
        />
        <Carousel.Caption>
          {/* None */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block "
          src="https://media.vanityfair.com/photos/57d32a5da9f841aa372f5521/master/pass/jordan-barrett-october-2016-it-boy.jpg"
          alt="First slide"
          style={{display:"block", marginLeft:"auto", marginRight:"auto",maxHeight:"500px"}}
        />
        <Carousel.Caption>
          {/* None */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block"
          src="https://i.ytimg.com/vi/JoeUvRjBGEI/maxresdefault.jpg"
          alt="First slide"
          style={{display:"block", marginLeft:"auto", marginRight:"auto",maxHeight:"500px"}}
        />
        <Carousel.Caption>
          {/* None */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default ControlledCarousel;