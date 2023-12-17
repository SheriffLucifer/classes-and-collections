/**

 * Описание задачи: Напишите функцию, которая делает глубокое сравнение объектов.
 * Ожидаемый результат: True если объекты идентичны ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true
 * @param {Object} firstObj - Объект с любыми значениями
 * @param {Object} secondObj - Объект с любыми значениями
 * @returns {boolean}
 */
const isEqualDeep = (firstObj, secondObj) => {
    if (typeof firstObj !== "object" || typeof secondObj !== "object") {
        return firstObj === secondObj; // Используем строгое сравнение для примитивов
    }

    const keysFirstObj = Object.keys(firstObj);
    const keysSecondObj = Object.keys(secondObj);

    if (keysFirstObj.length !== keysSecondObj.length) {
        return false;
    }

    for (let key of keysFirstObj) {
        if (!isEqualDeep(firstObj[key], secondObj[key])) {
            return false;
        }
    }

    return true;
};
const data = { a: 1, b: { c: 1 } };
const data2 = { a: 1, b: { c: 1 } };
const data3 = { a: 1, b: { c: 2 } };
console.log(isEqualDeep(data, data2)); // true
console.log(isEqualDeep(data, data3)); // false
