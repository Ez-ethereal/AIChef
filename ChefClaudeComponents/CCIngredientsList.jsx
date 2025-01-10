export default function IngredientsList(props) {
    const ingredientsList = props.list.map((ingredient) => {return (
        <li key={ingredient}>{ingredient}</li>
    )})

    return(
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsList}</ul>
            {
                props.list.length >= 3 &&
                <div className="get-recipe-container" ref={props.ref}>
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.getRecipe}>Get a recipe</button>
                </div>
            }
        </section>
    )
}