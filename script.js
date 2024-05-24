function btn_01_Click() {
    window.open("https://www.youtube.com/watch?v=6J8Uyrx56sc&t=4s"); //coloque o link do site ou do video que vc deseja que seja aberto ao ter seu pedido aceito
}

function btn_02_Click() {
    const btn_02 = document.getElementById("btn_02");
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const randomX = Math.floor(Math.random() * (viewportWidth - btn_02.offsetWidth));
    const randomY = Math.floor(Math.random() * (viewportHeight - btn_02.offsetHeight));

    btn_02.style.position = "absolute";
    btn_02.style.left = `${randomX}px`;
    btn_02.style.top = `${randomY}px`;

    var strings = ["POR FAVOR", "NÃO NEGUE O TOINHO", "EU NUNCA TE PEDI NADA", "PRECISO DO TOINHO", "DEIXE DE SER RUIM"]; //edite os textos caso a amada negue a principio

    const h1 = document.getElementById("h1");

    h1.textContent = strings[Math.floor(Math.random() * strings.length)];
}