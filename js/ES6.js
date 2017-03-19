'use strict';

//input.map(item => item + 111111);

let arr = [];
for (let i=0; i<10; i++)
{
    arr[i] = function(){
        console.log(i);
    }
}

arr[6]();                           //输出6，如果var声明i，则输出10

for (let k=0; k<3; k++)             //循环语句中的k与循环体中的k是分离的
{
    let k = 'ABC';
    console.log(k);
}

function foo(x=2,y=x){
    return [x,y];
}

console.log(foo());                              //输出[2,2];

function f1(){
    let n = 5;
    if(true)
    {
        let n = 10;                 //此时给n赋值只有if语句体里能获取到（块级作用域）
    }
    console.log(n);
}

f1();

let [a, ...d] = [1,2,3,4];

console.log(typeof d);

let [x,y,...z] = ['google'];

console.log(x,y,z);

function ff(){
    console.log('aaaa');
}

let [aa = ff()] = [111];

let [xx=1,yy=xx] = [2];

let {name,age} = {age:'8888',name:'zyj'};

const [t1,t2,t3,t4,t5] = 'hello';

let {length : len} = 'hello';

let {toString : str} = true;

function add([x,y]){
    return x+y;
}

let a1 = 1;
let a2 = 2;

[a1,a2] = [a2,a1];

function returnArr(){
    return [4,5,6];
}

let [h1,h2,h3] = returnArr();

function returnObj(){
    return {
        fooo : 1,
        bar : 2
    }
}

let {fooo,bar} = returnObj();

function jkjk({u,i,o}){
    return {
        u,i,o
    }
}

let jsonData = {
    id : 99,
    content : 'some text',
    data : [147,258]
};

let {id,content,data} = jsonData;           //提取JSON数据的值

var map = new Map();

map.set('first','hello,');
map.set('last','world!');

for(let [key,value] of map)
{
    console.log(key+' is '+value);
}

let hehs = new Function('name','return'+ '`hello ${name}`');

var myName = '<script>alert("恶意代码")</script>';
var msg = saferHTML`<p>hello! ${myName}! how are you today?</p>`;

function saferHTML(templateData){                               //过滤恶意代码
    var t = templateData[0];
    for(var i=1; i<arguments.length; i++)
    {
        var arg = String(arguments[i]);

        t += arg.replace(/&/g,'&amp;')
                .replace(/</g,'&lt;')
                .replace(/>/g,'&gt;');

        t += templateData[i];
    }

    return t;
}

let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

var arrLike = Array.from(arrayLike);
console.log(arrLike);

var copyArr = [2,3,6,7,8];
console.log(copyArr.copyWithin(0,2,4));

[1,3,5,7,9].find(function(v,i,arr){
    return v > 6;                           //返回第一个大于6的数值，如果没有则返回undefined;
});

[1,0,0,8,6].fill(7,1,3);                    //把7填充到数组2、3位中,1是开始位置，3是结束位置

for(let item of ['a','b','c'].keys())       //对键名的遍历
{
    console.log(item);
}

/*for(let item of ['g','h','j'].values())     //对键值的遍历
{
    console.log(item);
}*/

for(let [k,v] of ['d','e','f'].entries())     //对键名、键值的遍历
{
    console.log(k+'-----'+v);
}

console.log([5,6,4,1,7].includes(4,3));         //包含返回true,反之返回false。第二个参数是起始位置

function testFun({x,y = 8}){                    //解构赋值
    console.log(x,y);
}

testFun({x:33,y:77});


function testFun2(x = 5,y = 8,z = 4){
    console.log([x,y,z]);
}

testFun2(undefined,66,99);
testFun2(null,66,99);

console.log((function(r,t,y=44){}).length);


function testArg(...arg)
{
    var sum = 0;
    for (var i of arg)
    {
        sum += i;
    }
    return sum;
}

console.log(testArg(5,6,7));

function push(arr,...items)
{
    items.forEach(function(i){
        arr.push(i);
    });
    return arr;
}

var pushArr = [];
console.log(push(pushArr,1,8,5));


var arrow = (a,b) => a+b;

console.log(arrow(7,8));

var arrowObj = (id) => {let fg = {id:id,name:'world'}; return fg.id;};

console.log(arrowObj(7));

var sortArr = [5,6,4,1,7,1,3,9,1];
var sortTest = sortArr.sort((a,b) => a-b);

console.log(sortTest);

function setFun(){
    setTimeout(() => {
        console.log(this.setId);               //this对象的指向是可变的，但是在箭头函数中，它是固定的
    });
}
let setId = 32;

setFun.call({setId:77});

function dg(n,total)
{
    if(n === 1) return total;
    return dg(n-1,n*total);
}

console.log(Object.is('foo','foo'));

var parObj = {a:1};
var childObj = {b:2};
var childObj2 = {c:3};

Object.assign(parObj,childObj,childObj2);
console.log(parObj);

function clone(obj)
{
    return Object.assign({},obj);
}

console.log(clone({'a':11,b:22}));

function tFn(){

}

var tfn1 = new tFn();

console.log(Object.getPrototypeOf(tfn1) === tFn.prototype);         //返回true
Object.setPrototypeOf(tfn1,Object.prototype);
console.log(Object.getPrototypeOf(tfn1) === tFn.prototype);         //返回false

//TTTTTTTTTTTTTTTTTTTT
// 基于准备好的dom，初始化echarts实例
var myEchart = echarts.init(document.getElementById('myEchart'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: 'ECharts 入门示例'
    },
    toolbox : {
        show : true,
        feature: {
            magicType: {
                type: ['line', 'bar','pie']
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
    for (let i = 0; i < option.xAxis.data.length; i++) {

        html += '<div class="form-group"> ' +
            '<label class="control-label">'+option.xAxis.data[i]+':</label> ' +
            '<input type="number" class="form-control" value=' + option.series[0].data[i] + ' > '+
            '</div>';

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