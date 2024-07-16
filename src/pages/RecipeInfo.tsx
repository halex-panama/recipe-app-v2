import { useParams } from "react-router-dom";
import { useRecipeFetch } from "../hooks/useRecipeFetch";
import {
  ButtonInfo,
  Info,
  InfoWrapper,
  ButtonContainer,
  ImageContainer,
} from "../styles/RecipeInfo";
import { useState } from "react";
import Spinner from "../components/Spinner";
import {
  fadeInIngredientsVariant,
  fadeInLeftVariant,
  fadeInRightVariant,
} from "../helpers";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const RecipeInfo = () => {
  const [activeTab, setActiveTab] = useState("Instruction");

  const { recipeId } = useParams();

  const { state, loading, error } = useRecipeFetch(recipeId as string);

  const [isLoaded, setIsLoaded] = useState(false);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong.. Please try again</div>;

  return (
    <InfoWrapper>
      <Info initial="hidden" whileInView="visible" variants={fadeInLeftVariant}>
        <h2>{state.title}</h2>
        <ImageContainer isLoaded={isLoaded}>
          <LazyLoadImage
            src={state.image}
            width={"100%"}
            height={"100%"}
            effect="blur"
            onLoad={() => setIsLoaded(true)}
          />
        </ImageContainer>

        <p dangerouslySetInnerHTML={{ __html: state.summary as string }}></p>
      </Info>
      <Info
        initial="hidden"
        whileInView="visible"
        variants={fadeInRightVariant}
        viewport={{ once: true }}
      >
        <ButtonContainer>
          <ButtonInfo
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.95 }}
            className={activeTab === "Instruction" ? "active" : ""}
            onClick={() => setActiveTab("Instruction")}
          >
            Instruction
          </ButtonInfo>
          <ButtonInfo
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.95 }}
            className={activeTab === "Ingredients" ? "active" : ""}
            onClick={() => setActiveTab("Ingredients")}
          >
            Ingredients
          </ButtonInfo>
        </ButtonContainer>

        {activeTab === "Instruction" && (
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeInRightVariant}
            viewport={{ once: true }}
            dangerouslySetInnerHTML={{ __html: state.instructions as string }}
          ></motion.p>
        )}

        {activeTab === "Ingredients" && (
          <ul>
            {state.extendedIngredients &&
              state.extendedIngredients.length > 0 &&
              state.extendedIngredients.map((item, index) => (
                <motion.li
                  custom={index}
                  initial="initial"
                  whileInView="animate"
                  variants={fadeInIngredientsVariant}
                  viewport={{ once: true }}
                  key={item.id}
                >
                  {item.original}
                </motion.li>
              ))}
          </ul>
        )}
      </Info>
    </InfoWrapper>
  );
};

export default RecipeInfo;
