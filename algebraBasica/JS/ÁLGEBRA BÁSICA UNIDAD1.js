	function window1(event){
		document.getElementById("one").style.visibility = "visible"
		document.getElementById("body").style.overflow = "hidden"
	}
	function window2(event){
		document.getElementById("two").style.visibility = "visible"
		document.getElementById("body").style.overflow = "hidden"
	}
	function window3(event){
		document.getElementById("three").style.visibility = "visible"
		document.getElementById("body").style.overflow = "hidden"
	}
   window.onload = function() {
      document.getElementById("x").onclick = function() {
         document.getElementById("one").style.visibility = "hidden"
		 document.getElementById("body").style.overflow = "visible"
        };
      document.getElementById("x2").onclick = function() {
         document.getElementById("two").style.visibility = "hidden"
		 document.getElementById("body").style.overflow = "visible"
		};
		document.getElementById("x3").onclick = function() {
         document.getElementById("three").style.visibility = "hidden"
		 document.getElementById("body").style.overflow = "visible"
        };
	};