// Variavel do botão do form
var botaoAdicionar = document.querySelector('#adicionar-paciente');

// Determinando função de event do botão
botaoAdicionar.addEventListener('click', function(event) {
    event.preventDefault();

// Coletando form para pegar informações dele
    var form = document.querySelector('#form-adiciona');

// Determinando variaveis e suas respectivas funções
    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

//Pegando tabela
    var tabela = document.querySelector('#tabela-pacientes');

// Criando tr na tabela
    tabela.appendChild(pacienteTr);

    form.reset();
    
});

//Coletando valores do formulario
function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura:form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };

    return paciente;

}

// Montando Tr
function montaTr(paciente) {
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr;
}

// Montando Td com conteudo e classe
function montaTd(dado, classe) {
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}