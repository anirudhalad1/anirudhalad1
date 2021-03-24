var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

 $(document).on('ready', function() {
   
      $(".banner").slick({
          arrows: false,
		 verticalSwiping: true,
		  vertical: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  dots: true,
		  autoplay: true,
		  infinite: true,
		  cssEase: 'linear'
      });
    });
	
	function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}