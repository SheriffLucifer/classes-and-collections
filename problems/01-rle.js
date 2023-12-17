/**
 * Напишите функцию rle(value) реализующую алгоритм сжатия строки.
 *
 * Пример:
 *
 * rle('AAABC') === '3ABC'
 * rle('AAAaaB') === '3A2aB'
 *
 * @param {string} value
 * @returns {string}
 */
function rle(value) {
    // Проверка на пустую строку
    if (value === "") {
        return "";
    }

    let compressed = "";
    let count = 1;

    for (let i = 1; i < value.length; i++) {
        if (value[i] === value[i - 1]) {
            // Если текущий символ равен предыдущему, увеличиваем счетчик
            count++;
        } else {
            // Если текущий символ отличается от предыдущего, добавляем результат к сжатой строке
            compressed += (count > 1 ? count : "") + value[i - 1];
            count = 1; // Сбрасываем счетчик для нового символа
        }
    }

    // Добавляем последний символ и его количество к сжатой строке
    compressed += (count > 1 ? count : "") + value[value.length - 1];

    return compressed;
}

module.exports = rle;
