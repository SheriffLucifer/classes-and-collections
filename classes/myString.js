/**
 * Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
 * который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(),
 * который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords,
 * который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */

class MyString {
    reverse(str) {
        if (!str) return str;
        if (str.length === 0) return "";
        return str.split("").reverse().join("");
    }

    ucFirst(str) {
        if (!str) return str;
        if (str.length === 0) return "";
        return str.trim().charAt(0).toUpperCase() + str.trim().slice(1);
    }

    ucWords(str) {
        if (!str) return str;
        if (str.length === 0) return "";
        return str
            .trimLeft()
            .split(/\s+/)
            .map((word) => this.ucFirst(word))
            .join(" ");
    }
}

const str = new MyString();

console.log(str.reverse("abcde")); //выведет 'edcba'
console.log(str.ucFirst("abcde")); //выведет 'Abcde'
console.log(str.ucWords("abcde abcde abcde")); //выведет 'Abcde Abcde Abcde'

module.exports = MyString;
