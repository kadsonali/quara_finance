$(document).ready(function () {
    $('.banner-items').slick({
        arrows: true,
        centerPadding: "0px",
        dots: true,
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
    });

    $('.services-items').slick({
        infinite: true,
        slidesToScroll: 1,
        centerMode: true,
        dots: false,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    });
    $('.loan-items').slick({
        infinite: true,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        slidesToShow: 3,
        // centerMode: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 3,
                  // slidesToScroll: 1,
                },
               
              },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                // slidesToScroll: 1,
              },
             
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    // slidesToScroll: 1,
                  }
              }
        ]
    });
    $(".select-Custome").select2({
        placeholder: "Select a programming language",
        // allowClear: ,
    });
})