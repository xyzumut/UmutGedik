let basliklar = document.querySelectorAll('#main .main-menu .main-menu-item');
let ileri = document.querySelector('.ileri');
let geri = document.querySelector('.geri');
let sayac = 0 ;
let sayfalar = document.querySelectorAll('.page')

ileri.addEventListener('click',()=>{
    basliklar[sayac].classList.remove('main-menu-aktif');
    sayac++;
    if (sayac>3){
        sayac=0;
    }
    sayfaDegistir();
    basliklar[sayac].classList.add('main-menu-aktif');
});

geri.addEventListener('click',()=>{
    basliklar[sayac].classList.remove('main-menu-aktif');
    sayac--
    if(sayac<0){
        sayac=3;
    }
    sayfaDegistir();
    basliklar[sayac].classList.add('main-menu-aktif');
});

basliklar[0].addEventListener('click', () => {
    baslikIleSayfaDegistir(0);
})
basliklar[1].addEventListener('click', () => {
    baslikIleSayfaDegistir(1);
})
basliklar[2].addEventListener('click', () => {
    baslikIleSayfaDegistir(2);
})
basliklar[3].addEventListener('click', () => {
    baslikIleSayfaDegistir(3);
})

function sayfaDegistir() {
    for (let i = 0 ; i<sayfalar.length ;i++ ) {
        sayfalar[i].style.left=(-70*sayac)+'vW';
    }
}

function baslikIleSayfaDegistir(sayfa) {
    basliklar[sayac].classList.remove('main-menu-aktif');
    sayac=sayfa;
    basliklar[sayac].classList.add('main-menu-aktif');
    sayfaDegistir();
}




let icon = document.querySelector('.page4-img img');
let full = document.querySelector('.full');
let exit = document.querySelector('.exit');
console.log(exit);
icon.addEventListener('click',()=>{
    full.style.display='flex';
    exit.style.display='block';
});
exit.addEventListener('click',()=>{
    full.style.display='none';
    exit.style.display='none';
});