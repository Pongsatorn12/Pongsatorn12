function testf(a,b)
{
    document.getElementById("message").innerHTML="hello "+a+" "+b
}
function sum()
{
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    n1 = Number.parseInt(n1)
    n2 = Number.parseInt(n2)
    var  answer = "<b> แสดงข้องมูลดังนี้ </b><br> ตัวเลขที่1 : "+n1
            answer+="<br>ตัวเลขที่2 : "+n2;
            answer+="<br>ผลรวมคือ: "+(n1+n2);
    document.getElementById("showanswer").innerHTML=answer;
}
function sum2() 
{
    var n1 = document.getElementsByName("num1")[0].value
    var n2 = document.getElementsByName("num2")[0].value
    n1 = Number.parseInt(n1)
    n2 = Number.parseInt(n2)
    var  answer = "<b> แสดงข้องมูลดังนี้ </b><br> ตัวเลขที่1 : "+n1
            answer+="<br>ตัวเลขที่2 : "+n2;
            answer+="<br>ผลรวมคือ: "+(n1+n2);
    document.getElementById("showanswer").innerHTML=answer;
}