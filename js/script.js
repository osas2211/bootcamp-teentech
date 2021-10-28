const ham = document.querySelector(".hamburger");
const mobile = document.querySelector(".mobile-menu");
ham.addEventListener("click", ()=>{
    console.log(mobile.classList)
    if ("inactive" == mobile.classList[1]){
        mobile.classList.remove("inactive")
        mobile.classList.add("active")
        console.log("true");
        
    }
    else{
        mobile.classList.add("inactive")
        mobile.classList.remove("active")
        console.log("false");
    }
})