/* строка проверить строку на наличие . и после нее на com или ru */
// function checkDot(str) {
//     if (str.includes('.')) {
//         if (str.includes('com')) {
//             return 'Есть точка и после нее com или ru!'
//         } else {
//             return 'Есть точка но нету com или ru'
//         }
//     } else {
//         return 'нету точки!'
//     }
// }
//
// console.log(checkDot('ylyboktebededmokar@mail.com'))

/* строка проверить длину слова и узнать что длина четная и не больше 8 и не меньше 4 */
// function checkLength(str) {
//     if(str.length <= 8 && str.length >= 4) {
//         if (str.length % 2 === 0) {
//             return 'четная'
//         } else {
//             return 'не четная'
//         }
//     } else {
//         return 'слово слишком короткое либо длинное'
//     }
// }
//
// console.log(checkLength('123456'))

/* строка поменять букву каждого четного индекса на E можно решить через map */
// let str = 'Нурлан Тамби Алексей Макар Эмир Рустам Артур Сергей'
// let newStr = str.split(' ');
// console.log(newStr.map((el, index) => index % 2 === 0 ? 'E' + el.slice(1) : el))


/*  строка 1 строка 2 проверить что пароли совпадают и не должны включать в себя пробелы только в начале */
// function checkPass(pass, check) {
//        if(pass.trimStart() === check.trimStart()) {
//            return 'пароли совпадают'
//        } else {
//            return 'пароли не совпадают'
//        }
// }
//
// console.log(checkPass('123', '123'))

/* FizzBuzz
Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3, и на 5. */
// let array = new Array(100).fill(1)
// console.log(array.map((el, index) => el + index).map((el, index) => index % 3 ? el + ' ' + 'Fizz': index % 5 ? el + ' ' + 'Buzz' : el).map((el, index) => index % 3 && index % 3 ? el + ' ' + 'FizzBuzz' : el))

/* Задание 5 */
// let nums = [1, 2, 3, 4, 5]
// let plusNums = nums.map(el => el + el)
// let multipleNums = nums.map(el => el * el)
// let tripleMultiNums = nums.map(el => el * el * el)
// let str = ['lorem', 'ipsum', 'dolor', 'sit']
// console.log(str.map((el, index) => index === 3 ? el.slice(-1, 0) + 3 : el.slice(-1, 0) + 5))
// let str2 = ['lorem', 'ipsum', 'dolor']
// console.log(str2.map((el, index) => index === 0 ? el.slice(-1, 0) + 1 :
//     index === 1 ? el.slice(-1, 0) + 2 :
//         index === 2 ? el.slice(-1, 0) + 3 : el));
//
// let str3 = ['lorem', 'ipsum', 'dolor']
// console.log(str3.map((el, index) => index === 0 ? el[0].toUpperCase() + el.slice(1) : index === 2 ? el[0].toUpperCase() + el.slice(1) : el))
//
// let str4 = ['lorem', 'ipsum', 'dolor']
// console.log(str4.map(el => el.toUpperCase()))


/* Задание 6 */
// let str = ['lorem', 'ipsum', 'dolor', 'sit', 'amet'];
// let newStr = str.join('-')
// console.log(newStr)

/* Задание 7 */
// let str = ['lorem', 'ipsum', 'dolor', 'sit', 'amet'];
// let newStr = str.join('/')
// console.log(newStr)

/* Задание 8 */
// let str = ['lorem', 'ipsum', 'dolor', 'sit', 'amet'];
// let newStr = str.join(' ')
// console.log(newStr)

/* Задание 9 */
// let str = ['lorem', 'ipsum', 'dolor', 'sit', 'amet'];
// console.log(str.filter((el, index) => index === 1 || index === 3))

/* Задание 10 */
// let str = ['lorem', 'ipsum', 'dolor', 'sit', 'amet'];
// console.log(str.filter((el, index) => index === 0 || index === 2 || index === 4))

/* Задание 11 */
// let str = ['lorem', 'ipsum', 'dolor', 'sit', 'amet'];
// let newStr = str.push('consectetur', 'adipiscing', 'elit')
// console.log(str)

/* Задание 12 */
// let str = [123,33,444,'22',55,66,77,88,99]
// console.log(str.filter(el => typeof el === 'number'))

/* Задание 13 */
// let str = [123,33,444,'22',55,66,77,88,99]
// let newStr = str.push(22)
// console.log(str.filter(el => typeof el === 'number'))

/* Задание 14 */
// let str = ['null', undefined, 0, false, true, '']
// console.log(str.filter(el => el === 0 || el === false || el === true))

/* Задание 15 */
// let str = ['null', undefined, 0, false, true, '']
// console.log(str.filter((el, index) => el === 0 || el === false || el === true))

/* Задание 16 */
// let str = [1123, 'qwe'];
// str.push(1123, 'qwe')
// console.log(str)

/* Задание 17 */
// let str = [null, undefined];
// str.push(null, undefined)
// console.log(str)

/* Задание 18 */
// let str = 'lorem ipsum dolor sit amet';
// let strArray = str.split(' ')
// console.log(strArray.filter((el, index) => index === 0 || index === 2 || index === 4).join(' '))