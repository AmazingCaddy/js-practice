var a = undefined;
var b = null;
var c = true;
var d = 'test';
var e = 10;
var f = function () { };

// Object, Function, Array, String, Boolean, Number, Date, RegExp,
// Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError
// ActiveXObject(服务器方面), Enumerator(集合遍历类), RegExp(正则表达式)

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);

console.log("=======separator========");

console.log(typeof "foo");                //String     string
console.log(typeof 1.2);                  //Number     number
console.log(typeof true);                 //Boolean    boolean
console.log(typeof undefined);            //Undefined  undefined
console.log(typeof new Function(""));     //Function   function
console.log(typeof new String("foo"));    //String     object
console.log(typeof new Number(1.2));      //Number     object
console.log(typeof new Boolean(true));    //Boolean    object
console.log(typeof new Date());           //Date       object
console.log(typeof new Error());          //Error      object
console.log(typeof [1, 2, 3]);            //Array      object
console.log(typeof new Array(1, 2, 3));   //Array      object
console.log(typeof /abc/g);               //RegExp     object (function in Nitro/V8)
console.log(typeof new RegExp("meow"));   //RegExp     object (function in Nitro/V8)
console.log(typeof {});                   //Object     object
console.log(typeof new Object());         //Object     object