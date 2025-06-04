const email = document.getElementById('email')
const senha = document.getElementById('senha')
const conSenha = document.getElementById('con-senha')
const usuario = document.getElementById('usuario')
const form = document.getElementById('form')

form.addEventListener("submit", (event) =>{
    event.preventDefault()
    checkUsername()

})

function checkUsername(){
    const usuarioValor = usuario.value
    
    if (usuarioValor === ""){
      errorInput(usuario, "Preencha este campo")
       
    }
function errorInput(input, message){
     const formItem = input.parentElement
     const textMessage = formItem.querySelector('p')

     textMessage.innerText = message

     formItem.className = "botao-campo error"
}

}

