import { Link } from "react-router-dom";
import { fadeInCardVariant } from "../helpers";
import { Card, CardImg } from "../styles/Card";

type Props = {
  image?: string;
  title: string;
  index: number;
  id: string;
};

const RecipeCard = ({ image, title, index, id }: Props) => {
  return (
    <Link to={`/recipe/${id}`}>
      <Card
        initial="initial"
        whileInView="animate"
        variants={fadeInCardVariant}
        custom={index}
      >
        <CardImg whileHover={{ scale: 1.05 }} alt={image} src={image} />
        <p>{title}</p>
      </Card>
    </Link>
  );
};

export default RecipeCard;
