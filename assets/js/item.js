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
    var video_source = document.getElementById("video_source");
    video_source.src = "videos/video_" + ref + ".mp4";
    var video = document.getElementById('video');
    video.load();
}

/* 
 * Set item code
 */

function setItemCode(ref) {
    document.getElementById('item_code').textContent = ref;
}

/* 
 * Show buy message
 */
function displayBuyMessage() {
    $('#buy_message').removeClass("hidden").addClass("visible");
}

window.onload = function () {
    var item = itemsData.find(item => item.ref === getQueryVariable("ref"));
    setVideoSrc(item.ref);
    setItemCode(item.ref);
    if (item.moissanite == false) {
        $('.display').css('display','none')
    }
};