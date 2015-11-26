/* 	lazyblogger.js
	The engine that loads _layout.html iframe into current body.
	Assumes there exist a _layout.html at the parent folder of the content/ directory.
	This should only be called by items in the content/ directory.
*/
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
document.body.innerHTML = '<iframe id="myIframe" src="'+iframe_src+'" height="100%" width="100%"></iframe>';

var myIframe = document.getElementById('myIframe');
myIframe.onload = function() {
	document.body.style["display"] = "block"; //show
};