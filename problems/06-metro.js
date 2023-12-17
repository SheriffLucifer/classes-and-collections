/**
 * Витя из дома до работы добирается по кольцевой линии метро.
 *
 * Напишите функцию metro(x,y) вычисляющую минимальное количество промежуточных станций
 * (не считая станции посадки и высадки), которые необходимо проехать Вите,
 * если на кольцевой линии 13 станций.
 *
 * Пример:
 *
 * metro(1, 2) === 0
 * metro(1, 3) === 1
 * metro(13, 1) === 0
 * metro(1, 13) === 0
 *
 * @param {number} x – станция посадки
 * @param {number} y - станция высадки
 * @returns {number}
 */
function metro(x, y) {
    const totalStations = 13;

    // Шаг 1: Находим абсолютное значение разницы между станциями посадки и высадки
    let minIntermediateStations = Math.abs(x - y);

    // Шаг 2: Проверяем, находится ли станция высадки ближе к станции посадки чем половина общего числа станций
    if (minIntermediateStations <= totalStations / 2) {
        // Шаг 3: Если да, уменьшаем количество промежуточных станций на 1
        minIntermediateStations = minIntermediateStations - 1;
    } else {
        // Шаг 4: Если нет, пересчитываем количество промежуточных станций в обратном направлении
        minIntermediateStations = totalStations - minIntermediateStations - 1;
    }

    return minIntermediateStations;
}

module.exports = metro;
