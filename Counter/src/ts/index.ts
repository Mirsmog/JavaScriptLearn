export {}
let count = 0

const value = <HTMLInputElement>document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach((item) => {
  item.addEventListener('click', (btn) => {
    const style = (btn.currentTarget as Element).classList;
    if(style.contains('decreace')){
      count--
    } else if (style.contains('increase')) {
      count++
    } else {
        count = 0
    }
    
    value.innerText = count.toString()
    

    if(count > 0)value.style.color = '#5be7a9'
    else if(count < 0)value.style.color = '#ff6464'
    else value.style.color = '#222'
  })
})

