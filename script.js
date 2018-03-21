//"name": "hello-world",
//"html_url": "https://github.com/ubosquet/hello-world",

function loadRepo(url, callback) {
    const gitHubRequest = new XMLHttpRequest();
    gitHubRequest.onreadystatechange =   function loadRepoCallback(gitHubRequest) {
        if (this.readyState == 4 && this.status == 200){
            // Callback function needs to parse the JSON
            callback = JSON.parse(this.responseText);
            // You will need a forEach to loop through the parsed object
            for (var i =0; i < callback.length; i++){
                
                 // Using the DOM get the element ID from your <ul> in your HTML
                let ul = document.getElementById("GitRepos");
                // Using the DOM create new list elements
                let li = document.createElement("li");
                let a = document.createElement("a");


            // Append the new list items to the element you retrieved from HTML
                li.appendChild(document.createTextNode(callback[i].name));
                a.appendChild(li);
                // Plug in the .html_url and .name from the parsed object.  To make this a link you'll need 
                a.setAttribute("href",callback[i].html_url);
                ul.appendChild(a);
            }
        }
         
        
      }
    
    
      // Finish your request here
      // Don't forget the callback()
      gitHubRequest.open("GET", "https://api.github.com/users/ubosquet/repos", true)
      gitHubRequest.send();
  }
  
  
  

// Jquery part

$(document).ready(function() { 
	$("#nav1 li a").click(function() { 
		$("link.changeHere").attr("href",$(this).attr('rel'));
		return false;
	});
});

/*
$(document).ready(function() {
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#home']").on('click', function(event) {
  
      // Prevent default anchor click behavior
      event.preventDefault();
  
      // Store hash
      var hash = this.hash;
  
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 100
      }, 600, function() {
  
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    });
  
    // ============ parallax background scrolling =================
    // cache the window object
    $window = $(window);
  
    $('[data-type="background"]').each(function() {
      // declare the variable to affect the defined data-type
      var $scroll = $(this);
  
      $(window).scroll(function() {
        // HTML5 proves useful for helping with creating JS functions!
        // also, negative value because we're scrolling upwards                             
        var yPos = -(($window.scrollTop() - $scroll.offset().top) / $scroll.data('speed'));
  
        // background position
        var coords = '50% calc(50% + ' + yPos + 'px)';
  
        // move the background
        $scroll.css({
          backgroundPosition: coords
        });
      }); // end window scroll
    }); // end section function
  
    // ============= contact form =============
       $("#contact-form").validator().on("submit", function(event) {
      if (event.isDefaultPrevented()) {
        // handle the invalid form...
      } else {
        // everything looks good!
        event.preventDefault();
        formSuccess();
      }
    });
  
    function submitForm() {
      // Initiate Variables With Form Content
      var name = $("#name").val();
      var email = $("#email").val();
      var message = $("#message").val();
  
      $.ajax({
        type: "POST",
        url: "php/form-process.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        success: function(text) {
          if (text == "success") {
            formSuccess();
          }
        }
      });
    }
  
    function formSuccess() {
      $("#form-feedback").css({
        opacity: 1,
        marginRight: "20px"
      });
    }
  
  });*/
  
  
  
  
  
  
  
  
  
 
  