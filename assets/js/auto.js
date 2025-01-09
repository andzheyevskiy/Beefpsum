const carta = document.getElementById("carta")

async function ajax(callback) {
    const res = await fetch("./assets/json/carta.json")
    const data = await res.json()
    if (typeof callback === "function") { callback(data) }
    return data
}

async function productos() {
    let resultadoHMTL = ""
    await ajax((e) => {
        e.forEach(categoria => {
            resultadoHMTL += `<article>
        <div class="carousell ${categoria.class}"></div>
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
    })
    return resultadoHMTL
}

productos().then(e => carta.innerHTML = e)