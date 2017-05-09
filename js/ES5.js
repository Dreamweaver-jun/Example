'use strict';

//input.map(item => item + 111111);

var _kObj;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _templateObject = _taggedTemplateLiteral(['<p>hello! ', '! how are you today?</p>'], ['<p>hello! ', '! how are you today?</p>']);

var _marked = [gen].map(regeneratorRuntime.mark);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var arr = [];

var _loop = function _loop(_i) {
    arr[_i] = function () {
        console.log(_i);
    };
};

for (var _i = 0; _i < 10; _i++) {
    _loop(_i);
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

console.log(foo()); //输出[2,2];

function f1() {
    var n = 5;
    if (true) {
        var _n = 10; //此时给n赋值只有if语句体里能获取到（块级作用域）
    }
    console.log(n);
}

f1();

var a = 1,
    d = [2, 3, 4];


console.log(typeof d === 'undefined' ? 'undefined' : _typeof(d));

var _ref = ['google'],
    x = _ref[0],
    y = _ref[1],
    z = _ref.slice(2);

console.log(x, y, z);

function ff() {
    console.log('aaaa');
}

var _ = 111,
    aa = _ === undefined ? ff() : _;
var _ref2 = [2],
    _ref2$ = _ref2[0],
    xx = _ref2$ === undefined ? 1 : _ref2$,
    _ref2$2 = _ref2[1],
    yy = _ref2$2 === undefined ? xx : _ref2$2;
var _age$name = { age: '8888', name: 'zyj' },
    name = _age$name.name,
    age = _age$name.age;

var _hello = 'hello',
    _hello2 = _slicedToArray(_hello, 5),
    t1 = _hello2[0],
    t2 = _hello2[1],
    t3 = _hello2[2],
    t4 = _hello2[3],
    t5 = _hello2[4];

var _hello3 = 'hello',
    len = _hello3.length;
var _true = true,
    str = _true.toString;


function add(_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        x = _ref4[0],
        y = _ref4[1];

    return x + y;
}

var a1 = 1;
var a2 = 2;

var _ref5 = [a2, a1];
a1 = _ref5[0];
a2 = _ref5[1];


function returnArr() {
    return [4, 5, 6];
}

var _returnArr = returnArr(),
    _returnArr2 = _slicedToArray(_returnArr, 3),
    h1 = _returnArr2[0],
    h2 = _returnArr2[1],
    h3 = _returnArr2[2];

function returnObj() {
    return {
        fooo: 1,
        bar: 2
    };
}

var _returnObj = returnObj(),
    fooo = _returnObj.fooo,
    bar = _returnObj.bar;

function jkjk(_ref6) {
    var u = _ref6.u,
        i = _ref6.i,
        o = _ref6.o;

    return {
        u: u, i: i, o: o
    };
}

var jsonData = {
    id: 99,
    content: 'some text',
    data: [147, 258]
};

var id = jsonData.id,
    content = jsonData.content,
    data = jsonData.data; //提取JSON数据的值

var map = new Map();

map.set('first', 'hello,');
map.set('last', 'world!');

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _ref7 = _step.value;

        var _ref8 = _slicedToArray(_ref7, 2);

        var key = _ref8[0];
        var value = _ref8[1];

        console.log(key + ' is ' + value);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var hehs = new Function('name', 'return' + '`hello ${name}`');

var myName = '<script>alert("恶意代码")</script>';
var msg = saferHTML(_templateObject, myName);

function saferHTML(templateData) {
    //过滤恶意代码
    var t = templateData[0];
    for (var i = 1; i < arguments.length; i++) {
        var arg = String(arguments[i]);

        t += arg.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

        t += templateData[i];
    }

    return t;
}

var arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

var arrLike = Array.from(arrayLike);
console.log(arrLike);

var copyArr = [2, 3, 6, 7, 8];
console.log(copyArr.copyWithin(0, 2, 4));

[1, 3, 5, 7, 9].find(function (v, i, arr) {
    return v > 6; //返回第一个大于6的数值，如果没有则返回undefined;
});

[1, 0, 0, 8, 6].fill(7, 1, 3); //把7填充到数组2、3位中,1是开始位置，3是结束位置

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = ['a', 'b', 'c'].keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) //对键名的遍历
    {
        var item = _step2.value;

        console.log(item);
    }

    /*for(let item of ['g','h','j'].values())     //对键值的遍历
    {
        console.log(item);
    }*/
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = ['d', 'e', 'f'].entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) //对键名、键值的遍历
    {
        var _ref9 = _step3.value;

        var _ref10 = _slicedToArray(_ref9, 2);

        var _k = _ref10[0];
        var v = _ref10[1];

        console.log(_k + '-----' + v);
    }
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

