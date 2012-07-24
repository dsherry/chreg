document.body.bgColor = 'orange';
var r = 'random';
document.body.innerHTML = document.body.innerHTML.replace(new RegExp(r,'g'),'VAR');
document.body.bgColor = 'green';
