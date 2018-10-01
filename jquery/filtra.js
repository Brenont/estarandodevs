var campoFiltro = $('#filtrar-tabela')[0];

//evento de input no jquery? como?
campoFiltro.addEventListener("input", function () {
    console.log(this.value);
    
    // var pacientes = $(".paciente")
    var pacientes = document.querySelectorAll(".paciente")


    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = $(".info-nome");
            var expressao = new RegExp(this.value, "i");
            var nome = tdNome.textContent;
            
            if (!expressao.test(nome)) {
                $(paciente).addClass("invisivel");
            } else {
                $(paciente).removeClass("invisivel");
            }
        }
    } else {
        for(var i = 0 ; i < pacientes.length; i++){
            var paciente = pacientes[i];
            $(paciente).removeClass("invisivel");
        }
    }
});