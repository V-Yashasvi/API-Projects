let searchBox=document.querySelector('.searchBox')
let searchBtn=document.querySelector('.searchBtn')
let recipeContainer=document.querySelector('.recipe-container')
let recipeDetailsContent=document.querySelector('.recipe-details-content')
let recipeCloseBtn=document.querySelector('.recipe-closeBtn')

const fetchRecipe=async (query)=>{
    recipeContainer.innerHTML="Fetching Recipees...."
    const data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    const response=await data.json();
    console.log(response)

    recipeContainer.innerHTML="";
    response.meals.forEach(meal => {
        console.log(meal);;
        const recipeDiv=document.createElement('div')
        recipeDiv.setAttribute('class','recipe')
        recipeDiv.innerHTML=`
        <img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        <p>${meal.strArea}</p>
        <p>${meal.strCategory}</p>
        `

        const button=document.createElement('button')
        button.textContent="View Recipe"
        recipeDiv.appendChild(button)
        recipeContainer.appendChild(recipeDiv);

        button.addEventListener('click',()=>{
            openRecipePopUp(meal);
        })

    });

}

const fetchIngredients=(meal)=>{
    let ingredientList='';
    for(let i=1;i<=20;i++){
        const ingriedient =meal[`strIngredient${i}`]
        if(ingriedient){
            const measure=meal[`strMeasure${i}`]
            ingredientList+=`
            <li id="list>${measure}${ingriedient}</li>
            `
        }else{
            break;
        }
    }
    return ingredientList;
}

const openRecipePopUp=(meal)=>{
    recipeDetailsContent.innerHTML=`
    <h2 class='recipeName'>${meal.strMeal}</h2>
    <h3>Ingredients:</h3>
    <ul class="IngrideientList">${fetchIngredients(meal)}</ul>
    <div class="recipeInstructions" >
        <h3 class="InstructionName">Instructions:</h3>
        <p class="recipeInstructions">${meal.strInstructions}</p>
    </div>
    `
    recipeDetailsContent.parentElement.style.display='block'
}

recipeCloseBtn.addEventListener('click',()=>{
    recipeDetailsContent.parentElement.style.display='none';
})

searchBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    const searchInput=searchBox.value.trim();
    fetchRecipe(searchInput)
})