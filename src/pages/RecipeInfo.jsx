import { useParams } from "react-router-dom";
import { useRecipeFetch } from "../hooks/useRecipeFetch";
import {
  ButtonInfo,
  Info,
  InfoWrapper,
  ButtonContainer,
} from "../styles/RecipeInfo";
import { useState } from "react";
import Spinner from "../components/Spinner";

const RecipeInfo = () => {
  const [activeTab, setActiveTab] = useState("Instruction");

  const { recipeId } = useParams();

  const { state, loading, error } = useRecipeFetch(recipeId);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong.. Please try again</div>;

  return (
    <InfoWrapper>
      <Info>
        <h2>{state.title}</h2>
        <img src={state.image} alt={state.title} />
        <p dangerouslySetInnerHTML={{ __html: state.summary }}></p>
      </Info>
      <Info>
        <ButtonContainer>
          <ButtonInfo
            className={activeTab === "Instruction" ? "active" : ""}
            onClick={() => setActiveTab("Instruction")}
          >
            Instruction
          </ButtonInfo>
          <ButtonInfo
            className={activeTab === "Ingredients" ? "active" : ""}
            onClick={() => setActiveTab("Ingredients")}
          >
            Ingredients
          </ButtonInfo>
        </ButtonContainer>

        {activeTab === "Instruction" && (
          <ol>
            {state.analyzedInstructions[0].steps &&
              state.analyzedInstructions[0].steps.length > 0 &&
              state.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))}
          </ol>
        )}

        {activeTab === "Ingredients" && (
          <ul>
            {state.extendedIngredients &&
              state.extendedIngredients.length > 0 &&
              state.extendedIngredients.map((item) => (
                <li key={item.id}>{item.original}</li>
              ))}
          </ul>
        )}
      </Info>
    </InfoWrapper>
  );
};

export default RecipeInfo;
