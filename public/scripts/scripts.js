
function getUsuario() {
    let id_usuario = document.getElementById("getId").value
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            let str = "";
            console.log(JSON.parse(xmlhttp.response));
            JSON.parse(xmlhttp.response).usuarios.forEach(element => {
                str +=  `
                    Id> ${element.Id}<br>
                    Nome> ${element.Nome}<br>
                    Email> ${element.email}<br>
                    Morada> ${element.morada}<br>
                    Idade> ${element.idade}<br>
                    Telefone> ${element.telefone}<br>
                    Sexo> ${element.sexo}<br>
                    Nome de Usuario> ${element.Nome_Usuario}<br>
                    Senha> ${element.senha}<br>
                    <br>
                    `
            });
            changeResultText(str)
           
        }
    }
    xmlhttp.open("GET", `/usuario/${id_usuario}`);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send();
}

function getAnimal() {
    let id_animal = document.getElementById("getId").value
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            let str = "";
            JSON.parse(xmlhttp.response).animais.forEach(element => {
                str +=  `
                    ID> ${element.Id}<br>
                    Tipo> ${element.Tipo}<br>
                    Raca> ${element.Raca}<br>
                    Cor> ${element.Cor}<br>
                    Idade> ${element.idade}<br>
                    Sexo> ${element.sexo}<br>
                    Localidade> ${element.localidade}<br>
                    <br>
                    `
            });
            changeResultText(str)
        }
    }
    xmlhttp.open("GET", `/animal/${id_animal}`);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send();
}

function getOrganizacao() {
    let id_organizacao = document.getElementById("getId").value
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            let str = "";
            JSON.parse(xmlhttp.response).organizacoes.forEach(element => {
                str +=  `
                    ID> ${element.Id}<br>
                    Nome> ${element.Nome}<br>
                    Localidade> ${element.localidade}<br>
                    <br>
                    `
            });
            changeResultText(str)
        }
    }
    xmlhttp.open("GET", `/organizacao/${id_organizacao}`);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send();
}

function getLogin() {
    let id_login= document.getElementById("getId").value
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let str = "";
            JSON.parse(xmlhttp.response).logins.forEach(element => {
                str += `
                        Id> ${element.Id}<br>
                        Usuario> ${element.Nome_Usuario}<br>
                        Senha> ${element.Senha}<br>
                        id_Usuario> ${element.Id_Usuario}<br>
                        <br>
                        `
            });
            changeResultText(str)
        }
    }
    xmlhttp.open("GET", `/login/${id_login}`);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send();
}

function postUsuario(){
    let nome = document.getElementById("addNome_id").value;
    let email = document.getElementById("addEmail_id").value;
    let morada = document.getElementById("addMorada_id").value;
    let idade = document.getElementById("addIdade_id").value;    
    let telefone = document.getElementById("addTelefone_id").value;
    let sexo = document.getElementById("addSexo_id").value;
    let nomeUsuario = document.getElementById("addNomeUsuario_id").value;
    let senha= document.getElementById("addSenha_id").value;
    let obj = {nome,email,morada,idade,telefone,sexo,nomeUsuario,senha}
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let str = "";
            let element = JSON.parse(xmlhttp.response)
                str += `
                Mensagem> ${element.content}<br>
                `
                changeResultText(str)
        }
    }
    xmlhttp.open("POST", `/usuario`);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(JSON.stringify(obj));
}

function postAnimal(){
    let tipo = document.getElementById("addTipo_id").value;
    let raca = document.getElementById("addRaca_id").value;
    let cor = document.getElementById("addCor_id").value;
    let idade = document.getElementById("addIdadeAnimal_id").value;
    let sexo = document.getElementById("addSexoAnimal_id").value;
    let localidade = document.getElementById("addLocalidade_id").value;
    let obj = {tipo,raca,cor,idade,sexo,localidade}
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let str = "";
            let element = JSON.parse(xmlhttp.response)
                str += `
                Mensagem> ${element.content}<br>
                `
                changeResultText(str)
        }
    }
    xmlhttp.open("POST", `/animal`);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(JSON.stringify(obj));
}

