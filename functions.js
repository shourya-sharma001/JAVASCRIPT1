// //NORMAL FUNCTION

// function today (a,b,c,d)
// {
    
    
// }
// today(10,11,12,13)


//ANONYMUS FUNCTION

// let add = function (a,b)
// {
//     const c = a +b
//     console.log(c)
// }
// add(5,6)


//IIFE(Immdiately Invoked Function) FUNCTION

// (function (a,b)
// {
//     const c = a +b
//     console.log(c)
// })(2,5)


//ARROW FUNCTION
// const s = (num1, num2) => {
//     let c = num1+num2
//     console.log(c)
    
// }

// s(10,20)


//RECURSIVE FUNCTION

function rec(n)
{
    if(n === 200)
    {
        console.log( "done");
        return
    }
    console.log(n)
    rec(n+10)
}
rec(100)


//CONSTRUCTOR FUNCTION


