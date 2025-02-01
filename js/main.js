let categoryNavList = document.querySelector(".category-nav-list")
function openCategList(){
    categoryNavList.classList.toggle("active")
}







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