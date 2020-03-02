function test1(A)
{
var result=A*3;
return result;
}


function test2(B){
var x = test1(B); // B * 3
var y =x+3; 
alert(y);
}