const fraseDisplay = document.getElementById('fraseDisplay'); 
const gerarFraseBtn = document.getElementById('gerarFraseBtn');

async function buscarFrase() {
    fraseDisplay.textContent = 'Carregando...'; 

    try {
        const response = await fetch('/api/frases/random'); 
        
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data = await response.json();
        
        fraseDisplay.textContent = data.texto;

    } catch (error) {
        console.error('Erro ao buscar frase:', error);
        fraseDisplay.textContent = 'Erro ao carregar a frase. Verifique o console do navegador.';
    }
}

gerarFraseBtn.addEventListener('click', buscarFrase);
document.addEventListener('DOMContentLoaded', buscarFrase);