/**

 * Описание задачи: Напишите функцию, которая возвращает новый объект без указанных значений.
 * Ожидаемый результат: ({ a: 1, b: 2 }, 'b') => { a: 1 }
 * @param {Object} object - любой объект
 * @param {?} args - список значений для удаления
 * @returns {Object} - новый объект без удаленных значений
 */

const without = (object, ...args) => {
    // Создаем копию исходного объекта
    const resultObject = { ...object };

    // Проходимся по переданным ключам
    for (const key of args) {
        // Проверяем, существует ли свойство с таким ключом
        if (resultObject.hasOwnProperty(key)) {
            // Если существует, удаляем свойство с помощью оператора delete
            delete resultObject[key];
        }
    }

    // Возвращаем новый объект без удаленных свойств
    return resultObject;
};

const data = { a: 1, b: 2, c: 3 };
console.log(without(data, "b", "c")); // { a: 1 }
