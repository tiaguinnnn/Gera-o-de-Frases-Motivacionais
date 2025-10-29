const botao = document.getElementById("gerarFrase");
const textoFrase = document.getElementById("frase");

async function gerarFrase() {
  try {
    const resposta = await fetch("http://localhost:3000/frase");
    const dados = await resposta.json();
    textoFrase.textContent = dados.texto; 
  } catch (erro) {
    textoFrase.textContent = "Erro ao carregar frase 😢";
    console.error(erro);
  }
}

botao.addEventListener("click", gerarFrase);
