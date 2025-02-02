fetch("products.json")
.then(response => response.json())
.then(data =>{
    console.log(data)

    const swiperItemsSale = document.getElementById("swiper-items-sale")


    const swiperElctronics = document.getElementById("swiper-elctronics")


    const swiperAppliances = document.getElementById("swiper-appliances")

    const swiperMobiles = document.getElementById("swiper-mobiles")






    data.forEach(product => {
        if(product.old_price){

            const percent_disc = Math.floor((product.old_price - product.price) / product.old_price * 100)
            swiperItemsSale.innerHTML +=`
                <div class="swiper-slide product ">
                        <span class="sale-present">%${percent_disc}</span>
                        <div class="img-product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="name-product"><a href="#">
                            ${product.name}
                        </a></p>
                            <div class="price">
                                <p><span>$${product.price}</span></p>
                                <p class="old-price">$${product.old_price}</p>
                            </div>
                            <div class="icons">
                                <span class="btn-add-cart">
                                    <i class="fa-solid fa-cart-shopping"></i> add to cart
                                </span>
                                <span class="icon-product">
                                    <i class="fa-regular fa-heart"></i>
                                </span>
                            </div>
                    </div>
            `
        }
    });

    data.forEach(product => {
        if(product.catetory == "electronics"){

            const old_price_pargrahp = product.old_price ? `<p class="old-price">$${product.old_price}</p>` : ""
            const percent_disc_div = product.old_price ? ` <span class="sale-present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : ""
            
            

            swiperElctronics.innerHTML +=`
                <div class="swiper-slide product ">
                        ${percent_disc_div}
                        <div class="img-product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="name-product"><a href="#">
                            ${product.name}
                        </a></p>
                            <div class="price">
                                <p><span>$${product.price}</span></p>
                                ${old_price_pargrahp}
                            </div>
                            <div class="icons">
                                <span class="btn-add-cart">
                                    <i class="fa-solid fa-cart-shopping"></i> add to cart
                                </span>
                                <span class="icon-product">
                                    <i class="fa-regular fa-heart"></i>
                                </span>
                            </div>
                    </div>
            `
        }
    })


    data.forEach(product => {
        if(product.catetory == "appliances"){

            const old_price_pargrahp = product.old_price ? `<p class="old-price">$${product.old_price}</p>` : ""
            const percent_disc_div = product.old_price ? ` <span class="sale-present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : ""
            
            

            swiperAppliances.innerHTML +=`
                <div class="swiper-slide product ">
                        ${percent_disc_div}
                        <div class="img-product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="name-product"><a href="#">
                            ${product.name}
                        </a></p>
                            <div class="price">
                                <p><span>$${product.price}</span></p>
                                ${old_price_pargrahp}
                            </div>
                            <div class="icons">
                                <span class="btn-add-cart">
                                    <i class="fa-solid fa-cart-shopping"></i> add to cart
                                </span>
                                <span class="icon-product">
                                    <i class="fa-regular fa-heart"></i>
                                </span>
                            </div>
                    </div>
            `
        }
    })



    data.forEach(product => {
        if(product.catetory == "mobiles"){

            const old_price_pargrahp = product.old_price ? `<p class="old-price">$${product.old_price}</p>` : ""
            const percent_disc_div = product.old_price ? ` <span class="sale-present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : ""
            
            

            swiperMobiles.innerHTML +=`
                <div class="swiper-slide product ">
                        ${percent_disc_div}
                        <div class="img-product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="name-product"><a href="#">
                            ${product.name}
                        </a></p>
                            <div class="price">
                                <p><span>$${product.price}</span></p>
                                ${old_price_pargrahp}
                            </div>
                            <div class="icons">
                                <span class="btn-add-cart">
                                    <i class="fa-solid fa-cart-shopping"></i> add to cart
                                </span>
                                <span class="icon-product">
                                    <i class="fa-regular fa-heart"></i>
                                </span>
                            </div>
                    </div>
            `
        }
    })
})
