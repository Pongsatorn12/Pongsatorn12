function  show(form)
{
    var cardid = document.getElementsByName("cardid")[0].value;
    var fname = document.getElementsByName("fname")[0].value;
    var lname = document.getElementsByName("lname")[0].value;
    var birthday = document.getElementsByName("birthday")[0].value;
    var fileinfo = document.getElementsByName("fileinfo")[0].value;
    var  message=""
    var checkboxes = document.getElementsByName('activity');
    for (var checkbox of checkboxes) {
       
        if (checkbox.checked) {
            message+= checkbox.value+" "
        }
    }
    var status = document.getElementsByName("status").value;
    var  info = "<b> แสดงข้องมูลดังนี้ </b><br> รหัสบัตร : "+cardid;
    info+="<br>ชื่อ : "+fname;
    info+="<br>นามสกุล : "+lname;
    info+="<br>วันเกิด : "+birthday;
    info+="<br>แนบรูป : "+fileinfo;
    info+="<br>กิจกรรมที่ชอบ : "+message;
    document.getElementById("showinfo").innerHTML=info;
}