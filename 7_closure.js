// 7. Clousure 

var funcs = [];
for (var i = 0; i < 3; i++) {      
    funcs[i] = function() {    
        console.log("My value: " + j);
    };
}
for (var j = 0; j < 3; j++) {
    funcs[j]();                      
}

// Will this log out 0,1,2? If not, how will you modify it to log out 0,1,2?

// This was tricky. The first loop assigns the function to log i into funcs[0,1,2]. The problem is that in the second loop when it calls these functions referring to the i variable is already at 3. Changing the console.log statement to print the j variable makes this work when iterating through the second loop when j goes from 0 to 2