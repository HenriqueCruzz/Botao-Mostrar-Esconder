const botaoMostrar = document.getElementById('botaoMostrar');
const botaoEsconder = document.getElementById('botaoEsconder');

const texto = document.querySelector('.texto'); // O querySelector pega só o primeiro elemento com a classe 'texto'.

// const texto = document.getElementsByClassName('texto')[0]; // O getElementsByClassName funciona como se fosse 
// um array. Ele pega o primeiro elemento com a classe 'texto'.
// ================================================================================================================
// const textos = document.querySelectorAll('.texto'); // O querySelectorAll retorna uma lista (NodeList) de todos 
// os elementos com a classe 'texto'. (APRENDER MELHOR)

botaoMostrar.addEventListener("click", function () {
    texto.style.display = "block";
});

botaoEsconder.addEventListener("click", function () {
    texto.style.display = "none";
});
