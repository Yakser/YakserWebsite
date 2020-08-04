let itemsList = document.querySelectorAll('.item');
let blocksList = document.querySelectorAll('.block');
let social = document.querySelector('.social');
let contact = document.querySelector('.contact');

let ind = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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








// function photoRotate() {
//    const angle = 10;
//    const card = document.querySelector(".photo");
//    card.addEventListener('mouseout', e => {
// 	  // card.style.transform = `perspective(400px) rotateX(0deg) rotateY(0deg)`;
// 	  const w = card.clientWidth;
//       const h = card.clientHeight;
//       const y = (e.offsetX - w * 0.5) / w * angle;
//       const x = (1 - (e.offsetY - h * 0.5)) / h * angle;
//       card.style.transform = `perspective(400px) rotateX(${x}deg) rotateY(${y}deg)`;
//    });
 
//    card.addEventListener('mousemove', e => {
//       const w = card.clientWidth;
//       const h = card.clientHeight;
//       const y = (e.offsetX - w * 0.5) / w * angle;
//       const x = (1 - (e.offsetY - h * 0.5)) / h * angle;
//       card.style.transform = `perspective(400px) rotateX(${x}deg) rotateY(${y}deg)`;
//   });
// }
 
// photoRotate();

