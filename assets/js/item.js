const Swal = require('sweetalert2')
const faker = require('faker');
const _ = require('lodash');

/* 
 * Get URL Variables
 * url exemple http://www.example.com/index.php?id=1&image=awesome.jpg
 */

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}

/* 
 * Set video name
 */
function setVideoSrc(ref) {
    const video_source = document.getElementById("video_source");
    video_source.src = "videos/video_" + ref + ".mp4";
    const video = document.getElementById('video');
    video.load();
}

/* 
 * Set item code
 */
function setItemCode(ref) {
    document.getElementById('item_code').textContent = ref;
}

/* 
 * Set video poster attribute
 */
function setVideoPoster(ref) {
    document.getElementById('video').setAttribute('poster','images/'+ref+'.jpg');
}

/* 
 * Show buy message
 */
global.displayBuyMessage = function displayBuyMessage() {
    $('#buy_message').removeClass("hidden").addClass("visible");
}

/*
 * Display Sale PopUp
 */
function popup() {
    let random_item = _.sample(itemsData);
    let random_locale = _.sample(['de', 'en', 'en_AU', 'en_CA', 'fr', 'it']);
    faker.locale = random_locale;
    Swal.fire({
        toast: true,
        position: 'bottom-start',
        title: "",
        html:
        '<p> <b>'+ faker.name.findName() + '</b> from ' + faker.locales[faker.locale].address.default_country +'</p>'+
        '<p> purchased <b><a href="item.html?ref=' + random_item.ref + '">' + random_item.ref + '</a></b> ' + _.random(1, 15) + ' hours ago </p>',
        imageUrl: 'images/' +  random_item.ref+ '.jpg',
        imageWidth: 100,
        imageHeight: 100,
        showConfirmButton: false,
        timer: 10000,
        timerProgressBar: true,
        showClass: {
            popup: 'animated fadeInLeft faster'
        },
        hideClass: {
            popup: 'animated fadeOutLeft faster'
        }
    })
}

window.onload = function () {
    const item = itemsData.find(item => item.ref === getQueryVariable("ref"));
    setVideoSrc(item.ref);
    setItemCode(item.ref);
    setVideoPoster(item.ref);
    if (item.moissanite == false) {
        $('.display').css('display','none')
    }
    setTimeout(() => {popup()}, 5000); //5000 ms (5 s)
    setInterval(() => {
        popup();
    }, 60000); //60000 ms (1 min)
};