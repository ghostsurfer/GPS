 function vollbild() {
 
  var element = document.getElementById("fullscreenCont");
 
  if (element.requestFullScreen) {
 
    if (!document.fullScreen) {
        document.getElementById('open_fullscreen').setAttribute('style', 'display:none;');
        document.getElementById('close_fullscreen').setAttribute('style', 'display:inline;');
        element.requestFullscreen();  
    } else {
        document.getElementById('open_fullscreen').setAttribute('style', 'display:inline;');
        document.getElementById('close_fullscreen').setAttribute('style', 'display:none;');
        document.exitFullScreen();
    }
 
  } else if (element.mozRequestFullScreen) {
 
    if (!document.mozFullScreen) {
        document.getElementById('open_fullscreen').setAttribute('style', 'display:none;');
        document.getElementById('close_fullscreen').setAttribute('style', 'display:inline;');
        element.mozRequestFullScreen();
    } else {        
        document.getElementById('open_fullscreen').setAttribute('style', 'display:inline;');
        document.getElementById('close_fullscreen').setAttribute('style', 'display:none;');
        document.mozCancelFullScreen();
    }
 
  } else if (element.webkitRequestFullScreen) {
 
    if (!document.webkitIsFullScreen) {
        document.getElementById('open_fullscreen').setAttribute('style', 'display:none;');
        document.getElementById('close_fullscreen').setAttribute('style', 'display:inline;');        
        element.webkitRequestFullScreen();
    } else {
                                        
        document.getElementById('open_fullscreen').setAttribute('style', 'display:inline;');
        document.getElementById('close_fullscreen').setAttribute('style', 'display:none;');
        document.webkitCancelFullScreen();
    }
 
  }
 
}
     
    document.getElementById("fullscreenButton").addEventListener("click", vollbild, false);                