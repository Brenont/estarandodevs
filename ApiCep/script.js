// $(document).ready(function(){
addEventListener("input", function () {
    var cep = document.querySelector("#cep").value;
    cep = cep.replace(/\.|\-/g, '');
    
    $.ajax({
        url: "https://viacep.com.br/ws/" + cep + "/json/",
        type: "GET",
        dataType: "JSON",
        success: function (cep) {
            var bairro = document.querySelector("#bairro");
            bairro.value = cep.bairro;

            var rua = document.querySelector("#rua");
            rua.value = cep.logradouro;

            if(cep.bairro = undefined){
                bairro.value = "";
            }

            if(cep.logradouro = undefined){
                rua.value = "";
            }

            localStorage.setItem(`${cep} bairro`, cep.bairro)

            localStorage.setItem(`${cep} rua`, cep.logradouro)
        },
        error: function () {
            console.log("ERROU");
        }
    });

});