$(document).ready(() => {
	$('div.jGravity').on('click', () => { // This can be changed to anything you like in order to trigger jGravity effect
		$('body').jGravity({ // jGravity works best when targeting the body
			target: 'div', // Enter your target critera e.g. 'div, p, span', 'h2' or 'div#specificDiv', or even 'everything' to target everything in the body
			ignoreClass: 'ignoreMe', // Specify if you would like to use an ignore class, and then specify the class
			weight: 25, // Enter any number 1-100 ideally (25 is default), you can also use 'heavy' or 'light'
			depth: 5, // Enter a value between 1-10 ideally (1 is default), this is used to prevent targeting structural divs or other items which may break layout in jGravity
			drag: true // Decide if users can drag elements which have been effected by jGravity
		});

		// Misc code for demo purposes
		$(this).removeClass('jGravity');
		$(this).delay(1000).queue(() => {
			$(this).html("class#><a href='http://tinybigideas.com/plugins/jquery-gravity/'>Get jGravity</a></h2>");
		});
		// ----- \\

	});
});


$(function() {
  $(".jGravity").click(function() {
    $("body").removeClass("intro");
  });
});

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
