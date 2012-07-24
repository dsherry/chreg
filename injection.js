// Author: Dylan Sherry (email:sharshofski@gmail.com)
// Released in 2012 under the MIT license

// this code is injected into the current tab


// constants for highlighting
var uid = 'se4567ujhgfrt';
var highlightFront = "<font style='BACKGROUND-COLOR: #ffff00' name='" + uid + "'>";
var highlightBack = "</font name='" + uid + "'>";

// highlight all occurences of the selected substring in the text
function highlight(text, substr) {
    doHighlight(text, substr, highlightFront, highlighBack);
}

// remove all related SPAN occurences
function unhighlight(text) {
    // FONT starts
    console.log(highlightFront);
    console.log(highlightBack);
    text = text.replace(new RegExp(highlightFront, 'g'), 'blank');
    // FONT ends
    text = text.replace(new RegExp(highlightBack, 'g'), ' ');
    return text;
}

function main () {
    // first, remove previous highlighting
    document.body.innerHTML = unhighlight(document.body.innerHTML);
    // a debugging test
    document.body.innerHTML = document.body.innerHTML + " TEST.";
    // get the search pattern from the text box
    var pattern = scriptOptions['sel'];
    console.log(pattern);
    document.body.bgColor = 'orange';
    document.body.innerHTML = doHighlight(document.body.innerHTML, pattern, highlightFront, highlightBack);
    // EOF debugging
    document.body.bgColor = 'green';
}

// call main
//var j = 'just';
//document.body.innerHTML = document.body.innerHTML.replace(new RegExp(j, 'g'), 'VAR');
//console.log(j);
main();


// ********************************************************
// Boilerplate
// ********************************************************

function doHighlight(bodyText, searchTerm, highlightStartTag, highlightEndTag) 
{
  // the highlightStartTag and highlightEndTag parameters are optional
  if ((!highlightStartTag) || (!highlightEndTag)) {
    highlightStartTag = "<font style='color:blue; background-color:yellow;'>";
    highlightEndTag = "</font>";
  }
  
  // find all occurences of the search term in the given text,
  // and add some "highlight" tags to them (we're not using a
  // regular expression search, because we want to filter out
  // matches that occur within HTML tags and script blocks, so
  // we have to do a little extra validation)
  var newText = "";
  var i = -1;
  var lcSearchTerm = searchTerm.toLowerCase();
  var lcBodyText = bodyText.toLowerCase();
    
  while (bodyText.length > 0) {
    i = lcBodyText.indexOf(lcSearchTerm, i+1);
    if (i < 0) {
      newText += bodyText;
      bodyText = "";
    } else {
      // skip anything inside an HTML tag
      if (bodyText.lastIndexOf(">", i) >= bodyText.lastIndexOf("<", i)) {
        // skip anything inside a <script> block
        if (lcBodyText.lastIndexOf("/script>", i) >= lcBodyText.lastIndexOf("<script", i)) {
          newText += bodyText.substring(0, i) + highlightStartTag + bodyText.substr(i, searchTerm.length) + highlightEndTag;
          bodyText = bodyText.substr(i + searchTerm.length);
          lcBodyText = bodyText.toLowerCase();
          i = -1;
        }
      }
    }
  }
  
  return newText;
}
