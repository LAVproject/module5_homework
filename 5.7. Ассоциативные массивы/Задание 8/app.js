// Создаем произвольный массив Map
const sundries = new Map([['andrew', 'name'], [5, 'index'], [true, 'boolean']]);

// Запишем новое свойство
sundries.set('greenfield', 'tea')

// Получим ключи
let keys = sundries.keys()

// Выведем ключи в консоль
console.log('keys', keys)

// Переберем массив с помощью forEach, хотя в лекции "5.7. Ассоциативные массивы" говорят что так не получится сделать и приводят абсурдный пример, запихивая forEach внутрь console.log, когда forEach не умеет ничего возвращать. Он и с обычным массивом вернет undefined в таком случае.
sundries.forEach((value, key) => {
    // Выводим в консоль все значения в виде «Ключ — Х, значение — Y»
    console.log(`Ключ — ${key}, значение — ${value}`);
});
