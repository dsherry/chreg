function loader() {
    document.getElementById('highlight0').onclick = addWords;
    console.log("loader() finished");
};

function addWords () {
    var selection = document.getElementById('text0').value;
    // TODO figure out this formatting bit. Then format the text0 value into the executeScript call.
    var selection = document.getElementById('text0').value;
    console.log(selection);
    var injection = "document.bgColor='green'; document.body.innerHTML = document.body.innerHTML + 'aasdas'; document.body.innerHTML = document.body.innerHTML + \"" + selection + "\";";
    chrome.tabs.executeScript(null, {code:injection});
    console.log(injection);

};

window.onload = loader;

console.log("fine");