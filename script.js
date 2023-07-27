// function showCustomAlert() {
//     alert("Привет!");
// }
// showCustomAlert();

/*
теория


1. Прототипное наследование в javascript  позволяет объектам наследовать свойства и методы от других объектов через их прототипы.
огда мы обращаемся к свойству или методу объекта, javascript сначала ищет его в самом объекте, а затем, если не находит, ищет в его прототипе.

2.Когда у нас есть класс-наследник, и мы хотим определить его собственные свойства, то для этого в конструкторе класса-наследника мы
 вызываем конструктор класса-родителя с помощью super()


*/


class Employee {
    constructor(name, age, salary) {
      this._name = name;
      this._age = age;
      this._salary = salary;
    }
  
    get name() {
      return this._name;
    }
  
    get age() {
      return this._age;
    }
  
    get salary() {
      return this._salary;
    }
  
    set salary(newSalary) {
      this._salary = newSalary;
    }
  }
  
  class Programmer extends Employee {
    constructor(name, age, salary, lang) {
      super(name, age, salary);
      this._lang = lang;
    }
  
    get salary() {
      return this._salary * 3;
    }
  }
  

  const programmer1 = new Programmer("John", 30, 50000, ["JavaScript", "Python"]);
  const programmer2 = new Programmer("Anna", 25, 60000, ["Java", "C++"]);
  

  console.log(programmer1);
  console.log(programmer2);
  
  