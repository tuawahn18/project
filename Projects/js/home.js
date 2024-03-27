function toggleMenu(){
    const menu=document.querySelector('.menu');
    const navMobile=document.querySelector('.nav-mobile');

    menu.classList.toggle('active')
    navMobile.classList.toggle('active')
}