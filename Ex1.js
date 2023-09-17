function myFunction1 () {
    var a = document.getElementById('text_1').value;
    a = parseInt(a) /* convert string into integer  */
    var b = document.getElementById('text_2').value;
    b=parseInt(b)
    var c = document.getElementById('select');
    var value = c.options[c.selectedIndex].value;
    /* return value of the selected */
    value = parseInt(value);
    var k;
    switch (value) {
        case 1:{
            k=(a+(b*2))/3;
            k=parseFloat(k);
            document.getElementById('average').innerHTML=k;
            break;
        }
        case 2:{

            k=((a*2)+(b*3))/5;
            k=parseFloat(k);
            document.getElementById('average').innerHTML=k;
            break;
        }
        case 3: {

            k=((a*3)+(b*4))/7;
            k=parseFloat(k);
            document.getElementById('average').innerHTML=k;
            break;
        }
        default:{
            break;
        }
    }
    if (k>=9){
        document.getElementById('result').innerHTML="HỌC SINH GIỎI";
        document.getElementById('result').style.color="red";
        document.getElementById('result').style.fontSize="100px";
    }
    else if (k>=7 && k<9){
        document.getElêmntById('result').innerHTML="HỌC SINH KHÁ"
        document.getElementById('result').style.color="red";
    }
    else if (k>=5 && k<7){
        document.getElementById('result').innerHTML="HỌC SINH TRUNG BÌNH";
        document.getElementById('result').style.color="red";
    }
    else{
        document.getElementById('result').innerHTML="HỌC SINH YẾU";
        document.getElementById('result').style.color="red";
    }   

}
function myFunction2 () {
    document.getElementById('text_1').value="";
    document.getElementById('text_2'),value="";
}