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

    let compressedString = "";
    let count = 1;

    for (let i = 1; i < value.length; i++) {
        if (value[i] === value[i - 1]) {
            // Если текущий символ равен предыдущему, увеличиваем счетчик
            count++;
        } else {
            // Если текущий символ отличается от предыдущего, добавляем результат к сжатой строке

            // Если количество повторяющихся символов больше 1,
            if (count > 1) {
                // добавляем количество повторений и символ к сжатой строке
                compressedString += count + value[i - 1];
            } else {
                // добавляем только текущий символ к сжатой строке
                compressedString += value[i - 1];
            }
            count = 1; // Сбрасываем счетчик для нового символа
        }
    }

    // Добавляем последний символ и его количество к сжатой строке
    compressedString += (count > 1 ? count : "") + value[value.length - 1];

    return compressedString;
}

module.exports = rle;
