// function fun() {
//     console.log("Hello World");
// }
// fun()
// Named Function
function add(x,y)
{
    var z=x+y
    return z
    // console.log(z);
    
}

let result=add(10,20)
console.log(result);


// Anonymus Function

const fun=function(x,y){
    return x+y
}
let res=fun(10,20)
console.log(res);

const sum=(x,y)=>x+y
let resu=sum(10,20)
console.log(resu);

disp=x=>console.log(x);
disp(50)

function c2f(celcius){
    let farenhite=9/5*(celcius+32)
    return farenhite
}
console.log(c2f(32));


