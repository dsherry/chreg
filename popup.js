// Author: Dylan Sherry (email:sharshofski@gmail.com)
// Released in 2013 under the MIT license

// this is the main popup script

// the current and previous input values
var pattern;
var previousPattern;
var debug=true;

function loader() {
    document.getElementById('highlight0').onclick = highlightSelection;
    document.getElementById('text0').onkeyup = highlightSelection;
    console.log("loader() finished");
};

// highlight all occurences of the selected words in the current page
function highlightSelection () {
    var pattern = document.getElementById('text0').value;
    console.log(pattern);
    // prevent duplicate execution (debug override)
    if (debug || !(pattern == previousPattern)) {
	chrome.tabs.executeScript(null, {code: 'var scriptOptions = {pattern:\"'+pattern+'\"}'}, function () {
	    chrome.tabs.executeScript(null, {file: "content_script.js"});
	});
	// advance state
	previousPattern = pattern;
    }
};

window.onload = loader;
