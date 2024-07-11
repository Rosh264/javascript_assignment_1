var student = {
    sname: 'Roshan' ,
    age: 20,
    isPassed: false,
    greet: function ()
    {
        console.log("welcome to objects " + this.sname);
    }
}
console.log(student.greet());
student.age = 30;
console.log(student.age);

//write a code to create an object of a car who has the properties called manufacturer, model name, year, price   
//its should have 2 function start and stop engine and has to display message "a car which is manufactured by manufacturer name"