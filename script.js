const email = document.getElementById('email')
const senha = document.getElementById('senha')
const conSenha = document.getElementById('con-senha')
const usuario = document.getElementById('usuario')
const form = document.getElementById('form')

form.addEventListener("submit", (event) =>{
    event.preventDefault()
    checkUsername()

})
//Function para checar se existe algo no campo usuário
function checkUsername(){
    const usuarioValor = usuario.value
    //Condicional para ver se está vazia
    if (usuarioValor === ""){
      errorInput(usuario, "Preencha este campo")
       
    }
//Function que faz o negócio de mensagem de erro
function errorInput(input, mensagem){
      //.parentElemente puxa a Tag
     const formItem = input.parentElement
     const textMessage = formItem.querySelector('p')

     textMessage.innerText = mensagem

     formItem.className = "botao-campo error"
}

}

function checkEmail(){
  const emailValor = email.value
  if (emailValor === ""){
     
  }

}

