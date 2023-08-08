const mealTitle = document.getElementById("meal-title");
const mealIngredient = document.querySelector(".meal-ingredients");
const mealProcess = document.querySelector(".meal-process");
const mealImage = document.querySelector(".meal-img");

const ham = document.getElementById("hamburger");
const subMenu = document.querySelector('.sub-menu');
ham.addEventListener('click', function(){
    if(subMenu.style.display == "none"){
        subMenu.style.display = "block";
    } else {
        subMenu.style.display = "none";
    }
})

const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

showMeal();

function showMeal(){
    fetch(url)
        .then(res => res.json())
        .then((res) =>
            createMeal(res.meals[0]))
}

function createMeal(meal) {
    mealTitle.innerHTML = `${meal.strMeal}`;
    
    // ------------- building 'MAKING' in terms of paragraphs.. -------------
    let mealMaking = `${meal.strInstructions}`;
    let mealcontent = [];
    mealcontent.push(mealMaking.split('.'));
    //console.log(mealcontent);
    let p = document.createElement('p');
    mealcontent.forEach(el => {
        p.innerHTML = `${el.join('')}`;
    })
    mealProcess.appendChild(p);
    //mealProcess.innerText = `${meal.strInstructions}`;
    //    ----------------- end -------------------------------------------

    mealImage.setAttribute('src', `${meal.strMealThumb}`);

    // ---------- meal instructions ---------------------------------

    let ingredients = [];
    for(let i=1; i<=20; i++) {
        if(meal[`strIngredient${i}`]) {
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
        }
        else {
            break;
        }
    }

    const newHTML = `
        <div class="ing">
            <h4 class="meal-style">Ingredients:</h4>
            <ul>
                ${ingredients.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `;

    mealIngredient.innerHTML = newHTML;
}

export { mealTitle,mealIngredient,mealProcess,mealImage, createMeal };
