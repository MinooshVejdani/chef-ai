
import React from "react";
import { getRecipeFromMistral } from "../ai.js";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [message, setMessage] = React.useState("");
  const [recipe, setRecipe] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function addIngredient(e) {
    e.preventDefault();
    setMessage("");

    const form = e.target;
    const formData = new FormData(form);
    const newIngredient = formData.get("ingredient").trim().toLowerCase();

    if (!newIngredient) {
      setMessage("Please enter an ingredient.");
      return;
    }
    if (ingredients.includes(newIngredient)) {
      setMessage("This Ingredient is already in the list!");
      form.reset();
      return;
    }
    form.reset();
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  function removeIngredients() {
    setIngredients([]);
    setMessage("");
    setRecipe("");
  }

  async function getRecipe() {
    setLoading(true);
    setMessage("");
    
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    
    if (recipeMarkdown) {
      setRecipe(recipeMarkdown);
    } else {
      setMessage("Failed to generate recipe. Please try again.");
    }
    
    setLoading(false);
  }

  return (
    <main>
      <form onSubmit={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />

        <button type="submit">Add ingredient</button>
      </form>
      {message && <p className="message">{message}</p>}

      {ingredients.length > 0 && (
        <section className="main-section">
          <h2>Ingredients on hand:</h2>
          <button className="reset-button" onClick={removeIngredients}>
            Reset Ingredients
          </button>
          <ul className="ingredients-list">{ingredientsListItems}</ul>

          {ingredients.length > 2 && !recipe && (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button onClick={getRecipe} disabled={loading}>
                {loading ? "Generating..." : "Get a recipe"}
              </button>
            </div>
          )}

          {recipe && (
            <section className="recipe-section">
              <h2>Recipe Suggestion:</h2>
              <pre style={{ whiteSpace: 'pre-wrap' }}>{recipe}</pre>
            </section>
          )}
        </section>
      )}
    </main>
  );
}
