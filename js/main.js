// Capturando o botão
var btnContact = document.querySelector(".vc-btn-contact");
var toggleModal = document.querySelectorAll(".vc-toggle-modal");

// Removendo o page-preloadar quando a página estiver totalmente carregada.
window.addEventListener("load", () => {
  let pagePreLoader = document.querySelector(".vc-preloader");

  pagePreLoader.classList.add("vc-fade-out");

  setTimeout(() => {
    pagePreLoader.style.display = "none";
  }, 2000);
});

// Adicionando o evento de mostrar informações de contato
btnContact.addEventListener("click", () => {
  let boxContact = document.querySelector(".vc-contact-info");
  boxContact.classList.toggle("vc-is-open");
  btnContact.classList.toggle("vc-change-icon");
});

// Abrindo e fechando o modal de orçamento
for (let i = 0; i < toggleModal.length; i++) {
  toggleModal[i].addEventListener("click", () => {
    var overlay = document.querySelector(".vc-overlay");
    var modalOrcamento = document.querySelector("#vc-modal-orcamento");

    overlay.classList.toggle("vc-is-open");
    modalOrcamento.classList.toggle("vc-is-open");
    modalOrcamento.classList.toggle("vc-slide-top-in");
  });
}

// Animando Elementos On Scroll com WayPoints

var myScrollDown = document.querySelector(".vc-scroll-down");
var waypoint = new Waypoint({
  element: myScrollDown,
  handler: function () {
    myScrollDown.classList.toggle("vc-fade-out");
  },

  offset: "80%",
});
