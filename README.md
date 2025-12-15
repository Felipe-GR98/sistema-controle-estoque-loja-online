# 🛒 Sistema de Controle de Estoque - Mercado da Esquina

Projeto desenvolvido como parte do currículo do Bootcamp da **Generation Brasil**, simulando um sistema de gerenciamento de estoque para um mercado.

O objetivo foi aplicar conceitos fundamentais de **Programação Orientada a Objetos (POO)** e **CRUD** (Create, Read, Update, Delete) utilizando **TypeScript**.

## 💻 Sobre o Projeto

O "Mercado da Esquina" é uma aplicação de linha de comando (CLI) que permite aos administradores gerenciar o inventário de produtos. O sistema diferencia tipos de produtos (Bebidas e Frutas/Legumes), aplicando atributos específicos para cada um (litros para bebidas e peso para alimentos), demonstrando o uso de **Herança** e **Polimorfismo**.

### 🚀 Tecnologias Utilizadas

* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) **TypeScript**
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) **Node.js**
* **ts-node**: Para execução direta de arquivos TypeScript.
* **Readline-Sync**: Para interação e entrada de dados via terminal.
* **Colors**: Para estilização e feedback visual no console.

## ⚙️ Funcionalidades

O sistema possui um menu interativo com as seguintes operações:

1.  **Cadastrar Produto**: Adiciona novos produtos ao estoque.
    * *Bebidas*: Solicita a quantidade em litros.
    * *Frutas e Legumes*: Solicita o peso.
2.  **Listar todos Produtos**: Exibe todos os itens cadastrados com seus detalhes específicos.
3.  **Atualizar Dados do Produto**: Permite editar as informações de um produto existente buscando pelo ID.
4.  **Apagar Produto**: Remove um produto do sistema.
5.  **Sair**: Encerra a aplicação.

## 📂 Estrutura do Projeto

O projeto segue o padrão **MVC (Model-View-Controller)**:

* **Model (`src/models`)**:
    * `Produto.ts`: Classe abstrata base com atributos comuns (id, nome, quantidade, valor).
    * `ProdutoBebidas.ts`: Especialização para bebidas (atributo: *litros*).
    * `ProdutoFrutasELegumes.ts`: Especialização para alimentos (atributo: *peso*).
* **Repository (`src/repository`)**:
    * `ProdutosRepository.ts`: Interface que define o contrato para as operações de CRUD.
* **Controller (`src/controller`)**:
    * `ProdutosController.ts`: Implementa a lógica de negócios, gerenciando a lista de produtos na memória.
* **View (`Menu.ts`)**:
    * Interface principal que interage com o usuário.

## 🛠️ Como executar o projeto

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.

### Passo a passo

1.  **Clone o repositório**:
    ```bash
    git clone [https://github.com/Felipe-GR98/sistema-controle-estoque-loja-online.git](https://github.com/Felipe-GR98/sistema-controle-estoque-loja-online.git)
    ```

2.  **Instale as dependências**:
    Na raiz do projeto, execute:
    ```bash
    npm install
    ```

3.  **Execute a aplicação**:
    O projeto utiliza o `ts-node` para rodar o código TypeScript diretamente:
    ```bash
    npx ts-node Menu.ts
    ```

## 👨‍💻 Autor

Desenvolvido por **Felipe Gonçalves Rodrigues**
