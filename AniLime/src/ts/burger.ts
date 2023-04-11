export function showBurgerMenu(): HTMLElement{
  const Btn = <HTMLButtonElement> document.querySelector('#burger-btn')
  Btn.addEventListener('click', toggleBurgerMenu)
  return Btn
}

function toggleBurgerMenu(){
  if(true != false){
    const Btn = showBurgerMenu()
    Btn.classList.toggle('open')
  }
}

