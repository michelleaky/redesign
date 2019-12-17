window.addEventListener("load", sidenVises);


var slideIndex = 0;

function sidenVises() {
    console.log("Siden Vises");



    showSlides();

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
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
