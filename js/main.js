let categoryNavList = document.querySelector(".category-nav-list")
function openCategList(){
    categoryNavList.classList.toggle("active")
}

var cart = document.querySelector(".cart")
function openCloseCart(){
    cart.classList.toggle("active")
}

let navLinks = document.querySelector(".nav-links")

function openMenu(){
    navLinks.classList.toggle("active")
}

fetch("products.json")
.then(response => response.json())
.then(data =>{
    const addToCartButtons = document.querySelectorAll(".btn-add-cart")

    addToCartButtons.forEach(button =>{
        button.addEventListener("click", (event) =>{
            const productId = event.target.getAttribute("data-id")
            const selcetedProduct = data.find(product => product.id == productId)
            addToCart(selcetedProduct)

            const allMatchingButtons = document.querySelectorAll(`.btn-add-cart[data-id="${productId}" ]`)
            allMatchingButtons.forEach(btn =>{
                btn.classList.add("active")
                btn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>  Item in cart`
            })
        })
    })
})

function addToCart(product){
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push({... product, quantity: 1})
    localStorage.setItem("cart",JSON.stringify(cart))
    updateCart()
}

function updateCart(){
    const cartItemsContainer = document.getElementById("cart-itms")

    const cart = JSON.parse(localStorage.getItem("cart")) || []

    const checkoutIyems = document.getElementById("checkout-items")

    let itemsInput = document.getElementById("items")
        let totalPriceInput = document.getElementById("total-price")
        let CountItemsInput = document.getElementById("count_items")


    if(checkoutIyems){
        checkoutIyems.innerHTML = ""


        
        
    }

    var totalPrice = 0
    var totalCount = 0

    cartItemsContainer.innerHTML = ""
    cart.forEach((item, index) => {

        let totalPriceItem = item.price * item.quantity;

        totalPrice += totalPriceItem
        
        totalCount += item.quantity

        // CHECK OUT INPUTS

 

        cartItemsContainer.innerHTML +=`
            <div class="item-cart">
                <img src="${item.img}" alt="">
                <div class="content">
                    <h4>${item.name}</h4>
                    <p class="price-cart">$${totalPriceItem}</p>
                    <div class="quantity-control">
                        <button class="decreasse-quantity" data-index=${index}>-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="increase-quantity" data-index=${index}>+</button>
                    </div>
                </div>
                <button class="delete-item" data-index="${index}"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `

        if(checkoutIyems){
            checkoutIyems.innerHTML += `
                <div class="item-cart">
                            <div class="image-name">
                                <img src="${item.img}" alt="">
                                <div class="content">
                                    <h4>${item.name}</h4>
                                    <p class="price-cart">$ ${totalPriceItem}</p>
                                    <div class="quantity-control">
                                        <button class="decreasse-quantity" data-index=${index}>-</button>
                                        <span class="quantity">${item.quantity}</span>
                                        <button class="increase-quantity" data-index=${index}>+</button>
                                    </div>
                                </div>
                            </div>

                            <button class="delete-item" data-index="${index}"><i class="fa-solid fa-trash-can"></i></button>
                        </div>
            `
        }
    })

    const priceCartTotal = document.querySelector(".price-cart-toral")
    const countItemCart = document.querySelector(".count-item-cart")
    const CountITemHeader = document.querySelector(".count-item-header")

    priceCartTotal.innerHTML = `$ ${totalPrice}`
    countItemCart.innerHTML = totalCount
    CountITemHeader.innerHTML = totalCount


    if(checkoutIyems){
        const subtotalCheckout = document.querySelector(".subtotal-checkout")
        const totalCheckout = document.querySelector(".total-checkout")

        subtotalCheckout.innerHTML = `$ ${totalPrice}`
        totalCheckout.innerHTML = `$ ${totalPrice + 20}`
    }






    const increaseButtons = document.querySelectorAll(".increase-quantity")
    const decreasseButtons = document.querySelectorAll(".decreasse-quantity")

    increaseButtons.forEach(button => {
        button.addEventListener("click", (event) =>{
            const itemIndex = event.target.getAttribute("data-index")

            increaseQuantity(itemIndex)
        })
    })

    decreasseButtons.forEach(button => {
        button.addEventListener("click", (event) =>{
            const itemIndex = event.target.getAttribute("data-index")

            decreasseQuantity(itemIndex)
        })
    })
    

    const delteButtons = document.querySelectorAll(".delete-item")

    delteButtons.forEach(button =>{
        button.addEventListener("click", (event) =>{
            const itemIndex = event.target.closest("button").getAttribute("data-index")
            removeFromCart(itemIndex)
        })
    })
}

function increaseQuantity(index){
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart[index].quantity += 1
    localStorage.setItem("cart", JSON.stringify(cart))
    updateCart()
}

function decreasseQuantity(index){
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    if(cart[index].quantity > 1){
        cart[index].quantity -= 1
    }
    localStorage.setItem("cart", JSON.stringify(cart))
    updateCart()
}










function removeFromCart(index){
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    const removeProduct = cart.splice(index, 1)[0]
    localStorage.setItem("cart", JSON.stringify(cart))
    updateCart()
    updateButoonState(removeProduct.id)
}

function updateButoonState(productId){
    const allMatchingButtons = document.querySelectorAll(`.btn-add-cart[data-id="${productId}" ]`)
    allMatchingButtons.forEach(button =>{
        button.classList.remove("active")
        button.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>  Add to cart`
    })
}


updateCart()






