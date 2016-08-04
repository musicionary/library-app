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

  $(".preview").click(function () {
    google.books.load();

    function initialize() {
      var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
      viewer.load('ISBN:9780801899386');
    }

    google.books.setOnLoadCallback(initialize);
    $('#viewerCanvas').show();
    $('.tester').show();
  });
});
