document.getElementById('login').addEventListener('click',function(){
    const userAdmin = document.getElementById('user')
    const contraAdmin = document.getElementById('contra')
    const contra = 12345
    const nombre = "alan"
    const contenedor = document.getElementById('resultado');
    
    if ((userAdmin.value == nombre.value) && (contraAdmin.value == contra.value)){
        contenedor.textContent = `Bienvenido, ${userAdmin}`
    }else{
        alert("contraseña o usuario incorrecto")
    }
})


    

