export function toggleBurgerMenu(){
const btn = <HTMLButtonElement> document.querySelector('#burger-btn')
const burger = document.querySelector('.burger')
const html = document.querySelector('html')

  btn.classList.toggle('open')
  burger?.classList.toggle('active')
  html?.classList.toggle('no-scroll')

window.addEventListener('click', closeBurger)
}

function closeBurger(e) {
  const target = e.target as Element
  if(target.classList.contains('wrapper')){
    toggleBurgerMenu()
    window.removeEventListener('click', closeBurger)
  }
}