console.log([5, 6, 4, 1, 7].includes(4, 3)); //包含返回true,反之返回false。第二个参数是起始位置

function testFun(_ref11) {
    var x = _ref11.x,
        _ref11$y = _ref11.y,
        y = _ref11$y === undefined ? 8 : _ref11$y;
    //解构赋值
    console.log(x, y);
}

testFun({ x: 33, y: 77 });

function testFun2() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;

    console.log([x, y, z]);
}

testFun2(undefined, 66, 99);
testFun2(null, 66, 99);

console.log(function (r, t) {
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 44;
}.length);

function testArg() {
    var sum = 0;

    for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
        arg[_key] = arguments[_key];
    }

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = arg[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var i = _step4.value;

            sum += i;
        }
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
            }
        } finally {
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }

    return sum;
}

console.log(testArg(5, 6, 7));

function push(arr) {
    for (var _len2 = arguments.length, items = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        items[_key2 - 1] = arguments[_key2];
    }

    items.forEach(function (i) {
        arr.push(i);
    });
    return arr;
}

var pushArr = [];
console.log(push(pushArr, 1, 8, 5));

var arrow = function arrow(a, b) {
    return a + b;
};

console.log(arrow(7, 8));

var arrowObj = function arrowObj(id) {
    var fg = { id: id, name: 'world' };return fg.id;
};

console.log(arrowObj(7));

var sortArr = [5, 6, 4, 1, 7, 1, 3, 9, 1];
var sortTest = sortArr.sort(function (a, b) {
    return a - b;
});

console.log(sortTest);

function setFun() {
    var _this2 = this;

    setTimeout(function () {
        console.log(_this2.setId); //this对象的指向是可变的，但是在箭头函数中，它是固定的
    });
}
var setId = 32;

setFun.call({ setId: 77 });

function dg(n, total) {
    if (n === 1) return total;
    return dg(n - 1, n * total);
}

console.log(Object.is('foo', 'foo'));

var parObj = { a: 1 };
var childObj = { b: 2 };
var childObj2 = { c: 3 };

Object.assign(parObj, childObj, childObj2);
console.log(parObj);

function clone(obj) {
    return Object.assign({}, obj);
}

console.log(clone({ 'a': 11, b: 22 }));

function tFn() {}

var tfn1 = new tFn();

console.log(Object.getPrototypeOf(tfn1) === tFn.prototype); //返回true
Object.setPrototypeOf(tfn1, Object.prototype);
console.log(Object.getPrototypeOf(tfn1) === tFn.prototype); //返回false

var sObj = {};
var s1 = Symbol();
var s2 = Symbol();
sObj[s1] = 'hello,';
sObj[s2] = 'world!';

var tObj = Object.getOwnPropertySymbols(sObj);

console.log(tObj);

var kObj = (_kObj = {}, _defineProperty(_kObj, Symbol('myKey'), 1), _defineProperty(_kObj, 'name', 'v'), _defineProperty(_kObj, 'age', 34), _kObj);

console.log(Reflect.ownKeys(kObj));

var ss1 = new Set();

[2, 4, 5, 6, 7, 5, 6, 7].forEach(function (x) {
    return ss1.add(x);
});

var _iteratorNormalCompletion5 = true;
var _didIteratorError5 = false;
var _iteratorError5 = undefined;

try {
    for (var _iterator5 = ss1[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var i = _step5.value;

        console.log(i);
    }
} catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
        }
    } finally {
        if (_didIteratorError5) {
            throw _iteratorError5;
        }
    }
}

