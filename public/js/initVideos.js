$("head").append(
  '<link rel="stylesheet" type="text/css" href="css/videos.css">'
);

document.getElementById("menuVideos").innerHTML =
  '<div id="container">    <nav>\
        <ul>\
            <li><a href="#">Home</a></li>\
            <li><a href="#">WordPress</a>\
            <!-- First Tier Drop Down -->\
            <ul>\
                <li><a href="#">Themes</a></li>\
                <li><a href="#">Plugins</a></li>\
                <li><a href="#">Tutorials</a></li>\
            </ul>        \
            </li>\
            <li><a href="#">Web Design</a>\
            <!-- First Tier Drop Down -->\
            <ul>\
                <li><a href="#">Resources</a></li>\
                <li><a href="#">Links</a></li>\
                <li><a href="#">Tutorials</a>\
            	<!-- Second Tier Drop Down -->\
                <ul>\
                    <li><a href="#">HTML/CSS</a></li>\
                    <li><a href="#">jQuery</a></li>\
                    <li><a href="#">Other</a>\
                        <!-- Third Tier Drop Down -->\
                        <ul>\
                            <li><a href="#">Stuff</a></li>\
                            <li><a href="#">Things</a></li>\
                            <li><a href="#">Other Stuff</a></li>\
                        </ul>\
                    </li>\
                </ul>\
                </li>\
            </ul>\
            </li>\
            <li><ahref="#">Graphic Design</a></li>\
            <li><a href="#">Inspiration</a></li>\
            <li><a href="#">Contact</a></li>\
            <li><a href="#">About</a></li>\
        </ul>\
    </nav>\
  <h1>Pure CSS Drop Down Menu</h1>\
<p> A simple dropdown navigation menu made with CSS Only. Dropdowns are marked with a plus sign ( + )</p>\
<p>Read tutorial <a target="_blank" href="http://webdesignerhut.com/css-dropdown-menu/">here</a></p>\
</div>';