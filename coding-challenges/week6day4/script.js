'use script'


var BOOKS = [];

var searchBook = function(language) {
  var result = [];
  for(var i = 0; i < BOOKS.length; i++) {
    if(BOOKS[i].language == language) {
      result.push(i);
    }
  }
  return result;
};






var loadData = function () {
  var request = new XMLHttpRequest();
  request.open("get", "books.json");
  request.send();
  request.onreadystatechange = function (data) {
    if (request.readyState == 4 && request.status == 200) {

      BOOKS = JSON.parse(request.responseText);

      }

  };
};

var Display = function(i) {
      var book = BOOKS[i];

      var tbody = document.getElementById("tab");

      var tr = document.createElement("tr");
      tbody.appendChild( tr );

      var title = document.createElement("td");
      title.innerText = book.title;
      tr.appendChild( title );

      var author = document.createElement("td")
      author.innerText = book.author;
      tr.appendChild( author );

      var country = document.createElement("td")
      country.innerText = book.country;
      tr.appendChild( country );

      var language = document.createElement("td")
      language.innerText = book.language;
      tr.appendChild( language );

      var link = document.createElement("td")
      link.innerText = book.link;
      tr.appendChild( link );

      var pages = document.createElement("td")
      pages.innerText = book.pages;
      tr.appendChild( pages );

      var year = document.createElement("td")
      year.innerText = book.year;
      tr.appendChild( year );


};
var button = document.getElementById("submit");
button.addEventListener("click", function() {
  var language = document.getElementById("input").value;
   if(language == "") {
     
    alert("Please enter a language first");
    return;
  }
  var bookResults = searchBook(language);
  var tbody = document.getElementById("tab");
  tbody.innerText = "";
  
  for(var i = 0; i < bookResults.length; i++) {

    Display(bookResults[i]);
  };

});

//Start things by loading AJax data.

loadData();

