/**
 * Реализуйте класс Validator, который будет проверять строки.
 * К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет.
 * Если является - возвращает true, если не является - то false.
 * Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена,
 * метод isDate для проверки даты и метод isPhone для проверки телефона:
 */

class Validator {
    isEmail(str) {
        const strRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return strRegex.test(str || "");
    }

    isDomain(domain) {
        const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return domainRegex.test(domain || "");
    }

    isDate(date) {
        const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
        if (!dateRegex.test(date)) {
            return false;
        }
        const parts = date.split(".");
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10);
        const year = parseInt(parts[2], 10);
        if (isNaN(day) || isNaN(month) || isNaN(year)) {
            return false;
        }
        const validDate = new Date(year, month - 1, day);
        return (
            validDate.getDate() === day &&
            validDate.getMonth() === month - 1 &&
            validDate.getFullYear() === year
        );
    }

    isPhone(phone) {
        const cleanedNumber = phone.replace(/[\s()-]/g, "");
        const regex = /^(?:\+7|8)([0-9]{10})$/;
        return regex.test(cleanedNumber);
    }
}

const validator = new Validator();

console.log(validator.isEmail("phphtml@mail.ru"));
console.log(validator.isDomain("phphtml.net"));
console.log(validator.isDate("12.05.2020"));
console.log(validator.isPhone("8 (971) 528-15-17")); //тут можете формат своей страны

module.exports = Validator;
