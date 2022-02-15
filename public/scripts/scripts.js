
function getUsuario() {
    let id = document.getElementById("getId").value
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            let str = "";
            JSON.parse(xmlhttp.response).forEach(element => {
                str +=  `
                    ID> ${element.id_usuario}<br>
                    Nome> ${element.nome}<br>
                    Email> ${element.email}<br>
                    Morada> ${element.morada}<br>
                    Idade> ${element.idade}<br>
                    Telefone> ${element.telefone}<br>
                    Sexo> ${element.sexo}<br>
                    Nome de Usuario> ${element.nome_usuario}<br>
                    Senha> ${element.senha}<br>
                    <br>
                    `
            });
            changeResultText(str)
        }
    }
    xmlhttp.open("GET", `/usuario/${id}`);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send();
}

function getAnimal() {
    let id = document.getElementById("getId").value
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            let str = "";
            JSON.parse(xmlhttp.response).forEach(element => {
                str +=  `
                    ID> ${element.id_animal}<br>
                    Tipo> ${element.tipo}<br>
                    Raca> ${element.raca}<br>
                    Cor> ${element.cor}<br>
                    Idade> ${element.idade}<br>
                    Sexo> ${element.sexo}<br>
                    Localidade> ${element.localidade}<br>
                    <br>
                    `
            });
            changeResultText(str)
        }
    }
    xmlhttp.open("GET", `/animal/${id}`);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send();
}

function getOrganizacao() {
    let id = document.getElementById("getId").value
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            let str = "";
            JSON.parse(xmlhttp.response).forEach(element => {
                str +=  `
                    ID> ${element.id_organizacao}<br>
                    Nome> ${element.nome}<br>
                    Localidade> ${element.localidade}<br>
                    <br>
                    `
            });
            changeResultText(str)
        }
    }
    xmlhttp.open("GET", `/organizacao/${id}`);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send();
}

function postUsuario(){
    let idUsuario = document.getElementById("addUsuario_id").value;
    let nome = document.getElementById("addNome_id").value;
    let email = document.getElementById("addEmail_id").value;
    let morada = document.getElementById("addMorada_id").value;
    let idade = document.getElementById("addIdade_id").value;
    let telefone = document.getElementById("addTelefone_id").value;
    let sexo = document.getElementById("addSexo_id").value;
    let nomeUsuario= document.getElementById("addNomeUsuario_id").value;
    let senha= document.getElementById("addSenha_id").value;
    let obj = {idUsuario,nome,email,morada,idade,telefone,sexo,nomeUsuario,senha}
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let str = "";
            let element = JSON.parse(xmlhttp.response)
                str += `
                ID> ${element.id_usuario}<br>
                Nome> ${element.nome}<br>
                Email> ${element.email}<br>
                Morada> ${element.morada}<br>
                Idade> ${new Date(element.idade).toUTCString()}<br>
                Telefone> ${element.telefone}<br>
                Sexo> ${element.sexo}<br>
                Nome de Usuario> ${element.nome_usuario}<br>
                Senha> ${element.senha}<br>
                <br>
                `
                changeResultText(str)
        }
    }
    xmlhttp.open("POST", `/usuario`);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(JSON.stringify(obj));
}

function postAnimal(){
    let idAnimal = document.getElementById("addAnimal_id").value;
    let tipo = document.getElementById("addTipo_id").value;
    let raca = document.getElementById("addRaca_id").value;
    let cor = document.getElementById("addCor_id").value;
    let idade = document.getElementById("addIdade_id").value;
    let sexo = document.getElementById("addSexo_id").value;
    let localidade = document.getElementById("addLocalidade_id").value;
    let obj = {idAnimal,tipo,raca,cor,idade,sexo,localidade}
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let str = "";
            let element = JSON.parse(xmlhttp.response)
                str += `
                ID> ${element.id_animal}<br>
                Tipo> ${element.tipo}<br>
                Raca> ${element.raca}<br>
                Cor> ${element.cor}<br>
                Idade> ${element.idade}<br>
                Sexo> ${element.sexo}<br>
                Localidade> ${element.localidade}<br>
                <br>
                `
        }
        changeResultText(str)
    }
    xmlhttp.open("POST", `/animal`);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(JSON.stringify(obj));
}

function postOrganizacao(){
    let idOrganizacao = document.getElementById("addOrganizacao_id").value;
    let nomeOrganizacao = document.getElementById("addNomeOrganizacao_id").value;
    let localidade = document.getElementById("addLocalidadeOrganizacao_id").value;
    let obj = {idOrganizacao,nomeOrganizacao,localidade}
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let str = "";
            let element = JSON.parse(xmlhttp.response)
                str += `
                ID> ${element.id_organizacao}<br>
                    Nome> ${element.nome}<br>
                    Localidade> ${element.localidade}<br>
                    <br>
                
                `
        }
        changeResultText(str)
    }
    xmlhttp.open("POST", `/organizacao`);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(JSON.stringify(obj));
}

