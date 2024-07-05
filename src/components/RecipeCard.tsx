import { Link } from "react-router-dom";
import { fadeInCardVariant } from "../helpers";
import { Card, CardImg, Skeleton } from "../styles/Card";
import { useState } from "react";

type Props = {
  image?: string;
  title: string;
  index: number;
  id: string;
};

const RecipeCard = ({ image, title, index, id }: Props) => {
  const [loadingImage, setLoadingImage] = useState(true);
  return (
    <Link to={`/recipe/${id}`}>
      <Card
        initial="initial"
        whileInView="animate"
        variants={fadeInCardVariant}
        custom={index}
      >
        {loadingImage && <Skeleton />}
        <CardImg
          whileHover={{ scale: 1.025 }}
          alt={image}
          src={image}
          loading="lazy"
          onLoad={() => setLoadingImage(false)}
          onError={() => setLoadingImage(false)}
        />
        <p>{title}</p>
      </Card>
    </Link>
  );
};

export default RecipeCard;
