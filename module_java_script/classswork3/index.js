/* ЗАДАНИЕ - 1
 * Пользователь должен ввести Имя, Фамилию и свой возраст.
 * В случае если он вводит не соответствующие данные, нужно переспрашивать его, ДО ТЕХ ПОР ПОКА данные не будут введены корректно.*/
// let name = prompt("ваше имя");
// while (name === null || name === '' || !isNaN(name)){
//     name = prompt("Введите ваше имя")
// }
// let surname = prompt("вааша фамилия");
// while (surname === null || surname === '' || !isNaN(surname)){
//     surname = prompt("Введите вашу фамилию коректно")
// }
// let age = +prompt("ваш возвраст");
// while (age === null || age === '' || isNaN(age)){
//     prompt("Введите ваш возвраст")
// }
/* ЗАДАНИЕ - 2
 * Вывести в консоль первые 147 непарных чисел.
 *   ПРОДВИНУТАЯ СЛОЖНОСТЬ - не выводить в консоль те числа, которые делятся на 5.
 * */
/* ЗАДАНИЕ - 3
 * Осуществляем проверку на корректность введения данных.
 * Пользователь должен ввести два числа операцию.
 * Если пользователь ввел НЕ числа или операцию, которой нет в списке - спрашиваем все по новой, ДО ТЕХ ПОР ПОКА не введет правильно.
 * * Как резуьтат выводим на экран сообщение с результатом выбранной операции над введенными числами.
 *  Список операций:
 *   * - умножение
 *   + - добавление
 *   - - отнимание
 *   / - деление
 * */
// let numberOne = +prompt("введи первое число")
// while(numberOne === null || numberOne === "" || isNaN(numberOne)){
//     numberOne = prompt("Введи число!")
// }
// let numberTwo = +prompt("введи второе число")
// while(numberTwo === null || numberTwo === "" || isNaN(numberTwo)){
//     numberTwo = +prompt("Введи число!")
// }
// let op = prompt("введите действие, которое хотите выполнить")
// while(op !== "+" && op !== "*" && op !== "-" && op !== "/"){
//     op = prompt("Введи операцию!!")
// }
// let resolt
// switch (op){
//     case "+":resolt = numberOne + numberTwo;
//     break;
//     case "-":resolt = numberOne - numberTwo;
//     break;
//     case "*":resolt = numberOne * numberTwo;
//     break;
//     case "/":resolt = numberOne / numberTwo;
//     break;
// }
// let(resolt)


/* ЗАДАНИЕ - 4
* Написать преобразователь оценок.
* Запрашиваем у пользователя оценку в виде числа.
* После того, как она была введена нужно преобразовать ее в буквенный эквивалент.
* Запрашивать ввод оценки нужно до тех пор, пока пользователь не оставит ввод пустым.
* Принцип преобразования:
*     0 - 59 -> F
*    60 - 69 -> D
*    70 - 79 -> C
*    80 - 89 -> B
*   90 - 100 -> A
* */
let mark = +prompt("введите оценку")
while(mark !== "") {
    if(mark <= 59){
        console.log("F");
    }
    else if(mark >= 60 && mark <= 69){
        console.log("D");
    }
    else if(mark >= 70 && mark <= 79){
        console.log("C");
    }
    else if(mark >= 80 && mark <= 89){
        console.log("B");
    }
    else {
        console.log("A");
    }
}
/* ЗАДАНИЕ - 5
* Написать имитацию заполнения школьного журнала.
* В качестве результата должна быть одна длинная строка со всеми учениками и их оценками в формате:
* Имя Фамилия - F; Имя2 Фамилия2 - A; и т.д...
*
* Спрашиваем сколько учеников в классе.
* Для каждого ученика запрашиваем 2 ввода - ФИО и оценка. Два отдельных ввода, результат которых должен добавляться к общей строке.
* */