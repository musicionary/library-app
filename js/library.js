// var apiKey = require('./../.env').apiKey;
function Library() {}

Library.prototype.getBookInfo = function (searchTopic) {
  $.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTopic).then(function (response) {
    $('.books-info').text("");
    console.log(response);
    var searchArray = response.items;
    var title, subtitle, image, maturityRating, publishedDate, previewLink, publisher, categories, authors;
    searchArray.forEach(function(volume){
      title = volume.volumeInfo.title;
      subtitle = volume.volumeInfo.subtitle;
      image = volume.volumeInfo.imageLinks.thumbnail;
      maturityRating = volume.volumeInfo.maturityRating;
      publishedDate = volume.volumeInfo.publishedDate;
      previewLink = volume.volumeInfo.previewLink;
      publisher = volume.volumeInfo.publisher;
      if(volume.volumeInfo.categories) {
        categories = volume.volumeInfo.categories.join(' ');
      }
      if(volume.volumeInfo.authors) {
        authors = volume.volumeInfo.authors.join(' ');
      }

      $('.books-info').append("<div class='book-item col-sm-4'>" +
                                "<img class='img-responsive center-block' src='" + image + "'/>" +
                                "<div class='book-details'>" +
                                  "<h2>Title: " + title + "</h2>" +
                                  "<p class='text-justify'>Subtitle: " + subtitle + "</p>" +
                                  "<p class='text-justify'>Rating: " + maturityRating + "</p>" +
                                  "<p class='text-justify'>Publish Date: " + publishedDate + "</p>" +
                                  "<p class='text-justify'>Publisher: " + publisher + "</p>" +
                                  "<p class='text-justify'>Authors: " + authors + "</p>" +
                                  "<p class='text-justify'>Genre: " + categories + "</p>" +
                                  "<button class='btn btn-default preview'>Preview</button>" +
                                "</div>" +
                              "</div>"

      );

    });
  }).fail(function (error) {
    alert('error');
  });
};



exports.libraryModule = Library;
