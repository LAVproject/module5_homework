// Массив
const array = [3, 7, true, 0, 7, 6, 4, 10, null, 5, 7, 0, 5, 2, 9, 2, undefined];
// Функция собирает массив в виде строки
const arrString = (array) => {
    // Временный элемент куда будем собирать строку
    let tempString
    // Перебираем выбранный массив
    array.forEach((element, i) => {
        // Проверка на пустую строку
        if (tempString) {
            // Проверка на последний элемент массива
            if (i === array.length - 1) {
                tempString = tempString + ', ' + element + ']'
            }
            // Средние элементы массива
            else {
                tempString = tempString + ', ' + element
            }
        }
        // Первый элемент массива
        else {
            tempString = '[' + element
        }
    })
    // Возвращаем собранную строку
    return tempString
}

// Четных элементов
let evenCount = 0;
// Нечетный элементов
let oddCount = 0;
// Нулевых элементов
let zeroCount = 0;

// Считаем сколько элементов четных/нечетных/нулевых
array.forEach((element) => {
    // Проверка на число
    if (typeof element === "number" && !isNaN(element)) {
        // Проверка на нулевой элемент
        if (element === 0) {
            zeroCount++;
        }
        // Проверка на четный элемент
        else if (element % 2 === 0) {
            evenCount++;
        }
        // Нечетный элемент
        else {
            oddCount++;
        }
    }
})

// Выводим в консоль выбранный массив в виде строки
console.log('arrString(array)', arrString(array))
// Выводим количество четных элементов
console.log('evenCount', evenCount)
// Выводим количество нечетных элементов
console.log('oddCount', oddCount)
// Выводим количество нулевых элементов
console.log('zeroCount', zeroCount)
