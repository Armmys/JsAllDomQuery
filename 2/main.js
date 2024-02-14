// const submitButton = document.getElementById('submit-btn-01')
// // const inputV = document.querySelectorAll('input').values
// submitButton.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log('submit')
//     const inputV = document.querySelectorAll('input')[0].value
//     const inputV2 = document.querySelectorAll('input')[1].value
//     if(inputV.length > 0 && inputV2.length > 0){
//         document.querySelector('p').textContent = 'success'
//     }else{
//         document.querySelector('p').textContent = 'fail'
//     }

// })

// const pEle = document.querySelector('p')

// const input = document.querySelector('input')

// input.addEventListener('keyup', () => {
//     const inputName = document.querySelector('input').value
//     pEle.textContent = inputName
// })

//   <input type="text" id="message" style="height: 30px" />
const inputMessage = document.getElementById('message')
inputMessage.addEventListener('keypress', (event) => {
    if (event.key >= 0 || event.key <= 9) {
    event.preventDefault()
    console.log('it is number')
  }
})

