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
    const visited = new Set();

    function hasCycle(service, ancestors) {
        visited.add(service);

        for (const dependency of servicesMap[service] || []) {
            if (!visited.has(dependency)) {
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

    for (const service in servicesMap) {
        if (!visited.has(service) && hasCycle(service, [])) {
            return true;
        }
    }

    return false;
}

module.exports = hasCircularDependency;
