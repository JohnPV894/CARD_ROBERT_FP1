<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="index.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="nav">
        <p>HOME</p>  <p> CONTACT </p><p>BLOG</p> 
        
      <input type="text"  class="L" placeholder="Buscar"/>
      <button type="button" class="blanco" > 
        <img
          class="pequeña"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNlYXJjaCI+PGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iOCIvPjxwYXRoIGQ9Im0yMSAyMS00LjMtNC4zIi8+PC9zdmc+"
          alt="=>"
        />
      </button>
      <div id="openModal" class="modalDialog">
        <div>
          <a href="#close" title="Close" class="close">X</a>
          <h2>Mi modal</h2>
          <p>Este es un ejemplo de modal, creado gracias al poder de CSS3.</p>
          <p>Puedes hacer un montón de cosas aquí, como alertas o incluso crear un formulario de registro aquí mismo.</p>
        </div>
      </div>
    </div>
    <a href="#openModal">Lanzar el modal</a>



    
    <div class="cont">

    </div>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="main.js"></script>
</body>
</html>

//

  .nav p {
    display: grid;
    align-content: center;
    height: 60px;
    padding-left: 8px;
    padding-right: 8px;
    margin: 5px;
    color: #ffffff;
  }
  .nav p:hover {
    background: rgb(83, 97, 117);
    color: #E0E3E6;
    cursor: pointer;
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.6);
    transform: translateY(-3%);
  }
  .nav {
    padding-top: 10px;
    width: 100%;
    display: flex;
    background: #435368;
    padding-bottom: 10px;
  }
  .L {
    margin-left: 40px;
    width: 55%;
  }
  .pequeña {
    width: 40px;
    height: 40px;
  }
  button{
    color: #ffffff;
  }
  button .elimarCart:hover{
    
    background-color: red;
    cursor: pointer;
    color: #ffffff;
  }

  
  .modalDialog {
    position: fixed;
    font-family: Arial, Helvetica, sans-serif;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.8);
    z-index: 99999;
    opacity:0;
    -webkit-transition: opacity 400ms ease-in;
    -moz-transition: opacity 400ms ease-in;
    transition: opacity 400ms ease-in;
    pointer-events: none;
  }
  .modalDialog:target {
    opacity:1;
    pointer-events: auto;
  }
  .modalDialog > div {
    width: 400px;
    position: relative;
    margin: 10% auto;
    padding: 5px 20px 13px 20px;
    border-radius: 10px;
    background: #fff;
    background: -moz-linear-gradient(#fff, #999);
    background: -webkit-linear-gradient(#fff, #999);
    background: -o-linear-gradient(#fff, #999);
    -webkit-transition: opacity 400ms ease-in;
  -moz-transition: opacity 400ms ease-in;
  transition: opacity 400ms ease-in;
  }
  .close {
    background: #606061;
    color: #FFFFFF;
    line-height: 25px;
    position: absolute;
    right: -12px;
    text-align: center;
    top: -10px;
    width: 24px;
    text-decoration: none;
    font-weight: bold;
    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    border-radius: 12px;
    -moz-box-shadow: 1px 1px 3px #000;
    -webkit-box-shadow: 1px 1px 3px #000;
    box-shadow: 1px 1px 3px #000;
  }
  .close:hover { background: #00d9ff; }
  //
  let users = [
    {
        id: 0,
        img: "OIP (1).jpg",
        nombre: "Isa Rodriguez",
        desc: "Modelo de pies",
    },
    {
        id: 1,
        img: "OIP (2).jpg",
        nombre: "Martina Fernandez",
        desc: "Empresaria",
    },
    {
        id: 2,
        img: "OIP (3).jpg",
        nombre: "Emily Flores",
        desc: "",
    },
    {
        id: 3,
        img: "OIP(4).jpg",
        nombre: "Mauricio Florentino",
        desc: "Escritor ",
    },
    {
        id: 4,
        img: "OIP (5).jpg",
        nombre: "Santiago Agustelo",
        desc: "Actor",
    },
    {
        id: 5,
        img: "OIP (6).jpg",
        nombre: "Monica Bueno",
        desc: "Odontolaga",
    },
    {
        id: 6,
        img: "OIP(8).jpg",
        nombre: "Emilio Fernandez",
        desc: "Carnicero",
    },
    {
        id: 7,
        img: "OIP(9).jpg",
        nombre: "Florentia Pose",
        desc: "Albañil",
    },
    {
        id: 8,
        img: "OIP(10).jpg",
        nombre: "Cristiano Ronaldo",
        desc: "Fontanero",
    },
];

function addUser(img, nombre, desc) {
    let newUser = {
        id: users.length,
        img: img,
        nombre: nombre,
        desc: desc
    };
    users.push(newUser);
    console.table(users);
    renderUsers();
}

function dropUser(id) {//creamos un nuevo array dnde la condicion es que la id de cada usuario sera distinta de la id proporcionada
    users = users.filter(user => user.id !== id);
    renderUsers();//recargamos 
}

function renderUsers() {
    $(".cont").empty();
    for (const cadaUser of users) {
        $(".cont").append(
            `<div class="carta" data-id="${cadaUser.id}">
                <div class="imagen">
                    <img src="${cadaUser.img}" alt="${cadaUser.nombre}">
                </div>
                <div class="nombre">${cadaUser.nombre}</div>
                <div class="descripcion">${cadaUser.desc}</div>
                <button class="drop"><img
                class="elimarCart"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyYXNoLTIiPjxwYXRoIGQ9Ik0zIDZoMTgiLz48cGF0aCBkPSJNMTkgNnYxNGMwIDEtMSAyLTIgMkg3Yy0xIDAtMi0xLTItMlY2Ii8+PHBhdGggZD0iTTggNlY0YzAtMSAxLTIgMi0yaDRjMSAwIDIgMSAyIDJ2MiIvPjxsaW5lIHgxPSIxMCIgeDI9IjEwIiB5MT0iMTEiIHkyPSIxNyIvPjxsaW5lIHgxPSIxNCIgeDI9IjE0IiB5MT0iMTEiIHkyPSIxNyIvPjwvc3ZnPg=="
                alt="=>"
              /></button>
            </div>`
        );
    }

    $(".drop").click(function () {
        let userId = $(this).closest(".carta").data("id");
        console.log(users);
        dropUser(userId);
    });
}

$(function () {
    renderUsers();
});

$(".L").keyup(function () {
    let Search = $(".L").val().toLowerCase();
    console.log(Search);

    $(".carta").each(function () {
        let nombre = $(this).find(".nombre").text().toLowerCase();
        console.log(nombre + " ");
        nombre.includes(Search) ? $(this).show() : $(this).hide();
    });
});
