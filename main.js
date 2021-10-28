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

//let studentsListArr = [];

//while ( true )
//	{
//		let student = prompt('Укажите имя студента');

//		if (student !==null) {
//			studentsListArr.push(student);
//		} else {
//			let studentsListStr = `${studentsListArr.join(', ')}.`;

//			if (studentsListArr.length >= 1) {
//				alert(studentsListStr);
//			} else {
//				alert ('Вы не указали ни одного имени студента.');
//			}
//			break;
//		}
//	}


//Задание 3

//const list = [1,2,3,4,5];
//const blackList = [1,4,5];

//function filter(list, blackList) {
//	let newList = [];

//	for (let i = 0; i < list.length; i++) {
//		if (blackList.indexOf(list[i]) === -1) {
//			newList.push(list[i]);
//		}
//	}

//	return newList;
//}

//console.log(filter(list, blackList));

//Вполне рабочее решение
//let newList = list.filter(elem => !blackList.includes(elem));
//console.log(newList);


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


