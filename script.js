document.querySelectorAll('nav ul lia').forEach(anchor =>{
    anchor.addEventListener('click',function (event){
        event.preventDefault();
        const targetId=this.getAttribute('href').substring(1);
        const targetElement=document.getElementById(targetId);
        if (targetElement){
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior:'smooth'
            });
        }
    });
});


const menuToggle=document.getElementById('menu-toggle');
const navMenu=document.querySelector('.navbar ul');

if (menuToggle){
    menuToggle.addEventListener('click',() =>{
        navMenu.classList.toggle('active');
    })
}

document.querySelectorAll('.project-card').forEach(card =>{
    card.addEventListener('mouseover',() =>{
        card.computedStyleMap.transform = "scale(1.05)";
    });
    card.addEventListener('mouseout',() =>{
        card.computedStyleMap.transform="scale(1)";
    });
});