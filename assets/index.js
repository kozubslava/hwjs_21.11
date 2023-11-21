// Зробити функцію-контсруктор для сутності Користувач (User).
// У користувача мають бути наступні властивості:
// ім'я
// прізвище
// стать (чоловіча або жіноча)
// кількість повідомлень
// У користувача мають бути такі методи:
// Метод для отримання всіх даних про користувача у рядку (Коистувач такий-то такої-то статі написав стількі-то повідомлень). У кожного користувача метод має повертати саме його дані
// // Метод написання нового повідомлення. Має приймати повідомлення т повертати рядок (Користувач такий-то написав текстПовідомлення). Також має збільшувати кількість повідомлень.




function User(name, surname, sex, messagesCount) {
  this.name = name;
  this.surname = surname;
  this.sex = sex;
  this.messagesCount = messagesCount;



  this.printUserData = function () {
    return (
      "Користувач " +
      this.name +
      ' ' +
      this.surname +
      ", стать: " +
      this.sex +
      ', написав: ' +
      this.messagesCount +
      ' повідомлень.'
    );
  };
  this.addMessage = function (text) {
    this.messagesCount++
    return (
      "Користувач " +
      this.name +
      ' ' +
      this.surname +
      ', написав: ' +
      text
    );
  };
}

const User1 = new User(
  "Dima",
  "Pasechnik",
  "male",
  30
  

)

console.log(User1.printUserData());
console.log(User1.addMessage("i love JS"));
console.log(User1.printUserData());
console.log(User1.addMessage("i love DP"));
console.log(User1.printUserData());

