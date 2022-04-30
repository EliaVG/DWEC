var url =  'https://newsapi.org/v2/everything?pageSize=10&page=1&sources=abc-news&apiKey=3729f32b868840f7b9510040de8091ee';

contador = 2;

function eliminarImagen(e){
    e.target.remove();
}

function maquetar(articles){
    noticias = document.getElementById("noticias");

    for (i=0;i<articles.length;i++){
        /* NO FUNCIONA
        contenedor = document.createElement('div');
        fuente = document.createElement('h2');
        titulo = document.createElement('a');
        contenido = document.createElement('p');
        fecha = document.createElement('p');

        fuente.innerHTML = articles[i].source.name;
        contenedor.appendChild(fuente);

        titulo.innerHTML = articles[i].title;
        titulo.setAttribute("url", url);
        contenedor.appendChild(titulo);

        contenido.innerHTML = articles[i].content;
        contenedor.appendChild(contenido);

        fecha.innerHTML = articles[i].publishedAt;
        contenedor.appendChild(fecha);

        if (articles[i].urlToImage != 'null'){
            imagen = document.createElement('img');
            imagen.setAttribute('src', articles[i].urlToImage);
            imagen.setAttribute('onerror', 'eliminarImagen(event)');
            contenedor.appendChild(imagen);
        }*/

        noticias.innerHTML += `<div id = ${contador} class="noticia">
                                    <h2>${articles[i].source.name}</h2>
                                    <a href="${url}">${articles[i].title}</a>
                                    <p>${articles[i].content}</p>
                                    <p>${articles[i].publishedAt}</p>`;

        if (articles[i].urlToImage != 'null')
            noticias.innerHTML += `<img src='${articles[i].urlToImage}' onerror="eliminarImagen(event)"></img>`;
        
        noticias.innerHTML += `</div>`;
    }
}

// Declaro el array donde vamos a guardar todas las noticias
todasNoticias = [];

function loadDoc(url) {
    // cargando visible
    document.getElementById('cargando').style.visibility = "visible";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            objeto = JSON.parse(this.responseText);

            todasNoticias.push(...objeto.articles);
            
            imagen = document.getElementById("imagen_noticia");

            maquetar(todasNoticias);

            // quitar cargando
            document.getElementById('cargando').style.visibility = "hidden";
        }
    };

    xhttp.open("GET", url, true);
    xhttp.send();
}

function cargarMas(){
    url =  'https://newsapi.org/v2/everything?pageSize=10&page='+contador+'&sources=abc-news&apiKey=3729f32b868840f7b9510040de8091ee';

    loadDoc(url);

    contador++;
}

function buscarTitulo(){
    a_buscar = document.getElementById('buscar_texto').value;

    encontradas = todasNoticias.filter(noticia => noticia.title.includes(a_buscar));

    document.getElementById("noticias").innerHTML = '';
    maquetar(encontradas);
}

// Lo declaro fuera para reutilizarlo en varias funciones
fuentes = [];

function filtraFuente(){
    if (document.getElementById('abc').checked)
        fuentes.push('abc-news');
    if (document.getElementById('bbc').checked)
        fuentes.push('bbc-news');
    if (document.getElementById('cnn').checked)
        fuentes.push('cnn-news');
    if (document.getElementById('forbes').checked)
        fuentes.push('forbes');
    if (document.getElementById('google').checked)
        fuentes.push('google-news');
    if (document.getElementById('el_mundo').checked)
        fuentes.push('el-mundo');

    url =  'https://newsapi.org/v2/everything?pageSize=10&page=1&sources='+fuentes.toString()+'&apiKey=3729f32b868840f7b9510040de8091ee';

    document.getElementById("noticias").innerHTML = '';

    loadDoc(url);
}

function filtraIdioma(){
    idiomas = [];

    if (document.getElementById('ingles').checked)
        idiomas.push('en');
    if (document.getElementById('espaniol').checked)
        idiomas.push('es');
    if (document.getElementById('frances').checked)
        idiomas.push('fr');

    console.log(idiomas.toString);

    if (fuentes.length == 0)
        url = 'https://newsapi.org/v2/everything?pageSize=10&page=1&sources=abc-news&language='+idiomas.toString()+'&apiKey=3729f32b868840f7b9510040de8091ee';
    else
        url =  'https://newsapi.org/v2/everything?pageSize=10&page=1&sources='+fuentes.toString()+'&language='+idiomas.toString()+'&apiKey=3729f32b868840f7b9510040de8091ee';

    console.log(url);
    document.getElementById("noticias").innerHTML = '';

    loadDoc(url);
}


window.onload = () => {
    loadDoc(url);

    document.getElementById('cargar_mas').addEventListener('click', cargarMas);
    document.getElementById('buscar').addEventListener('click', buscarTitulo);
    document.getElementById('filtra_fuente').addEventListener('click', filtraFuente);
    document.getElementById('filtra_idioma').addEventListener('click', filtraIdioma);
}