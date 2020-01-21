/* 
 * Display Item
 */

function displayItem(item) {
    var node = document.getElementById('items');
    node.innerHTML += '<article class="item"><span class="image"><img src="images/' + item.ref + '.jpg" alt="" /></span><a href="item.html?ref=' + item.ref + '"><h2><s>$300</s> $248</h2><div class="content"><p>BUY NOW</p></div></a></article>';
}

window.onload = function () {
    itemsData.forEach((item, index, array) => {
        displayItem(item);
    });
};