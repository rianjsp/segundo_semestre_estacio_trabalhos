# `Missão Prática | Nível 4 | Mundo 2` 
- `POLO BARREIRO - BELO HORIZONTE - MG `
- `Conhecendo outro framework – 2024.3 – 1 Semestre letivo`
- `Aluno`: `Rian Joseph Ramos Felizardo`
- `Matrícula`: `2022029...`
- `Turma`: `2023.1`

## Estrutura do Projeto de implementação Angular.  
- `root/livros-angular`: Pasta raiz do projeto.
- `src/app`: Contém os componentes, serviços e outros itens do Angular.
- `app.component`: O componente raiz que define a estrutura principal da aplicação.
- `app/router`: Contém o modulo routing do projeto.
- `app-routing.module`: O arquivo de configuração do roteamento.
- `/livro-lista`: Componente para exibir a lista de livros.
- `/livro-dados`: Componente para o formulário de cadastro de livros.
- `livro.ts`: Classe TypeScript que define a estrutura do livro.
- `editora.ts`: Classe TypeScript que define a estrutura da editora.
- `app/controle`: Contém os serviços de controle.
- `controle-livros.service`: Serviço de controle Angular para gerenciar os livros.
- `controle-editora.service`: Serviço de controle Angular para gerenciar as editoras.






## Objetivos do projeto
- Implementar serviços injetáveis para o Angular, na sintaxe Type Script
- Implementar componentes, utilizando Type Script e modelos HTML
- Utilizar a biblioteca para gerenciamento de formulários no Angular
- Implementar a navegação interna do front-end com base em Angular



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
  - Executar o comando ng serve.
  - Acessar o endereço http://localhost:4200/.
 
## `Resultados obtidos`

- O código está bastante organizado e documentado sem poluição.
- Nessa missão, eu obtive experiência em:
    - `construção de serviços, artefatos e componentes no Angular`
    - `utilização do sistema de gerenciamento de formulários do Angular, bem como o sistema de navegação interna com o Rounting`
    - `implementação e utilização de codigo typescript`
    - `implementação de serviços injetáveis para gerenciamento de dados`
 
## Todos os itens dos trabalhos estão organizados em pastas e subpastas para melhor organização dos trabalhos do semestre. Espero que não me prejudique por organização.
