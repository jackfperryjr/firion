
//<--- Created by Jack F. Perry, Jr. --->

//<--- Initializing variables for page sections --->
let desktopLogo = $("#desktop");
let mobileLogo = $("#mobile");
let charSearch = $("#char-search");
const desktop = window.matchMedia("(min-width: 810px)");

//<--- Hiding divs --->
desktopLogo.hide()
mobileLogo.hide();
charSearch.hide();

$(document).ready(function() { 
    if (desktop.matches) {
        desktopLogo.show();
    }
    else {
        mobileLogo.show();
    }
    charSearch.delay(1000).show();
});