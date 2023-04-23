export function addPaginationBtn(){
  const wrapper = document.querySelector('.pagination-num__wrapper')
  for (let i = 1; i < 10; i++) {
    const pugLink = document.createElement('a')
    pugLink.classList.add('pag-link')
    pugLink.innerHTML = `
    <span class="pag_num">${i}</span>
    `
    wrapper?.append(pugLink)
  }
}