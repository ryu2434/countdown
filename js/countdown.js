// Function to complete.
function CountDownTimer(dateTime, divId) {
    var end     = new Date(dateTime);
    var _second = 1000;
    var _minute = _second * 60;
    var _hour   = _minute * 60;
    var _day    = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;

        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);
        
        //document.getElementById(divId).innerHTML = "GROUNDHOGS DAY WILL BE IN: "
        document.getElementById(divId).innerHTML = 'GOUNDHOG\'S DAY WILL BE IN: '
             + days + ' DAYS ' + hours + ' HOURS ' + minutes + ' MINUTES ' + seconds + ' SECONDS ';
        location.reload();

    }

    timer = setInterval(showRemaining(), 1000);


}

// Enter the date and time as a string in the following format.  Second parameter is the HTML id of element where you want
//    the countdown to appear.
//countDown(9);
CountDownTimer('02/02/2015 12:00 AM', 'countDown');
