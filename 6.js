// Массив с одинаковыми элементами
const array = [1, 1, 1, 1, 1];

// Получаем статус одинаковые ли элементы в массиве
let identicalArrayElementsFoundStatus = array.every((element) => {
    return element === array[0];
});

// Выводим в консоль статус одинаковые ли элементы в массиве
console.log('identicalArrayElementsFoundStatus', identicalArrayElementsFoundStatus)