console.log("Shaon")            // to print anything.....

// declare variables....

const accountId = 12345                 // can't change in future...
let name = "Shaon"                      // for string....
let age = 22                            // for number....


console.log(accountId)
console.log(name)
console.log(age);

console.table([accountId,name,age]);

                                                                        // output will be liked this for console.table().....
                                                                        /*
                                                                        ┌─────────┬─────────┐
                                                                        │ (index) │ Values  │
                                                                        ├─────────┼─────────┤
                                                                        │ 0       │ 12345   │
                                                                        │ 1       │ 'Shaon' │
                                                                        │ 2       │ 22      │


                                                                        */



let name1 = "Shaon"                      // for string....
let age1 = 22    
let id;
let flag=true
let temp=null

console.log(typeof name1);                      // type  string
console.log(typeof age1);                       // type number
console.log(typeof id);                         // type undefine
console.log(typeof flag);                       // type boolean
console.log(typeof temp);                       // type object (importent.................)
