// Author: Dylan Sherry (email:sharshofski@gmail.com)
// Released in 2012 under the MIT license

// this is the main popup script

// the current and previous input values
var pattern;
var previousPattern;
var debug=true;

function loader() {
    document.getElementById('highlight0').onclick = highlightSelection;
    // inject style and reference to scripthi
    chrome.tabs.executeScript(null, {code: "document.head.innerHTML = document.head.innerHTML + \
'\
<style><!-- \
SPAN.searchword { background-color:yellow; }\
// -->\
</style>\
<script src=\"searchhi/searchhi_slim.js\" type=\"text/javascript\" language=\"JavaScript\"></script>\
'\
"});
    console.log("loader() finished");
};


// example function: add selected words to the current page
function addSelection () {
    var pattern = document.getElementById('text0').value;
    console.log(pattern);
    var injection = "document.bgColor='green'; \
var x = 'hello'; \
document.body.innerHTML = document.body.innerHTML + x + \"" + pattern + "\"; \
";
    chrome.tabs.executeScript(null, {code:injection});
    console.log(injection);
};


// highlight all occurences of the selected words in the current page
function highlightSelection () {
    var pattern = document.getElementById('text0').value;
    console.log(pattern);
    // prevent duplicate execution (debug override)
    if (debug || !(pattern == previousPattern)) {
	chrome.tabs.executeScript(null, {code: 'var scriptOptions = {pattern:\"'+pattern+'\"}'}, function () {
	    chrome.tabs.executeScript(null, {file: "injection.js"});
	});
	// advance state
	previousPattern = pattern;
    }
};

window.onload = loader;
