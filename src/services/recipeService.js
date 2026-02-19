export async function getRecipeFromAPI(ingredientsArr) {
	try {
		const response = await fetch("/api/recipe", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ ingredients: ingredientsArr }),
		});

		if (!response.ok) {
			throw new Error(`API error: ${response.status}`);
		}

		const data = await response.json();
		return data.recipe;
	} catch (err) {
		console.error("Recipe API error:", err);
		return null;
	}
}
