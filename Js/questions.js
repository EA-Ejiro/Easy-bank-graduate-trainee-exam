let questions = [
    {
        number: 1,
        question: "What does 'NaN' stand for in JavaScript?",
        options: ["Not a Number", "Not a Null", "New Array Number", "None Available Now"],
        answer: "Not a Number"
    },
    {
        number: 2,
        question: "Which method is used to parse a string into an integer?",
        options: ["parseFloat()", "parseInt()", "toInteger()", "convertToInt()"],
        answer: "parseInt()"
    },
    {
        number: 3,
        question: "How do you create a new array in JavaScript?",
        options: ["new Array()", "Array.create()", "[]", "Array.new()"],
        answer: "[]"
    },
    {
        number: 4,
        question: "What will be the output of 'typeof NaN'?",
        options: ["number", "NaN", "undefined", "object"],
        answer: "number"
    },
    {
        number: 5,
        question: "What is the result of '0 == false' in JavaScript?",
        options: ["true", "false", "undefined", "NaN"],
        answer: "true"
    },
    {
        number: 6,
        question: "Which keyword is used to define a variable that cannot be reassigned?",
        options: ["const", "let", "var", "static"],
        answer: "const"
    },
    {
        number: 7,
        question: "How do you declare a function in JavaScript?",
        options: ["function myFunction() {}", "function:myFunction() {}", "myFunction = function() {}", "function = myFunction() {}"],
        answer: "function myFunction() {}"
    },
    {
        number: 8,
        question: "What will be the output of '2 + 2 * 2'?",
        options: ["8", "6", "4", "10"],
        answer: "6"
    },
    {
        number: 9,
        question: "What does the 'this' keyword refer to in a method?",
        options: ["The global object", "The object itself", "The parent object", "The previous object"],
        answer: "The object itself"
    },
    {
        number: 10,
        question: "What method is used to remove the last element from an array?",
        options: ["pop()", "shift()", "remove()", "delete()"],
        answer: "pop()"
    },
    {
        number: 11,
        question: "Which method adds one or more elements to the end of an array?",
        options: ["push()", "unshift()", "concat()", "splice()"],
        answer: "push()"
    },
    {
        number: 12,
        question: "How can you check if a variable is an array?",
        options: ["Array.isArray(variable)", "typeof variable === 'array'", "variable.isArray()", "variable instanceof Array"],
        answer: "Array.isArray(variable)"
    },
    {
        number: 13,
        question: "What is the result of '5 == '5''?",
        options: ["true", "false", "undefined", "NaN"],
        answer: "true"
    },
    {
        number: 14,
        question: "Which operator is used for string concatenation?",
        options: ["+", "-", "*", "/"],
        answer: "+"
    },
    {
        number: 15,
        question: "How do you add a comment in JavaScript?",
        options: ["// comment", "/* comment */", "<!-- comment -->", "## comment"],
        answer: "// comment"
    },
    {
        number: 16,
        question: "What will 'typeof []' return?",
        options: ["object", "array", "list", "undefined"],
        answer: "object"
    },
    {
        number: 17,
        question: "How can you prevent a function from being executed immediately?",
        options: ["Use setTimeout()", "Use a closure", "Use a callback", "Use a Promise"],
        answer: "Use a closure"
    },
    {
        number: 18,
        question: "Which function is used to serialize an object into a JSON string?",
        options: ["JSON.stringify()", "JSON.parse()", "JSON.toString()", "object.toJSON()"],
        answer: "JSON.stringify()"
    },
    {
        number: 19,
        question: "What will be the output of '0 === false'?",
        options: ["false", "true", "undefined", "NaN"],
        answer: "false"
    },
    {
        number: 20,
        question: "Which method removes the first element from an array?",
        options: ["shift()", "pop()", "splice()", "slice()"],
        answer: "shift()"
    },
    {
        number: 21,
        question: "What is the result of 'null == undefined'?",
        options: ["true", "false", "undefined", "NaN"],
        answer: "true"
    },
    {
        number: 22,
        question: "How do you define a class in JavaScript ES6?",
        options: ["class MyClass {}", "MyClass class {}", "define class MyClass {}", "create class MyClass {}"],
        answer: "class MyClass {}"
    },
    {
        number: 23,
        question: "What is the result of '[] == []'?",
        options: ["false", "true", "undefined", "NaN"],
        answer: "false"
    },
    {
        number: 24,
        question: "Which keyword is used to handle errors in JavaScript?",
        options: ["catch", "error", "throw", "try"],
        answer: "catch"
    },
    {
        number: 25,
        question: "How can you create an object in JavaScript?",
        options: ["let obj = {}", "let obj = new Object()", "let obj = Object.create()", "All of the above"],
        answer: "All of the above"
    },
    {
        number: 26,
        question: "What will be the output of 'console.log(1 + '1')'?",
        options: ["11", "2", "undefined", "NaN"],
        answer: "11"
    },
    {
        number: 27,
        question: "Which method is used to return the length of an array?",
        options: ["length", "size", "count", "length()"],
        answer: "length"
    },
    {
        number: 28,
        question: "What will be the output of 'Boolean('false')'?",
        options: ["true", "false", "undefined", "NaN"],
        answer: "true"
    },
    {
        number: 29,
        question: "How do you check if a string contains a substring?",
        options: ["string.includes(substring)", "string.contains(substring)", "string.indexOf(substring) !== -1", "string.has(substring)"],
        answer: "string.includes(substring)"
    },
    {
        number: 30,
        question: "What is the default value of a variable declared with 'let'?",
        options: ["undefined", "null", "0", "false"],
        answer: "undefined"
    },
    {
        number: 31,
        question: "Which method is used to add an element at the beginning of an array?",
        options: ["unshift()", "push()", "pop()", "concat()"],
        answer: "unshift()"
    },
    {
        number: 32,
        question: "What does the 'event.preventDefault()' method do?",
        options: ["Stops the default action of an event", "Resets the event", "Cancels the event", "Bubbles up the event"],
        answer: "Stops the default action of an event"
    },
    {
        number: 33,
        question: "Which function can be used to execute a function at regular intervals?",
        options: ["setInterval()", "setTimeout()", "clearInterval()", "clearTimeout()"],
        answer: "setInterval()"
    },
    {
        number: 34,
        question: "How do you convert a number to a string in JavaScript?",
        options: ["num.toString()", "String(num)", "num + ''", "All of the above"],
        answer: "All of the above"
    },
    {
        number: 35,
        question: "What is the output of '5 / 0'?",
        options: ["Infinity", "0", "undefined", "NaN"],
        answer: "Infinity"
    },
    {
        number: 36,
        question: "How can you access the first element of an array named 'arr'?",
        options: ["arr[0]", "arr.first()", "arr.get(0)", "arr.firstElement()"],
        answer: "arr[0]"
    },
    {
        number: 37,
        question: "Which method is used to remove an element from a specific index in an array?",
        options: ["splice()", "slice()", "pop()", "shift()"],
        answer: "splice()"
    },
    {
        number: 38,
        question: "What will be the result of 'true + true'?",
        options: ["2", "true", "false", "undefined"],
        answer: "2"
    },
    {
        number: 39,
        question: "Which method is used to check if a string starts with a specified substring?",
        options: ["startsWith()", "beginsWith()", "hasPrefix()", "indexOf()"],
        answer: "startsWith()"
    },
    {
        number: 40,
        question: "What is the result of 'typeof []'?",
        options: ["object", "array", "list", "undefined"],
        answer: "object"
    },
    {
        number: 41,
        question: "Which method can be used to test whether a string contains a specific pattern?",
        options: ["test()", "match()", "search()", "includes()"],
        answer: "includes()"
    },
    {
        number: 42,
        question: "How do you access the last character of a string 'str'?",
        options: ["str[str.length - 1]", "str[str.length]", "str.last()", "str.charAt(str.length - 1)"],
        answer: "str[str.length - 1]"
    },
    {
        number: 43,
        question: "Which operator is used to compare two values in JavaScript without type conversion?",
        options: ["===", "==", "!==", "!="],
        answer: "==="
    },
    {
        number: 44,
        question: "How do you create a new object using a constructor function?",
        options: ["new ConstructorFunction()", "ConstructorFunction.create()", "ConstructorFunction.new()", "ConstructorFunction()"],
        answer: "new ConstructorFunction()"
    },
    {
        number: 45,
        question: "Which keyword is used to declare a block-scoped local variable?",
        options: ["let", "var", "const", "block"],
        answer: "let"
    },
    {
        number: 46,
        question: "What is the result of 'typeof null'?",
        options: ["object", "null", "undefined", "number"],
        answer: "object"
    },
    {
        number: 47,
        question: "How can you create a function that can take any number of arguments?",
        options: ["function myFunction(...args) {}", "function myFunction(args) {}", "function myFunction(args...) {}", "function myFunction(arg1, arg2) {}"],
        answer: "function myFunction(...args) {}"
    },
    {
        number: 48,
        question: "Which method is used to sort the elements of an array?",
        options: ["sort()", "order()", "arrange()", "sequence()"],
        answer: "sort()"
    },
    {
        number: 49,
        question: "How do you write a single-line comment in JavaScript?",
        options: ["// comment", "/* comment */", "<!-- comment -->", "## comment"],
        answer: "// comment"
    },
    {
        number: 50,
        question: "Which method can be used to remove whitespace from both ends of a string?",
        options: ["trim()", "strip()", "cut()", "clean()"],
        answer: "trim()"
    }
];
