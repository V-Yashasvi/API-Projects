const searchBox=document.querySelector('.searchBox')
const searchBtn=document.querySelector('.searchBtn')
const recipeContainer=document.querySelector('.recipe-container')
const recipeDetailsContent=document.querySelector('.recipe-details-content')
const recipeCloseBtn=document.querySelector('.recipe-closeBtn')

const fetchRecipe=async (query)=>{
    recipeContainer.innerHTML="Fetching Recipees......."
    const data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response=await data.json();
    // console.log(response)
    recipeContainer.innerHTML=''
    response.meals.forEach(meal => {
        console.log(meal)
        const recipeDiv=document.createElement('div');
        // recipeDiv.className.add(".recipe")
        recipeDiv.setAttribute('class','recipe')
        recipeDiv.innerHTML=`
        <img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        <p>${meal.strArea}</p>
        <p>${meal.strCategory}</p>
        `
        const button=document.createElement('button')
        button.textContent="View Recipe"
        // button.style.backgroundColor='red'
        // button.style.height='20px'
        // button.style.weight='50px'
        recipeDiv.appendChild(button);
        recipeContainer.appendChild(recipeDiv)


        button.addEventListener('click',()=>{
            openRecipePopUp(meal);
            // body.style.backgroundColor='black'
        })


    });
}

const fetchIngredients=(meal)=>{
    let ingredientList="";
    for(let i=1;i<=20;i++){
        const ingredient=meal[`strIngredient${i}`]
        if (ingredient){
            const measure=meal[`strMeasure${i}`]
            ingredientList+=`
            <li id="list"> ${measure} ${ingredient} </li>
            `
        }else{
            break;
        }
    }
    // recipeDetailsContent.appendChild(ingredientList)
    return ingredientList;
}

const openRecipePopUp=(meal)=>{
    recipeDetailsContent.innerHTML=`
    <h2 class='recipeName' >${meal.strMeal}</h2>
    <h3>Ingredients:</h3>
    <ul class='IngredientList' >${fetchIngredients(meal)}</ul>
    <div class="recipeInstructions" >
        <h3 class="InstructionName">Instructions:</h3>
        <p class='recipeInstructions' >${meal.strInstructions} </p>
    </div>
    `
    recipeDetailsContent.parentElement.style.display='block';
    // body.style.display='none'
}

recipeCloseBtn.addEventListener('click',()=>{
    recipeDetailsContent.parentElement.style.display='none';
})


searchBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    // console.log("search")
    const searchInput=searchBox.value.trim(); 
    fetchRecipe(searchInput)
})