function putUsuario(){
    let idUsuario = document.getElementById("addUsuario_id").value;
    let nome = document.getElementById("addNome_id").value;
    let email = document.getElementById("addEmail_id").value;
    let morada = document.getElementById("addMorada_id").value;
    let idade = document.getElementById("addIdade_id").value;
    let telefone = document.getElementById("addTelefone_id").value;
    let sexo = document.getElementById("addSexo_id").value;
    let nomeUsuario= document.getElementById("addNomeUsuario_id").value;
    let senha= document.getElementById("addSenha_id").value;
    let obj = {idUsuario,nome,email,morada,idade,telefone,sexo,nomeUsuario,senha}
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let str = "";
            let element = JSON.parse(xmlhttp.response)
                str += `
                ID> ${element.id_usuario}<br>
                Nome> ${element.nome}<br>
                Email> ${element.email}<br>
                Morada> ${element.morada}<br>
                Idade> ${new Date(element.idade).toUTCString()}<br>
                Telefone> ${element.telefone}<br>
                Sexo> ${element.sexo}<br>
                Nome de Usuario> ${element.nome_usuario}<br>
                Senha> ${element.senha}<br>
                <br>
                `
                changeResultText(str)
        }
    }
    xmlhttp.open("PUT", `/usuario`);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(JSON.stringify(obj));
}

function putAnimal(){
    let idAnimal = document.getElementById("addAnimal_id").value;
    let tipo = document.getElementById("addTipo_id").value;
    let raca = document.getElementById("addRaca_id").value;
    let cor = document.getElementById("addCor_id").value;
    let idade = document.getElementById("addIdade_id").value;
    let sexo = document.getElementById("addSexo_id").value;
    let localidade = document.getElementById("addLocalidade_id").value;
    let obj = {idAnimal,tipo,raca,cor,idade,sexo,localidade}
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let str = "";
            let element = JSON.parse(xmlhttp.response)
                str += `
                ID> ${element.id_animal}<br>
                Tipo> ${element.tipo}<br>
                Raca> ${element.raca}<br>
                Cor> ${element.cor}<br>
                Idade> ${element.idade}<br>
                Sexo> ${element.sexo}<br>
                Localidade> ${element.localidade}<br>
                <br>
                `
        }
        changeResultText(str)
    }
    xmlhttp.open("PUT", `/animal`);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(JSON.stringify(obj));
}

function putOrganizacao(){
    let idOrganizacao = document.getElementById("addOrganizacao_id").value;
    let nomeOrganizacao = document.getElementById("addNomeOrganizacao_id").value;
    let localidade = document.getElementById("addLocalidadeOrganizacao_id").value;
    let obj = {idOrganizacao,nomeOrganizacao,localidade}
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let str = "";
            let element = JSON.parse(xmlhttp.response)
                str += `
                ID> ${element.id_organizacao}<br>
                    Nome> ${element.nome}<br>
                    Localidade> ${element.localidade}<br>
                    <br>
                
                `
        }
        changeResultText(str)
    }
    xmlhttp.open("PUT", `/organizacao`);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(JSON.stringify(obj));
}

function deleteUsuario(){
    let id = document.getElementById("deleteId").value;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let str = "";
            let element = JSON.parse(xmlhttp.response)
                str += `
                ID> ${element.id_usuario}<br>
                Nome> ${element.nome}<br>
                Email> ${element.email}<br>
                Morada> ${element.morada}<br>
                Idade> ${element.idade}<br>
                Telefone> ${element.telefone}<br>
                Sexo> ${element.sexo}<br>
                Nome de Usuario> ${element.nome_usuario}<br>
                Senha> ${element.senha}<br>
                <br>
                `
                changeResultText(str)
        }
    }
    xmlhttp.open("DELETE", `/usuario`);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send();
}

function deleteAnimal(){
    let id = document.getElementById("deleteId").value;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let str = "";
            let element = JSON.parse(xmlhttp.response)
                str += `
                ID> ${element.id_animal}<br>
                Tipo> ${element.tipo}<br>
                Raca> ${element.raca}<br>
                Cor> ${element.cor}<br>
                Idade> ${element.idade}<br>
                Sexo> ${element.sexo}<br>
                Localidade> ${element.localidade}<br>
                <br>
                `
                changeResultText(str)
        }
    }
    xmlhttp.open("DELETE", `/animal`);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send();
}

function deleteOrganizacao(){
    let id = document.getElementById("deleteId").value;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let str = "";
            let element = JSON.parse(xmlhttp.response)
                str += `
                ID> ${element.id_organizacao}<br>
                    Nome> ${element.nome}<br>
                    Localidade> ${element.localidade}<br>
                    <br>
                
                `
                changeResultText(str)
        }
    }
    xmlhttp.open("DELETE", `/organizacao`);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send();
}
           
