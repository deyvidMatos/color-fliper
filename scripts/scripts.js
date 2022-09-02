const colors = ["green", "red", "rba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.getElementById("color");

btn.addEventListener("click", function(){
    // pegar um numero random entre 0 - 3
    const randomNumber = getRandomNumber();

    color.textContent = colors[randomNumber];
    document.body.style.backgroundColor = colors[randomNumber];
});

function getRandomNumber(){
     return Math.floor(Math.random() * colors.length);
};