//JSON:  JavaScript Object Notation.
//APIs: Application Programming Interfaces - are tools that computers use to communicate with one another
//AJAX: Asynchronus JavaScript and XML
//APIs are sent as bytes, and your application receives it as a string





//Handle Click Events with JS using the onclick property
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("getMessage").onclick = function() {
    };
});





//Change Text with click Events
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      document.getElementsByClassName("message")[0].textContent="Here is the message"
    }
});





//Get JSON with the JavaScript XMLHttpRequest Method
//
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      const request = new XMLHttpRequest(); // an instance, has props and methods to transfer data
      request.open("GET", "/json/cats.json", true); // initializes a request, url, async?
      request.send(); // sends the request
      request.onload = function() { // onload event handler
        const json = JSON.parse(request.responseText); // parses to string and constructs the js object
        document.getElementsByClassName("message")[0].innerHTML = JSON.stringify(json) // convert object js to string
      }
    };
  });




// Get JSON with fetch()
document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('getMessage').onclick= () => {
    fetch("/json/cats.json") // makes a GET request to the URL specified, return Promise
      .then(response => response.json()) // if request was successful executes the then method, return Promise
      .then(data => { // return Promise
        document.getElementById("message").innerHTML = JSON.stringify(data)
      })
  };
});





// Access the JSON Data from an API
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('getMessage').onclick = function(){
    const req = new XMLHttpRequest();
    req.open("GET",'/json/cats.json', true);
    req.send();
    req.onload=function(){
      const json = JSON.parse(req.responseText);
      document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
      console.log(json[2].codeNames[1])
    };
  };
});





// Convert JSON Data to HTML
//  element.innerHTML can make site vulnerable to cross-site scripting atttacks
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('getMessage').onclick = function(){
    const req = new XMLHttpRequest();
    req.open("GET",'/json/cats.json',true);
    req.send();
    req.onload = function(){
      const json = JSON.parse(req.responseText);
      let html = "";
      json.forEach(i => {
        const keys = Object.keys(i);
        html += "<div class='cat'>";
        keys.forEach(key => {
          html += `<strong>${key}</strong>: ${i[key]}<br>`
        })
        html += "</div><br>"
      })

      document.getElementsByClassName('message')[0].innerHTML = html;
    };
  };
});





// Render Images from Data Sources
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('getMessage').onclick = function(){
    const req=new XMLHttpRequest();
    req.open("GET",'/json/cats.json',true);
    req.send();
    req.onload = function(){
      const json = JSON.parse(req.responseText);
      let html = "";
      json.forEach(function(val) {
        html += "<div class = 'cat'>";
        html += "img src='" + val.imageLink + "' " + "alt='" + val.altText + "'>";
        html += "</div><br>";
      });
      document.getElementsByClassName('message')[0].innerHTML=html;
    };
   };
});





// Pre-filter JSON to Get the Data You Need
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('getMessage').onclick = function(){
    const req = new XMLHttpRequest();
    req.open("GET",'/json/cats.json', true);
    req.send();
    req.onload=function(){
      let json = JSON.parse(req.responseText);
      let html = "";
      json = json.filter(val => {
        return val.id !== 1
      })

       json.forEach(function(val) {
         html += "<div class = 'cat'>"
         html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>"
         html += "</div>"
       });
       document.getElementsByClassName('message')[0].innerHTML = html;
     };
   };
});





// Get Geolocation
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    document.getElementById("data").innerHTML = `Latitude: ${position.coords.latitude}<br>Longitude: ${position.coords.longitude}`
  })
}





// POST Data with XMLHttpsRequest
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('sendMessage').onclick = function(){

    const userName = document.getElementById('name').value;
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    //sets the value of an HTTP request header, name of the header, value to set as the body of that header
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8"); 
    //event listener handles a change in the state request,  readyState === 4 means the operation is complete
    //status === 201 means it was a successful request
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 201) {
        const serverResponse = JSON.parse(xhr.response);
        document.getElementsByClassName("message")[0].textContent = serverResponse.userName + serverResponse.suffix;
      }
    }
    const body = JSON.stringify({userName: userName, suffix: " loves cats"})
    xhr.send(body)
  };
});