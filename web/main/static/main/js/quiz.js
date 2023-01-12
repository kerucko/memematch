function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};


function nextMeme() {
    if (count_click < max) {
        id_pictures = Math.floor(Math.random() * 2631 + 1);
        image.src="static/main/img//photos/photo_" + id_pictures + ".jpg";
        count_click = count_click + 1;
        count.innerText = count_click + '/' + max;
    }
    else {
        localStorage.setItem('memes', id_memes);
        localStorage.setItem('marks', marks);
        document.location = "http://127.0.0.1:8000/share";
    }
}

image = document.getElementById('image'),
button_3 = document.getElementById('button_3');
button_2 = document.getElementById('button_2');
button_1 = document.getElementById('button_1');
button0 = document.getElementById('button0');
button1 = document.getElementById('button1');
button2 = document.getElementById('button2');
button3 = document.getElementById('button3');
count = document.getElementById('Count');

var id_pictures = 0;
var count_click = 1;
var max = getUrlParameter('count_click');

var marks = '';
var id_memes = '';

count.innerText = count_click + '/' + max;

button_3.onclick = function(){
    id_memes = id_memes + '_' + id_pictures;
    marks = marks + '_-3';
    nextMeme();
}
button_2.onclick = function(){
    id_memes = id_memes + '_' + id_pictures;
    marks = marks + '_-2';
    nextMeme();
}
button_1.onclick = function(){
    id_memes = id_memes + '_' + id_pictures;
    marks = marks + '_-1';
    nextMeme();
}
button0.onclick = function(){
    id_memes = id_memes + '_' + id_pictures;
    marks = marks + '_0';
    nextMeme();
}
button1.onclick = function(){
    id_memes = id_memes + '_' + id_pictures;
    marks = marks + '_1';
    nextMeme();
}
button2.onclick = function(){
    id_memes = id_memes + '_' + id_pictures;
    marks = marks + '_2';
    nextMeme();
}
button3.onclick = function(){
    id_memes = id_memes + '_' + id_pictures;
    marks = marks + '_3';
    nextMeme();
}