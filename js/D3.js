// select(),  append(), text()
d3.select("body") // select(element) => HTMLNode - select the first element in the document
.append("h1") // append(element) => handleNode - appends an HTMLNode to a selected item
.text("Learning D3"); // text(string) => string - sets the text of the selected node or gets the current text


// selectAll(element) => [HTMLNodes]
d3.selectAll("li") 
.text("list item");


// data(), enter()
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
d3.select("body").selectAll("h2") // => An empty selection
.data(dataset) // Attach the data to those elements
.enter() //  create a new element in the document for each piece of data in the set
// if there are fewer elements than data items, it creates the missing elements
.append("h2")
.text("New Title");


// text(d => d)
d3.select("body").selectAll("h2")
  .data(dataset)
  .enter()
  .append("h2")
  .text(dollar => dollar+" USD");


// style("key", "value")
d3.select("body").selectAll("h2")
  .data(dataset)
  .enter()
  .append("h2")
  .text((d) => (d + " USD"))
  .style("font-family","verdana")


// style("key", d => d)
d3.select("body").selectAll("h2")
  .data(dataset)
  .enter()
  .append("h2")
  .text((d) => (d + " USD"))
  .style("color", d => d < 20 ? "red" : "green")


// attr("key", "value")
d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")

  
// style("key", d => d)
d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")
  .style("height", d => d + "px")


// style("key", d => d*10)
// .bar {
//   width: 25px;
//   height: 100px;
//   margin: 2px;
//   display: inline-block;
//   background-color: blue;
// }
d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")
  .style("height", (d) => (d*10)) 


// SVG - scalable vector graphics, attr() do not have units, will maintain his ratio units
const w = 500;
const h = 100;
d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h)


// .append("rect")
//  origin point(0,0) is upper-left corner
const svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h)
  .append("rect")
  .attr("width", 25)
  .attr("height", 100)
  .attr("x", 0)
  .attr("y", 0)


// svg.selectAll("rect").data(dataset).enter().append("rect")
{
const svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect") 
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", 25)
  .attr("height", 100);
}


// .attr("x", (d, i) => i*30)
// i - index 
// d - data point
{
const svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i*30)
  .attr("y", 0)
  .attr("width", 25)
  .attr("height", 100);
}


// Dinamically change the height of each bar
// .attr("height", d => d*3 )
{
const svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 30)
  .attr("y", 0)
  .attr("width", 25)
  .attr("height", (d, i) => d*3);
}


// Invert svg elements
// .attr("y", d => h - d*3)
{
const svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) =>  h-3*d)
  .attr("width", 25)
  .attr("height", (d, i) => 3 * d);
}



// Change the color of an svg
// .attr("fill", "navy")
{
const svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - 3 * d)
  .attr("width", 25)
  .attr("height", (d, i) => 3 * d)
  .attr("fill","navy")
}


// Add labels to d3 elements
{
const svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("x", (d, i) => i * 30)
   .attr("y", (d, i) => h - 3 * d)
   .attr("width", 25)
   .attr("height", (d, i) => 3 * d)
   .attr("fill", "navy");

svg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .attr("x", (d,i) => i*30)
  .attr("y", d => h - 3*d - 3 )
  .text(d => d)
}


// style D3 labels
// style("fill", "") key fill because is in a svg
{
const svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("x", (d, i) => i * 30)
   .attr("y", (d, i) => h - 3 * d)
   .attr("width", 25)
   .attr("height", (d, i) => d * 3)
   .attr("fill", "navy");

svg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text((d) => d)
  .attr("x", (d, i) => i * 30)
  .attr("y", d => h - 3 * d - 3)
  .style("font-size", 25)
  .style("fill","red")
}


// Add a hover effect
/*
.bar:hover {
  fill: brown;
}
*/
{
const svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - 3 * d)
  .attr("width", 25)
  .attr("height", (d, i) => 3 * d)
  .attr("fill", "navy")
  .attr("class","bar")

svg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text((d) => d)
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - (3 * d) - 3);
}


// Add a tooltip 
// .append("title").text(d => d)
{
const svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - 3 * d)
  .attr("width", 25)
  .attr("height", (d, i) => d * 3)
  .attr("fill", "navy")
  .attr("class", "bar")
  .append("title")
  .text(d => d)

svg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text((d) => d)
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - (d * 3 + 3))
}


// Create a scatterplot with SVG circles
{
const dataset = [
  [ 34,    78 ],
  [ 109,   280 ],
  [ 310,   120 ],
  [ 79,    411 ],
  [ 420,   220 ],
  [ 233,   145 ],
  [ 333,   96 ],
  [ 222,   333 ],
  [ 78,    320 ],
  [ 21,    123 ]
];

svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

svg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
}


// Add attr() to the circle elements
{
const dataset = [
  [ 34,    78 ],
  [ 109,   280 ],
  [ 310,   120 ],
  [ 79,    411 ],
  [ 420,   220 ],
  [ 233,   145 ],
  [ 333,   96 ],
  [ 222,   333 ],
  [ 78,    320 ],
  [ 21,    123 ]
];

svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

svg.selectAll("circle")
.data(dataset)
.enter()
.append("circle")
.attr("cx", d => d[0])
.attr("cy", d => h - d[1])
.attr("r", 5)
}


