// Add Document Elements
// select(nameElement:HTMLNode) - select the first element from the document
// append(nameElement:handleNode) - appends an HTMLNode to a selected item
// text(string:string) - sets the text of the selected node or gets the current text
d3.select("body")
.append("h1")
.text("Learning D3")





// selectAll() - return an array of HTMLNodes
d3.selectAll("li")
.text("list item")