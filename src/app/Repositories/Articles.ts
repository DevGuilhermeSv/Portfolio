import { IArticles } from "src/app/Interfaces/IArticles";

export const articlesList: IArticles[] = [
  {
    id:3,
    content:`
    <div class="content"> 
    Se você estava procurando uma ferramenta para dar aquele destaque em trechos de códigos em uma pagina web, então você ja deve ter conhecido o HighLighJS
    e como é complicado trabalhar com ele em determinados cenarios... 
    Hoje quero apresentar para vocês uma solução que eu encontrei para utilizar os recursos do HighlightJS  quando a sua aplicação depende de uma injeção dinamica de conteúdos
    HTML como é o caso do meu portfólio.
    Eu mesmo levei um certo tempo para conseguir implementar o HighLighJS no meu portfólio e agora quero ajudar aqueles que estão à passar pelo mesmo problema. 
    </div>
    <br>

    <div class="sub-title"> Oque é o HighLightjs?</div>
    <div class="content">
        Highlight.js é uma biblioteca javascript para destaque de sintaxe que funciona com inúmeras linguagens. 
        Este funciona tanto no navegador como no servidor, não depende de nenhum outro framework e possui detecção automatica da linguagem.
    
        <pre>

      <code class="language-csharp" [innerHTML]="article.content">
     public static List<DateTime> getPeriod(int month, int year)
        {
            var day = DateTime.Now.Day;
            var lastmonth = month == 1 ? 12 : month - 1;

            if (day == FindLastDayOfMonth(month))
            {
                day = FindLastDayOfMonth(lastmonth);
            }

            return getPeriod(day, month, year, day, lastmonth, year);
        }
         
        </code>
        <i> Exemplo de código em dotnet </i>
    </pre>
    
    </div>
    <br>

    <div class="sub-title">Importando biblioteca</div>
    <div class="content"> 
        <p>
        A melhor maneira de trabalharmos com o HighlightJs no angular é importando a biblioteca via gerenciador de pacotes. 
        para isso vamos utilizar o comando  <code> npm install highlight.js </code> ou <code> yarn add highlight.js </code>
        </p>
        <p>
        Após a instalação vamos até o componente desejado, aquele que vai carregar o documento html que você deseja e vamos importar o pacote:
        </p>
        <pre>
        <code class="language-javascript">
        import { Component, ViewEncapsulation } from '@angular/core';
        import { ActivatedRoute } from '@angular/router';
        import hljs from 'highlight.js';
        </code>
        </pre>
        <p> Também vamos invocar o metodo <code> highlightAll() </code> no nosso <code> ngOnInit() </code>
            <pre>
                <code class="language-javascript">
                 ngOnInit(){
                     hljs.highlightAll();
                  }
                </code>
            </pre>
            Isso vai aplicar a formatação do HighlightJs para todo conteudo dentro das tags html <b> pre->code </b>
        </p>       
    </div>
    <br>

    <div class="sub-title">Usando HighLightJS com HTML Dinâmico</div>
    <div class="content">
        <p> Se você estiver trabalhando em um projeto com HTML dinâmico você provavelmente vai ter alguns problemas com o HighlightJS.
        Quando trabalhamos com HTML dinâmico o HighLightJS não consegue identificar o conteúdo dentro das tags do HTML, dessa forma nosso código injetado
        termina sem a formatação desejada. Uma forma de resolver esse problema é executando o comando <code> hljs.highlightAll() </code> dentro do hook <code> ngAfterViewInit() </code>.
        Isso vai permitir que o HighlightJs seja executado apenas após a interpretação do HTML adicionado
        </p>

    </div>
    <br>

    <div class="sub-title">Adicionando uma folha de estilo</div>
    <div class="content"> 
        <p>
        O HighlightJs possui diversos estilos diferentes para aplicar ao seu código. Alguns deles muito conhecidos como o tema do github e os temas default do Visual Studio Code com suas variações
        Light e Dark.
        Você pode conferir todos os temas <a href="https://github.com/highlightjs/highlight.js/tree/main/src/styles"> clicando aqui </a> 
        </p>
       <p>
       Quando instalamos o pacote no nosso projeto os temas ficam disposto no diretório <b> node_modules/hihghlight.js/styles </b>.

       Copie os temas de sua preferência e cole-os nos assets do projeto <b> src/assets/styles </b>. Agora precisamos adicionar a folha de estilos ao nosso componente; 
       vá até o componente desejado (aquele em que importamos o pacote do HighlightJs), e adicione a url do arquivo css no array de estilos do componente:
        </p>
       <pre>
       <code class="language-javascript">
       @Component({
          selector: 'app-article',
          templateUrl: './article.component.html',
          styleUrls: ['./article.component.css', '../../../assets/styles/base16/dracula.css'],
          encapsulation: ViewEncapsulation.None
        })
        </code>
        </pre>
       
    </div>
    <br>
    <div class="sub-title">Como utilizar a biblioteca</div>
    <div class="content"> 
        <p> Se você conseguiu instalar o pacote do HighlighJS no seu projeto angular e adicionar a folha de estilos css, então seu projeto está pronto para utilizar a biblioteca.</p>
        <p> Para utilizar, basta adicionar o seu trecho de código dentro das tags <code> pre code </code> no arquivo  <b>.html </b> do seu componente. A detecção da linguagem acontece 
        automaticamente mas também pode ser indicada;
        utilize a classe no seguinte formato <code> class="language-*" </code> onde * indica a linguagem desejada 
        ( a lista de linguagens pode ser encontrada <a href="https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md"> aqui </a>)
        </p>

        
    </div>
    <div class="sub-title"> Documentação oficial </div>
    <br>
    <div class="content">
        <p>
            O Projeto do HihghlightJS é open-source e pode ser encontrado no <a href="https://github.com/highlightjs/highlight.js"> repositório oficial </a> da biblioteca no Github. 
            Na documentação você vai encontrar mais opções de configurações do HighlightJs, incluindo informações para uso da biblioteca em navegador e tambem em servidor,
            diversas opções de recursos e instruções para build e testes.
            A Documentação pode ser acessada clicando <a href="https://highlightjs.readthedocs.io/en/latest/"> aqui </a>
         </p>
    </div>



    `,
    data:"09/05/2023",
    description:"Adicione trechos de código com estilização e detecção de sintaxe de qualquer linguagem nos seus projetos angular utilizando a biblioteca HighlightJS",
    img:"/assets/icons/angular-icon.svg",
    title:"Implementando HighLightjs em aplicações angular",
    topics:["javascript","angular"]
  },
  {
    id: 2,
    title: "Fazendo deploy da sua aplicação .NET com Fly.io",
    data: "27/03",
    description: "Como publicar seu aplicativo .Net na web de forma facil e gratuita utilizando o Fly.io",
    img: "/assets/icons/NET_Core_Logo.svg.png",
    topics:["dotnet","devops"],
    content: `<div class="content">
    <p>
    Como meu primeiro post depois da minha apresentação ( se ainda não viu, confira minha primeira publicação onde eu falo um pouco sobre mim e sobre as minhas expectativas com esse novo formato de portfólio) hoje vou apresentar para vocês um método muito simples e GRATUITO de como fazer deploy da sua aplicação .NET utilizando a plataforma do Fly.io.
    </p>
    </div>
    <div class="sub-title"> 
      Sobre o Fly.io
    </div>
    <div class="content">
      <p>Seguindo a descrição da própria plataforma “Fly é uma plataforma para executar aplicativos full stack e bancos de dados próximos aos seus usuários”. Ou seja, ele permite que você publique sua aplicação web, desde a API até um banco de dados.
      Dentro de algumas regras você tem direito ao plano gratuito, ou seja, pode fazer deploy da sua aplicação incluindo banco de dados sem pagar nada!
      Além disso, a plataforma dispõe de um dashboard muito intuitivo para você gerenciar e verificar o status de todas as suas aplicações.
      </p>
    </div>    
    <div class="sub-title"> 
    Configurando projeto
    </div>
    <div class="content">
    <p>Para publicar um projeto, primeiramente precisamos do projeto, não é mesmo? Então vamos começar criando um projeto novo no Visual Studio:
    Começaremos escolhendo o modelo pré-definido API web Asp.Net Core.
    Logo em seguida adicione um nome para o seu projeto:
    </p>
    <img src="assets/article2/name.png" alt="" srcset="">
    <div class="content">
        <p>Aqui eu vou utilizar o nome DeployToFly.</p>
        <p>
            Na tela de Informações adicionais configure desta forma:                
        </p>
  </div>  
  <img src="assets/article2/config.png" alt="" srcset="">
  <div class="content">
    <p>O Docker é extremamente importante para facilitar nossa vida no momento do deploy, por isso marque a opção <b> Habilitar o Docker</b>.
    </p>
    <p>
        Abra o projeto e vá até o arquivo Program.cs, 
        nele vamos configurar a liberação do swagger em modo de produção:        
    </p>
    </div>  
    <img src="assets/article2/swagger.png" alt="" srcset="">
    <div class="content">
        <p>Depois já podemos finalizar a criação inicial do projeto.
        </p>
    </div>
    <div class="sub-title">Configurando o Flyctl</div>
    <div class="content">
        <p>Antes de qualquer coisa, você precisa acessar a página de login da plataforma e realizar seu cadastro. O Fly.io permite que você realize seu cadastro utilizando sua conta do github, desta forma além de ganhar tempo você também pode importar seus projetos que estão no repositório.
        </p>
        <p>Depois disso você deve instalar no seu computador o <b> Flyctl </b> que é uma aplicação CLI que vai nos auxiliar a preparar nossa aplicação para o deploy.</p>
        <p>Caso você esteja em um ambiente linux utilize o seguinte comando:
        </p>
        <img src="assets/article2/curl.png" alt="" srcset="">
        <p>E se você estiver em uma máquina windows você pode utilizar esse comando no CMD:
        </p>
        <img src="assets/article2/shell.png" alt="" srcset="">

    </div>
    <div class="sub-title">Realizando login
    </div>
    <div class="content">
        <p>Depois de instalar, utilize o seguinte comando para realizar o login na sua conta.
        </p>
        <img src="assets/article2/flylogin.png" alt="" srcset="">
        <p>Uma janela do navegador deve abrir para você fornecer suas credenciais de login ou através da sua conta do Github.
        </p>
    </div>
    <div class="sub-title">Fazendo deploy da nossa aplicação
    </div>
    <div class="content">
        <p>Depois de configurarmos nossa conta e o flyctl já estamos pronto para fazer o deploy da nossa API!
        </p>
        <p>Primeiro vamos abrir o explorador de arquivos no diretório da aplicação e copiar o arquivo Dockerfile para o diretório onde fica a solução do nosso projeto
        </p>
        <img src="assets/article2/cmddocker.png" alt="" srcset="">
        <p>
            Aqui dentro vamos executar o comando fly launch. Vai ser requisitado um nome para a nossa aplicação, podemos colocar o mesmo nome (deploytofly) e logo após a região que sera hospedada nossa aplicação, nesse caso podemos escolher São Paulo (gru).
        </p>
        <img src="assets/article2/gru.png" alt="" srcset="">
        <p>
            Se ocorrer tudo bem, você será perguntado se deseja configurar um banco de dados
             Postgres e um banco de dados Redis. Vamos marcar <b>não</b> em ambas as opções.
              Por último vamos marcar <b>não</b> na última pergunta que é a de executar deploy pois ainda precisamos executar algumas configurações.

        </p>
        <img src="assets/article2/askdeploy.png" alt="" srcset="">
        <p>Agora abra o diretório do projeto no navegador de arquivos e você verá que foi adicionado um arquivo de texto chamado fly. Vamos abri-lo!
        </p>
        <img src="assets/article2/flyimg.png" alt="" srcset="">
        <p>Dentro do arquivo vc vai encontrar algumas instruções que são utilizadas para 
            configurar a máquina remota que hospeda nossa aplicação.
            No caso, como nossa aplicação vai subir no modo de produção, então sua 
            porta padrão é a 80. Então vamos até a opção <b>internal_port</b>   e vamos substituir a porta 8080 pela porta 80.
        </p>
        <img src="assets/article2/port.png" alt="" srcset="">
        <p>pronto! Agora vamos abrir nosso terminal no diretório do projeto  e executar o comando <b>fly deploy</b>.
        </p>
        <p>Lembra que eu falei que o <b>dockerfile</b> era muito importante para o processo de deploy? Pois bem, o flyctl vai utilizar nosso arquivo Dockerfile para gerar uma imagem docker e utilizar ela para preparar todas as configurações da nossa aplicação na máquina remota facilitando muito o nosso trabalho que é apenas desenvolver a aplicação.
        </p>

    </div>
    <div class="sub-title">Finalizando
    </div>
    <div class="content">
        <p>Ao final, se tudo tiver ocorrido bem vc deve receber uma mensagem parecida com essa no terminal:
        </p>
        <img src="assets/article2/sucessdeploy.png" alt="" srcset="">
        <p>Agora vamos acessar nosssa API no link: https://deploytofly.fly.dev/swagger/
        </p>
        <img src="assets/article2/deployapi.png" alt="" srcset="">
        <p>E aí está nossa aplicação rodando na Web!
        </p>

    </div>
    <div class="sub-title">Considerações e referências:
    </div>
    <div class="content">
        <p>Espero que esse artigo tenha te ajudado a entender o fluxo para fazer deploy com o Fly.io que uma plataforma que eu sempre tive ótimas experiências e recomendo para quem precisa de um ambiente simples para fazer seus trabalhos e/ou configura um deploy para uma aplicação que está em desenvolvimento.
        </p>
        <p>Sobre os serviços gratuitos a plataforma dispõe destas informaçõe:
        </p>
        <img src="assets/article2/Freefly.png" alt="" srcset="">
        <p>Consulte a documentação para mais informações: https://fly.io/docs/
        </p>

    </div>  `,
  },
  {
    id: 1,
    title: "Sobre mim e meu novo portfólio",
    data: "23/03",
    description: "Quem sou, oque faço e quais as minhas experiências. Falerei um pouco sobre mim e sobre este meu novo espaço...",
    img: "",
    topics:["primeirospassos"],
    content: `
    <div class="content">
    <p> Ja fazia muito tempo que eu planejava atualizar meu portólio, e tambem sempre tive vontade de apresentar para as pessoas os 
    novos conceitos e tecnologias que eu aprendia e aplicava nos meu projetos. Então, "juntando o útil ao agradavel" aqui está meu portfólio novo! 
    Aqui não apenas apresenta informações sobre mim mas tambem terá conteúdos informativos, tecnico e que pode ajudar você na sua caminha na programação Web.</p></div>
    <div class="sub-title">Quem é Guilherme Rodrigues?</div>
    <div class="content"><p> Estudante de Ciencia da Computação e em processo de migração para Analise e Desenvolvimento de Sistemas. 
    Imerso na Area de T.I des de 2017, hoje tenho 23 anos e 5 anos de experiencia de mercado, com meu primeiro trabalho surgindo em 2019. 
    De lá para cá passei por varias staks de backend como <b>Nodejs, PHP, Java</b> e algumas de front-end como <b> JavaScript, Angular, Jquery e Razor</b>.
    Hoje tenho me dedicado aos estudos de <b> .Net Core e .Net Framework </b> e todas as tecnologias que englobam a plataforma da Microsoft. </p>
    <p>Além de stask eu tambem passei por algumas empresas nessa minha jornada que me ajudaram profundamente a solidificar conhecimentos tecnicos e
    a amadurecer Soft Skills. Pela ordem cronologica eu tive o prazer de trabalhar em locais como:</p>
    <ul>
      <li>Aikont</li>
      <li>Great</li>
      <li>JBQ-Global</li>
      <li>Aqua-Tecnologia</li>
      <li>Instituto Atlantico</li>
    </ul>  
    </div>
    
    <div class="sub-title">Oque você pode encontrar por aqui</div>
    <div class="content">
    <p> Aqui no meu portfólio voce vai encontrar conteudos sobre as mais diversas areas do desenvolvimento de softwares. Estou comprometido a toda semana 
    adicionar um artigo novo para ajudar a solidificar os meus e os seus conhecimentos. Muitos dos tópicos abordados por aqui são relacionados ao .Net (C#)
    mas você tambem pode esperar por conteúdos relacionados como Redes de computadores e seu protocolos, Criptografia, Exêmplos de aplicações, 
    Padrões de projetos, Bancos de dados e talvez um pouco de DevOps.</p>

    </div>
    <div class="sub-title">Artigos e códigos</div>
    <div class="content">
    <p>Tambem devo estar sempre disponibilizando (quando for o caso) o código das aplicações no meu <a href="https://github.com/DevGuilhermeSv" target="_blank"><b> Github</b></a> então 
    eu já recomendo dar uma olhadinha por lá para conferir todos os projetos disponiveis
    e se estiver a vontade, confira também o meu  <a href="https://www.linkedin.com/in/guilherme-silva-6373ab19a/" target="_blank"><b> LinkedIn</b></a> que é aberto para todos!</p>
    </div>
    <div class="sub-title">Ultimas considerações</div>
    <div class="content">
    <p>É isso pessoal... Espero que desfrutem sempre de boas leituras por aqui. Aguardo vocês para acompanhar os proximos topicos e artigos.
    Se quiser entrar em contato comigo pode ficar a vontade, aceito sempre sugestões. <b> Email: development.guilherme@gmail.com </b>

    </p>
    <p>    Se você leu até aqui, meu muito obrigado!</p>
    <p>Tchau tchau :) </p>
    </div>`
    ,
  }
]