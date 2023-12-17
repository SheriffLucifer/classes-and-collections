/**

 * Описание задачи: Напишите функцию, которая глубоко находит пересечения объектов и возвращает объект пересечений.
 * Ожидаемый результат: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }
 * @param {Object} firstObject - объект любых значений
 * @param {Object} secondObject - объект любых значений
 * @returns {Object}
 */

const intersectionDeep = (firstObject, secondObject) => {
    const result = {};

    // Проверяем, что secondObject не является undefined или null
    if (secondObject === undefined || secondObject === null) {
        return result;
    }

    for (const key in firstObject) {
        // Проверяем, что secondObject имеет свойство key
        if (secondObject.hasOwnProperty && secondObject.hasOwnProperty(key)) {
            if (
                typeof firstObject[key] === "object" &&
                typeof secondObject[key] === "object" &&
                firstObject[key] !== null &&
                secondObject[key] !== null
            ) {
                // Рекурсивный вызов для глубоких пересечений
                const deepIntersect = intersectionDeep(
                    firstObject[key],
                    secondObject[key]
                );

                // Если есть глубокие пересечения, добавляем их к результату
                if (Object.keys(deepIntersect).length > 0) {
                    result[key] = deepIntersect;
                }
            } else if (
                firstObject[key] === secondObject[key] ||
                (firstObject[key] === null && secondObject[key] === null)
            ) {
                // Если значения совпадают или оба значения равны null, добавляем их к результату
                result[key] = firstObject[key];
            }
        }
    }

    return result;
};

const data = { a: 1, b: { c: 3 } };
const data2 = { c: 1, b: { c: 3 } };
console.log(intersectionDeep(data, data2)); // { b: { c: 3 } }

module.exports = intersectionDeep;
