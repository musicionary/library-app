var apiKey = require('./../.env').apiKey;

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
      categories = volume.volumeInfo.categories.join(' ');
      authors = volume.volumeInfo.authors.join(' ');

      $('.books-info').append("<div class='col-sm-4'>" +
                                "<img class='img-responsive center-block' src='" + image + "'/>" +
                                "<h2>" + title + "</h2>" +
                                "<p class='text-justify'>" + subtitle + "</p>" +
                                "<p class='text-justify'>" + maturityRating + "</p>" +
                                "<p class='text-justify'>" + publishedDate + "</p>" +
                                "<p class='text-justify'>" + publisher + "</p>" +
                                "<p class='text-justify'>" + authors + "</p>" +
                                "<p class='text-justify'>" + categories + "</p>" +
                                "<p class='text-justify'><a href='" + previewLink + "' target='_blank'>Preview</a></p>" +
                              "</div>"

      );
    });
  }).fail(function (error) {
    alert('error');
  });
};

exports.libraryModule = Library;
