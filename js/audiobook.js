function Audiobook() {}

Audiobook.prototype.getAudioBooks = function (searchTerm) {
  $.get("https://librivox.org/api/feed/audiobooks/?author=" + searchTerm + "&format=json")
  .then(function(returnedObject){
    console.log(searchTerm);
    console.log(returnedObject);
    var audioArray = returnedObject.books;
    var audioTitle;
    audioArray.forEach(function(book){
      audioTitle = book.title;

      $('.audiobooks ul').append("<li>" + audioTitle + "</li>");
      $('.audiobooks').show();
    });
  }).fail(function(error){
    alert("error");
  });
};

exports.audiobookModule = Audiobook;
