// Создаем произвольный массив Map
const sundries = new Map([['andrew', 'name'], [5, 'index'], [true, 'boolean']]);

// Запишем новое свойство
sundries.set('greenfield', 'tea')

// Переберем массив с помощью forEach
sundries.forEach((value, key) => {
    // Выводим в консоль все значения в виде «Ключ — Х, значение — Y»
    console.log(`Ключ — ${key}, значение — ${value}`);
});