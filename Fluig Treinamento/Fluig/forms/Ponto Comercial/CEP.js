$("#cep").blur(function() {
    $.getJSON("//viacep.com.br/ws/"+ $("#cep").val() +"/json/", function(dados) {
    $("#cidade").val(dados.localidade);
    $("#estado").val(dados.uf);
    $("#bairro").val(dados.bairro);
    $("#logradouro").val(dados.logradouro);
        })
})