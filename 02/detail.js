//







var car = ["소나타", 50000, "white"];
var car2 = { name: "소나타", price: [50000, 3000, 4000] };

// console.log(car2)

document.querySelector('.car-title').innerHTML = car2['name']
document.querySelector('.car-price').innerHTML = car2['price'][0];


// 목록 버튼

document.querySelector('.list').addEventListener('click', function(e) {
	const btnData = document.querySelectorAll(".tab-button");
	const conData = document.querySelectorAll(".tab-content");

	btnData.forEach((button) => { button.classList.remove('orange') });
	conData.forEach((content) => { content.classList.remove('show') });

	btnData.forEach((item, idx) => {
		if (e.target == item) {
			// console.log(e.target)
			btnData[idx].classList.add('orange');
			conData[idx].classList.add('show');
		}
	});
});