// Add labels to scatter plot circles
{
const dataset = [
  [ 34,    78 ],
  [ 109,   280 ],
  [ 310,   120 ],
  [ 79,    411 ],
  [ 420,   220 ],
  [ 233,   145 ],
  [ 333,   96 ],
  [ 222,   333 ],
  [ 78,    320 ],
  [ 21,    123 ]
];

svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

svg.selectAll("circle")
.data(dataset)
.enter()
.append("circle")
.attr("cx", (d, i) => d[0])
.attr("cy", (d, i) => h - d[1])
.attr("r", 5);

svg.selectAll("text")
.data(dataset)
.enter()
.append("text")
.text(d => `${d[0]}, ${d[1]}`)
.attr("x", d => d[0] + 5)
.attr("y", d => h - d[1])
}


// Create a linear scale
// Help to plot data if one data point is bigger than the canvas
// Uses the identity relationship, the value of the input is the same as output
const scale = d3.scaleLinear(); 
const output = scale(50); 

d3.select("body")
  .append("h2")
  .text(output); // 50



// Set a domain and a range on a scale
//  domain(arr) - data of dataset, input information for a scale 
//  range(arr) - x axis of the SVG canvas, output
scale.domain([50, 480]);
scale.range([10, 500]);
scale(50) // 10
scale(480) // 500
scale(325) // 323.37
scale(750) // 807.67
d3.scaleLinear()

{
const scale = d3.scaleLinear();
scale.domain([250, 500])
  .range([10,150])

output = scale(50);
d3.select("body")
  .append("h2")
  .text(output); // -102
}


// d3.max() and d3.min() to find min and max values 
// to avoid erros you'll want use it to the domain
{
const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]
const output = d3.max(positionData, d => d[2]); 

d3.select("body")
  .append("h2")
  .text(output)
}


// Use dinamyc scales
{
dataset = [
  [ 34,    78 ],
  [ 109,   280 ],
  [ 310,   120 ],
  [ 79,    411 ],
  [ 420,   220 ],
  [ 233,   145 ],
  [ 333,   96 ],
  [ 222,   333 ],
  [ 78,    320 ],
  [ 21,    123 ]
];

const w = 500;
const h = 500;
const padding = 30;
const xScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, d => d[0])])
    .range([padding, w - padding]);

const yScale = d3.scaleLinear()
.domain([0, d3.max(dataset, d => d[1])])
.range([h - padding, padding]);

const output = yScale(411); 
d3.select("body")
.append("h2")
.text(output) // 30
}


// Use predifined scale to place elements
{
const dataset = [
  [ 34,     78 ],
  [ 109,   280 ],
  [ 310,   120 ],
  [ 79,   411 ],
  [ 420,   220 ],
  [ 233,   145 ],
  [ 333,   96 ],
  [ 222,    333 ],
  [ 78,    320 ],
  [ 21,   123 ]
];

const w = 500;
const h = 500;
const padding = 60;

const xScale = d3.scaleLinear()
     .domain([0, d3.max(dataset, (d) => d[0])])
     .range([padding, w - padding]);

const yScale = d3.scaleLinear()
     .domain([0, d3.max(dataset, (d) => d[1])])
     .range([h - padding, padding]);

const svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

svg.selectAll("circle")
.data(dataset)
.enter()
.append("circle")
.attr("cx", d => xScale(d[0]))
.attr("cy", d => yScale(d[1]))
.attr("r" , 5)

svg.selectAll("text")
.data(dataset)
.enter()
.append("text")
.text((d) =>  (d[0] + ", " + d[1]))
.attr("x", d => xScale(d[0] + 10) )
.attr("y", d => yScale(d[1]))
}


// Add axes to a visualization
// g - group
// it's passed as an argument to the call() method. 
{
const dataset = [
  [ 34,     78 ],
  [ 109,   280 ],
  [ 310,   120 ],
  [ 79,   411 ],
  [ 420,   220 ],
  [ 233,   145 ],
  [ 333,   96 ],
  [ 222,    333 ],
  [ 78,    320 ],
  [ 21,   123 ]
];

const w = 500;
const h = 500;
const padding = 60;
const xScale = d3.scaleLinear()
     .domain([0, d3.max(dataset, (d) => d[0])])
     .range([padding, w - padding]);
const yScale = d3.scaleLinear()
     .domain([0, d3.max(dataset, (d) => d[1])])
     .range([h - padding, padding]);
const svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

svg.selectAll("circle")
.data(dataset)
.enter()
.append("circle")
.attr("cx", (d) => xScale(d[0]))
.attr("cy",(d) => yScale(d[1]))
.attr("r", (d) => 5);
svg.selectAll("text")
.data(dataset)
.enter()
.append("text")
.text((d) =>  (d[0] + "," + d[1]))
.attr("x", (d) => xScale(d[0] + 10))
.attr("y", (d) => yScale(d[1]))

const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

svg.append("g")
.attr("transform", "translate(0," + (h - padding) + ")")
.call(xAxis);
svg.append("g")
.attr("transform", "translate("+ padding +", 0)")
.call(yAxis)
}