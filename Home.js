
document.addEventListener('DOMContentLoaded',()=>{
    let menu=document.getElementById('burger');
    menu.addEventListener('click',()=>{
        let burger=document.getElementById('menu');
            burger.style.display="block";
            menu.style.display="none";
       
    })
})
document.addEventListener('DOMContentLoaded',()=>{
    let menu1=document.getElementById('menu1');
    menu1.addEventListener('click',()=>{
        let menu=document.getElementById('menu');
        let burger=document.getElementById('burger');
            burger.style.display="block";
            menu.style.display="none";
       
    })
})
