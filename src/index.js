console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';



function showDogs(dogs){
    const images = document.querySelector("#dog-image-container")
    dogs.message.forEach(dog => {
        images.innerHTML += `<img src="${dog}" width="20%" max-height="10%">`
        
    })
        
    }

function randomImageFetch(){
    fetch(imgUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        console.log(json)
        showDogs(json);


    })

}
function fetchListOfBreeds(){
    fetch(breedUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        console.log(json)
        addBreedList(json);
        
        


    })

}


function addBreedList(dogs){
    const breeds = document.querySelector("#dog-breeds")
    let str = "";
    for(const key in dogs.message){
        if(dogs.message[key].length > 0){
            str = `<li> ${key}
            <ul> <li> ${dogs.message[key]} </li> </ul>
             </li>`
        }
        else{
            str = `<li> ${key} </li>`
        }
       
         breeds.innerHTML += str;
         

    }
  

}

function changeBglist(){
    const ul = document.querySelector("ul");
         ul.addEventListener("click", function(e){
             if (e.target.style.backgroundColor === "white"){
                 e.target.style.backgroundColor = "lightBlue";

             }
             else{
                 e.target.style.backgroundColor = "white";
             }
             
         })
 
}
// when I write tihs code on the browser console it works but from here it can't select the li tags.
function start(){
    const select = document.querySelector("select");
    const li = document.querySelectorAll("li");
    select.addEventListener("change", function(e){
        console.log(e.target.value)
        li.forEach(l => {
            console.log(l)
    if(l.innerText.startsWith(e.target.value)){
        l.hidden = true;
}
else{
l.hidden = false;
}
})

    })
};
document.addEventListener("DOMContentLoaded", function(){
    randomImageFetch();
    fetchListOfBreeds();
    changeBglist();
    start();

});