function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
};

testWebP(function(support) {

    if (support == true){
    	document.querySelector('body').classList.add("webp");
    }
});

function toggle() {
	var sec = document.getElementById("sec");
	var nav = document.getElementById("navigation");
	sec.classList.toggle("active");
	nav.classList.toggle("active");
}

// MAIN NAV

let linksList = document.querySelectorAll(".nav__link");
let blocksList = document.querySelectorAll(".content__block");

let ind = 0;

for(let i = 0; i < linksList.length; i++){

	linksList[i].addEventListener("click", function() {

		blocksList[ind].style.display = "none";
		blocksList[i].style.display = "block";
		
		linksList[ind].classList.remove("active-link");
		linksList[i].classList.add("active-link");
		ind = i;
		toggle();

	});
}

let moreBtn = document.getElementById("know-more");
moreBtn.addEventListener("click", function() {

		blocksList[ind].style.display = "none";
		blocksList[1].style.display = "block";
		
		linksList[ind].classList.remove("active-link");
		linksList[1].classList.add("active-link");
		ind = 1;
		

	});
