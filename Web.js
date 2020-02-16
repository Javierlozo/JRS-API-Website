/*JRS Coding School 
API Website
Name: Luis Lozoya - 02/16/20*/
async function getRequest(url,apiName){
    function display(data){
        document.getElementById("name").innerHTML = (data.drinks[0].strDrink);
        document.getElementById("image").src = (data.drinks[0].strDrinkThumb);
        document.getElementById("category").innerHTML = (data.drinks[0].strCategory);
        document.getElementById("alcoholic").innerHTML = (data.drinks[0].strAlcoholic);
        document.getElementById("glass").innerHTML = (data.drinks[0].strGlass);
        document.getElementById("ingridients").innerHTML = (`
        ${data.drinks[0].strMeasure1} - ${data.drinks[0].strIngredient1}<br>
        ${data.drinks[0].strMeasure2} - ${data.drinks[0].strIngredient2}<br>
        ${data.drinks[0].strMeasure3} - ${data.drinks[0].strIngredient3}<br>
        ${data.drinks[0].strMeasure4} - ${data.drinks[0].strIngredient4}<br>
        ${data.drinks[0].strMeasure5} - ${data.drinks[0].strIngredient5}<br>
        ${data.drinks[0].strMeasure6} - ${data.drinks[0].strIngredient6}<br>`)
        document.getElementById("instructions").innerHTML = (data.drinks[0].strInstructions);
    }

var futureData = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
var prettierData = await futureData.json();
display(prettierData);
}

getRequest();