var mainvideo = document.getElementsByClassName("mainvideo").item(0);
var mixloop = document.getElementsByClassName("mixloop").item(0);

mainvideo.addEventListener('ended', function(event){
	this.parentNode.removeChild(mainvideo);
},false);
