# FGV-220

Projeto de teste para FGV - back-end + front-end + (interface spa consumindo serviço dll)
Murillo Loureiro do Carmo <murillodocarmo@gmail.com>

## FVG-Core

Contém o projeto C# compilando uma DLL com o núcleo do projeto

## FVG-Console

Contém um console com chamadas de testes

## FVG-Teste

Contém os testes unutários do back-end em MSTest

## FVG-Front

Contém o projeto em node.js para criação e desenvolvimento da interface Angular (adicional aos documentos de casos de uso, citado apenas no email)

### npm run build
> gera a interface compilada em /dist/fullstack-app

## FVG-Web

Contém o corpo para comunicação entre a aplicação angular e o serviço (conforme citado no e-mail, mesmo que abaixo indique como dica não criar uma webapi ou algo do tipo)

## FVG-WebSelfHost

Contém projeto auxiliar com executável que auto-hosteia o core e o front do projeto (a separação entre web e webselfhost permite criar um host para iis baseado no web)

> Necessário copiar manuamente o conteúdo compilado em /dist/fullstack-app para o diretório de saída (~/bin/Debug/fullstack-app ou ~/bin/Release/fullstack-app)

## TODO

* ao compilar o webselfhost copiar a pasta fullstack automaticamente para a saída
