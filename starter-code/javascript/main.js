var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {

}

function printMinutes() {

}

function printSeconds() {

}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
btnLeft.innerHTML = "STOP";
btnLeft.classList.remove("start");
btnLeft.classList.add = ("stop");
setSplitBtn();
}

function setSplitBtn() {
    btnLeft.innerHTML = "SPLIT";
    btnLeft.classList.remove("reset");
    btnLeft.classList.add = ("split");
}

function setStartBtn() {
btnLeft.innerHTML = "START";
btnLeft.classList.remove("stop");
btnLeft.classList.add = ("start");
setResetBtn();
}

function setResetBtn() {
    btnLeft.innerHTML = "RESET";
    btnLeft.classList.remove("split");
    btnLeft.classList.add = ("reset");
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {

    if (this.classList.contains('start'))
    {
        setStartBtn();
        chronometer.startClick();
        
    }
    else{
        setStopBtn();
        chronometer.stopClick();
    }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    
    if(this.classList.contains('reset'))
    {
setSplitBtn();
    }

    else
    {
setResetBtn();        
    }
});
