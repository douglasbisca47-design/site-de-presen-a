/* =========================
   DATA DO EVENTO
========================= */

/*
   ALTERE A DATA AQUI.

   Exemplo:
   23 de agosto de 2027 às 15:00

   Se o seu evento for em outra data,
   basta mudar esta linha.
*/

const dataEvento = new Date("2027-08-23T15:00:00");


/* =========================
   CONTAGEM REGRESSIVA
========================= */

function atualizarContador() {

    const agora = new Date();

    const diferenca = dataEvento - agora;

    if (diferenca <= 0) {

        document.getElementById("contador").innerHTML = `
            <h3>Chegou o grande dia! ❤️</h3>
        `;

        return;
    }

    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferenca / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (diferenca / (1000 * 60)) % 60
    );

    const segundos = Math.floor(
        (diferenca / 1000) % 60
    );


    document.getElementById("dias").textContent =
        String(dias).padStart(2, "0");

    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");
}


setInterval(atualizarContador, 1000);

atualizarContador();


/* =========================
   MENU MOBILE
========================= */

function abrirMenu() {

    const menu = document.querySelector(".menu nav");

    menu.classList.toggle("ativo");
}


/* =========================
   CONFIRMAÇÃO
========================= */

document
    .getElementById("formPresenca")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const nome =
            document.getElementById("nome").value;

        const presenca =
            document.getElementById("presenca").value;

        const acompanhantes =
            document.getElementById("acompanhantes").value;


        const mensagem =
            document.getElementById("mensagemConfirmacao");


        mensagem.style.display = "block";


        if (
            presenca ===
            "Sim, estarei presente!"
        ) {

            mensagem.innerHTML = `
                ❤️ Obrigado, ${nome}!
                <br><br>
                Sua presença foi confirmada.
                <br>
                Estamos muito felizes em ter você conosco!
                <br><br>
                Acompanhantes: ${acompanhantes}
            `;

        } else {

            mensagem.innerHTML = `
                💕 Obrigado por nos avisar, ${nome}.
                <br><br>
                Sentiremos sua falta!
            `;

        }


        document
            .getElementById("formPresenca")
            .reset();

    });


/* =========================
   LISTA DE PRESENTES
========================= */

function comprar(presente) {

    alert(
        "Você escolheu: " +
        presente +
        "\n\n" +
        "Aqui podemos colocar depois o sistema de compra, " +
        "Pix ou WhatsApp."
    );

}


/* =========================
   BOTÃO VOLTAR AO TOPO
========================= */

window.addEventListener("scroll", function() {

    const botaoTopo =
        document.getElementById("topo");


    if (window.scrollY > 500) {

        botaoTopo.style.display = "block";

    } else {

        botaoTopo.style.display = "none";

    }

});


function voltarTopo() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
