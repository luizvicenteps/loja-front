# Loja-Front
Projeto de Loja Virtual com simples demonstração de CRUD. Foi desenvolvido com Framework AngularJS e consome API dispónível em:

[https://github.com/luizvicenteps/loja-front](https://github.com/luizvicenteps/loja-front)


### Dependências do Projeto 'loja-front'
  * NodeJS.
  * Gulp.
  * Ruby.
  * Python.
  * Copass.


### Instalação
  * Instale todas às dependências do Projeto;
  * Instale o Copass para compilação do CSS:
```bash
 $  gem install compass
```
  * Instale o Gulp e o Bower globalmente:
```bash
 $ npm install -g gulp bower
```
  * Instale às dependências NPM:
```bash
 $ npm install
```    
  * Instale às dependências BOWER:
```bash
 $ bower install
``` 
Para alterar o host da API de controle, altere o arquivo:

./scripts/utils/contantes.js

O Padrão é: http://localhost:3000/


### Execução
  
  Dentro do diretório do projeto, execute:
```bash
 $ gulp dev
``` 
A aplicação estará disponível em:
  
[http://localhost:8080/](http://localhost:8080/)


### Build
Para a geração da Build do Projeto, execute dentro do dirétoria da aplicação:
```bash
 $ gulp build
``` 
A Build será criada em ./dist
  