'use strict';

//input.map(item => item + 111111);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _templateObject = _taggedTemplateLiteral(['<p>hello! ', '! how are you today?</p>'], ['<p>hello! ', '! how are you today?</p>']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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
    var _this = this;

    setTimeout(function () {
        console.log(_this.setId); //this对象的指向是可变的，但是在箭头函数中，它是固定的
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

//TTTTTTTTTTTTTTTTTTTT
// 基于准备好的dom，初始化echarts实例
var myEchart = echarts.init(document.getElementById('myEchart'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: 'ECharts 入门示例'
    },
    toolbox: {
        show: true,
        feature: {
            magicType: {
                type: ['line', 'bar', 'pie']
            }
        }
    },
    tooltip: {},
    legend: {
        data: ['销量']
    },
    xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};

//使用刚指定的配置项和数据显示图表。
myEchart.setOption(option);

//编辑数据
myEchart.on('click', function () {
    var html = '';
    for (var i = 0; i < option.xAxis.data.length; i++) {

        html += '<div class="form-group"> ' + '<label class="control-label">' + option.xAxis.data[i] + ':</label> ' + '<input type="number" class="form-control" value=' + option.series[0].data[i] + ' > ' + '</div>';
    }

    $('#test div.modal-body').text('').append(html);
    $('#test').modal();
});

function dataChange() {
    var arr = [];
    $('.modal-body input').each(function () {
        arr.push($(this).val());
    });

    option.series[0].data = arr;
    myEchart.setOption(option);
    $('#test').modal('hide');
}
