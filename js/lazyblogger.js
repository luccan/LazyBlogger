/* 	lazyblogger.js
	The engine that loads _layout.html iframe into current body.
	Assumes there exist a _layout.html at the parent folder of the content/ directory.
	This should only be called by items in the content/ directory.
*/
//add meta to allow responsive design on phone
document.getElementsByTagName('head')[0].innerHTML = '<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">' + 
														'<meta charset="utf-8"><style type="text/css"></style>' +
														'<meta http-equiv="X-UA-Compatible" content="IE=edge">';

var url = window.location.href.split('/');
var j = 0;
var iframe_src = './layout.html';
for (var i=0;i<url.length;i++){
	if (j>0){ //append href
		iframe_src = '../' + iframe_src + '/' + url[i]; //move up one level and append path to parameter
		j++;
	}
	else if (url[i]=='content'){
		j=1;
		iframe_src += '?path=./content';
	}
}

document.body.style["overflow"] = "hidden";
document.body.style["margin"] = "0";
//console.log(iframe_src);
document.body.innerHTML = '<iframe id="myIframe" src="'+iframe_src+'" style="height:100%; width:100%; border:none;"></iframe>';

var myIframe = document.getElementById('myIframe');
myIframe.onload = function() {
	document.body.style["display"] = "block"; //show
};