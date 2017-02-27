var nrimg = 4;
var nrshow = 1;
var intSec = 3;
var Autoplay = true;

function AddCircle() {
    var pagination = document.getElementById('s1-circles');
    for (var i = 0; i < nrimg + 1, i++;) {
        var li = document.createElement("li");
        li.id = "s1-circle" + 1;
        pagination.appendChild(li);
    }
    var para = document.getElementById('s1-circle' + nrshow);
    var link = document.createElement("A");
    link.id = "s1-current-circle";
    para.appendChild(link);


}

function load() {
    AddCircle();
    change();
    if (Autoplay) {
        init = setInterval(Timer, intSec, 1000);
    }
}



function change() {
    var path = "image" + nrshow + ".jpg";
    document.getElementById('img-show').setAttribute('src', path);
}

function next() {
    if (nrshow >= nrimg) {
        nrshow = 1
    } else {
        nrshow++;
    }
    change();
    clearInterval(init)
    init = setInterval(Timer, intSec, 1000)
}

function prev() {
    if (nrshow <= 1) {
        nrshow = nrimg
    } else {
        nrshow--;
    }
    change();
    clearInterval(init)
    init = setInterval(Timer, intSec, 1000)
};

function Timer() {
    next()
}