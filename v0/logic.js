var navLinks = document.querySelectorAll('.nav-item');
var navbar = document.getElementById("navbar");
var nav = document.getElementById('nav');
// console.log(navHeight);
var bannerOverlays = document.getElementById('banner-overlays');
var navTrack = document.getElementById("nav-track");
var logoArea = document.getElementById("logoArea");
var clubsExpand = document.getElementById('clubs-expand');
var clubsCont = document.getElementById('clubs-cards-cont');
var clubCount = 0;

clubsExpand.addEventListener('click', function(){
    if(clubCount==0){
        clubsCont.style.height = 'fit-content';
        clubsCont.style.overflow = 'visible';
        clubsExpand.innerHTML = `<i class="fa-solid fa-chevron-up"></i>`;
        console.log('button clicked');
        clubCount++;
        console.log(clubCount)

    }else if(clubCount==1){
        clubsCont.style.height = 300+'px';
        clubsCont.style.overflow = 'hidden';
        clubsExpand.innerHTML = `<i class="fa-solid fa-chevron-down"></i>`;
        clubCount--;
        console.log(clubCount)
    }
    

})

bannerOverlays.style.height = (900 - nav.clientHeight)+'px';

navLinks.forEach(item => {
    item.addEventListener('mouseenter', function(){
        navbar.style.backdropFilter = 'blur(5px)';
        // item.style.borderBottom = '1px solid white';
        // console.log('mouse entered');
    })
    item.addEventListener('mouseleave', function(){
        navbar.style.backdropFilter = 'blur(3px)';
        // item.style.borderBottom = 'none';
        // console.log('mouse out');
    })
})

navbar.addEventListener("mousemove", function(event){
    // console.clear();
    mouseX = event.clientX-93;
    mouseY = event.clientY-198;
    // console.log(mouseX);
    // console.log(mouseY);
    navTrack.style.left = mouseX+'px';
    navTrack.style.top = mouseY+'px';

});
navbar.addEventListener("mouseenter", function(event){
    // console.clear();
    // navTrack.style.visibility = 'visible';
    navTrack.style.opacity = 0.1;

});
navbar.addEventListener("mouseleave", function(event){
    // console.clear();
    // navTrack.style.visibility = 'hidden';
    navTrack.style.opacity = 0;


});