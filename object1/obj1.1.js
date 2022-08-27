// herança e polimorfismo usando a sintexe de classes
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    greetings(){
        return 'hi i\'m a person';
    }
}
class Teacher extends Person{
    constructor(firstName, lastName, age, subject){
        super(firstName, lastName, age);

        this.subject = subject;
    }
    greetings(){
        return`hi i\'m a teacher and my subject is ${this.subject}`;
    }
    get subject(){
        return this._subject;
    }
    set subject(newSubject){
        this._subject= newSubject;
    }
}
let teacher1 = new Teacher('sandara', 'park', '34', 'math');
console.log(teacher1);
console.log(teacher1.greetings());
teacher1.subject = 'newValue';
console.log(teacher1.subject);