console.log('%cUsing Googlr', 'color: darkgreen; background-color: lightgreen; font-size: xxx-large;');
var bru = document.createElement('div');
bru.innerHTML=('<button onclick="gameData.wrong=(-100);">Get Guesses</button><style>float: left</style>');
document.body.insertBefore(bru, document.body.firstChild);
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message);
        let paragraphs = document.getElementsByTagName('p');
        for (elt of paragraphs) {
            elt.innerHTML = message.txt;
        }
}
var bru = document.createElement('div');
bru.innerHTML=('<button onclick="nextround();">Exit Round</button>');
document.body.insertBefore(bru, document.body.firstChild);