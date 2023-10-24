// 1. Selecionar personagem na listagem quando passar o mouse.
// 1.1. Obter personagens no JS para verificar quando o usuário passar o mouse em cima de um deles.
const personagens = document.querySelectorAll(".personagem");
// 1.2. Adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse.
personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    //mobile
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // 1.3. verificar se já não existe um personagem selecionado, se sim,
    // devemos remover a seleção dele
    removerSelecaoDoPersonagem();

    personagem.classList.add("selecionado");
    // 2. Quando passar o mouse em cima do personagem na listagem
    // trocar a imagem, o nome e a descrição do personagem grande.
    // 2.1. Obter o elemento do personagem grande para adicionar as informações nele.
    alterarImagemPersonagemSelecionado(personagem);

    // 2.3 alterar o nome do personagem grande
    alterarNomePersonagemSelecionado(personagem);

    // 2.4 alterar a descrição do personagem grande
    alterarDescricaoPersonagemSelecionado(personagem);
  });
});

function alterarDescricaoPersonagemSelecionado(personagem) {
  const descricaoPersonagem = document.getElementById("descricao-personagem");
  descricaoPersonagem.innerText = personagem.getAttribute("data-description");
}

function alterarNomePersonagemSelecionado(personagem) {
  const nomePersonagem = document.getElementById("nome-personagem");

  nomePersonagem.innerText = personagem.getAttribute("data-name");
}

function alterarImagemPersonagemSelecionado(personagem) {
  const imagemPersonagemGrande = document.querySelector(".personagem-grande");
  // 2.2. alterar a imagem do personagem grande
  const idPersonagem = personagem.attributes.id.value;
  // imagemPersonagemGrande.src = "./src/img/card-"+ idPersonagem + ".png";
  imagemPersonagemGrande.src = `./src/img/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
  const personagemSelecionado = document.querySelector(".selecionado");
  personagemSelecionado.classList.remove("selecionado");
}

