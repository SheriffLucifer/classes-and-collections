/**
 * Сара пишет сложные клиентские приложения на ангуляре. Поэтому ей часто приходится создавать и модифицировать сервисы.
 * Сервисы могут использовать другие сервисы. Однако они не должны быть взаимозависимыми.
 *
 * Напишите функцию которая определяет есть ли цикличная зависимость между сервисами в проекте Сары.
 * Зависимости описаны объектом, ключи которого являются именами сервисов, а значения—это сервисы-зависимости.
 *
 * Пример:
 *
 * hasCircularDependency({
 *  http: [],
 *  apiClient: ['http'],
 * }) === false
 *
 * hasCircularDependency({
 *  http: ['dogsApi'],
 *  apiClient: ['http'],
 *  dogsApi: ['apiClient'],
 * }) === true
 *
 * @param {Object.<string, Array.<string>>} servicesMap
 * @returns {boolean}
 */

function hasCircularDependency(servicesMap) {
    // Множество для отслеживания посещенных сервисов
    const visited = new Set();

    // Вспомогательная функция для проверки наличия циклических зависимостей
    function hasCycle(service, ancestors) {
        // Помечаем текущий сервис как посещенный
        visited.add(service);

        // Перебираем зависимости текущего сервиса
        for (const dependency of servicesMap[service] || []) {
            // Если зависимость еще не посещена
            if (!visited.has(dependency)) {
                // Рекурсивно проверяем зависимость
                if (hasCycle(dependency, ancestors.concat(service))) {
                    return true;
                }
            } else if (
                ancestors.includes(dependency) ||
                service === dependency
            ) {
                // Если зависимость уже посещена и она является предком текущего сервиса
                // или зависимость равна текущему сервису, то существует циклическая зависимость.
                return true;
            }
        }

        return false;
    }

    // Перебираем все сервисы в servicesMap
    for (const service in servicesMap) {
        // Если сервис еще не посещен и есть циклическая зависимость, возвращаем true
        if (!visited.has(service) && hasCycle(service, [])) {
            return true;
        }
    }

    return false;
}

module.exports = hasCircularDependency;
