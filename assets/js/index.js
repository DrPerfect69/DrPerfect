const Swal = require('sweetalert2')
const faker = require('faker');
const _ = require('lodash');

/* 
 * Display Item
 */

function displayItem(item) {
    var node = document.getElementById('items');
    node.innerHTML += '<article class="item"><span class="image"><img src="images/' + item.ref + '.jpg" alt="" /></span><a href="item.html?ref=' + item.ref + '"><h2><s>$300</s> $248</h2><div class="content"><p>BUY NOW</p></div></a></article>';
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
    itemsData.forEach((item, index, array) => {
        displayItem(item);
    });
    setTimeout(() => {popup()}, 5000); //5000 ms (5 s)
    setInterval(() => {
        popup();
    }, 60000); //60000 ms (1 min)
};