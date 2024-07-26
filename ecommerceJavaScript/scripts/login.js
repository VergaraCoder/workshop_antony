const inputEmail = document.getElementById("loginEmail");
const inputPassword = document.getElementById("loginPassword");
const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", async()=> {
    const responsePetition = await validate(inputEmail.value, inputPassword.value)
   try{
    if(responsePetition.lenght == 0){
        throw new Error("Credenciales invalidas.")
    }
    window.location.replace("../index.html");
    } catch(error){

    }   
})

async function validate(email, password){
    try{
        const petition = await fetch("http://localhost:3000/users?email="+email+"&password="+password);
        if(!petition.ok){
            throw new Error("La peticion falló");
        }
        const response = await petition.json();
        return response
    }catch(error){
        const miss = document.querySelector(".misstakes");
        setTimeout(()=>{
            miss.textContent = error.message
        }, 2000)
    }
}