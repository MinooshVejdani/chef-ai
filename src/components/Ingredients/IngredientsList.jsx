export default function IngredientsList({ ingredients }) {
	return (
		<ul className="ingredients-list">
			{ingredients.map((ingredient) => (
				<li key={ingredient}>{ingredient}</li>
			))}
		</ul>
	);
}
