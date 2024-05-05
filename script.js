var p=new Date();
var month;
switch(p.getMonth()){
    case 0:
        month="Ocak";
        break;
    case 1:
        month="Şubat";
        break;
    case 2:
        month="Mart";
        break;
    case 3:
        month="Nisan";
        break;
    case 4:
        month="Mayıs";
        break;
    case 5:
        month="Haziran";
        break;
    case 6:
        month="Temmuz";
        break;
    case 7:
        month="Ağustos";
        break;
    case 8:
        month="Eylül";
        break;
    case 9:
        month="Ekim";
        break;
    case 10:
        month="Kasım";
        break;
    case 11:
        month="Aralık";
        break;
}

function time(){
    var d=new Date();
    if(d.getHours()<10){
        document.getElementById("hr").innerHTML='0'+d.getHours();
    }
    else{
        document.getElementById("hr").innerHTML=d.getHours();
    }
    if(d.getMinutes()<10){
        document.getElementById("min").innerHTML='0'+d.getMinutes();
    }
    else{
        document.getElementById("min").innerHTML=d.getMinutes();
    }
    if(d.getSeconds()<10){
        document.getElementById("sec").innerHTML='0'+d.getSeconds();
    }
    else{
        document.getElementById("sec").innerHTML=d.getSeconds();
    }

    document.getElementById("date").innerHTML=d.getDate()+" "+month+" "+d.getFullYear();
    setTimeout(time,1000);
}

time();

function settime(){
    document.getElementById("settime").style.visibility="visible";
}

function saveAlarm(){
    var hour = document.getElementById("setHr").value;
    var minute=document.getElementById("setMin").value;
    var second=document.getElementById("setSec").value;
    document.getElementById("setBtn").setAttribute("onclick","cancelBtn()");

    function x(){
        document.getElementById("settime").innerHTML="Alarmınız ayarlandı : "+hour+":"+minute+":"+second;

        document.getElementById("settime").style.fontSize="xxx-large";
        document.getElementById("settime").style.fontWeight="bold";
        document.getElementById("settime").style.paddingLeft="99px";
        document.getElementById("settime").style.paddingTop="45px";
        document.getElementById("settime").style.color="white";
        document.getElementById("setBtn").innerHTML="ALARMI KAPAT";

        if(document.getElementById("hr").innerHTML==hour && document.getElementById("min").innerHTML==minute && document.getElementById("sec").innerHTML==second){
            var audio=new Audio("alarm.mp3");
            setInterval(() => {
                audio.play()
            }, 1000);
        }
        else{
            setTimeout(x,100);
        }
   
    }
    x();
}

function cancelBtn(){
    window.location.reload();
}