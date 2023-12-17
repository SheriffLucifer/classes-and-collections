/**
 * Напишите функцию flatten(array) которая делает вложенный массив плоским
 *
 * Пример:
 *
 * flatten([1, [2, 3]]) === [1, 2, 3]
 * flatten([1, [2, [3, 4]]]) === [1, 2, 3, 4]
 *
 * @param {Array.<number|[]>} array
 * @returns {number[]}
 */

function flatten(array) {
    let result = [];

    array.forEach((element) => {
        if (Array.isArray(element)) {
            // Рекурсивно вызываем flatten для вложенного массива
            result = result.concat(flatten(element));
        } else {
            // Если элемент не массив, добавляем его в результат
            result.push(element);
        }
    });

    return result;
}

module.exports = flatten;
