/**
 * Одной банки с краской хватает на покраску 16 квадратных метров стен офиса.
 *
 * Напишите функцию repair(width, length, height) вычисляющую минимальное количество банок краски,
 * необходимых для покраски стен в офисе. Размерами дверей и окон можно пренебречь.
 *
 * Пример:
 *
 * repair(1, 1, 3) === 1
 * repair(4, 4, 3) === 3
 * repair(4, 4, 4) === 4
 *
 * @param {number} width – ширина офиса
 * @param {number} length - длина офиса
 * @param {number} height - высота стен в офисе
 * @returns {number}
 */

function repair(width, length, height) {
    let s1 = width * height * 2;
    let s2 = length * height * 2;
    let totalSquare = s1 + s2;
    let wallPaint = totalSquare / 16;
    return Math.round(wallPaint);
}

module.exports = repair;
