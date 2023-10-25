// Массив с данными
const data = [10, 'Александр', true, undefined]

// Переберем массив с данными
data.forEach(value => {
        // Переменная принимающая любое значение
        const x = value
        // Сообщения для типов данных
        const message = {
            number: 'x — число',
            string: 'x — строка',
            boolean: 'x — логический тип',
            undefined: 'Тип x не определен'
        }

        // Проверяем X на тип данных
        if (typeof x === 'number') {
            // Выводим в консоль сообщение о выбранном типе данных
            console.log(message.number);
        }
        else if (typeof x === 'string') {
            // Выводим в консоль сообщение о выбранном типе данных
            console.log(message.string);
        }
        else if (typeof x === 'boolean') {
            // Выводим в консоль сообщение о выбранном типе данных
            console.log(message.boolean);
        }
        else {
            // Выводим в консоль сообщение о выбранном типе данных
            console.log(message.undefined);
        }
    })