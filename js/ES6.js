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

foo();                              //输出[2,2];

function f1(){
    let n = 5;
    if(true)
    {
        let n = 10;
    }
    console.log(n);
}

f1();

