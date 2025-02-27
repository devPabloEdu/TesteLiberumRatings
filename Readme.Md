## Guia para Rodar o Projeto do cadastro de Empresas (Frontend e Backend)
--------------------------------------------------------------------------

## Pré requisitos :
- Antes de rodar o projeto você precisa instalar os seguintes programas
1 - SQL SERVER EXPRESS (é mais leve para o uso, e foi o que eu utilizei no backEnd)
Você pode baixa-lo acessando o link : https://www.microsoft.com/pt-br/sql-server/sql-server-downloads
Após baixa-lo, você deve prosseguir com a instalação dele normalmente

2 - VSCODE - visual studio Code
Você consegue baixar este programa acessando a loja MICROSOFT STORE e digitando no campo de busca "Visual Studio Code"
Feito isso, é só instalar ele normalmente e seguir para o próximo passo

3 - .NET 
Você deve baixar o sdk do .net acessando https://dotnet.microsoft.com/pt-br/download
A opção que deve ser escolhida é a de suporte  a longo prazo (LTS) 8.0, feito isso, na aba de extensões de seu VSCODE instale as extensões da linguagem C# e os snippets dessa linguagem

4 - Node JS /Npm
Você deve acessar o link https://nodejs.org/en/download e fazer o download da versão de suporte a longo prazo, desta forma terá acesso aos pacotes que vamos intstalar no front end mais a frente
Durante a instalação, certifique-se de selecionar a opção para adicionar o `npm` ao `PATH`.

5 (Opcional) - Terminal
Você pode instalar o terminal que utilizei no desenvolvimento acessando a MICROSOFT STORE e digitando Terminal, a opção correta é a da foto abaixo.

6 - GIT
Para conseguir clonar meu repositório de forma local em sua máquina, você deve baixar, instalar e configurar o GIT antes de seguirmos os próximos passos, link : https://git-scm.com/downloads

## CLONANDO O REPOSITÓRIO

1 - Em seu terminal utilize o comando git clone https://github.com/devPabloEdu/TesteLiberumRatings.git
Desta forma o repositório com o código do projeto vai ser baixado em sua máquina.

## Após realizar todos os passos anteriores, é hora de colocarmos a mão na massa
## Backend

1 - primeiramente você deve abrir seu terminal ou o terminal de seu vscode (ctrl + "), e navegar com o comando cd até a pasta backend e após isso com o comando cd navegue até a pasta da api conforme evidenciei nas imagens abaixo

2 - feito isso, vamos instalar agora o framework necessário para realizarmos as migrações em nosso banco de dados, utilize o comando dotnet add package Microsoft.EntityFrameworkCore   para instalar o pacote necessário em seu projeto, conforme evidenciado abaixo

3 - Após isso, se faz necessário que utilize o comando dotnet add package Microsoft.EntityFrameworkCore.SqlServer nesta mesma pasta, para adicionarmos o pacote de nosso banco de dados, após esse comando, utilize também o comando  dotnet add package Microsoft.EntityFrameworkCore.Tools   para adicionar as suas ferramentas necessárias para o projeto

4 - Feito isso, você deve se atentar ao arquivo em seu projeto dentro da pasta backend/apiEmpresas chamado AppSettings.json, ele carrega configurações importantes de seu projeto, você deve se atentar ao campo ConnectionStrings, veja se as informações de autenticação estão de acordo com o que foi configurado na instalação de seu sql server express (Provavelmente vai estar igual kkk testei em outra máquina e estava, pois nem sempre ele necessita de uma autorização pois é um banco para ambientes de testes, por isso não coloquei ele no .gitIGnore)

5 - Após tudo baixado e configurado, chegou a hora de iniciarmos as migrações dos dados de nosso backend para o banco de dados, para isso, utilize o comando dotnet ef migrations add CriarBancoCadastroEmpresas, feito isso, ele irá criar um banco de dados, com os modelos e informações passadas em seu appsettings.json
, após isso, utilize o comando dotnet ef database update para atualizar o banco de dados em relação a modelagem feita na pasta DATA de seu projeto.

## FRONT END

1 Agora vamos retornar as pastas utilizando duas vezes no terminal o comando cd ..  até que você retorne a raiz de seu projeto, feito isso utilize o comando cd frontend e após isso, o comando cd cadastro-empresas.

2 - agora vamos instalar os pacotes necessários para o funcionamento de nosso FrontEnd, para issso, iniciamos com o comando npm install.

3 - Feito isso, utilize o comando npm install axios, para que seja feita a comunicação entre o Front e seu BackEnd.

4 - Após isso, utilize o comando npm install react-router-dom, para instalar a navegação em componentes de nosso Front

5 - para finalizar utilize o comando npm install -g typescript para instalar o TYPESCRIPT em sua máquina.

## RODANDO O PROJETO

1 - Primeiramente você deve iniciar seu Backend, acessando com o terminal com o comando cd que informei anteriormente a pasta ApiEmpresas, feito isso utilize o comando dotnet run, isso vai fazer com que sua API esteja hospedad localmente, a porta será informada como no exemplo da foto abaixo, fique atento pois em casos especificos de uso, pode variar de uma máquina para outra, o que pode se fazer necessário uma alteração no Front End do projeto

2 - Após rodar o backend com sucesso, você deve navegar utilizando o comando CD em seu terminal até a pasta cadastro-empresas em seu frontend, e utilizar o comando npm start.

Prontinho, feito isso o projeto já vai estar rodando normalmente !!