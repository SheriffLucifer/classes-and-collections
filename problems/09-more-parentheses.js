/**
 * Ранее мы уже решали задачу валидации последовательности скобок в строке.
 *
 * На этот раз напишите функцию parentheses(value) валидирующую строку с несколькими типами скобок.
 *
 * Пример:
 *
 * parentheses('<>') === true
 * parentheses('<}') === false
 *
 * @param {string} value – строка из набора символов (, ), {, }, <, >.
 * @returns {boolean}
 */

function parentheses(value) {
    if (value === "") {
        return false;
    }

    const stack = [];
    const brackets = {
        "(": ")",
        "{": "}",
        "<": ">",
    };

    for (let char of value) {
        if (brackets[char]) {
            // Если символ - открывающая скобка, помещаем ее в стек
            stack.push(char);
        } else {
            // Если символ - закрывающая скобка
            const lastBracket = stack.pop();

            // Проверяем соответствие закрывающей скобки последней открывающей
            if (brackets[lastBracket] !== char) {
                return false;
            }
        }
    }

    // Проверяем, что все открывающие скобки имеют закрывающие
    return stack.length === 0;
}

module.exports = parentheses;
