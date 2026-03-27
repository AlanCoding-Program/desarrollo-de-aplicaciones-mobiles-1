/* document.getElementById('login').addEventListener('click',function(){
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
}) */

const galletitas = [
    {id:1,
    nombre:"pitusas",
    precio:40},
    {id:2,
    nombre:"donsatur",
    precio:30
    },
    {id:3,
    nombre:"oreo",
    precio:70
    },
    {id:4,
    nombre:"chocolina",
    precio:50
    }]

    const inputBusqueda = document.getElementById('busqueda');

    inputBusqueda.addEventListener("input", (e) => {
  
  const resultados = galletitas.filter(galletas =>
    galletas.nombre == inputBusqueda.value
  );
  
  console.log(resultados);
});

    const masitas = galletitas.map(galletas => {
        return(
            `
            <div>
              <h3> ${galletas.nombre}</h3>
              <p> ${galletas.precio}</p>
            </div>
        `
    )
    }).join('')
document.body.innerHTML= masitas

    

