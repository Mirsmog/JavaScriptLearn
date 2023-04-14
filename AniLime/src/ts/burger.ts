export function toggleBurgerMenu(){
const btn = <HTMLButtonElement> document.querySelector('#burger-btn')
const burger = document.querySelector('.burger')
const body = document.querySelector('#app')

// export function showBurgerMenu(): void{
//   const windowWidth = window.innerWidth
//   if(windowWidth <= 1366){
//     btn.addEventListener('click', toggleBurgerMenu)
//   } else {btn.removeEventListener('click', toggleBurgerMenu)}
// }

    btn.classList.toggle('open')
    burger?.classList.toggle('active')
    body?.classList.toggle('no-scroll')

}

