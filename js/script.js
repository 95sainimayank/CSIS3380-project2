
//setting display properties for the buttons div
document.getElementById("paginationButtons").style.display = "flex";
document.getElementById("paginationButtons").style.marginTop = "20px";
document.getElementById("paginationButtons").style.justifyContent = "center";

//Get all subitems of ul 
const allItems = document.getElementsByClassName("contact-item");

const allItemsJson = {};

//adding all the list value to json and hidding them from display
for(var i = 0; i < allItems.length; i++){
    allItemsJson[i] = {
        "src" : allItems[i].childNodes[1].childNodes[1].src,
        "h3" : allItems[i].childNodes[1].childNodes[3].textContent,
        "email" : allItems[i].childNodes[1].childNodes[5].textContent,
        "date" : allItems[i].childNodes[3].childNodes[1].textContent
    };

    allItems[i].style.display = "none";
}

// Display first 10 list items by default
var itemsToDisplay = 0;

if(allItems.length < 10){
    itemsToDisplay = allItems.length;
}
else{
    itemsToDisplay = 10;
}

for(var i = 0; i < itemsToDisplay; i++){
    document.getElementsByClassName("contact-list")[0].innerHTML += 
    '<li class="contact-item cf"><div class="contact-details"><img class="avatar" src="'
    + allItemsJson[i].src + '"> <h3>' + allItemsJson[i].h3 + '</h3><span class="email">'
    + allItemsJson[i].email + '</span></div><div class = "joined-details"><span class="date">'
    + allItemsJson[i].date + '</span></div></li>'; 
}

//counting and inserting page numbers 
console.log(allItems.length - 10);
const totalPages = Math.ceil((allItems.length - 10)/ 10);

for(var i = 0; i < totalPages; i++){
    let b = document.createElement("button");
    b.textContent = i + 1;
    b.style.width = "25px";
    b.style.height = "25px";
    b.style.margin = "5px";
    b.value = i;
    document.getElementById("paginationButtons").appendChild(b);
}

// //get all buttons and assign event listeners
const buttons = document.getElementById("paginationButtons").childNodes;

for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click",function(){
        clickHandlerFunction(this);
    });
}

//Function for event lister
function clickHandlerFunction(b){
    document.getElementsByClassName("contact-list")[0].innerHTML = "";
    
    var va = b.value;

    for(var i = va * 10; i < va * 10 + 10; i++){
        document.getElementsByClassName("contact-list")[0].innerHTML += 
        '<li class="contact-item cf"><div class="contact-details"><img class="avatar" src="'
        + allItemsJson[i].src + '"> <h3>' + allItemsJson[i].h3 + '</h3><span class="email">'
        + allItemsJson[i].email + '</span></div><div class = "joined-details"><span class="date">'
        + allItemsJson[i].date + '</span></div></li>'; 
        
    }
}