function postOrganizacao(){
    let nomeOrganizacao = document.getElementById("addNomeOrganizacao_id").value;
    let localidadeOrg = document.getElementById("addLocalidadeOrganizacao_id").value;
    let obj = {nomeOrganizacao,localidadeOrg}
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let str = "";
            let element = JSON.parse(xmlhttp.response)
                str += `
                Mensagem> ${element.content}<br>
                `
                changeResultText(str)
        }
    }
    xmlhttp.open("POST", `/organizacao`);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(JSON.stringify(obj));
}

function putUsuario(){
    let id_usuario = document.getElementById("putUsuario_id").value;
    let nome = document.getElementById("putNome_id").value;
    let email = document.getElementById("putEmail_id").value;
    let morada = document.getElementById("putMorada_id").value;
    let idade = document.getElementById("putIdade_id").value;
    let telefone = document.getElementById("putTelefone_id").value;
    let sexo = document.getElementById("putSexo_id").value;
    let nome_usuario= document.getElementById("putNomeUsuario_id").value;
    let senha= document.getElementById("putSenha_id").value;

    let obj = {nome,email,morada,idade,telefone,sexo,nome_usuario,senha}
    
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let str = "";
            let element = JSON.parse(xmlhttp.response)
                str += `
                Mensagem> ${element.content}<br>
                <br>
                `
                changeResultText(str)
        }
    }
    xmlhttp.open("PUT", `/usuario/${id_usuario}`);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(JSON.stringify(obj));
}

function putAnimal(){
    let id_animal = document.getElementById("addAnimal_id").value;
    let tipo = document.getElementById("addTipo_id").value;
    let raca = document.getElementById("addRaca_id").value;
    let cor = document.getElementById("addCor_id").value;
    let idade = document.getElementById("addIdade_id").value;
    let sexo = document.getElementById("addSexo_id").value;
    let localidade = document.getElementById("addLocalidade_id").value;

    let obj = {tipo,raca,cor,idade,sexo,localidade}
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let str = "";
            let element = JSON.parse(xmlhttp.response)
                str += `
                Mensagem> ${element.content}<br>
                <br>
                `
        }
        changeResultText(str)
    }
    xmlhttp.open("PUT", `/animal/${id_animal}`);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(JSON.stringify(obj));
}

function putOrganizacao(){
    let id_organizacao = document.getElementById("addOrganizacao_id").value;
    let nomeOrganizacao = document.getElementById("addNomeOrganizacao_id").value;
    let localidade = document.getElementById("addLocalidadeOrganizacao_id").value;

    let obj = {nomeOrganizacao,localidade}

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let str = "";
            let element = JSON.parse(xmlhttp.response)
                str += `
                Mensagem> ${element.content}<br>
                <br>
                
                `
        }
        changeResultText(str)
    }
    xmlhttp.open("PUT", `/organizacao/${id_organizacao}`);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(JSON.stringify(obj));
}

function deleteUsuario(){
    let id_usuario = document.getElementById("deleteId").value;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let str = "";
            let element = JSON.parse(xmlhttp.response)
                str += `
                Mensagem ${element.message}<br>
                <br>
                `
                changeResultText(str)
        }
    }
    xmlhttp.open("DELETE", `/usuario/${id_usuario}`);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send();
}

function deleteAnimal(){
    let id_animal = document.getElementById("deleteId").value;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let str = "";
            let element = JSON.parse(xmlhttp.response)
                str += `
                Mensagem ${element.message}<br>
                <br>
                `
                changeResultText(str)
        }
    }
    xmlhttp.open("DELETE", `/animal/${id_animal}`);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send();
}

function deleteOrganizacao(){
    let id_organizacao = document.getElementById("deleteId").value;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let str = "";
            let element = JSON.parse(xmlhttp.response)
                str += `
                Mensagem ${element.message}<br>
                <br>
                
                `
                changeResultText(str)
        }
    }
    xmlhttp.open("DELETE", `/organizacao/${id_organizacao}`);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send();
}

function changeResultText(text) {
    let element = document.getElementById("result")

    element.innerHTML = "<code>" + text + "<code>";
}
            
