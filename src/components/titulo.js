

export const titulo = () => {

    const titulo = document.createElement('h1');
    titulo.innerHTML = "WE'RE LAUNCHING SOON";

    const sectionTitulo = document.createElement('section');
    sectionTitulo.classList.add('section-titulo');
    sectionTitulo.appendChild(titulo)

    return sectionTitulo;
}