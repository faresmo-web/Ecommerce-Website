var swiper = new Swiper(".slide-swp", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullests: true,
        clickable:true
    },
    autoplay:{
        delay:2500
    }
    ,loop:true
});


// SWIPR SLIDE PORDUCTS

var swiper = new Swiper(".slide-product", {
    slidesPerView: 5,
    spaceBetween:20,
    
    autoplay:{
        delay:2500
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    }
    ,loop:true
});