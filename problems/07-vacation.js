/**
 * Лена планирует свой двухнедельный отпуск.
 *
 * Напишите функцию vacation(date) вычисляющую день следующий за отпуском Лены
 *
 * Примечание: вместо ручного подсчета используй класс Date и его методы
 *
 * Пример:
 *
 * vacation('01.01.2020') === '15.01.2020'
 * vacation('27.01.2020') === '10.02.2020'
 *
 * @param {string} date
 * @returns {string}
 */

function vacation(date) {
    // Шаг 1: Разбиваем строку даты на массив частей, используя точку в качестве разделителя
    const parts = date.split(".");

    // Шаг 2: Извлекаем день, месяц и год из массива
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Месяцы в объекте Date начинаются с 0
    const year = parseInt(parts[2], 10);

    // Шаг 3: Создаем объект Date с извлеченными значениями дня, месяца и года
    const currentDate = new Date(year, month, day);

    // Шаг 4: Устанавливаем текущую дату на конец отпуска (14 дней позже)
    currentDate.setDate(currentDate.getDate() + 14);

    // Шаг 5: Получаем день и месяц на следующий день после отпуска
    const nextDay = currentDate.getDate();
    const nextMonth = currentDate.getMonth() + 1;

    // Шаг 6: Формируем строку с датой
    let result = "";

    // Шаг 7: Проверяем день и добавляем "0" при необходимости
    if (nextDay < 10) {
        result += "0";
    }
    result += nextDay + ".";

    // Шаг 8: Проверяем месяц и добавляем "0" при необходимости
    if (nextMonth < 10) {
        result += "0";
    }
    result += nextMonth + ".";

    // Шаг 9: Добавляем год
    result += currentDate.getFullYear();

    return result;
}

module.exports = vacation;
