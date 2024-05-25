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
        desc: "Estudiante",
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
    recargarPage();
}

function dropUser(id) {
    users = users.filter(user => user.id !== id);
    recargarPage();
}

function recargarPage() {
    $(".cont").empty();
    for (const cadaUser of users) {
        $(".cont").append(
            `<div class="carta" data-id="${cadaUser.id}">
                <div class="imagen">
                    <img src="${cadaUser.img}" alt="${cadaUser.nombre}" class="mg">
                </div>
                <div class="nombre">${cadaUser.nombre}</div>
                <div class="descripcion">${cadaUser.desc}</div>
                <button class="drop"><img
                class="pequeña imgboton"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmY2ZjZmMiIHN0cm9rZS13aWR0aD0iMS43NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10cmFzaC0yIj48cGF0aCBkPSJNMyA2aDE4Ii8+PHBhdGggZD0iTTE5IDZ2MTRjMCAxLTEgMi0yIDJIN2MtMSAwLTItMS0yLTJWNiIvPjxwYXRoIGQ9Ik04IDZWNGMwLTEgMS0yIDItMmg0YzEgMCAyIDEgMiAydjIiLz48bGluZSB4MT0iMTAiIHgyPSIxMCIgeTE9IjExIiB5Mj0iMTciLz48bGluZSB4MT0iMTQiIHgyPSIxNCIgeTE9IjExIiB5Mj0iMTciLz48L3N2Zz4="
                alt="=>"
              /></button>

            </div>`
        );
    }

    $(".drop").click(function () {
        let userId = $(this).closest(".carta").data("id");
        dropUser(userId);
    });
}

$(function () {
    recargarPage();

    $("#addUserForm").submit(function (event) {
        event.preventDefault();
        let img = $("#img").val();
        let nombre = $("#nombre").val();
        let desc = $("#desc").val();
        addUser(img, nombre, desc);
        window.location.href = "#close"; // Close the modal
    });
});

$(".L").keyup(function () {
    let Search = $(".L").val().toLowerCase();
    $(".carta").each(function () {
        let nombre = $(this).find(".nombre").text().toLowerCase();
        nombre.includes(Search) ? $(this).show() : $(this).hide();
    });
});