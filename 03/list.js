var products = [
	{ id: 0, price: 70000, title: 'Blossom Dress' },
	{ id: 1, price: 50000, title: 'Springfield Shirt' },
	{ id: 2, price: 60000, title: 'Black Monastery' }
];

console.log(products)

function wares() { // 목록에 품명, 가격 기입하는 함수
	let titles = document.querySelectorAll(".title"); // 품명을 기입할 공간 데이터 가져오기
	let wons = document.querySelectorAll(".won"); // 가격을 기입할 공간 데이터 가져오기

	titles.forEach((item, idx) => { // 품명, 가격 데이터를 HTML에 기입
		titles[idx].innerHTML = products[idx]['title'];
		wons[idx].innerHTML = products[idx]['price'];
	});
}
wares()