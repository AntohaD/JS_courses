const COLOR = (function() {
	return {
  	red : function() {
        var colorRed = Math.floor(Math.random() * 255);
        if (colorRed < 180) {
            return 180;
        } else {
            return colorRed;
        }
    	
    },
    green : function() {
        var colorGreen = Math.floor(Math.random() * 255);
        if (colorGreen < 150) {
            return 150;
        } else {
            return colorGreen;
        }
        
    },
    blue : function() {
    	return 0;
    }
  };
})();

function getColor(){
	return "rgb(" + COLOR.red() + ", " + COLOR.green() + ", " + COLOR.blue() + ")";
}

var html = document.getElementsByTagName("html")[0];
html.addEventListener("click", function() {
	html.style.backgroundColor = getColor();
});