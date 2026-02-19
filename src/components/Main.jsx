import { useRecipeManager } from "../hooks/useRecipeManager";
import IngredientsContainer from "./Ingredients/IngredientsContainer";
import RecipeDisplay from "./Recipe/RecipeDisplay";

export default function Main() {
  const {
    ingredients,
    message,
    recipe,
    loading,
    addIngredient,
    clearIngredients,
    getRecipe,
    hasEnoughIngredients,
  } = useRecipeManager();

  return (
    <main>
      <IngredientsContainer
        ingredients={ingredients}
        message={message}
        recipe={recipe}
        loading={loading}
        hasEnoughIngredients={hasEnoughIngredients}
        onAddIngredient={addIngredient}
        onClearIngredients={clearIngredients}
        onGetRecipe={getRecipe}
      />

      <RecipeDisplay recipe={recipe} />
    </main>
  );
}
