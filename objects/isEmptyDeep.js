/**

 * Описание задачи: Напишите функцию, которая делает глубокую проверку на пустоту объекта.
 * Пустые значения: '', null, NaN, undefined, [], {}
 * Ожидаемый результат: ({}) => true,
 ({ a: { b: undefined } }) => true,
 ({ a: { b: [] } }) => true
 * @param {Object} object - любой объект
 * @returns {boolean}
 */

const isEmptyDeep = (object) => {
    // Рекурсивная проверка для каждого свойства объекта
    for (const key in object) {
        // Проверка на наличие свойства в объекте
        if (object.hasOwnProperty(key)) {
            // Если текущее свойство является объектом, вызываем функцию для него
            if (typeof object[key] === "object" && object[key] !== null) {
                // Рекурсивный вызов функции для вложенного объекта
                if (!isEmptyDeep(object[key])) {
                    return false; // Если вложенный объект не пуст, возвращаем false
                }
            } else if (
                object[key] !== undefined &&
                object[key] !== "" &&
                object[key] !== null
            ) {
                return false;
            }
        }
    }

    return true;
};

const data = { a: { b: undefined } };
const data2 = { a: { b: 1 } };
console.log(isEmptyDeep(data)); // true
console.log(isEmptyDeep(data2)); // false
