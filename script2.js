class Person {
    constructor(firstName, lastName, age, gender, occupation) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.occupation = occupation;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getAge() {
      return this.age;
    }
  
    getGender() {
      return this.gender;
    }
  
    getOccupation() {
      return this.occupation;
    }
  }
  var details = new Person('charle', 'marks', 24, 'male', 'doctor');
  console.log(details.getFullName()); 
  console.log(details.getAge()); 
  console.log(details.getGender()); 
  console.log(details.getOccupation()); 
  
  