//Задание 1

//let userFirstName;
//let userAge;

//const getUserData = function () {
//	userFirstName = prompt('Напишите Ваше имя');
//	userAge = prompt('Напишите Ваш возраст');
//};

//const greetUser = function () {
//	if (userAge < 20) {
//		alert (`Привет, ${userFirstName}!`);
//	} else if (userAge >= 20 && userAge <45) {
//		alert (`Здравствуй, ${userFirstName}!`);
//	} else {
//		alert (`Здравствуйте, ${userFirstName}!`);
//	}
//};

//getUserData();
//greetUser(userFirstName, userAge);

//Задание 2

//const studentsListArr = ['Михаил', 'Николай', 'Олег', 'Пётр'],
//      student = prompt('Укажите имя студента');
//let studentsListStr = `${studentsListArr.join(', ')}.`;

//if (student == null) {
//	alert(studentsListStr)
//} else {
//	alert(student)
//}

//Задание 3

//function filter(list, blackList) {
//	let newList = [];
	
//	for (let i = 0; i < list.length; i++) {
//		if (checkElem(list[i], blackList)) {
//			newList.push(list[i]);
//		}
//	}
	
//	return newList;
//}

//function checkElem(elem, array){
//	return array.indexOf(elem) !== -1;
//}

//console.log( filter([1, 2, 3], [2, 3, 4, 5]) );

//Задание 4

//function checkCard (quantityOfGoods, price, promoCode) {
//	let totalCost;
//	let discountOfGoods = 1;
//	const  realPromoCode = 'METHED';
//	let discountOfpromoCode = 1;

//	if (quantityOfGoods > 10 && quantityOfGoods <= 20) {
//		discountOfGoods = 0.95
//	} else if (quantityOfGoods > 20) {
//		discountOfGoods = 0.9 
//	} else discountOfGoods = 1;

//	if (promoCode && promoCode.toUpperCase() === realPromoCode.toUpperCase()) {
//		discountOfpromoCode = 0.85
//	} else {
//		discountOfpromoCode = 1;
//	}

//	totalCost = price*discountOfGoods*discountOfpromoCode;

//	return totalCost
//};

//console.log(checkCard(1, 40000, 'methEd'));


