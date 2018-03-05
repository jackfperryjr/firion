
//<--- Created by Jack F. Perry, Jr. --->

//<--- Initializing variables for page sections --->
let desktopLogo = $("#desktop");
let mobileLogo = $("#mobile");
let charSearch = $("#char-search");
let charCard = $("#char-card");
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


    /***********************************************************************
    

    const reducerFunction = (data, element) => {

        // Add the current field to the object.
        data[element.name] = element.value;

        // For the demo only: show each step in the reducer’s progress.
        console.log(JSON.stringify(data));

        return data;
    };

    const formToJSON_deconstructed = elements => {
  
        // This is the function that is called on each element of the array.
        const reducerFunction = (data, element) => {
            
            // Add the current field to the object.
            data[element.name] = element.value;
            
            // For the demo only: show each step in the reducer’s progress.
            console.log(JSON.stringify(data));

            return data;
        };
  
        // This is used as the initial value of `data` in `reducerFunction()`.
        const reducerInitialValue = {};
        
        // To help visualize what happens, log the inital value.
        console.log('Initial `data` value:', JSON.stringify(reducerInitialValue));
        
        // Now we reduce by `call`-ing `Array.prototype.reduce()` on `elements`.
        const formData = [].reduce.call(elements, reducerFunction, reducerInitialValue);
        
        // The result is then returned for use elsewhere.
        return formData;
    };

    const formToJSON = elements => [].reduce.call(elements, (data, element) => {
  
        data[element.name] = element.value;
        return data;

        }, {});

    const handleFormSubmit = event => {
  
        // Stop the form from submitting since we’re handling that with AJAX.
        event.preventDefault();
        
        // TODO: Call our function to get the form data.
        const data = formToJSON(form.elements);
        
        // Demo only: print the form data onscreen as a formatted JSON object.
        const dataContainer = document.getElementsByClassName('results__display')[0];
        
        // Use `JSON.stringify()` to make the output valid, human-readable JSON.
        dataContainer.textContent = JSON.stringify(data, null, "  ");
        
        // ...this is where we’d actually do something with the form data...
    };

    const form = form[0];
    form.addEventListener('submit', handleFormSubmit);




    *************************************************************************/
    inputSubmit.click(function() {
        //fs.appendFile("characters.json", obj, function (err) {
        //    if (err) throw err;
        //}),
        form[0].reset();
        dataSent.fadeIn(500);
    })

});