// 4. bind() method with example?
this.x = 5;
var obj = {
    x: 2,
    printX: function() {
        return this.x;
    }
};
var getX = obj.printX.bind(obj);
getX();


// More
var fullname = 'John Doe';
var obj = {
    fullname: 'Colin Ihrig',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
            return this.fullname;
        }
    }
};

// What will each of them log out and why?

console.log(obj.prop.getFullname());
// Outputs: Aurelio De Rosa – I'm not sure why this is. I thought that variables are scoped to the containing function. I thought that this.fullname would refer to obj.fullname because of this. Why does this.fullname refer to obj.prop.fullname?

var test = obj.prop.getFullname;
var newTest = obj.prop.getFullname.bind(obj);

console.log(test());
// Outputs: John Doe - obj.prop.getFullname is assigned to test which is called with the global context, therefore the this.fullname refers to the global var fullname = 'John Doe'

console.log(newTest());
// Outputs: Colin Ihrig - obj.prop.getFullname is assigned to newTest. The this keyword is set to obj with bind(obj), therefore this.fullname refers to obj.fullname: 'Colin Ihrig'
