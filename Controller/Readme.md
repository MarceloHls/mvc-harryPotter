
// Rotas e retornos

1 - Rota responsavel pela criação do usuario

Caminho : /signup
Metodo: post 
Envio :
{
    "userName": "usuario",
    "password": "1234"
}

Retorno Sucesso: 
{
    "menssage": "Usuario cadastrado com sucesso",
    "data": {
        "id": 4,
        "username": "usuario"
    }
}

///////////////////////////////////////////////

2 - Rota responsavel pelo login do usuario

Caminho : /signin
Metodo: get
Envio :
{
    "userName": "usuario",
    password": "1234"
}

Retorno Sucesso: 
{
    "menssage": "Login efetuado com sucesso",
    "data": {
        "userName": "usuario",
        "id": 4,
        "favoritewizard": null
    }
}

///////////////////////////////////////////////

3 - Rota responsavel por alterar senha do usuario

Caminho : /passwordchange
Metodo: put
Envio :
{
    "userName": "usuario",
    "password":"4321"
}

Retorno Sucesso: 
{
    "menssage": "Senha alterada com sucesso",
    "data": {
        "id": 4,
        "username": "usuario"
    }
}

///////////////////////////////////////////////

4 - Rota responsavel por inserir ou alterar favorito

Caminho : /:id/favorite
Metodo: put
Envio :
{
    "favoriteWizard": "Harry Potter"
}

Retorno Sucesso: 
{
    "menssage": "Favorito adicionado com sucesso",
    "data": {
        "username": "usuario",
        "favoritewizard": "Harry Potter"
    }
}

///////////////////////////////////////////////

5 - Rota responsavel por enviar lista de bruxos

Caminho : /wizards
Metodo: get
Envio :
{}

Retorno Sucesso: 
{
    "menssage": "Lista enviada",
    "data": [...]
}

///////////////////////////////////////////////

6 - Rota responsavel por enviar detalhes de um bruxo

Caminho : /:id/details
Metodo: post
Envio :
{
    "wizard": "Harry Potter"
}

Retorno Sucesso: 
{
    "menssage": "Bruxo localizado",
    "data": {...}
}

///////////////////////////////////////////////

