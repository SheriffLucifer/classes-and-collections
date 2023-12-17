/**

 * Описание задачи: Напишите функцию, которая вызывает метод массива на заданный путь объекта.
 * Ожидаемый результат: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]
 * @param {Object} object
 * @param {String} path - путь в объекте
 * @param {String} func - метод массива для исполнения
 * @param {Array} [args] - список аргументов
 * @returns {?}
 */

const invoke = (object, path, func, args) => {
    // Разбиваем строку path на массив ключей
    const keys = path.split(".");

    // Проходим по массиву ключей, чтобы достичь нужного свойства в объекте
    let current = object;
    for (const key of keys) {
        if (current.hasOwnProperty(key)) {
            current = current[key];
        } else {
            // Если свойство отсутствует, возвращаем исходное значение объекта
            return object;
        }
    }

    // Проверяем, является ли свойство массивом и вызываем указанный метод с аргументами
    if (Array.isArray(current) && typeof current[func] === "function") {
        return current[func](...args); // Возвращаем результат вызова метода
    } else if (func === "includes" && typeof current === "string") {
        return current.includes(...args); // Обрабатываем метод includes для строк
    } else if (func === "hasOwnProperty" && typeof current === "object") {
        return current.hasOwnProperty(...args); // Возвращаем результат вызова метода hasOwnProperty для объекта
    }

    return current;
};

const data = { a: { b: [1, 2, 3] } };
console.log(invoke(data, "a.b", "splice", [1, 2])); // [2, 3]

module.exports = invoke;
