/*  4. Write a program to find the factorial of all prime numbers between a
given range . Range will be passed as 2 values in the function
parameters. eg- if it is needed to find the values for numbers 1-100, then
function declaration can look like - function prime(1,100) */


function Range(x,y)

{
    for(let i=x;i<=y;i++)
        prime(i);

}

function prime(n)
{
    let j=2;
    let found=0;
    while(j<=n/2)
    {
        if(n%j==0)
        {
               found=1;
               j=n;
        }
        j++;
    }
if(!found)
{
    let sum=1;
    let temp=n;
    while(n!=0)
    {
        sum=sum*n;
        n--;
    }

console.log(` Factorial of ${temp} is ${sum}`);

}


}


Range(3,10);