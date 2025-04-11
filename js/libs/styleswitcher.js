// Styles Switcher
jQuery(document).ready(function(){

	// Show Colors Panel
	jQuery('#show-panel').click(function(){
		if(jQuery(this).hasClass('show-panel')) {
			jQuery('.colors-switcher').css({'right': 0});
			jQuery('#show-panel').removeClass('show-panel');
			jQuery('#show-panel').addClass('hide-panel');
		}else if(jQuery(this).hasClass('hide-panel')) {
			jQuery('.colors-switcher').css({'right': '-100px'});
			jQuery('#show-panel').removeClass('hide-panel');
			jQuery('#show-panel').addClass('show-panel');
		}
	});
	
});

function setActiveStyleSheet(title) {
  var i, a, main;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
      a.disabled = true;
      if(a.getAttribute("title") == title) a.disabled = false;
    }
  }
}

function getActiveStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
  }
  return null;
}

function getPreferredStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1
       && a.getAttribute("rel").indexOf("alt") == -1
       && a.getAttribute("title")
       ) return a.getAttribute("title");
  }
  return null;
}