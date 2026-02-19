export default function IngredientForm({ onAddIngredient }) {
	function handleSubmit(e) {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const ingredient = formData.get("ingredient");

		const success = onAddIngredient(ingredient);

		if (success) {
			form.reset();
		}
	}

	return (
		<form onSubmit={handleSubmit} className="add-ingredient-form">
			<input
				type="text"
				placeholder="e.g. oregano"
				aria-label="Add ingredient"
				name="ingredient"
			/>
			<button type="submit">Add ingredient</button>
		</form>
	);
}
