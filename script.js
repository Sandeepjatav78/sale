const get = document.querySelector('#get')
const left= document.querySelector('.left')
const sift = document.querySelector('.background')
get.addEventListener('click', function(){
    // sift.style.height='90vh';
    // sift.style.width='90vw';
    sift.style.transform='translateX(120px) scale(.4) rotateY(-10deg) skewY(10deg)'
    sift.style.filter='blur(1.5px)'
    // sift.style.position='fixed';
    // sift.style.top='100px';
    // sift.style.right='50px';
    left.style.left='20px'

    // sift.style.transform='skewY(8deg)'
})

const close =document.querySelector('#close')
close.addEventListener('click',function(){ 
    sift.style.transform='translateX(0) scale(1)'
    left.style.left='-200px'
    sift.style.filter='blur(0)'
})