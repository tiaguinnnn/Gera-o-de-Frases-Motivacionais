// public/app.js

// Garanta que estes IDs estão corretos!
const fraseDisplay = document.getElementById('fraseDisplay'); 
const gerarFraseBtn = document.getElementById('gerarFraseBtn');

async function buscarFrase() {
    fraseDisplay.textContent = 'Carregando...'; 

    try {
        // CONFIRA ESTA URL: Deve ser exatamente a que definimos no Node
        const response = await fetch('/api/frases/random'); 
        
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data = await response.json();
        
        // CONFIRA ESTA LINHA: O nome da propriedade deve ser 'texto'
        fraseDisplay.textContent = data.texto; // <-- Aqui extraímos a frase

    } catch (error) {
        console.error('Erro ao buscar frase:', error);
        fraseDisplay.textContent = 'Erro ao carregar a frase. Verifique o console do navegador.';
    }
}

gerarFraseBtn.addEventListener('click', buscarFrase);
document.addEventListener('DOMContentLoaded', buscarFrase); // Roda ao carregar a página