/**

 * Описание задачи: Напишите функцию, которая поверхностно сравнивает два объекта.
 * Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
 * @param {Object<string | number>} firstObject - объект с примитивами
 * @param {Object<string | number>} secondObject - объект с примитивами
 * @returns {boolean}
 */

const isEqual = (firstObject, secondObject) => {
    // Получаем массив ключей из каждого объекта
    const keysFirst = Object.keys(firstObject);
    const keysSecond = Object.keys(secondObject);

    // Проверка на равное количество свойств в объектах
    if (keysFirst.length !== keysSecond.length) {
        return false;
    }

    // Проверка на идентичность значений свойств
    for (const key of keysFirst) {
        if (firstObject[key] !== secondObject[key]) {
            return false;
        }
    }

    return true;
};

const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };
console.log(isEqual(data, data2)); // true
console.log(isEqual(data, data3)); // false
