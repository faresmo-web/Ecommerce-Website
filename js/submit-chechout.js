const scriptURL = "https://script.google.com/macros/s/AKfycbxnzLh4pZVWmfn63qBEyhZnq3Pp0z5wWvQdaeIZvJq0ucddTrxJ7GPAZ8dJfIcYgA6_BA/exec"

let form = document.getElementById("form-contact")

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
        
    }).then((response) =>{
        setTimeout(()=>{
            window.location.reload()
        },2000)
    })
    .catch((error) => console.error("eroor!", error.message))
})