import styled from "styled-components";

export interface CarouselProps {}

export default function Carousel() {
  return (
    <CarouselContainer title="Noticias, promociones y descuentos">
      <div id="carouselExampleCaptions" className="carousel slide" margin-top="70px" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <Button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"></Button>
          <Button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></Button>
          <Button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></Button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">

            <img
              src="https://res.cloudinary.com/carina-bosio/image/upload/v1663801507/Oferta_1_jfaywx.png"
              className="d-block w-100"
              alt="..."
            />

            {/* <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div> */}
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/carina-bosio/image/upload/v1663547415/Madre_tfi4kp.png" className="d-block w-100" alt="..." />
            {/* <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div> */}
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/carina-bosio/image/upload/v1663555683/Delivery_2_dwdjhf.png" className="d-block w-100" alt="..." />
            {/* <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div> */}
          </div>
        </div>
        <Button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </Button>
        <Button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </Button>
      </div>
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
  margin-top: 70px;
  z-index: auto;
  display: inline-block;
  width: 100vw;
`;
const Button = styled.button`
  z-index: auto;
`;
