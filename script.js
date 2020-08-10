let itemsList = document.querySelectorAll('.item');
let blocksList = document.querySelectorAll('.block');
let social = document.querySelector('.social');
let contact = document.querySelector('.contact');

let ind = 0;


function openMenu() {

	document.getElementById("bar").classList.toggle('active-bar');
}



for(let i = 0; i < itemsList.length; i++){

	itemsList[i].addEventListener("click", function() {

		itemsList[ind].classList.remove("active");
		itemsList[i].classList.add("active");
		
		blocksList[ind].style.display = "none";
		blocksList[i].style.display = "block";
		
		ind = i;

		if (i == 3){
			social.style.display = "none";
		}
		else {
			social.style.display = "block";
		}

	});
}

for(let i = 0; i < itemsList.length; i++){

	itemsList[i].addEventListener("mouseover", function() {
		if (!itemsList[i].classList.contains('active')){
			itemsList[i].classList.add('hovered');
			itemsList[i].classList.remove('unhovered');
		}
		
	});
	itemsList[i].addEventListener("mouseout", function() {
			itemsList[i].classList.remove('hovered');
			if (!itemsList[i].classList.contains('active')){
				itemsList[i].classList.add('unhovered');
			}
		});
}
