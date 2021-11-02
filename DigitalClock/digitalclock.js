function myClock() {
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    
    var clock = hour + ":" + minute + ":" + second; //20:05:50
    document.getElementById('digitalClockId').textContent = clock;
    
    //call the function each 1 seconds
    setTimeout(myClock, 1000);
}
function myClock2() {
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();

    //for AM or PM
    var p = "AM";
    if (hour > 12){
        hour = hour - 12;
        p = "PM";
    }

    //ZeroFill for example 08:20:09 not 8:20:9
    if (hour < 10){
        hour = "0" + hour;
    }
    if (minute < 10){
        minute = "0" + minute;
    }
    if (second < 10){
        second = "0" + second;
    }

        
    var clock = hour + ":" + minute + ":" + second + " " + p; //20:5:50
    document.getElementById('digitalClockWithPM').textContent = clock;
        
    //call the function each 1 seconds
    setTimeout(myClock2, 1000);
}

myClock();
myClock2();