import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Card, Gradient } from "../styles/Card";
import { Wrapper } from "../styles/Slider";
import { Link } from "react-router-dom";
import "@splidejs/react-splide/css";

const Slider = ({ header, data }) => {
  return (
    <>
      <Wrapper>
        <h3>{header}</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "2rem",
            breakpoints: {
              768: {
                perPage: 2,
              },
              640: {
                perPage: 1,
              },
            },
          }}
        >
          {data && data.length > 0 ? (
            data.map((item) => (
              <SplideSlide key={item.id}>
                <Card>
                  <Link to={`/recipe/${item.id}`}>
                    <p>{item.title}</p>
                    <img src={item.image} alt={item.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            ))
          ) : (
            <div>No data found</div>
          )}
        </Splide>
      </Wrapper>
    </>
  );
};

export default Slider;
