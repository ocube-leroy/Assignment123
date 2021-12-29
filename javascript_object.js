/*Create the object data for this information below and save in a person variable.
Hint: Use object properties(each property of the object could be a string, number, 
array or even another sub-object) and object methods.
Hint:
const person = {
    name: etc etc….
};
- The person’s name is Buhari.
- His gender is male.
- He is a President.
- He is 70 years old.
- He has a Bentley, a Benz and a Lamborgini.
- He can say his wife’s name when asked to (Hint: this keyword, also “when asked to” 
means when the method to say wife’s name is called/invoked - use console.log).

- He has a wife whose name is Aisha
- His wife is 60 years old
- Her gender is female
- She is not a President.

- He has 3 children
- The children arranged from the first to last:
- Goke, 35 years, male
- Sandra, 30 years, female
- Mudi, 25 years, male

- By how many years is Buhari older than his wife (I want to be able to change his age and his wife’s age 
and the new difference will still be correct. Use console.log() to log the difference)?
- What is the sum of all his children’s ages (I also want to be able to change the children’s ages and the 
new sum will still be correct. Use console.log() to log the sum too)? */

const person = {
    name: "Buhari", 
    gender: "male", 
    isPresident: true, 
    age: 70, 
    cars: ["Bentley", "Benz", "Lamborgini"],
    wife: {name: "Aisha", age: 60, gender: "female", isPresident: false},
    children: [
        {first: {name: "Goke", age: 35, gender: "male"}},
        {second: {name: "Sandra", age: 30, gender: "female"}},
        {third: {name: "Mudi", age: 25, gender: "male"}}
    ],
    

    getMyName: function(){
        return "My name is " + this.name + " and my gender is " + this.gender + ".";
    },

    getMyPoliticalStatus: function(){
        let isPresident = 0;
        if (isPresident !== false) {
            return "I am a President.";
        }
    },

    getMyAge: function(){
        return "I am " + this.age + " years old.";
    },

    getMyCars: function(){
        return "I have a " + this.cars[0] +  ", a " + this.cars[1] + ", and a " + this.cars[2] + ".";
    },

    getWifeName: function(){
        return "My wife's name is " + this.wife.name + " " + this.name + ".";
    },

    getWifeAge: function(){
        return "My wife is " + this.wife.age + " " + "years old" + " and a " + this.wife.gender + ".";
    },

    getMyWifePoliticalStatus: function(){
        let isPresident = 0;
        if (isPresident !== true) {
            return  this.wife.name + " is not a President.";
        }
    },

    getNumberOfChildren: function(){
        return this.wife.name + " and I have " + this.children.length + " children.";
    },

    getFirstChildProfile: function(){
        return this.children[0].first.name + " is" + " " + this.children[0].first.age + "years" + " and a " + this.children[0].first.gender + ".";
    },

    getSecondChildProfile: function(){
        return this.children[1].second.name + " is" + " " + this.children[1].second.age + "years" + " and a " + this.children[1].second.gender + ".";
    },

    getThirdChildProfile: function(){
        return this.children[2].third.name + " is" + " " + this.children[2].third.age + "years" + " and a " + this.children[2].third.gender + ".";
    },

    getCoupleAgeDifference: function(){
        let ageDifference = 0;
        if (this.age < this.wife.age) {
            ageDifference = this.wife.age - this.age;
        } else {
            ageDifference = this.age - this.wife.age;
        }
        
        return this.name + " is older than " + this.wife.name + " by " + ageDifference + " years.";
    
    },

    getSumChildrenAges: function(){
        
            ageSummation = this.children[0].first.age + this.children[1].second.age + this.children[2].third.age;
        
        
        return "The sum of all the ages of " + this.name  + "'s" + " children is " + " " + ageSummation + "years."; 
    }
    

};


console.log(person.getMyName());
console.log(person.getMyPoliticalStatus());
console.log(person.getMyAge());
console.log(person.getMyCars());
console.log(person.getWifeName());
console.log(person.getWifeAge());
console.log(person.getMyWifePoliticalStatus());
console.log(person.getNumberOfChildren());
console.log(person.getFirstChildProfile());
console.log(person.getSecondChildProfile());
console.log(person.getThirdChildProfile());
console.log(person.getCoupleAgeDifference(70, 60));
console.log(person.getSumChildrenAges(35, 30, 25));





