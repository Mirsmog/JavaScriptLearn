export function addHeaderActive() {
  const header = document.querySelector('#header')
  const hero = document.querySelector('.hero')!
  window.addEventListener('scroll', () => {
    const scroll = scrollY
    if(scroll > hero?.clientHeight - 100) header?.classList.add('active')
    else header?.classList.remove('active')
  })
}