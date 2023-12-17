/**
 * Hex и RGB - текстовые форматы для представления цвета в коде.
 *
 * Напишите функцию hexToRgb(color) конвертирующую цвет закодированный в формате HEX
 * в RGB кодированную строку.
 *
 * Пример:
 *
 * hexToRgb('#000000') === 'rgb(0, 0, 0)'
 * hexToRgb('#fff') === 'rgb(255, 255, 255)'
 * hexToRgb('#800080') === 'rgb(128, 0, 128)'
 *
 * @param {string} color
 * @returns {string}
 */
function hexToRgb(color) {
    // Удаляем символ # из начала строки, если он присутствует
    color = color.replace("#", "");

    // Расширяем сокращенную запись HEX до полной записи
    if (color.length === 3) {
        color = color
            .split("")
            .map((char) => char + char)
            .join("");
    }

    // Разбиваем строку на три части для каждого цветового канала (R, G, B)
    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);

    // Возвращаем строку в формате RGB
    return `rgb(${r}, ${g}, ${b})`;
}

module.exports = hexToRgb;
