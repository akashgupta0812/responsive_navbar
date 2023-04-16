const btn=document.querySelector(".mobile-icon")
const one=document.querySelector(".icon-one")
const head=document.querySelector(".header")
const hi=document.querySelector(".main")
btn.addEventListener("click",toggle_)
function toggle_()
{
    // alert('hiiii')
    head.classList.toggle("active")
    hi.classList.toggle("active")
    btn.classList.toggle("active")

}