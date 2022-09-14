
/*

1. Write a Javascript function to check whether a triangle is equilateral,
isosceles or scalene

Equilateral - All sides are Equal 
Isosceles - 2nd sides Equal
Scalene - 3 sides are different

*/

console.log(" Enter 3 sides of a traingle ");

let s1=10
let s2=12
 let s3=19;

if(s1==s2==s3)
console.log(` Equilateral Traingle with sides ${s1} ${s2} ${s3}`);
else if(s1!=s2!=s3)
console.log(` Scalene Traingle with sides ${s1} ${s2} ${s3}`);
else
console.log(` Isosceles Traingle with sides ${s1} ${s2} ${s3}`);