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
    politicalStatus: "President", 
    age: 70, 
    cars: ["Bentley", "Benz", "Lamborgini"],
    wife: {nameWife: "Aisha", ageWife: 60, genderWife: "female", politicalStatusOfWife: "not a President"},
    children: {
        first: {name1: "Goke", age1: 35, gender1: "male"},
        second: {name2: "Sandra", age2: 30, gender2: "female"},
        third: {name3: "Mudi", age3: 25, gender3: "male"}//
    },

    wifeName: function(){
        return "My wife's name is " + this.wife.nameWife + " " + this.name;
    },

    wifeAge: function(){
        return "My wife is " + this.wife.ageWife + " " + "years old" + " , " + this.wife.genderWife;
    },

    coupleAgeDifference: function(age, ageWife){
        let ageDifference = 0;
        if (age < ageWife) {
            ageDifference = ageWife - age;
        } else {
            ageDifference = age - ageWife;
        }
        
        return this.name + " is older than " + this.wife.nameWife + " by " + ageDifference + " years.";
    
    },

    sumChildrenAges: function(age1, age2, age3){
        
            ageSummation = age1 + age2 + age3;
        
        
        return "The sum of all " + this.name  + "'s" + " children is " + " " + ageSummation + "years."; 
    }
    

};



console.log(person.wifeName());
console.log(person.wifeAge());
console.log(person.coupleAgeDifference(70, 60));
console.log(person.sumChildrenAges(35, 30, 25));





