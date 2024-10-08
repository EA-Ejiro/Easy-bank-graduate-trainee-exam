let questions = [
    {
        numb: 1,
        question: "What does 'NaN' stand for in JavaScript?",
        options: ["Not a Number", "Not a Null", "New Array Number", "None Available Now"],
        answer: "Not a Number"
    },
    {
        numb: 2,
        question: "Which method is used to parse a string into an integer?",
        options: ["parseFloat()", "parseInt()", "toInteger()", "convertToInt()"],
        answer: "parseInt()"
    },
    {
        numb: 3,
        question: "How do you create a new array in JavaScript?",
        options: ["new Array()", "Array.create()", "[]", "Array.new()"],
        answer: "[]"
    },
    {
        numb: 4,
        question: "What will be the output of 'typeof NaN'?",
        options: ["number", "NaN", "undefined", "object"],
        answer: "number"
    },
    {
        numb: 5,
        question: "What is the result of '0 == false' in JavaScript?",
        options: ["true", "false", "undefined", "NaN"],
        answer: "true"
    },
    {
        numb: 6,
        question: "Which keyword is used to define a variable that cannot be reassigned?",
        options: ["const", "let", "var", "static"],
        answer: "const"
    },
    {
        numb: 7,
        question: "How do you declare a function in JavaScript?",
        options: ["function myFunction() {}", "function:myFunction() {}", "myFunction = function() {}", "function = myFunction() {}"],
        answer: "function myFunction() {}"
    },
    {
        numb: 8,
        question: "What will be the output of '2 + 2 * 2'?",
        options: ["8", "6", "4", "10"],
        answer: "6"
    },
    {
        numb: 9,
        question: "What does the 'this' keyword refer to in a method?",
        options: ["The global object", "The object itself", "The parent object", "The previous object"],
        answer: "The object itself"
    },
    {
        numb: 10,
        question: "What method is used to remove the last element from an array?",
        options: ["pop()", "shift()", "remove()", "delete()"],
        answer: "pop()"
    },
    {
        numb: 11,
        question: "Which method adds one or more elements to the end of an array?",
        options: ["push()", "unshift()", "concat()", "splice()"],
        answer: "push()"
    },
    {
        numb: 12,
        question: "How can you check if a variable is an array?",
        options: ["Array.isArray(variable)", "typeof variable === 'array'", "variable.isArray()", "variable instanceof Array"],
        answer: "Array.isArray(variable)"
    },
    {
        numb: 13,
        question: "What is the result of '5 == '5''?",
        options: ["true", "false", "undefined", "NaN"],
        answer: "true"
    },
    {
        numb: 14,
        question: "Which operator is used for string concatenation?",
        options: ["+", "-", "*", "/"],
        answer: "+"
    },
    {
        numb: 15,
        question: "How do you add a comment in JavaScript?",
        options: ["// comment", "/* comment */", "<!-- comment -->", "## comment"],
        answer: "// comment"
    },
    {
        numb: 16,
        question: "What will 'typeof []' return?",
        options: ["object", "array", "list", "undefined"],
        answer: "object"
    },
    {
        numb: 17,
        question: "How can you prevent a function from being executed immediately?",
        options: ["Use setTimeout()", "Use a closure", "Use a callback", "Use a Promise"],
        answer: "Use a closure"
    },
    {
        numb: 18,
        question: "Which function is used to serialize an object into a JSON string?",
        options: ["JSON.stringify()", "JSON.parse()", "JSON.toString()", "object.toJSON()"],
        answer: "JSON.stringify()"
    },
    {
        numb: 19,
        question: "What will be the output of '0 === false'?",
        options: ["false", "true", "undefined", "NaN"],
        answer: "false"
    },
    {
        numb: 20,
        question: "Which method removes the first element from an array?",
        options: ["shift()", "pop()", "splice()", "slice()"],
        answer: "shift()"
    },
    {
        numb: 21,
        question: "What is the result of 'null == undefined'?",
        options: ["true", "false", "undefined", "NaN"],
        answer: "true"
    },
    {
        numb: 22,
        question: "How do you define a class in JavaScript ES6?",
        options: ["class MyClass {}", "MyClass class {}", "define class MyClass {}", "create class MyClass {}"],
        answer: "class MyClass {}"
    },
    {
        numb: 23,
        question: "What is the result of '[] == []'?",
        options: ["false", "true", "undefined", "NaN"],
        answer: "false"
    },
    {
        numb: 24,
        question: "Which keyword is used to handle errors in JavaScript?",
        options: ["catch", "error", "throw", "try"],
        answer: "catch"
    },
    {
        numb: 25,
        question: "How can you create an object in JavaScript?",
        options: ["let obj = {}", "let obj = new Object()", "let obj = Object.create()", "All of the above"],
        answer: "All of the above"
    },
    {
        numb: 26,
        question: "What will be the output of 'console.log(1 + '1')'?",
        options: ["11", "2", "undefined", "NaN"],
        answer: "11"
    },
    {
        numb: 27,
        question: "Which method is used to return the length of an array?",
        options: ["length", "size", "count", "length()"],
        answer: "length"
    },
    {
        numb: 28,
        question: "What will be the output of 'Boolean('false')'?",
        options: ["true", "false", "undefined", "NaN"],
        answer: "true"
    },
    {
        numb: 29,
        question: "How do you check if a string contains a substring?",
        options: ["string.includes(substring)", "string.contains(substring)", "string.indexOf(substring) !== -1", "string.has(substring)"],
        answer: "string.includes(substring)"
    },
    {
        numb: 30,
        question: "What is the default value of a variable declared with 'let'?",
        options: ["undefined", "null", "0", "false"],
        answer: "undefined"
    },
    {
        numb: 31,
        question: "Which method is used to add an element at the beginning of an array?",
        options: ["unshift()", "push()", "pop()", "concat()"],
        answer: "unshift()"
    },
    {
        numb: 32,
        question: "What does the 'event.preventDefault()' method do?",
        options: ["Stops the default action of an event", "Resets the event", "Cancels the event", "Bubbles up the event"],
        answer: "Stops the default action of an event"
    },
    {
        numb: 33,
        question: "Which function can be used to execute a function at regular intervals?",
        options: ["setInterval()", "setTimeout()", "clearInterval()", "clearTimeout()"],
        answer: "setInterval()"
    },
    {
        numb: 34,
        question: "How do you convert a number to a string in JavaScript?",
        options: ["num.toString()", "String(num)", "num + ''", "All of the above"],
        answer: "All of the above"
    },
    {
        numb: 35,
        question: "What is the output of '5 / 0'?",
        options: ["Infinity", "0", "undefined", "NaN"],
        answer: "Infinity"
    },
    {
        numb: 36,
        question: "How can you access the first element of an array named 'arr'?",
        options: ["arr[0]", "arr.first()", "arr.get(0)", "arr.firstElement()"],
        answer: "arr[0]"
    },
    {
        numb: 37,
        question: "Which method is used to remove an element from a specific index in an array?",
        options: ["splice()", "slice()", "pop()", "shift()"],
        answer: "splice()"
    },
    {
        numb: 38,
        question: "What will be the result of 'true + true'?",
        options: ["2", "true", "false", "undefined"],
        answer: "2"
    },
    {
        numb: 39,
        question: "Which method is used to check if a string starts with a specified substring?",
        options: ["startsWith()", "beginsWith()", "hasPrefix()", "indexOf()"],
        answer: "startsWith()"
    },
    {
        numb: 40,
        question: "What is the result of 'typeof []'?",
        options: ["object", "array", "list", "undefined"],
        answer: "object"
    },
    {
        numb: 41,
        question: "Which method can be used to test whether a string contains a specific pattern?",
        options: ["test()", "match()", "search()", "includes()"],
        answer: "includes()"
    },
    {
        numb: 42,
        question: "How do you access the last character of a string 'str'?",
        options: ["str[str.length - 1]", "str[str.length]", "str.last()", "str.charAt(str.length - 1)"],
        answer: "str[str.length - 1]"
    },
    {
        numb: 43,
        question: "Which operator is used to compare two values in JavaScript without type conversion?",
        options: ["===", "==", "!==", "!="],
        answer: "==="
    },
    {
        numb: 44,
        question: "How do you create a new object using a constructor function?",
        options: ["new ConstructorFunction()", "ConstructorFunction.create()", "ConstructorFunction.new()", "ConstructorFunction()"],
        answer: "new ConstructorFunction()"
    },
    {
        numb: 45,
        question: "Which keyword is used to declare a block-scoped local variable?",
        options: ["let", "var", "const", "block"],
        answer: "let"
    },
    {
        numb: 46,
        question: "What is the result of 'typeof null'?",
        options: ["object", "null", "undefined", "number"],
        answer: "object"
    },
    {
        numb: 47,
        question: "How can you create a function that can take any number of arguments?",
        options: ["function myFunction(...args) {}", "function myFunction(args) {}", "function myFunction(args...) {}", "function myFunction(arg1, arg2) {}"],
        answer: "function myFunction(...args) {}"
    },
    {
        numb: 48,
        question: "Which method is used to sort the elements of an array?",
        options: ["sort()", "order()", "arrange()", "sequence()"],
        answer: "sort()"
    },
    {
        numb: 49,
        question: "How do you write a single-line comment in JavaScript?",
        options: ["// comment", "/* comment */", "<!-- comment -->", "## comment"],
        answer: "// comment"
    },
    {
        numb: 50,
        question: "Which method can be used to remove whitespace from both ends of a string?",
        options: ["trim()", "strip()", "cut()", "clean()"],
        answer: "trim()"
    }
];
