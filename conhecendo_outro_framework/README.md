## Estrutura do Projeto de implementação Angular. `Projeto nivel 4 - Conhecendo outro Framework`. 
- `root/livros-angular`: Pasta raiz do projeto.
- `src/app`: Contém os componentes, serviços e outros artefatos do Angular.
- `app.component`: O componente raiz que define a estrutura principal da aplicação.
- `app-routing.module`: O arquivo de configuração do roteamento.
- `livro-lista`: Componente para exibir a lista de livros.
- `livro-dados`: Componente para o formulário de cadastro de livros.
- `livro.ts`: Classe TypeScript que define a estrutura do livro.
- `editora.ts`: Classe TypeScript que define a estrutura da editora.
- `controle-livros.service`: Serviço Angular para gerenciar os livros.
- `controle-editora.service`: Serviço Angular para gerenciar as editoras.

## Objetivos do projeto
- Implementar serviços injetáveis para o Angular, na sintaxe Type Script
- Implementar componentes, utilizando Type Script e modelos HTML
- Utilizar a biblioteca para gerenciamento de formulários no Angular
- Implementar a navegação interna do front-end com base em Angular


## `Resultados esperados da prática`

- É importante que o código seja organizado
- Explorar as funcionalidades do Visual Studio Code para facilitar o desenvolvimento da prática
- Nessa missão, é esperado que você demonstre habilidades básicas para:
    - `construção de serviços e componentes no Angular`

    - `utilização do sistema de gerenciamento de formulários do Angular, bem como o sistema de navegação interna`

## `*Procedimentos*`
- `Procedimento 1`
  - Criar Projeto e Entidades Angular
  - Execute o comando ng new livros-angular.
  - Escolha Angular Routing como sim e folhas de estilo CSS comum.
  - Entre no diretório do projeto com cd livros-angular.
  - Crie a classe Livro com ng g class Livro --skip-tests.
  - Crie a classe Editora com ng g class Editora --skip-tests.
  - Crie o controlador de editoras como serviço do Angular com ng g s ControleEditora --skip-tests.
  - Crie o controlador de livros como serviço do Angular com ng g s ControleLivros --skip-tests.
  - Crie o componente LivroLista com ng g c LivroLista --skip-tests.
  - Crie o componente LivroDados com ng g c LivroDados --skip-tests.
  - Codifique as entidades do sistema (Editora e Livro) conforme especificado.
  - Codifique o controlador de editoras (ControleEditoraService) conforme especificado.
  - Codifique o controlador de livros (ControleLivrosService) conforme especificado.
  - Configure os serviços para injeção de dependência via construtor na classe AppModule.
  - Inclua as dependências do Bootstrap no arquivo index.html.
- `Procedimento 2`
  - Configure a biblioteca padrão de formulários adicionando FormsModule ao vetor imports na classe AppModule.
  - Configuração de Roteamento
      - Configure o roteamento no arquivo app-routing.module.ts.
      - Modifique o template de AppComponent conforme especificado.
  - Implementação do Componente LivroDados
      - Defina a classe LivroDadosComponent conforme especificado.
      - Implemente o template HTML de LivroDadosComponent conforme especificado.
- `Execução`
  - Execute com o comando ng serve.
  - Acesse o endereço http://localhost:4200/ através de um navegador.


## Imgs do prj
![image](https://github.com/rianjsp/segundo_semestre_estacio_trabalhos/assets/116752833/4d40b7a0-7f5f-406a-9cf2-2f901f84dc22)
![image](https://github.com/rianjsp/segundo_semestre_estacio_trabalhos/assets/116752833/688ea284-efa9-4996-99d8-0a1f991854a6)


## Todos os itens dos trabalhos estão organizados em pastas e subpastas para melhor organização dos trabalhos do semestre. Espero que não me prejudique por organização.
