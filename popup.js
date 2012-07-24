// Author: Dylan Sherry (email:sharshofski@gmail.com)
// Released in 2012 under the MIT license

// this is the main popup script

function loader() {
    document.getElementById('highlight0').onclick = highlightSelection;
    console.log("loader() finished");
};


// example function: add selected words to the current page
function addSelection () {
    var selection = document.getElementById('text0').value;
    console.log(selection);
    var injection = "document.bgColor='green'; \
var x = 'hello'; \
document.body.innerHTML = document.body.innerHTML + x + \"" + selection + "\"; \
";
    chrome.tabs.executeScript(null, {code:injection});
    console.log(injection);
};


// highlight all occurences of the selected words in the current page
function highlightSelection () {
    var selection = document.getElementById('text0').value;
    console.log(selection);
    chrome.tabs.executeScript(null, {code: 'var scriptOptions = {sel:\"'+selection+'\"}'}, function () {
	    chrome.tabs.executeScript(null, {file: "injection.js"});
	});
};

window.onload = loader;
