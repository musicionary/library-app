var Library = require('./../js/library.js').libraryModule;

$(document).ready(function () {
  $('#getAuthor').click(function() {
    var searchTopic = $('#authorSearch').val();
    searchTopic = searchTopic.split(" ");
    searchTopic = searchTopic.join("%20");
    console.log(searchTopic);
    newLibrary = new Library();
    newLibrary.getBookInfo(searchTopic);
  });
});
