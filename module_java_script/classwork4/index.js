// function calcSum(first, second = 0) {
// 	if (!first) {
// 		return null;
// 	}
// 	const result = first + second;
// 	return result;
// }

// function calcSum2() {
// 	return 2 + 3;
// // }
// const calcSum1 = first => {
// 	if (!first) return null;

// 	const result = first % 2 === 0;
// 	return result;
// };

// console.log(calcSum1(22));
// const userNUm = +prompt('sdadas');
// const firstRequest = calcSum();
// console.log(firstRequest);

// const a = 1;
const test = [];
let question = prompt('something');

while (question !== '') {
	test.push(question);
	question = prompt('again');
}

function render(data) {
	const list = document.createElement('ul');
	data.forEach(function (item) {
		let elementList = document.createElement('li');
		elementList.textContent = item;
		list.append(elementList);
	});

	document.body.append(list);
}

render(test);

// const result = arrayNum.reduce(function (accumulator, item) {
// 	return accumulator + item;
// });
// alert(`К оплате сумма: ${result}грн.`);
// console.log('эдемент массива ===>', arrayNum[2]);
// console.log('длина нашего массива', arrayNum.length);
// for (let i = 0; i < arrayNum.length; i++) {
// 	console.log(arrayNum[i]);
// }
// console.log('массив до', arrayNum);
// arrayNum.pop(); // метод удаляет эл массива в конце
// arrayNum.push('last child');  // метод добавляет эл массива в конец
// arrayNum.shift(); // метод удаляет эл массива в начале
// arrayNum.unshift('gogi'); // метод добавлчет эл массива в начале
// console.log('массив после', arrayNum);

// arrayNum.forEach(function (element, index) {
// 	console.log(index);
// });
// console.log(arrayNum);
// console.log(arrayNum);
