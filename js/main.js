$(document).ready(function() {
    ScrollReveal().reveal('.text-animation', {"linear":"0,0,1,1","ease-in":".42,0,1,1","ease-out":"0,0,.58,1","ease-in-out":".42,0,.58,1", "distance":
    "100px", duration: 1000, delay: 500});
    ScrollReveal().reveal('.heading-animation', { easing: 'ease-in', "distance":"50px", duration: 1000, origin: "left" });


    $(".photo1").mouseenter( () => {
        $(".photo1").addClass("portfolio-element1");
        $(".portfolio-text1").empty();
        $(".portfolio-text1").append("Projekt strony, w której zostały wykorzystane podstawowe komponenty biblioteki Bootstrap 4").css({"bottom": "35%", "transition-duration": "1s"});
    });
    
    $(".photo1").mouseleave( () => {
        $(".photo1").removeClass("portfolio-element1");
        $(".portfolio-text1").empty();
        $(".portfolio-text1").append("Landing page - Bootstrap 4").css({"bottom": "2%", "font-size": "20px"});
    });

    $(".photo2").mouseenter( () => {
        $(".photo2").addClass("portfolio-element1");
        $(".portfolio-text2").empty();
        $(".portfolio-text2").append("Projekt strony, w której zostały wykorzystane podstawowe komponenty biblioteki Bootstrap 4").css({"bottom": "35%", "transition-duration": "1s"});
    });
    
    $(".photo2").mouseleave( () => {
        $(".photo2").removeClass("portfolio-element1");
        $(".portfolio-text2").empty();
        $(".portfolio-text2").append("Landing page - Bootstrap 4").css({"bottom": "2%", "font-size": "20px"});
    });
});

