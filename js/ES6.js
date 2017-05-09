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

let sObj = {};
let s1 = Symbol();
let s2 = Symbol();
sObj[s1] = 'hello,';
sObj[s2] = 'world!';

const tObj = Object.getOwnPropertySymbols(sObj);

console.log(tObj);

let kObj = {
    [Symbol('myKey')] : 1,
    name : 'v',
    age : 34
};

console.log(Reflect.ownKeys(kObj));

const ss1 = new Set();

[2,4,5,6,7,5,6,7].forEach((x) => ss1.add(x));

for (var i of ss1)
{
    console.log(i);
}

let ss2 = new Set([2,4,6,8,0,8,0]);
console.log(ss2);
ss2.delete(0);
console.log(ss2.has(2));
//ss2.clear();
console.log(ss2);

//去重数组元素
function dedupe(arr)
{
    return Array.from(new Set(arr));
}

console.log(dedupe([5,6,4,1,5,6,4]));

//遍历Set数据结构
for(let sItem of ss2)
{
    console.log(sItem);
}

ss2.forEach((key,value,_this) => console.log(_this));

var asd = [...ss2];
console.log(asd);

let sA = new Set([1,2,3]);
let sB = new Set([2,3,4]);

console.log(new Set([...sA].filter((x) => sB.has(x))));              //交集
console.log(new Set([...sA].filter((x) => !sB.has(x))));             //差集

let ws = new WeakSet();
ws.add(window);

let tMap = new Map([
    ['name','张三'],
    ['title','author']
]);

tMap.set('a',1).set('b',2).set('c',3);

console.log(tMap);

//对象转Map
function objToMap(obj){
    let map = new Map();
    for(let k of Object.keys(obj))
    {
        map.set(k,obj[k]);
    }
    return map;
}

let mmObj = {'aa':11,'bb':22};
console.log(objToMap(mmObj));


//代理
var proxyss = new Proxy({},{
    get : function(target,handler){
        return 10;
    }
});
proxyss.ss = 2;
console.log(proxyss.ss);

//Promise实例
function settimeout(ms){
    return new Promise((resolve,reject) => {
        setTimeout(resolve,ms,'已完成！！');     //3秒后打印出‘已完成’
    })
}

settimeout(3000).then((value) => {
   console.log(value);
});

var myPromise = new Promise((resolve,reject) => {
    console.log('Promise!');                //最先开始打印
    resolve();
});

myPromise.then(() => {
    console.log('Resolved!');               //最后打印
});

console.log('Hi!');                         //第二先打印


function loadImageAsync(url){
    return new Promise(function(resolve,reject){
        var image = new Image();

        image.onload = function(){
            resolve(image);
        };

        image.error = () => {
            reject(new Error('Could not load image at ' + url));
        };

        image.src = url;
    })
}

var myPro = new Promise(function(resolve,reject){
    throw new Error('test err!');
});

myPro.catch(function(err){
    console.log(err);
});

var myPro2 = new Promise(function(resolve,reject){
    resolve( xqw + 34);
});

myPro2.then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
});


var myPro3 = new Promise(function(resolve,reject){
    resolve(q + 2);
});

myPro3.then(function(data){
    console.log(data)
}).catch(function(err){
    y + 7;
    console.log(err);
}).catch(function(err){
    console.log(err);
});


function *gen(x){
    try {
        var y = yield x +2;
    }
    catch(e){
        console.log(e);
    }
    return y;
}

var myGen = gen(1);

console.log(myGen);

//Class的使用
class Point {
    constructor (x,y){
        this.x = x;
        this.y = y;
    }

    toString()
    {
        return '('+this.x+','+this.y+')';
    }
}

Object.assign(Point.prototype,{                 //向Point.prototype一次性添加多个方法
    toArr(){},
    toArr2(){}
});