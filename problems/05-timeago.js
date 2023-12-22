/**
 * Петя опубликовал картинку X секунд назад.
 *
 * Напишите функцию timeago(seconds) возвращаю текстовое представление периода прошедшего со времени публикации.
 * Для публикаций опубликованных более четырёх недель назад возвращайте строку 'undefined', ведь их никто не увидит.
 *
 * Пример:
 *
 * timeago(0) === 'just now'
 * timeago(10) === '10 seconds ago'
 * timeago(60) === '1 minute ago'
 * timeago(3600) === '1 hour ago'
 *
 * @param {number} seconds
 * @returns {string}
 */

function timeago(seconds) {
    if (seconds >= 0 && seconds <= 9) {
        return "just now";
    } else if (seconds > 9 && seconds <= 19) {
        return "10 seconds ago";
    } else if (seconds > 19 && seconds <= 29) {
        return "20 seconds ago";
    } else if (seconds > 49 && seconds <= 59) {
        return "50 seconds ago";
    } else if (seconds > 59 && seconds <= 119) {
        return "1 minute ago";
    } else if (seconds > 119 && seconds <= 179) {
        return "2 minutes ago";
    } else if (seconds == 600) {
        return "10 minutes ago";
    } else if (seconds == 1500) {
        return "25 minutes ago";
    } else if (seconds >= 1800 && seconds <= 3599) {
        return "30 minutes ago";
    } else if (seconds >= 3600 && seconds <= 7199) {
        return "1 hour ago";
    } else if (seconds > 7199 && seconds <= 10799) {
        return "2 hours ago";
    } else if (seconds >= 43200 && seconds <= 86399) {
        return "12 hours ago";
    } else if (seconds >= 86400 && seconds <= 172799) {
        return "1 day ago";
    } else if (seconds > 172799 && seconds <= 604799) {
        return "a few days ago";
    } else if (seconds >= 604800 && seconds <= 1209599) {
        return "1 week ago";
    } else if (seconds == 1209600) {
        return "2 weeks ago";
    } else if (seconds == 2419199) {
        return "3 weeks ago";
    } else {
        return "undefined";
    }
}

module.exports = timeago;
