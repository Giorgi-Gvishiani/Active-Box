$(function () {

    let header = $("#jsHeader");
    let intro = $("#jsIntro");
    let introH;
    let scrollPos = $(window).scrollTop();
    let burger = $("#burger");

    $(window).on("scroll load", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop() + 640;

        console.log(scrollPos);

        if (scrollPos > introH) {

            header.addClass("fixed");

        } else {

            header.removeClass("fixed");

        }
    });

//    scroll-funct
    
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();
        let elementID = $(this).data("scroll");
        let elementOffSet = $(elementID).offset().top;
        
        nav.removeClass("show");
        


        $("html, body").animate({
            scrollTop: elementOffSet - 60
        }, 700);

    });
    
    $("#nav").on("click", function () {
        nav.addClass("active__burger");

    });

    //    burger-funct

    let nav = $("#nav");
    
    $(burger).on("click", function(event){
        event.preventDefault();
        
        nav.toggleClass("show");
    });
});
