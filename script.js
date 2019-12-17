window.addEventListener("load", sidenVises);


var slideIndex = 0;

function sidenVises() {
    console.log("Siden Vises");

    showSlides();
    document.querySelector("#menuknap").addEventListener("click", clickMenu);
}

function showSlides() {
    var i;

    var slides = document.getElementsByClassName("splashbilleder");
    console.log('slides', slides);



    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    console.log('slideIndex', slideIndex);

    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}


function clickMenu() {
    console.log("clickMenu");

    document.querySelector("#burger").classList.remove("hidden");
    document.querySelector("#menuknap").addEventListener("click", clickFjern);
}


function clickFjern() {
    console.log("clickFjern");

    document.querySelector("#burger").classList.add("hidden");

    document.querySelector("#menuknap").removeEventListener("click", clickFjern);
    document.querySelector("#menuknap").addEventListener("click", clickMenu);
}
