// array
const imgs = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// variabili
let image;
let i;
let addImgs = document.querySelector(".imgs");

// aggiungiamo le immagini nascoste su html
for (i = 0; i < imgs.length; i++) {
    image = imgs[i];
    addImgs.innerHTML += `<div class="single-img hidden">
                            <img src="img/${image}" alt="">
                          </div>`

}




let visibleImage = document.getElementsByClassName("single-img");
let smallImgs = document.getElementsByClassName("small");


// rendiamo visibile la prima immagine
let visibleImageNumber = 0;
visibleImage[visibleImageNumber].classList.remove("hidden");
smallImgs[visibleImageNumber].classList.remove("opacity");


const upper = document.querySelector(".top");
const lower = document.querySelector(".bottom");

// scorriamo le immagini ogni 3 secondi
let interval = setInterval(nextImgs, 3000);

// blocchiamo lo scorrimento all'hover
addImgs.addEventListener("mouseover", function () {
    clearInterval(interval);


})

// sblocchiamo lo scorrimento quando leviamo il mouse

addImgs.addEventListener("mouseout", function () {

    clearInterval(interval);
    interval = setInterval(nextImgs, 3000);

})






// bottone sotto
lower.addEventListener("click", nextImgs);

// blocchiamo lo scorrimento automatico al click

lower.addEventListener("click", function () {

    clearInterval(interval);

})





// bottone su
upper.addEventListener("click", beforeImgs);

// blocchiamo lo scorrimento automatico al click
upper.addEventListener("click", function () {

    clearInterval(interval);

})




// Funzione  che scorre le immagini
function nextImgs() {
    if (visibleImageNumber == imgs.length - 1) {

        visibleImage[visibleImageNumber].classList.add("hidden");
        smallImgs[visibleImageNumber].classList.add("opacity");
        visibleImageNumber = 0;
        visibleImage[visibleImageNumber].classList.remove("hidden");
        smallImgs[visibleImageNumber].classList.remove("opacity");


    } else {

        visibleImage[visibleImageNumber].classList.add("hidden");
        smallImgs[visibleImageNumber].classList.add("opacity");


        visibleImageNumber++;
        visibleImage[visibleImageNumber].classList.remove("hidden");
        smallImgs[visibleImageNumber].classList.remove("opacity");



    }



}

// Funzione  che scorre le immagini

function beforeImgs() {

    if (visibleImageNumber == 0) {

        visibleImage[visibleImageNumber].classList.add("hidden");
        smallImgs[visibleImageNumber].classList.add("opacity");
        visibleImageNumber = imgs.length - 1;
        visibleImage[visibleImageNumber].classList.remove("hidden");
        smallImgs[visibleImageNumber].classList.remove("opacity");


    } else {

        visibleImage[visibleImageNumber].classList.add("hidden");
        smallImgs[visibleImageNumber].classList.add("opacity");
        visibleImageNumber--;
        visibleImage[visibleImageNumber].classList.remove("hidden");
        smallImgs[visibleImageNumber].classList.remove("opacity");


    }

}



console.log(addImgs);
console.log(i);



console.log(smallImgs);
console.log(visibleImage);

