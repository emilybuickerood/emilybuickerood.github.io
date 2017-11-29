$(document).ready(function(){

    // default setups - shows first slide
    var slides = $('.slideshow-image img');
    console.log('slides: ', slides);
    var currentSlideIndex = 0; // start out at slide 0
    var slideCount = slides.length; // get how many items are in our slideshow-image
    slides.eq(currentSlideIndex).show();

    // our function to run
    doSlides = function(direction){
      // hide current slides
      slides.eq(currentSlideIndex).hide();

      if (direction === 'next'){
        // if statement to check if our current slide index = slideCount -1;
        if (currentSlideIndex === slideCount - 1){
          console.log('found the end, time to start back at 0');
          currentSlideIndex = 0;
        } else {
          // else, just increase by one
            currentSlideIndex++;
        }
      } else if (direction === 'prev'){
        if (currentSlideIndex === 0) {
          currentSlideIndex = slideCount - 1;
          // we're at the first slide - need to start at the end
        } else {
          // else, just decrease by one
          currentSlideIndex--;
        }
        console.log('currentSlideIndex');
      }

      console.log('currentSlideIndex: ', currentSlideIndex);
      slides.eq(currentSlideIndex).show();
    };


    $('#next-button').click(function() {
      doSlides('next');
    });

    $('#prev-button').click(function() {
      doSlides('prev');
    });


}); // closes doc.ready
