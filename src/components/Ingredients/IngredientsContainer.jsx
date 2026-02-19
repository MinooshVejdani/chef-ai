import IngredientForm from "./IngredientForm";
import IngredientsList from "./IngredientsList";
import RecipePrompt from "../Recipe/RecipePrompt";

export default function IngredientsContainer({
	ingredients,
	message,
	recipe,
	loading,
	hasEnoughIngredients,
	onAddIngredient,
	onClearIngredients,
	onGetRecipe,
}) {
	if (ingredients.length === 0) {
		return (
			<>
				{message && <p className="message">{message}</p>}
				<IngredientForm onAddIngredient={onAddIngredient} />
			</>
		);
	}

	return (
		<>
			<IngredientForm onAddIngredient={onAddIngredient} />
			{message && <p className="message">{message}</p>}

			<section className="main-section">
				<h2>Ingredients on hand:</h2>
				<button className="reset-button" onClick={onClearIngredients}>
					Reset Ingredients
				</button>

				<IngredientsList ingredients={ingredients} />

				{hasEnoughIngredients && !recipe && (
					<RecipePrompt loading={loading} onGetRecipe={onGetRecipe} />
				)}
			</section>
		</>
	);
}
