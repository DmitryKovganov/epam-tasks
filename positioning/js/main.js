var lastScrollTop = 0;
window.onscroll = (function(event){
	if (window.scrollY > lastScrollTop) {
			document.getElementById('social').style.opacity = 0;
	} 
	else if (window.scrollY <= 200) {
		document.getElementById('social').style.opacity = 1;
	}
	lastScrollTop = window.scrollY;
});