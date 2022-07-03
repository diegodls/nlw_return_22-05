<h1 dir="auto" align="center">
<a 
   target="_blank" 
   alt="NLW Return - teste já" 
   title="NLW Return - teste já"
   href="http://nlw-return-22-05.vercel.app/"> 
  <img 
     alt="NLW Return - teste já" 
     title="NLW Return - teste já"
     style="max-width: 100%; height="80"" 
     src="https://github.com/diegodls/nlw_return_22-05/blob/assets/icon.png?raw=true"/>
</a>  
</h1>
<p dir="auto" align="center">
  <a
    target="_blank"
    alt="Cover"
    title="Cover"
    href="https://github.com/diegodls/nlw_return_22-05/blob/assets/web-gif.gif?raw=true"
  >
    <img alt="Cover" title="Cover"
    style="max-width: 100%; height="80""
    src="https://github.com/diegodls/nlw_return_22-05/blob/assets/web-gif.gif?raw=true"/>
  Expandir
    </a>
</p>

## :computer: Projeto
Componente para ajudar a enviar feedback, onde o usuário pode tirar uma screenshot da tela e enviar junto a um comentário, que será enviado para o email da equipe.</br>

## :sparkles: Testando o projeto
Você pode testar o projeto **[clicando aqui](http://nlw-return-22-05.vercel.app/)**.</br>

## :zap: Tecnologias</h2>
<ul>
  <li>React</li>
  <li>Node</li>
  <li>React Native</li>
  <li>Expo</li>
  <li>Typescript</li>
  <li>Tawilwind</li>
  <li>Axios</li>
  <li>Express</li>
  <li>Jest</li>
  <li>Expo Google Fonts</li>
  <li>React Native Gesture Handler</li>
</ul>

## :hammer_and_wrench: Features
<ul>
  <li>Testes unitários</li>
  <li>Envio de email</li>
  <li>Screenshot automática</li>
  <li>Componente, fácil integração</li>
  <li>Componentização, fácil manutenção</li>
  <li>Acessibilidade</li>
  <li>Usabilidade</li> 
</ul>

## :dart: Aprendizado
Neste projeto foi posto em prática os princípios SOLID, desenvolvendo um widget totalmente desacoplado da aplicação, o que permite a fácil integração. Foi aplicado também o conceito de componetização o que torna mais fácil a manutenção do widget, desenvolvendo um componente responsivo e com boas práticas de acessibilidade com labels e usabilidade por meio de navegação pelo teclado.</br>

## :sparkler: Executando o projeto
Pare executar essa aplicação em seu computador, faça um git clone para o seu dispositivo:</br>

```
git clone https://github.com/diegodls/nlw_return_22-05.git
```

### <ul><li>Backend</li></ul>
Navegue até a pasta `back` e execute o comando `yarn` (ou `npm install`, caso utilize npm), isso fará que sejam instaladas as dependencias do projeto.</br>
Para que o projeto seja executado localmente da maneira correta, será necessário criar um arquivo `.env` e preencher os seguintes campos: </br>
```
DATABASE_URL=""
NODEMAILER_USER=
NODEMAILER_PASS=
```
**DATABASE_URL:** Por padrão, o projeto está configurado para deploy fazendo o uso do banco de dados PostegreSQL, para executar localmente, você deverá configurar um banco de dados PostegreSQL no seu dispositivo e inserir aqui a url do banco de dados.</br>
Caso não queria utilizar o PostgreSQL, você poderá usar o SQLite, sem a necessidade de instalar nenhum aplicativo, para isso, abra o arquivo `prisma\schema.prisma` e no campo `provider = "postgresql"` altere para ```provider = "sqlite"``` e por fim, no arquivo ```.env```, insira a url `file:.dev.db` no campo `DATABASE_URL=""`, ficando:  `DATABASE_URL="file:.dev.db"`.</br>
Delete a pasta `prisma\migrations` caso exista e execute via terminal na raiz do projeto, o comando `npx prisma migrate dev` para efetuar a criação das tabelas no banco de deados, será necessário inserir um nome de sua escolha para a migration.</br></br>

**NODEMAILER_USER** e **NODEMAILER_PASS:** Esses campos são necessário para o servidor enviar os emails com os feedbacks,l e para obtê-los, basta acessar o site [Mailtrap](https://mailtrap.io), criar ou logar na sua conta, acessar a caixa de entrada (_INBOX_) e no dropmenu **_Integrations_**, selecione **_Nodemailer_**, que é o sistema que usaremos nessa aplicação, após selecionar copie e cole os campos **user** e **pass** no arquivo `.env`.</br>

Após configurar e preencher os campos necessário, execute o comando `yarn dev` (ou `npm run dev`) para executar o servidor, a seguinte mensagem irá aparecer indicando o sucesso:</br></br>
`Http server running!`</br>

### <ul><li>Web</li></ul>
Navegue pelo terminal até a pasta `web` e execute o comando `yarn` (ou `npm install`, caso utilize npm), isso fará que sejam instaladas as dependências do projeto.</br>
Por padrão, a aplicação web vem configurada em modo demonstração, sem fazer o uso do servidor/backend, logo, você pode executar o comando `yarn dev` (ou `npm run dev`) para testar.</br></br>

Mas, se você quiser integrar com o servidor/backend, abra o arquivo:</br></br>

`web\src\lib\api.ts`</br></br>

e no campo `baseURL`, altere para</br></br>

`baseURL: "http://localhost:3333",`</br></br>

onde o `3333` é a porta configurada no servidor/backend (no arquivo _server.ts_). Após isso, abra o arquivo:</br></br>

`web\src\components\WidgetForm\Steps\FeedbackContentStep.tsx` </br></br>

E descomente o trecho de código de inicio `await`, também nesse arquivo, apague a função `setTimeout`. Após salvar ambas as alterações, execute o comando `yarn dev` (ou `npm run dev`) pelo terminal estando na pasta **web** para testar, lembrando que o servidor/backend deve estar sendo executado para essa integração.</br>

### <ul><li>Mobile</li></ul>
Navegue pelo terminal até a pasta `mobile` e execute o comando `yarn` (ou `npm install`, caso utilize npm), isso fará que sejam instaladas as dependências do projeto.</br>
Por padrão, o aplicativo vem configurado como demonstração, sem interação com o servidor, você já pode testa-lo usando o comando: </br></br>

`expo start`</br></br>

Mas caso queira integra-lo ao servidor/backend, abra o arquivo:</br></br>

`mobile\src\lib\api.ts`</br></br>

E no campo `API_URL`, insira a url do servidor/backend, no nosso caso:</br></br>

`API_URL="http://localhost:3333"`</br></br>

onde o `3333` é a porta configurada no servidor/backend (no arquivo _server.ts_).</br>
Caso esteja usando o servidor/backend em deploy, você pode inserir a url no campo `API_URL`.</br>
Depois, abra o arquivo:</br></br>

`mobile\src\components\Form\index.tsx`</br></br>

E descomente o trecho de código de inicio `await`, também nesse arquivo, apague a função `setTimeout`. Após salvar ambas as alterações, execute o comando `yarn dev` (ou `npm run dev`) para testar, lembrando que o servidor/backend deve estar sendo executado para essa integração.</br>

Após efetuar as configurações acima, navegue pelo terminal até a pasta **mobile** e execute o projeto com o comando:</br></br>

`expo start`</br></br>

E abra-o em um emulador configurado em seu computador utilizando os comandos presente no terminal ou diretamente em seu dispositivo físico através do aplicativo **Expo Go**, lendo o QR Code apresentado no terminal.</br>

## :framed_picture: Screenshots
<table>
  <tr>
    <td>
      <a 
         href="https://github.com/diegodls/nlw_return_22-05/blob/assets/web.png" 
         target="_blank" 
         alt="Versão web" 
         title="Versão web">
        <img 
           src="https://github.com/diegodls/nlw_return_22-05/blob/assets/web.png?raw=true" 
           alt="Versão web" 
           title="Versão web" 
           style="width="300" height="300""/>
        Expandir
      </a>
    </td>
     <td>
       <a href="https://github.com/diegodls/nlw_return_22-05/blob/assets/mobile.png" 
          target="_blank"
          alt="Versão mobile" 
          title="Versão mobile"
          >
         <img 
              src="https://github.com/diegodls/nlw_return_22-05/blob/assets/mobile.png?raw=true" 
              alt="Versão mobile" 
              title="Versão mobile"
              style="width="300" height="300""/>
         Expandir
       </a>
    </td>
  <tr>
<table>

## :page_facing_up: Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/diegodls/nlw_return_22-05/blob/main/LICENSE) para mais detalhes.</br>
