import { mealTitle,mealIngredient,mealProcess,mealImage, createMeal } from './app.js';

const searchURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const select = document.getElementById("select-1");
const btn = document.querySelector(".btn");

/*
selectList();

function selectList() {
    fetch(selectListURL)
        .then(res=> res.json())
        .then((data) => {
            console.log("Data: ", data);
            let realData = Object.entries(data);
            console.log("Real dat: ", realData);
            realData.map((item) => {
                console.log("Item: ", item);
                let sp = item.flat(1)
                console.log("Substr: ", sp);
                for(let i=1; i<=sp.length;i++){
                    let opt = document.createElement('option');
                    select.appendChild(opt);
                    //console.log(`${sp[i].strMeal}`);
                    opt.innerHTML = `${sp[i].strMeal}`;
                }
                
            })
            
        })
}
*/

btn.addEventListener("click", function(e){
    e.preventDefault();
    let searchTerm = select.value;
    if(searchTerm) {
        searchFood(searchURL+searchTerm);
        select.value ='';
    }
})


function searchFood(url) {
    fetch(url)
      .then(res => res.json())
      .then(function(data) {
            console.log(data.meals[0]);
            createMeal(data.meals[0]);
      })
}

