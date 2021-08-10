console.log("Hello")
var artworks = [
  {
    description: "Beautiful city.",
    address: "https://picsum.photos/id/234/400"
  },
  {
    description: "Nature's Beauty.",
    address: "https://picsum.photos/id/456/400"
  },
  {
    description: "reflection in water.",
    address: "https://picsum.photos/id/698/400"
  },
  {
    description: "Happiness and peace",
    address: "https://picsum.photos/id/653/400"
  },
  {
    description: "SMILE,Its free therapy",
    address: "gyanvipic.jpg"
  }
]

var feed = document.getElementById('art-feed');

for (var i = 0; i < artworks.length; i++) {
  var feedBox = document.createElement('div');
  feedBox.setAttribute('class', 'feed-box');

  var feedImage = document.createElement('div');
  feedImage.setAttribute('class', 'feed-image');

  var img = document.createElement('img');
  img.setAttribute('src', artworks[i].address);

  var feedDescription = document.createElement('div');
  feedDescription.setAttribute('class', 'feed-description');

  var text = document.createTextNode(artworks[i].description)

  feedImage.appendChild(img);
  feedDescription.appendChild(text);

  feedBox.appendChild(feedImage);
  feedBox.appendChild(feedDescription);

  feed.appendChild(feedBox);
}