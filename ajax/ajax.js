// var myCat = {
//     "name": "Meowsalot",
//     "species": "cat",
//     "favFood": "tuna"
// }

// var myFavColors = ["blue", "green", "purple"];

// myFavColors[1];


// var thePets = [{
//     "name": "Meowsalot",
//     "species": "cat",
//     "favFood": "tuna"


// }, {
//     "name": "Barky",
//     "species": "dog",
//     "favFood": "carrrots"



// }, {
//     "name": "Meowsalot",
//     "species": "cat",
//     "favFood": "tuna"


// }]

// thePets[1].favFood



// // https://learnwebcode.github.io/json-example/animals-1.json


var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();

ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
ourRequest.onload = function(){
    if (ourRequest.status >= 200 && ourRequest.status < 400){
        var ourData = JSON.parse(ourRequest.responseText);
renderHTML(ourData);
    } else {
        console.log("We connected to the server, but it returned on error.");
    }

};

ourRequest.onerror = function(){
    console.log("Connction error");
}

ourRequest.send();
pageCounter++;
if (pageCounter > 3){
    btn.classList.add("hide-me");
}

});

function renderHTML(data) {
    var htmlString = "";
    for (i= 0; i<data.length; i++){
        htmlString += "<p>" + data[i].name + "is a " + data[i].species + ".</p>";
        for (ii = 0; ii < data[i].foods.likes.length; ii++){
           if (ii == 0) {
            htmlString += data[i].foods.likes[ii];
           } else {
            htmlString += " and " + data[i].foods.likes[ii];
           }
        }

        htmlString += ' and dislikes ';

        for (ii = 0; ii < data[i].foods.dislikes.length; ii++){
            if (ii == 0) {
             htmlString += data[i].foods.dislikes[ii];
            } else {
             htmlString += " and " + data[i].foods.dislikes[ii];
            }
         }

        htmlString += '.</p>';
    }
  animalContainer.insertAdjacentHTML('beforeend', htmlString);

}