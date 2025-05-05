$(document).ready(function() {
    let images = [];
    let currentIndex = 0;

    // Collect all images from the thumbnails
    $('.thumbnail').each(function() {
        images.push($(this).data('img'));
    });

    // When a thumbnail is clicked
    $('.thumbnail').on('click', function() {
        currentIndex = images.indexOf($(this).data('img'));
        $('#lightbox-img').attr('src', $(this).data('img'));
    });

    // Next button functionality
    $('#next').on('click', function() {
        currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
        $('#lightbox-img').attr('src', images[currentIndex]);
    });

    // Previous button functionality
    $('#prev').on('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back to the last image
        $('#lightbox-img').attr('src', images[currentIndex]);
    });
});