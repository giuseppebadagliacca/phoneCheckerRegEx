const 
submitDOM = document.querySelector('#submit'),
phoneInputDom = document.querySelector('#phone'),
h3DOM = document.querySelector('h3')


submitDOM.addEventListener('click', checkReEx)

function checkReEx(){
    // console.log(typeof phoneInputDom.value)
    if(phoneInputDom.value === undefined || phoneInputDom.value === ''){
        setMsg(`Incorrect phone input. Please enter using the following format: example@hotmail.com`, 'red', 'lightpink')
    }else{
        if(validatephone(phoneInputDom.value)){
            setMsg(`${phoneInputDom.value} is an phone! Feel free to check a different phone!`,'green', 'lightgreen')
        }else{
            setMsg(`${phoneInputDom.value} is not a valid phone. Please enter using the following format: example@hotmail.com`, 'red', 'lightpink')
        }
    }
}

function setMsg(msg, color, bckColor){
    submitDOM.disabled = true
    h3DOM.innerText = `${msg}`
    h3DOM.style.color = `${color}`
    h3DOM.style.background = `${bckColor}`
    h3DOM.style.padding = `5px`
    h3DOM.style.borderRadius = `10px`
    setTimeout(clearMsg, 4000)
}

function clearMsg(){
    submitDOM.disabled = false
    h3DOM.innerText =''
    h3DOM.style.color = ''
    h3DOM.style.background = ''
    h3DOM.style.padding = ''
    h3DOM.style.borderRadius = ''
}

function validatephone(phone){
    return /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(phone) ? true:false
    }