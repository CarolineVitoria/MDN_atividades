// implementando herança e polimorfismo em js com recursos de antes do ECMAS2015, surportado por muitos navegadores
function Person(firstName, lastName, yearBirth, hobbies){
    this.name ={
        'firstName' :firstName,
        'lastName' : lastName
    };

    this.yearBirth = yearBirth,
    this.hobbies = hobbies;
}
let person1 = new Person('ca', 'vi', 2003, ['run', 'play']);
Person.prototype.greetings = function(){
    console.log('hi! i\'m a person');
};
console.log(person1);
function Student(firstName, lastName, yearBirth, hobbies, yearSchool){
    Person.call(this, firstName, lastName, yearBirth, hobbies);

    this.yearSchool= yearSchool;
}    
Student.prototype = Object.create(Person.prototype);
Object.defineProperty(Student.prototype, 'constructor',{ // faz com que a propriedade constructor volte a fazer referência a sua função construtora original.
    value : Student,
    enumerable: false,
    writable: true
});
Student.prototype.greetings = function(){
    return 'hi i\'m a student and i\'m in '+this.yearSchool;
}
let student1 = new Student('ma', 'lima', 2002, ['skate', 'sing'], 'high school');
console.log(student1);
console.log(student1.greetings());
console.log(Student.prototype);

