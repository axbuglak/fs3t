    // ЗАДАНИЕ 1
// * Создайте функцию, которая будет:
// * брать элемент со страницы с классом 'training-list', и текстовым содержимым равным '5'.
// * покажет этот элемент в консоли.
// * Заменит текстовое содержимое этого элемента на "<p>Здравствуйте</p>", не создавая нового HTML-элемента на странице.
// * Используйте методы массива для выполнения задания.
const numbers = document.querySelectorAll(".training-list")
console.log(numbers);
    numbers.forEach(numbers => {
        if (numbers.textContent === "5") {
            const elementWhithFive = numbers
            elementWhithFive.textContent = "здравствуйте, здесь было число 5"
            console.log(elementWhithFive);
        }
        else if(numbers.textContent !== "5"){
            const newElement = numbers 
            newElement.textContent = `пятерки не найдено, здесь число ${numbers.textContent}`
            console.log(newElement);
        }
    });