import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Card, Gradient } from "../styles/Card";
import { Wrapper } from "../styles/Slider";
import "@splidejs/react-splide/css";

const Slider = ({ header, data }) => {
  return (
    <>
      <Wrapper>
        <h3>{header}</h3>
        <Splide
          options={{
            perPage: 2,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "2rem",
          }}
        >
          {data && data.length > 0 ? (
            data.map((item) => (
              <SplideSlide>
                <Card key={item.id}>
                  <p>{item.title}</p>
                  <img src={item.image} alt={item.title} />
                  <Gradient />
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
