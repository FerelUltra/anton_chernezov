const submitButton = document.querySelector('.form__submit')
const result = document.querySelector('.result')
const commentary = document.querySelector('.form__commentary')
const name = document.querySelector('.form__name')
const secondName = document.querySelector('.form__secondName')
const email = document.querySelector('.form__email')
const sex = document.querySelector('.form__sex')
const form = document.querySelector('.form')
submitButton.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log('ne poluch')
    result.innerHTML = `name: ${name.value}; <br>
    second name: ${secondName.value}; <br>
    email: ${email.value}; <br>
    sex: ${sex.value}; <br>
    commentary: ${commentary.value}`
    result.classList.add('result_active')
    form.classList.add('form_inactive')
})