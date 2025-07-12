// Contador de caracteres
const textarea = document.getElementById('textArea');
const charCount = document.querySelector('.contact__char-counter');

if (textarea && charCount) {
    textarea.addEventListener('input', function() {
        const tamanhoAtual = this.value.length;
        charCount.textContent = `${tamanhoAtual}/500`;

        // Cortar após 500 chars
        if (tamanhoAtual > 500) {
            this.value = this.value.substring(0, 500);
            return;  // Sair da função após cortar o texto
        }

        // Alterar cores ao chegar próximo ao limite
        if (tamanhoAtual > 450) {
            charCount.style.color = '#ff6b6b';
            charCount.textContent = `${tamanhoAtual}/500 (limite próximo!)`;
        } else {
            charCount.style.color = '#888';
            charCount.textContent = `${tamanhoAtual}/500`;
        }
    });

    // Dispara o evento manualmente para inicializar o contador
    textarea.dispatchEvent(new Event('input'));
}