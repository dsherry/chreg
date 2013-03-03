// add highlighting style
$('head').append('<style>\
      .highlight {\
      background: yellow;\
      text-decoration: underline;\
      }\
    </style>');
$('body').append('<br>Starting... ');

//$(function() {
//    alert('Yay im an extension :)');
//});

function doHighlighting () {
    var pattern = scriptOptions['pattern'];
    var regex;
    //$('#regex-section').highlightRegex();
    try { regex = new RegExp(pattern, 'ig') }
    catch (e) { $('*').addClass('error') }
    $('body').append(regex);

    if (typeof regex !== 'undefined') {
	$('*').removeClass('error');

	// if ($('*').val() != '') {
	// clear old highlighting
	$('body').highlightRegex();
	// add new highlighting
	$('body').highlightRegex(regex);
 	// }
    }
};

doHighlighting();

$('body').append('\tFinished.');
