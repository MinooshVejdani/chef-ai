import { useState } from "react";
import { getRecipeFromAPI } from "../services/recipeService";
import {
	normalizeIngredient,
	isDuplicateIngredient,
	hasEnoughIngredients,
} from "../utils/validation";

export function useRecipeManager() {
	const [ingredients, setIngredients] = useState([]);
	const [message, setMessage] = useState("");
	const [recipe, setRecipe] = useState("");
	const [loading, setLoading] = useState(false);

	const addIngredient = (inputValue) => {
		setMessage("");

		const normalized = normalizeIngredient(inputValue);

		if (!normalized) {
			setMessage("Please enter an ingredient.");
			return false;
		}

		if (isDuplicateIngredient(normalized, ingredients)) {
			setMessage("This ingredient is already in the list!");
			return false;
		}

		setIngredients((prev) => [...prev, normalized]);
		return true;
	};

	const clearIngredients = () => {
		setIngredients([]);
		setMessage("");
		setRecipe("");
	};

	const getRecipe = async () => {
		setLoading(true);
		setMessage("");

		const recipeMarkdown = await getRecipeFromAPI(ingredients);

		if (recipeMarkdown) {
			setRecipe(recipeMarkdown);
		} else {
			setMessage("Failed to generate recipe. Please try again.");
		}

		setLoading(false);
	};

	return {
		ingredients,
		message,
		recipe,
		loading,
		addIngredient,
		clearIngredients,
		getRecipe,
		hasEnoughIngredients: hasEnoughIngredients(ingredients),
	};
}
