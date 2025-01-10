import React from "react"
import Recipe from "./CCClaudeRecipe.jsx"
import IngredientsList from "./CCIngredientsList.jsx"
import { getRecipeFromMistral } from "./ai.js"


// getting recipe from AI
//  - Where should the recipe live so it doesn't go away with each render?
//      - Answer: IN STATE, which is carried over render to render
//  - What action from the user should trigger getting the recipe?
//      - Answer: pressing the get a recipe button

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")
    const recipeSection = React.useRef(null)
   

    /* note: replaced by form action
    function handleSubmit(event){
        event.preventDefault() // prevents page from refreshing when we enter a new item
                               // page refresh is default form submission behavior
        const formData = new FormData(event.currentTarget) // gets the data from the submitted form
        const newIngredient = formData.get("ingredient") // grabs the value of ingredient from the form - this is why we need name as an attribute of input
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    */

    
    async function getRecipe() {
       const recipeMarkdown =  await getRecipeFromMistral(ingredients)
       setRecipe(prevRecipe => recipeMarkdown)
       console.log(recipe)
    }

    React.useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipe])
    

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input 
                    className="ingredient-input"
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button className="add-ingredient-button">Add ingredient</button>
            </form>
            {
                ingredients.length > 0 && 
                <IngredientsList list={ingredients} getRecipe={getRecipe} ref={recipeSection}/>
            }
            {
                recipe !== "" && <Recipe text={recipe} />
            }
        </main>
    )
}

// - aria-label does the same thing as label for the input element