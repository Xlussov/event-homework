const cube = document.querySelector('.cube')
const step = 30

const topInfo = document.querySelector('#top')
const leftInfo = document.querySelector('#left')

const onEnter = document.querySelector('.onEnter')
const onOut = document.querySelector('.onOut')

let offsetX, offsetY;
let isDragging = false;

cube.style.position = 'absolute'
cube.style.top = '0px'
cube.style.left = '0px'

const getElementPosition = () => {
   const positon = cube.getBoundingClientRect();
   topInfo.textContent = positon.top
   leftInfo.textContent = positon.left
}

document.addEventListener('keypress',(e)=>{
   const nowTopPos = parseFloat(cube.style.top.replace(/[a-zа-яё]/gi, ''))
   const nowLeftPos = parseFloat(cube.style.left.replace(/[a-zа-яё]/gi, ''))

   if(e.code === 'KeyW'){
      cube.style.top = `${nowTopPos - step}px`
   }
   if(e.code === 'KeyS'){
      cube.style.top = `${nowTopPos + step}px`
   }
   if(e.code === 'KeyA'){
      cube.style.left = `${nowLeftPos - step}px`
   }
   if(e.code === 'KeyD'){
      cube.style.left = `${nowLeftPos + step}px`
   }

   getElementPosition()
})




const drag = (e) => {
   if (isDragging) {
     cube.style.left = e.clientX - offsetX + 'px';
     cube.style.top = e.clientY - offsetY + 'px';
     getElementPosition()
   }
}

cube.addEventListener('mousedown', (e) => {
   isDragging = true;
   offsetX = e.clientX - cube.getBoundingClientRect().left;
   offsetY = e.clientY - cube.getBoundingClientRect().top;

   document.addEventListener('mousemove', drag);
})

cube.addEventListener('mouseup', () => {
   isDragging = false;
   document.removeEventListener('mousemove', drag);
})





cube.addEventListener('mouseenter', ()=>{
   onEnter.style.display = 'block'
   onOut.style.display = 'none'
})


cube.addEventListener('mouseout', ()=>{
   onEnter.style.display = 'none'
   onOut.style.display = 'block'
})