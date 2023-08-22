import Carousel from "react-bootstrap/Carousel";
import { slide } from "../../interfaces/Components";

const CarouselPhoto = (images: Array<slide>) => {
  const data = images.images;
  return (
    <Carousel style={{ background: "rgba(0,0,0,0.6)" }}>
      {images &&
        data.map((item, i) => (
          <Carousel.Item key={i}>
            <img
              style={{ width: "100%", height: "500px", opacity: ".7" }}
              src={item.img}
              alt={item.alt}
            />
            <Carousel.Caption>
              <h3
                style={{
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </h3>
              <p style={{ color: "black", fontSize: "1.6rem" }}>{item.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default CarouselPhoto;
