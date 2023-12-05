
	document.getElementById("mybutton").addEventListener("click", function() {
	window.location.href = "file:///C:/Users/KIZUNA/Documents/System/homepage%20practice/homepage.html"
});

	document.getElementById("mybutton2").addEventListener("click", function() {
	window.location.href = "file:///C:/Users/KIZUNA/Documents/System/homepage%20practice/rooms.html#"
	});

	document.getElementById("mybutton3").addEventListener("click", function() {
		window.location.href = "file:///C:/Users/KIZUNA/Documents/homepage%20practice/homes.html"
	});
var dropdownBtn = document.querySelectorAll('.menu-btn');
			//Add this for toggling dropdown
			lastOpened = null;

		dropdownBtn.forEach(btn => btn.addEventListener('click', function() {
  var menuContent = this.nextElementSibling;
  menuContent.classList.toggle("show");
  
  //Add this for toggling dropdown
  if (lastOpened && lastOpened !== menuContent)
      lastOpened.classList.remove("show");
      lastOpened = menuContent;
}));