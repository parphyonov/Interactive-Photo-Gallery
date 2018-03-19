/*******************************************************************************
Search Programmins
*******************************************************************************/

// Targeting all gallery items
const $allItems = $('.gallery-item');
// Targeting search input
const $searchInput = $('#search-input');

// Input event handler on #search-input
$searchInput.on('input', function() {
  // Each time event is triggered all of the .gallery-items are added back to the #gallery container
  $allItems.show();
  // Value of #search-input is saved and turned lowercase
  const value = $(this).val().toLowerCase();

  // Search is performed through data-title attribute on anchor elements of the Lightbox
  $('.gallery-item a').each(function(i, e) {
    // Data-title attribute is turned lowercase
    const lcTitle = $(this).attr('data-title').toLowerCase();
    // If data-title of an anchor does not contain the string from the #search-input, its parent gets hidden
    if (lcTitle.includes(value) !== true) {
      $(this).parent().hide();
    }
  })
});

/*******************************************************************************
Lightbox Programming
*******************************************************************************/

$('.gallery-item a').addClass('swipebox');

// lightbox.option({
//   'alwaysShowNavOnTouchDevices': true,
//   'positionFromTop': 50,
//   'resizeDuration': 200,
//   'wrapAround': true
// });
