import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Suggest.css"

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <h1 style={{textAlign:"center",paddingTop:"2rem",paddingBottom:"1rem"}}>SHOPPING ME</h1><br/>
    <Carousel activeIndex={index} variant="dark" onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://content-management-files.canva.com/323fa962-3a70-4ef7-85ae-ab2174242964/ogimage_t-shirts.jpg"
          alt="First slide"
          style={{display:"block", marginLeft:"auto", marginRight:"auto",maxHeight:"450px"}}
        />
        <Carousel.Caption>
          {/* None */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block "
          src="https://images.lifestyleasia.com/wp-content/uploads/sites/3/2022/05/13183009/lennart-uecker-49bzdf_egju-unsplash-hero-1600x900.jpeg"
          alt="First slide"
          style={{display:"block", marginLeft:"auto", marginRight:"auto",maxHeight:"450px"}}
        />
        <Carousel.Caption>
          {/* None */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block"
          src="https://miro.medium.com/v2/resize:fit:1188/1*Cf2rdjTvsDSYVR8S8dHy0w.jpeg"
          alt="First slide"
          style={{display:"block", marginLeft:"auto", marginRight:"auto",maxHeight:"450px"}}
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