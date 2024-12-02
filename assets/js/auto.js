const carta = document.getElementById("carta")

async function ajax(callback) {
    const res = await fetch("./assets/json/carta.json")
    const data = await res.json()
    if (typeof callback === "function") { callback(data) }
    return data
}

ajax((e) => {
    let resultadoHMTL = ""
    e.forEach(categoria => {
        resultadoHMTL += `<article>
        <h2>${categoria.nombre}</h2>
        ${categoria.descripcion ? `<p>${categoria.descripcion}</p>` : ""}
        <div class="contenedor">`
        categoria.platos.forEach(plato => {
            resultadoHMTL += `<div>
            <h3>${plato.nombre}</h3>
            ${plato.descripcion ? `<p>${plato.descripcion}</p>` : ""}
            <p class="precio">${plato.precio}€</p>
            </div>`
        })

        resultadoHMTL += "</div></article>"
    });
    console.log(resultadoHMTL)
})