var ss2 = new Set([2, 4, 6, 8, 0, 8, 0]);
console.log(ss2);
ss2.delete(0);
console.log(ss2.has(2));
//ss2.clear();
console.log(ss2);

//去重数组元素
function dedupe(arr) {
    return Array.from(new Set(arr));
}

console.log(dedupe([5, 6, 4, 1, 5, 6, 4]));

//遍历Set数据结构
var _iteratorNormalCompletion6 = true;
var _didIteratorError6 = false;
var _iteratorError6 = undefined;

try {
    for (var _iterator6 = ss2[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
        var sItem = _step6.value;

        console.log(sItem);
    }
} catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion6 && _iterator6.return) {
            _iterator6.return();
        }
    } finally {
        if (_didIteratorError6) {
            throw _iteratorError6;
        }
    }
}

ss2.forEach(function (key, value, _this) {
    return console.log(_this);
});

var asd = [].concat(_toConsumableArray(ss2));
console.log(asd);

var sA = new Set([1, 2, 3]);
var sB = new Set([2, 3, 4]);

console.log(new Set([].concat(_toConsumableArray(sA)).filter(function (x) {
    return sB.has(x);
}))); //交集
console.log(new Set([].concat(_toConsumableArray(sA)).filter(function (x) {
    return !sB.has(x);
}))); //差集

var ws = new WeakSet();
ws.add(window);

var tMap = new Map([['name', '张三'], ['title', 'author']]);

tMap.set('a', 1).set('b', 2).set('c', 3);

console.log(tMap);

//对象转Map
function objToMap(obj) {
    var map = new Map();
    var _iteratorNormalCompletion7 = true;
    var _didIteratorError7 = false;
    var _iteratorError7 = undefined;

    try {
        for (var _iterator7 = Object.keys(obj)[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var _k2 = _step7.value;

            map.set(_k2, obj[_k2]);
        }
    } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion7 && _iterator7.return) {
                _iterator7.return();
            }
        } finally {
            if (_didIteratorError7) {
                throw _iteratorError7;
            }
        }
    }

    return map;
}

var mmObj = { 'aa': 11, 'bb': 22 };
console.log(objToMap(mmObj));

//代理
var proxyss = new Proxy({}, {
    get: function get(target, handler) {
        return 10;
    }
});
proxyss.ss = 2;
console.log(proxyss.ss);

//Promise实例
function settimeout(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms, '已完成！！'); //3秒后打印出‘已完成’
    });
}

settimeout(3000).then(function (value) {
    console.log(value);
});

var myPromise = new Promise(function (resolve, reject) {
    console.log('Promise!'); //最先开始打印
    resolve();
});

myPromise.then(function () {
    console.log('Resolved!'); //最后打印
});

console.log('Hi!'); //第二先打印


function loadImageAsync(url) {
    return new Promise(function (resolve, reject) {
        var image = new Image();

        image.onload = function () {
            resolve(image);
        };

        image.error = function () {
            reject(new Error('Could not load image at ' + url));
        };

        image.src = url;
    });
}

var myPro = new Promise(function (resolve, reject) {
    throw new Error('test err!');
});

myPro.catch(function (err) {
    console.log(err);
});

var myPro2 = new Promise(function (resolve, reject) {
    resolve(xqw + 34);
});

myPro2.then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.log(err);
});

var myPro3 = new Promise(function (resolve, reject) {
    resolve(q + 2);
});

myPro3.then(function (data) {
    console.log(data);
}).catch(function (err) {
    y + 7;
    console.log(err);
}).catch(function (err) {
    console.log(err);
});

function gen(x) {
    var y;
    return regeneratorRuntime.wrap(function gen$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return x + 2;

                case 3:
                    y = _context.sent;
                    _context.next = 9;
                    break;

                case 6:
                    _context.prev = 6;
                    _context.t0 = _context['catch'](0);

                    console.log(_context.t0);

                case 9:
                    return _context.abrupt('return', y);

                case 10:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this, [[0, 6]]);
}

var myGen = gen(1);

console.log(myGen);
