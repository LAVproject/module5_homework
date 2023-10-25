// Массив с массивами
const arrayExerciseSix = [
    [1, 1, 1, 1, 1],
    [1, 2, 3, 4, 5]
];

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
};

// Перебираем массив с массивами
arrayExerciseSix.forEach(array => {
    // Получаем статус одинаковые ли элементы в массиве
    let identicalArrayElementsFoundStatus = array.every((element) => {
        return element === array[0];
    });

    // Выводим в консоль выбранный массив в виде строки
    console.log('arrString(array)', arrString(array))
    // Выводим в консоль статус одинаковые ли элементы в массиве
    console.log('identicalArrayElementsFoundStatus', identicalArrayElementsFoundStatus)
})