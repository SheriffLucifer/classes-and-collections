/**
 * Строка со скобками считается валидной, если на каждую закрывающую скобку имеется ранее открытая
 * и на каждую ранее открытую имеется закрывающая.
 *
 * Напишите функцию parentheses(value) проверяющую строку со скобками на валидность.
 *
 * Пример:
 *
 * parentheses('') === false
 * parentheses('()()') === true
 * parentheses('(()())') === true
 * parentheses('(()') === false
 * parentheses(')') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function parentheses(value) {
    if (value === "") {
        return false;
    }

    const stack = [];

    for (let char of value) {
        if (char === "(") {
            stack.push(char);
        } else if (char === ")") {
            if (stack.length === 0 || stack.pop() !== "(") {
                return false;
            }
        }
    }

    // Стек должен быть пустым в конце, если все скобки сбалансированы
    return stack.length === 0;
}

module.exports = parentheses;
