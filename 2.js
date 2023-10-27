// Переменная принимающая любое значение
const x = 10

// Проверяем X на тип данных
switch (typeof x) {
    // Число
    case 'number':
        // Выводим в консоль сообщение о выбранном типе данных
        console.log('x — число');
        break;

    // Строка
    case 'string':
        // Выводим в консоль сообщение о выбранном типе данных
        console.log('x — строка');
        break;

    // Логический тип
    case 'boolean':
        // Выводим в консоль сообщение о выбранном типе данных
        console.log('x — логический тип');
        break;

    default:
        // Выводим в консоль сообщение о выбранном типе данных
        console.log('Тип x не определен');
}