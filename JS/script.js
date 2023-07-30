    //    +++++++++ Nav Scroll Hide +++++++
        


 //    +++++++++ Nav Scroll Hide +++++++
 window.onscroll = function () {
    scroll();
};

function scroll() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        document.getElementById("navbar").style.top = "-700px";
    } else {
        document.getElementById("navbar").style.top = "0";
    }
}     


               //    +++++++++ Nav Scroll Hide +++++++

    // const nav = document.querySelector("#navbar");
    // let lastScrollY = window.scrollY;

    // window.addEventListener("scroll", () =>{
    //    if(lastScrollY < window.scrollY){
    //     nav.classList.add("nav_hide");
    //    }else{
    //     nav.classList.remove("nav_hide");
    //    }

    //    lastScrollY = window.scrollY;
    // });

       //    +++++++++ Nav Scroll Hide +++++++

    //    Menu Toggle
function toggle(){
let toggle = document.getElementById("toggle");
if(toggle.style.display === "block"){
    toggle.style.display = "none";
}else{
    toggle.style.display = "block";
}
}
//    Menu Toggle

 // ====back to top=====
 var back_to_top = document.querySelector('.back_to_top');
 window.addEventListener('scroll',()=>{
     if (window.scrollY>220){
         back_to_top.style.display='block';
     }
     else{
         back_to_top.style.display='none';
     }
 })
 back_to_top.addEventListener('click', ()=>{
     document.documentElement.scrollIntoView({
         behavior:"smooth"
     })
 })
 // ====back to top=====

// Venubox Part

$(function(){

new VenoBox({
selector: '.my-video-links',
});
})


$(function(){

    new VenoBox({
        selector: '.my-image-links',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'rotating-plane'
    });

    })
// Venubox Part