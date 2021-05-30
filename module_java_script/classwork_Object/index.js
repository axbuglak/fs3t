const arr = ['andrey', 'yakovenko', 26, 'препод'];

const user = {
	name: {
		firstName: 'andrey',
		secondName: 'Jonny',
	},
	lastName: 'yakovenko',
	age: 26,
	prof: 'препод',
	drinkTea: true,
	calcCalories: function () {
		return 2 + 3;
	},
};

// console.log(user.lastName);
// console.log(user['lastName']);

user.music = ['techno', 'pop'];

// for (let [key, value] of Object.entries(user)) {
// 	console.log(value);
// }
// function getName() {
//     return this.name
// }

// console.log(getName());
