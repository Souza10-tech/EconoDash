function atualizarDashboard() {
    const agora = new Date();
    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    // 1. Atualiza o Relógio
    const relogioTexto = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    document.getElementById('relogio').innerText = relogioTexto;

    // 2. Lógica de Mercado Aberto (Ex: 09h às 18h)
    const pingo = document.getElementById('pingo-luz');
    const textoStatus = document.getElementById('texto-status');

    if (horas >= 9 && horas < 18) {
        textoStatus.innerText = "Mercado Aberto";
        pingo.style.backgroundColor = "var(--verde)";
        pingo.style.boxShadow = "0 0 8px var(--verde)";
    } else {
        textoStatus.innerText = "Mercado Fechado";
        pingo.style.backgroundColor = "var(--accent-red)";
        pingo.style.boxShadow = "0 0 8px var(--accent-red)";
    }
}

// Executa a função a cada 1 segundo
setInterval(atualizarDashboard, 1000);


function atualizarDashboard() {
    const agora = new Date();
    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    // 1. Atualiza o Relógio
    const relogioTexto = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    const elRelogio = document.getElementById('relogio');
    if(elRelogio) elRelogio.innerText = relogioTexto;

    // 2. Lógica de Mercado Aberto (09h às 18h)
    const pingo = document.getElementById('pingo-luz');
    const textoStatus = document.getElementById('texto-status');

    if (pingo && textoStatus) {
        if (horas >= 9 && horas < 18) {
            textoStatus.innerText = "Mercado Aberto";
            pingo.style.backgroundColor = "var(--verde)";
            pingo.style.boxShadow = "0 0 8px var(--verde)";
        } else {
            textoStatus.innerText = "Mercado Fechado";
            pingo.style.backgroundColor = "var(--accent-red)";
            pingo.style.boxShadow = "0 0 8px var(--accent-red)";
        }
    }
}

function simularVariacaoPrecos() {
    // Lista de IDs que vamos atualizar
    const IDs = ['valor-dolar', 'valor-euro', 'valor-libra', 'valor-btc', 'valor-selic', 'valor-ipca'];
    
    IDs.forEach(id => {
        const elemento = document.getElementById(id);
        if (elemento) {
            // Pega o valor atual (ajustando pontos e vírgulas)
            let valorAtual = parseFloat(elemento.innerText.replace('.', '').replace(',', '.'));
            
            // Define uma variação (BTC muda mais, os outros mudam pouco)
            const variacao = id === 'valor-btc' ? (Math.random() * 40 - 20) : (Math.random() * 0.02 - 0.01);
            
            let novoValor = valorAtual + variacao;

            // Devolve para o HTML formatado
            if (id === 'valor-btc') {
                elemento.innerText = Math.floor(novoValor).toLocaleString('pt-BR');
            } else {
                elemento.innerText = novoValor.toFixed(2).replace('.', ',');
            }
        }
    });
}

// Executa o relógio a cada segundo
setInterval(atualizarDashboard, 1000);

// Executa a simulação a cada 5 segundos se o mercado estiver aberto
setInterval(() => {
    const horas = new Date().getHours();
    if (horas >= 9 && horas < 18) {
        simularVariacaoPrecos();
    }
}, 5000);

// Chama uma vez ao carregar para não esperar 1 segundo
atualizarDashboard();
