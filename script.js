
let numberOfSquares = 6;
let colors = generateRandomColors(numberOfSquares);

let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("messageDisplay");
let h1 = document.querySelector("h1");
let reset = document.getElementById("reset");
let easyBtn = document.getElementById("easyBtn");
let hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");

    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    
    for(let i = 0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");

    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    
    for(let i = 0; i<squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
});

reset.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(numberOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display to picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(let i = 0; i<squares.length; i++){
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
    }
    
    h1.style.backgroundColor = "Steelblue";

});

colorDisplay.textContent = pickedColor;

for(let i = 0; i<squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listener to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        let clickedColor = this.style.backgroundColor;
        //add color to picked color
        if(clickedColor ===pickedColor ){
            messageDisplay.textContent = "Correct";
            reset.textContent = "play again";            
            changeColors(pickedColor);
            h1.style.background = clickedColor;
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again";
        }
    });
}

function changeColors(color){
    //loop trough all squares
    //change color to the right one
    for(let i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = color
    }
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length)

    return colors[random]
}

function generateRandomColors(num){
    let arr = [];

    for(let i = 0; i< num; i++){
        arr.push(randomColor());
    }

    return arr
}

function randomColor(){
    //pick red from 0 to 255
    let red = Math.floor(Math.random() * 256)
    //pick green from 0 to 255
    let green = Math.floor(Math.random() * 256)
    //pick Blue from 0 to 255
    let blue = Math.floor(Math.random() * 256)

    return "rgb(" + red + ", " + green + ", " + blue + ")"
}

//object
let book = {
    hoogte: 2,
    locatie: {
        x:3,
        y:5
    },
    kaft: true,
    pagina1: function(){
        console.log("show pagina 1")
    }
};

//factory function, uses Camel notation
function createBook(hoogte, pagina){
    return {
        hoogte,
        showpagina(){
            console.log("show pagina " + pagina)
        }
    };
}

//Constructor function, uses Pascal notation
function Book(hoogte){
    this.hoogte = hoogte;
    this.showpagina = function(){
        console.log(hoogte);
    }
}

let boek1 = createBook(2, 3);
console.log(boek1.hoogte);
boek1.showpagina();

let boek = new Book(5);
boek.showpagina();