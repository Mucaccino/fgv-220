# FVG-220

Projeto de teste para FGV - back-end + front-end + (interface spa consumindo servi�o dll)
Murillo Loureiro do Carmo <murillodocarmo@gmail.com>

## FVG-Core

Cont�m o projeto C# compilando uma DLL com o n�cleo do projeto

## FVG-Console

Cont�m um console com chamadas de testes

## FVG-Teste

Cont�m os testes unut�rios do back-end em MSTest

## FVG-Front

Cont�m o projeto em node.js para cria��o e desenvolvimento da interface Angular (adicional aos documentos de casos de uso, citado apenas no email)

### npm run build
> gera a interface compilada em /dist/fullstack-app

## FVG-Web

Cont�m o corpo para comunica��o entre a aplica��o angular e o servi�o (conforme citado no e-mail, mesmo que abaixo indique como dica n�o criar uma webapi ou algo do tipo)

## FVG-WebSelfHost

Cont�m projeto auxiliar com execut�vel que auto-hosteia o core e o front do projeto (a separa��o entre web e webselfhost permite criar um host para iis baseado no web)

> Necess�rio copiar manuamente o conte�do compilado em /dist/fullstack-app para o diret�rio de sa�da (~/bin/Debug/fullstack-app ou ~/bin/Release/fullstack-app)

## TODO

* ao compilar o webselfhost copiar a pasta fullstack automaticamente para a sa�da