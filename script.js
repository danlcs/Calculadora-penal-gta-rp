document.addEventListener('DOMContentLoaded', function() {
    // Elementos da interface
    const calcularBtn = document.querySelector('.btn:not(.header .btn)');
    const resultadoDiv = document.querySelector('.btn + div');
    const nomeInput = document.getElementById('nome');
    const idInput = document.getElementById('id');
    
    // Esconder a seção de resultados inicialmente
    resultadoDiv.style.display = 'none';
    
    // Configurar os crimes e suas penalidades
    const crimes = {
        desacato: { meses: 5, fianca: 2500 },
        ameaça: { meses: 5, fianca: 2500 },
        roubo: { meses: 12, fianca: 10000 },
        assalto: { meses: 15, fianca: 12000 },
        porte_ilegal: { meses: 8, fianca: 5000 },
        homicidio: { meses: 24, fianca: 0 },
        corrupcao: { meses: 10, fianca: 7500 },
        trafico: { meses: 20, fianca: 15000 }
    };
    
    // Estilizar o botão de calcular
    calcularBtn.style.backgroundColor = '#8B4513';
    calcularBtn.style.color = 'wheat';
    calcularBtn.style.border = '1px solid wheat';
    calcularBtn.style.padding = '10px 20px';
    calcularBtn.style.borderRadius = '5px';
    calcularBtn.style.cursor = 'pointer';
    calcularBtn.style.fontWeight = 'bold';
    calcularBtn.style.margin = '20px auto';
    calcularBtn.style.display = 'block';
    
    // Adicionar hover effect ao botão
    calcularBtn.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#A0522D';
    });
    
    calcularBtn.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#8B4513';
    });
    
    // Adicionar evento de clique ao botão calcular
    calcularBtn.addEventListener('click', function() {
        // Verificar se há crimes selecionados
        const crimesSelecionados = document.querySelectorAll('input[type="checkbox"]:checked');
        
        if (crimesSelecionados.length === 0) {
            alert('Por favor, selecione pelo menos um crime.');
            return;
        }
        
        // Calcular total de meses e fiança
        let totalMeses = 0;
        let totalFianca = 0;
        
        crimesSelecionados.forEach(crime => {
            const crimeId = crime.id;
            totalMeses += crimes[crimeId].meses;
            totalFianca += crimes[crimeId].fianca;
        });
        
        // Exibir resultados
        resultadoDiv.innerHTML = `
            <h3>Nome: ${nomeInput.value || 'Não informado'}</h3>
            <h3>ID: ${idInput.value || 'Não informado'}</h3>
            <h3>Penalidade: ${totalMeses} meses</h3>
            <h3>Fiança: $${totalFianca.toLocaleString()} ${totalFianca === 0 ? '(Sem Fiança)' : ''}</h3>
        `;
        
        resultadoDiv.style.display = 'block';
        resultadoDiv.style.marginTop = '20px';
        resultadoDiv.style.padding = '20px';
        resultadoDiv.style.border = '1px solid wheat';
        resultadoDiv.style.borderRadius = '5px';
    });
});