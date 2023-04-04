export function searchToggle(){
  const wrapper = document.querySelector('#inputWrapper')
  const input = <HTMLInputElement> document.querySelector('#header__input')
  wrapper?.addEventListener('click', (e) => {
    const target = e.target
    if(target?.classList.contains('search-btn')){
      wrapper?.classList.add('active')
      input.focus()
    }
    if(target?.classList.contains('close-button')){
      wrapper?.classList.remove('active')
      input.value = ''
    }
  })

}