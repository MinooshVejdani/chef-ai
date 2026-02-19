import ReactMarkdown from "react-markdown";

export default function RecipeDisplay({ recipe }) {
	if (!recipe) {
		return null;
	}

	return (
		<section className="recipe-section">
			<h4>Recipe Suggestion:</h4>
			<ReactMarkdown>{recipe}</ReactMarkdown>
		</section>
	);
}
