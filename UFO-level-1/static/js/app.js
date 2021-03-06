// from data.js
var tableData = data;

// console.log(tableData)


// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through `data` and console.log each ufo sighting object & display on table
data.forEach(function(ufoSighting) {
      console.log(ufoSighting);
      var row =tbody.append("tr");

      Object.entries(ufoSighting).forEach(function([key, value]) {
        // console.log(key, value);

        var cell = row.append("td");
        cell.text(value);        
      });
});

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form.
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime-input");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(tableData);
  
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  
    console.log(filteredData);

    // clears the table to display only current results
    var list = d3.select("tbody");
    list.html("");

    // Loop through `data` and console.log each ufo sighting object
    filteredData.forEach(function(ufoSighting){
        // console.log(ufoSighting);
        var row =tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);

      var cell = row.append("td");
      cell.text(value);        
        });
    
    });

    


}
