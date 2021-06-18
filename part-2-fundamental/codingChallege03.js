const Mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.9,
    BIM: function() {
        return this.mass / this.height ** 2
    }
}
const John = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    BIM: function() {
        return this.mass / this.height ** 2
    }
}

Mark.BIM() > John.BIM() ? console.log(`Mark BMI ${Mark.BIM()} is higher than John ${John.BIM()}`) :
    console.log(`Jonh BMI ${John.BIM()} is higher than Mark ${Mark.BIM()}`);
console.log(Mark.BIM());