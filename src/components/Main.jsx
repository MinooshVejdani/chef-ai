
import React from "react";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [message, setMessage] = React.useState("");

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

          {ingredients.length > 2 && (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button>Get a recipe</button>
            </div>
          )}
        </section>
      )}
    </main>
  );
}
