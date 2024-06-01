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

|            Aluno            |     Matrícula    |          Curso            |
|-----------------------------|------------------|---------------------------|
| Rian Joseph Ramos Felizardo | 202202923931     |       `Turma 2023.1`      |


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

## *Procedimentos*
- `Procedimento 1`
  - Criar Projeto e Entidades Angular
  - Executar o comando ng new livros-angular.
  - Escolher Angular Routing como sim e folhas de estilo CSS comum.
  - Entrar no diretório do projeto com cd livros-angular.
  - Criar a classe Livro com ng g class Livro --skip-tests.
  - Criar a classe Editora com ng g class Editora --skip-tests.
  - Criar o controlador de editoras como serviço do Angular com ng g s ControleEditora --skip-tests.
  - Criar o controlador de livros como serviço do Angular com ng g s ControleLivros --skip-tests.
  - Criar o componente LivroLista com ng g c LivroLista --skip-tests.
  - Criar o componente LivroDados com ng g c LivroDados --skip-tests.
  - Codificar as entidades do sistema (Editora e Livro) conforme especificado: [Clique](https://sway.cloud.microsoft/s/FsURgWIC7pni5Tll/embed).
  - Codificar o controlador de editoras (ControleEditoraService) conforme especificado: [Clique](https://sway.cloud.microsoft/s/FsURgWIC7pni5Tll/embed).
  - Codificar o controlador de livros (ControleLivrosService) conforme especificado: [Clique](https://sway.cloud.microsoft/s/FsURgWIC7pni5Tll/embed).
  - Configurar os serviços para injeção de dependência via construtor na classe AppModule.
  - Incluir as dependências do Bootstrap no arquivo index.html.
- `Procedimento 2`
  - Configurar a biblioteca padrão de formulários adicionando `FormsModule` ao vetor imports na classe `AppModule`.
  - Configuração de Roteamento
      - Configurar o roteamento no arquivo app-routing.module.ts.
      - Modificar o template de AppComponent conforme especificado: [Clique](https://sway.cloud.microsoft/s/FsURgWIC7pni5Tll/embed).
  - Implementação do Componente LivroDados
      - Definir a classe LivroDadosComponent conforme especificado: [Clique](https://sway.cloud.microsoft/s/FsURgWIC7pni5Tll/embed).
      - Implementar o template HTML de LivroDadosComponent conforme especificado: [Clique](https://sway.cloud.microsoft/s/FsURgWIC7pni5Tll/embed).
- `Execução`
  - Executar com o comando ng serve.
  - Acessar o endereço http://localhost:4200/ através de um navegador.

## Imgs do prj
![image](https://github.com/rianjsp/segundo_semestre_estacio_trabalhos/assets/116752833/4d40b7a0-7f5f-406a-9cf2-2f901f84dc22)
![image](https://github.com/rianjsp/segundo_semestre_estacio_trabalhos/assets/116752833/688ea284-efa9-4996-99d8-0a1f991854a6)


## Todos os itens dos trabalhos estão organizados em pastas e subpastas para melhor organização dos trabalhos do semestre. Espero que não me prejudique por organização.
