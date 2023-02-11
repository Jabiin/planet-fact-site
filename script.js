
const tl = gsap.timeline()
const list = document.querySelectorAll('.nav-lis')
const activeLine = document.getElementById('active')
const btn = document.querySelectorAll('.btn')





list.forEach( (items) => {
    items.addEventListener('mouseover', () => {
        const state = Flip.getState(activeLine);
        items.appendChild(activeLine);
        Flip.from(state, { duration: 0.5, ease: 'power2.out'})
    })
    
});

tl
.from('.content-svg', {opacity: 0,  ease: 'power2.out', duration: 2, x: 500, rotation:16},)
.from('.main-content', {opacity:0, ease: 'power2.out', duration: 1, x: 100, stagger: 0.5}, "-=1")
.from('footer', { duration:2, ease: 'power2.out', opacity: 0, stagger: 0.5}, "-=1")





