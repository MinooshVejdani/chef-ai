import React from "react";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function addIngredient(formData) {
     e.preventDefault();
    const [message, setMessage] = React.useState("");
    const newIngredient = formData.get("ingredient").trim().toLowerCase();

    if (ingredients.includes(newIngredient)) {
      setMessage("This Ingredient is already in the list!");
      formData.target.reset();
      return;
    }
    
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />

        <button>Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <section>
          <h2>Ingredients on hand:</h2>
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
