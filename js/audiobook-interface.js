var Audiobook = require('./../js/audiobook.js').audiobookModule;

$(document).ready(function () {
  $('#getAuthor').click(function() {
    var searchTerm = $('#authorSearch').val();
    searchTerm = searchTerm.split(" ");
    searchTerm = searchTerm.join("%20");
    console.log(searchTerm);
    newAudioBook = new Audiobook();
    newAudioBook.getAudioBooks(searchTerm);
  });
});
