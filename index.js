
//<--- Created by Jack F. Perry, Jr. --->

//<--- Initializing variables for page sections --->
let desktopLogo = $("#desktop");
let mobileLogo = $("#mobile");
let charSearch = $("#char-search");
let input = $("#inputForm");
let inputOpen = $("#inputOpen");
let inputClose = $("#inputClose");
let inputSubmit = $("#inputSubmit");
let form = $("#form");
let dataSent = $("#dataSent");

const desktop = window.matchMedia("(min-width: 810px)");

//<--- Hiding divs --->
desktopLogo.hide()
mobileLogo.hide();
charSearch.hide();
input.hide();
inputClose.hide();
dataSent.hide();

$(document).ready(function() { 
    if (desktop.matches) {
        desktopLogo.show();
    }
    else {
        mobileLogo.show();
    }
    charSearch.delay(1000).show();

    inputOpen.click(function() {
        charSearch.fadeOut(500);
        input.fadeIn(500);
        inputOpen.fadeOut(0);
        inputClose.fadeIn(500);
    });

    inputClose.click(function() {
        charSearch.fadeIn(500);
        input.fadeOut(500);
        inputOpen.fadeIn(500);
        inputClose.fadeOut(500);
        dataSent.hide();
    });

    inputSubmit.click(function() {
        form[0].reset();
        dataSent.fadeIn(500);
    })

});