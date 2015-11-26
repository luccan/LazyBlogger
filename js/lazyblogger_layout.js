//assign onclick to all links with href (without overriding onclick)
function assignOnClick(){
	$('a').each(function(i, obj) {
		if ($(obj).attr('href') !== undefined && $(obj).attr('onclick') === undefined){
			if ($(obj).attr('href') != "#" && $(obj).attr('href') != "javascript:"){
				$(obj).click( function(){ window.top.location = $(this).attr('href'); } );
				//console.log(obj);
			}
		}
	});
}

//load content
function lazyblogger_init(content) {
	//Read Query Param
	var params = {};

	if (location.search) {
		var parts = location.search.substring(1).split('&');

		for (var i = 0; i < parts.length; i++) {
			var nv = parts[i].split('=');
			if (!nv[0]) continue;
			params[nv[0]] = nv[1] || true;
		}
	}
	if (typeof params.path === "undefined"){
		//throw error
		window.location.href = './error';
	}
	content.load(params.path + ' #content', function(){ assignOnClick(); });
}