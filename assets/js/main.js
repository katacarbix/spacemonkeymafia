$(document).ready(function(){
	$('.slider').slider({
		indicators: false,
		height: 600,
		duration: 800
	});
	$('ul.tabs').tabs();
	$('a.email').mailto();
	$('.fb-page iframe ._2p3a').css({'width': '100% !important'});
	
	function svgasimg(){
		return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
	}
	
	if (!svgasimg()){
		var e = document.getElementsByTagName("img");
		if (!e.length){
			e = document.getElementsByTagName("IMG");
		}
		for (var i=0, n=e.length; i<n; i++){
			var img = e[i],
			src = img.getAttribute("src");
			if (src.match(/svgz?$/)){ // URL ends in svg or svgz
				img.setAttribute("src", img.getAttribute("data-fallback"));
			}
		}
	}
});
