'use strict';

//input.map(item => item + 111111);

var arr = [];

var _loop = function _loop(i) {
    arr[i] = function () {
        console.log(i);
    };
};

for (var i = 0; i < 10; i++) {
    _loop(i);
}

arr[6](); //输出6，如果var声明i，则输出10

for (var k = 0; k < 3; k++) //循环语句中的k与循环体中的k是分离的
{
    var k = 'ABC';
    console.log(k);
}

function foo() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

    return [x, y];
}

foo(); //输出[2,2];

function f1() {
    var n = 5;
    if (true) {
        var _n = 10;
    }
    console.log(n);
}

f1();
