import { Link } from "react-router-dom";
import { fadeInCardVariant } from "../helpers";
import { Card, ImageContainer } from "../styles/Card";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useState } from "react";

type Props = {
  image?: string;
  title: string;
  index: number;
  id: string;
};

const RecipeCard = ({ image, title, index, id }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <Link to={`/recipe/${id}`}>
      <Card
        initial="initial"
        whileInView="animate"
        variants={fadeInCardVariant}
        viewport={{ once: true }}
        custom={index}
      >
        <ImageContainer isLoaded={isLoaded}>
          <LazyLoadImage
            src={image}
            width={"100%"}
            height={"100%"}
            className="lazy-img"
            effect="blur"
            onLoad={() => setIsLoaded(true)}
          />
        </ImageContainer>
        <p>{title}</p>
      </Card>
    </Link>
  );
};

export default RecipeCard;
