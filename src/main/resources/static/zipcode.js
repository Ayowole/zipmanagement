	function clean_form(elements) {
            document.getElementById('street').value=("");
            document.getElementById('district').value=("");
            document.getElementById('city').value=("");
            document.getElementById('uf').value=("");
            document.getElementById('ibge').value=("");

    }

    function parse_result(conteudo) {
        if (!("erro" in conteudo)) {
            document.getElementById('street').value=(conteudo.logradouro);
            document.getElementById('district').value=(conteudo.bairro);
            document.getElementById('city').value=(conteudo.localidade);
            document.getElementById('uf').value=(conteudo.uf);
            document.getElementById('ibge').value=(conteudo.ibge);
        }
        else {
            clean_form();
            alert("CEP não encontrado.");
        }
    }
        
    function searchzip(valor) {
        var cep = valor.replace(/\D/g, '');

        if (cep != "") {
            var validacep = /^[0-9]{8}$/;

            if(validacep.test(cep)) {
                document.getElementById('street').value="...";
                document.getElementById('district').value="...";
                document.getElementById('city').value="...";
                document.getElementById('uf').value="...";
                document.getElementById('ibge').value="...";

                var script = document.createElement('script');

                script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=parse_result';

                document.body.appendChild(script);
            }
            else {
                clean_form();
                alert("Formato de CEP inválido.");
            }
        }
        else {
            clean_form();
        }
    };