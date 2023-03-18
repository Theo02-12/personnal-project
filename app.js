function openMenu(){
    document.getElementById('menu').style.height = "20vh";
    document.getElementById('open').style.opacity = "0";
}
function closeMenu(){
    document.getElementById('menu').style.height = "0";
    document.getElementById('open').style.opacity = "1";
}
function show(){
    document.getElementById('img').style.opacity = "1";
    document.getElementById('text').style.transform="translateX(0px)";
}