/// from data.js
var tableData = data;

// Select the body element
tbody = d3.select("tbody")

// Build a table from kvp
function displayData(data){ 
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)

var inputText = d3.select("#datetime")
var button = d3.select("#filter-btn")

// Filter results by date
function changeHandler(){
    d3.event.preventDefault();
    console.log(inputText.property("value"));
    var new_table = tableData.filter(sighting => sighting.datetime===inputText.property("value"))
    displayData(new_table)
}

// Listen for the click...
button.on("click", changeHandler)
