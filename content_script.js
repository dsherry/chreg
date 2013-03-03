// add highlighting style
$('head').append('<style>\
      .highlight {\
      background: yellow;\
      text-decoration: underline;\
      }\
    </style>');
$('body').append('<h1>Test</h1>');

//$(function() {
//    alert('Yay im an extension :)');
//});

function doHighlighting () {
    // var pattern = $('#text0').val();
    var pattern = scriptOptions['pattern'];
    var regex;
    //$('#regex-section').highlightRegex();
    try { regex = new RegExp(pattern, 'ig') }
    catch (e) { $('*').addClass('error') }
    $('body').append(regex);

    if (typeof regex !== 'undefined') {
	$('*').removeClass('error');
	$('body').append($('body').val());

	// if ($('*').val() != '') {
	// clear old highlighting
	$('body').highlightRegex();
	// add new highlighting
	$('body').highlightRegex(regex);
 	// }
    }
};

doHighlighting();

$('body').append('9');
