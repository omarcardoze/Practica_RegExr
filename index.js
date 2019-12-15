let email = document.getElementById('email'),
    btn = document.getElementById('btn'),
    space = document.getElementById('space')

btn.addEventListener('click', (e) => {
    e.preventDefault();
    space.textContent = "Enviado"
    let RegExp = /\w+@\w+\.\w+/g
    isTrue = RegExp.test(email.value)
    isTrue ? space.textContent = "Correcto" : space.textContent = "Incorrecto"
})



