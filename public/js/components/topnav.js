for (let index = 0; index < document.getElementsByClassName('nav-link').length; index++) {
    const element = document.getElementsByClassName('nav-link')[index];
    element.addEventListener('click',function(e){
        //e.preventDefault();
        ajaxLoad(element.dataset.href,'mainCardContent');
    });
}
for (let index = 0; index < document.getElementsByClassName('nav-link-overlay').length; index++) {
    const element = document.getElementsByClassName('nav-link-overlay')[index];
    element.addEventListener('click',function(e){
        //e.preventDefault();
        document.getElementById('expandNavlistOverlay').style.display="";
        ajaxLoad(element.dataset.href,'mainCardContent');
        
    });
}
function closeNavlistOverlay() {
    document.getElementById('navlistOverlay').style.width="0%";
}
document.getElementById('expandNavlistOverlay').addEventListener('click',function(){
    document.getElementById('expandNavlistOverlay').style.display="none";
    document.getElementById('navlistOverlay').style.width="100%";
});
document.getElementById('closeNavlistOverlay').addEventListener('click',function(){
    document.getElementById('expandNavlistOverlay').style.display="";
    closeNavlistOverlay();
})