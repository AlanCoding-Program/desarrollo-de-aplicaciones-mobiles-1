

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
    const contenedor = document.getElementById('contenedor');
    const botonBuscar = document.getElementById('botonBuscar');
    const botonReset = document.getElementById('reset');

   function mostrarGalletitas(lista) {
    const html = lista.map(galleta => `
        <div>
            <h3>${galleta.nombre}</h3>
            <p>${galleta.precio}</p>
        </div>
    `).join('');

    contenedor.innerHTML = html;
}

mostrarGalletitas(galletitas);

botonBuscar.addEventListener("click", () => {

    const valor = inputBusqueda.value.toLowerCase();

    const resultados = galletitas.filter(galleta =>
        galleta.nombre.toLowerCase() === valor
    );

    mostrarGalletitas(resultados);

});

botonReset.addEventListener("click", () => {
    mostrarGalletitas(galletitas); 
    inputBusqueda.value = ""; 
});

    

