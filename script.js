
const tl = gsap.timeline({pause: true})
const list = document.querySelectorAll('.nav-lis')
const activeLine = document.getElementById('active')
const btn = document.querySelectorAll('.btn')
const cancel = document.querySelector('.material-symbols-outlined')
const displaySide = document.querySelector('.sidebaar')
const hamburger = document.querySelector('.hamMenue')
const wrapper = document.querySelector('.wrapper')
const sideList = document.querySelectorAll('.side')
const overViewBtn = document.getElementById('btnOne')
const internalBtn = document.getElementById('btnTwo')
const deskInternalBtn = document.getElementById('deskbtnTwo')
const deskOverViewBtn = document.getElementById('deskbtnOne')
const overViewSvg = document.querySelector('.full')
const internalSvg = document.querySelector('.internal')




// the desktop nav bottom hover line 
list.forEach( (items) => {
    items.addEventListener('mouseover', () => {
        const state = Flip.getState(activeLine);
        items.appendChild(activeLine);
        Flip.from(state, { duration: 0.5, ease: 'power2.out'})
    })
    
});

// the plant SVG animations
tl
.from('.content-svg', {opacity: 0,  ease: 'power2.out', duration: 2, x: 500, rotation:16},)
.from('.main-content', {opacity:0, ease: 'power2.out', duration: 1, x: 100, stagger: 0.5}, "-=1")
.from('footer', { duration:2, ease: 'power2.out', opacity: 0, stagger: 0.5}, "-=1")




// 
hamburger.addEventListener('click', () => {
    wrapper.style.display = 'none'
    displaySide.style.display = 'block' 
    tl.from('.side_list .side ', {duration: 0.5, x: '100%', stagger: 0.2, ease: 'power2.out' }, "-=0.3")
    
})

cancel.addEventListener('click', () => {
    displaySide.style.display = 'none'
    wrapper.style.display = 'grid'
   
})


overViewBtn.addEventListener('click', () => {
    overViewSvg.style.display = 'block'
    internalSvg.style.display = 'none'
    tl.from('.full', {opacity: 0,  ease: 'power2.out', duration: 2, x: 500, rotation:16})
    tl.from('.internal', {opacity: 0,  ease: 'power2.out', duration: 2, x: 500, rotation:16})
})

internalBtn.addEventListener('click', () => {
    overViewSvg.style.display = 'none'
    internalSvg.style.display = 'block'
    tl.from('.full', {opacity: 0,  ease: 'power2.out', duration: 2, x: 500, rotation:16})
    tl.from('.internal', {opacity: 0,  ease: 'power2.out', duration: 2, x: 500, rotation:16})
})

deskOverViewBtn.addEventListener('click', () => {
    overViewSvg.style.display = 'block'
    internalSvg.style.display = 'none'
    tl.from('.full', {opacity: 0,  ease: 'power2.out', duration: 2, x: 500, rotation:16})
    tl.from('.internal', {opacity: 0,  ease: 'power2.out', duration: 2, x: 500, rotation:16})
})

deskInternalBtn.addEventListener('click', () => {
    overViewSvg.style.display = 'none'
    internalSvg.style.display = 'block'
    tl.from('.full', {opacity: 0,  ease: 'power2.out', duration: 2, x: 500, rotation:16})
    tl.from('.internal', {opacity: 0,  ease: 'power2.out', duration: 2, x: 500, rotation:16})
})