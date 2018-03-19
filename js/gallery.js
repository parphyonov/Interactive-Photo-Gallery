// These arrays will hold links to photos and thumbnails
const photos = [];
const thumbs = [];

// Since we know there are 12 photos now and how they are numbered, I will populate
// the arrays of links using simple loops
const pushContent = () => {
  for (let index = 1; index <= 12; index += 1) {
    if (index < 10) {
      photos.push(`./photos/0${index}.jpg`);
      thumbs.push(`./photos/thumbnails/0${index}.jpg`);
    } else {
      photos.push(`./photos/${index}.jpg`);
      thumbs.push(`./photos/thumbnails/${index}.jpg`);
    }
  }
}

// Calling the function to populate the arrays with links to images
pushContent();

// Captions are copied from 'photo_captions.txt' and formatted into this array manually
const captions = [
  `Hay Bales<br>I love hay bales. Took this snap on a drive through the countryside past some straw fields.`,
  `Lake<br>The lake was so calm today. We had a great view of the snow on the mountains from here.`,
  `Canyon<br>I hiked to the top of the mountain and got this picture of the canyon and trees below.`,
  `Iceberg<br>It was amazing to see an iceberg up close, it was so cold but didn’t snow today.`,
  `Desert<br>The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.`,
  `Fall<br>Fall is coming, I love when the leaves on the trees start to change color.`,
  `Plantation<br>I drove past this plantation yesterday, everything is so green!`,
  `Dunes<br>My summer vacation to the Oregon Coast. I love the sandy dunes!`,
  `Countryside Lane<br>We enjoyed a quiet stroll down this countryside lane.`,
  `Sunset<br>Sunset at the coast! The sky turned a lovely shade of orange.`,
  `Cave<br>I did a tour of a cave today and the view of the landscape below was breathtaking.`,
  `Bluebells<br>I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.`
];

// Targets 'gallery' container and populates its HTML with 'gallery-item' photos
function getGalleryItems(photos, thumbs, captions) {
  // Targets 'gallery' container
  const gallery = document.getElementById('gallery');
  // Checks if all arrays are the same length
  if (photos.length === thumbs.length && photos.length === captions.length && thumbs.length === captions.length) {
    // Iterates through three arrays to form a gallery-item element
    for (let iteration = 0; iteration < photos.length; iteration += 1) {
      // It also makes up a p element with link to the full image, but their display is hidden with CSS tools
      let galleryItem = `<div class="gallery-item"><img src="${thumbs[iteration]}" alt="${captions[iteration]}"/><p class="display-none">${photos[iteration]}</p></div>`;
      // Then add it to the container
      gallery.innerHTML += galleryItem;
    }
  // If arrays are not the same length, the console throws an error
  } else {
    throw new Error('The arrays of links, thumbnails and captions are not the same length. Execution failed!');
  }
}

// Gets an array and checks if any of its items contain a string of text
// If they do, then it adds the index from an original array to new one
// And returns it as an array of indexes
function getIndicesOfText(sampleArray, text) {
  const newIndices = [];
  for (let index = 0; index < sampleArray.length; index += 1) {
    const lcIndex = sampleArray[index].toLowerCase();
    const lcText = text.toLowerCase();
    if (lcIndex.includes(lcText)) {
      newIndices.push(index);
    }
  }
  return newIndices;
}

// Populates 'gallery' container based on search by text. Similar to getGalleryItems,
// but this one is used in searches
function getItemsByIndices(iArray) {
  // Targets 'gallery' container
  const gallery = document.getElementById('gallery');
  // Iterates through three arrays to form a gallery-item element
  for (let index = 0; index < iArray.length; index += 1) {
    // It also makes up a p element with link to the full image, but their display is hidden with CSS tools
    let galleryItem = `<div class="gallery-item"><img src="${thumbs[iArray[index]]}" alt="${captions[iArray[index]]}"/><p class="display-none">${photos[iArray[index]]}</p></div>`;
    // Then add it to the container
    gallery.innerHTML += galleryItem;
  }
}

// Populating the gallery
getGalleryItems(photos, thumbs, captions);

// Using jQuery to set 'change' event listener to #search-input
$('#search-input').on('change', function() {
  // clearing the gallery of previously shown elements
  $('#gallery').html(' ');
  // getting the value of #search-input
  const value = $(this).val();
  // searching captions for that value
  const search = getIndicesOfText(captions, value);
  // populating #gallery with .gallery-items that correspond to search
  getItemsByIndices(search);
  // selecting .gallery-items
  const $gItems = $('.gallery-item');
  // hiding them
  $gItems.hide();
  // only to fade them in beautifully afterwards
  $gItems.fadeIn(1500);
})
