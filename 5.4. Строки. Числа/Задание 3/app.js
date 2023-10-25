// Массив с данными
const data = [100500, 'Александр', 'шалаш']

// Переберем массив с данными
data.forEach(value => {
    // Получаем перевернутую строку
    const reverseString = value.toString().split("").reverse().join("");
    // Выводим перевернутую строку в консоль
    console.log('reverseString', reverseString)
})