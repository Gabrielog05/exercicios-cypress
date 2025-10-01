Testes Automatizados com Cypress

Este repositório contém os exercícios práticos do curso "Testes Automatizados com Cypress do Zero a Nuvem" da Udemy. O objetivo deste curso é ensinar como criar testes automatizados rápidos e confiáveis para aplicações web utilizando o framework Cypress.

📚 Conteúdo do Curso

O curso aborda os seguintes tópicos:

Introdução ao Cypress: Visão geral do framework e suas vantagens.

Instalação e Configuração: Como instalar o Cypress e configurar o ambiente de desenvolvimento.

Comandos Básicos: Uso de comandos como cy.visit(), cy.get(), cy.contains(), cy.click(), entre outros.

Interações com Formulários: Automação de preenchimento de formulários e validação de entradas.

Testes de API: Como realizar testes em APIs utilizando o Cypress.

Execução em Integração Contínua: Configuração do Cypress para rodar em pipelines de CI/CD.

Integração com Cypress Cloud: Como integrar os testes com o Cypress Cloud para visualização de resultados.

🛠️ Tecnologias Utilizadas

Cypress: Framework de testes end-to-end para aplicações web.

JavaScript (ES6+): Linguagem de programação utilizada para escrever os testes.

Node.js: Ambiente de execução para o JavaScript no lado do servidor.

Git: Sistema de controle de versão para gerenciar o código-fonte.

GitHub Actions: Ferramenta de integração contínua para automação de workflows


🧪 Organização dos Testes

cypress/e2e/: Contém os arquivos de teste com a extensão .cy.js. Cada arquivo deve representar um conjunto de testes relacionados a uma funcionalidade específica, como login.cy.js ou cadastro.cy.js. 
docs.cypress.io

cypress/fixtures/: Armazena dados estáticos utilizados nos testes, como arquivos JSON contendo informações de usuários ou produtos. 
devealbert.hashnode.dev

cypress/support/:

commands.js: Define comandos personalizados que podem ser reutilizados em múltiplos testes.

locators.js: Armazena seletores CSS ou XPath, facilitando a manutenção e evitando repetição de código.

e2e.js: Arquivo de configuração global para os testes, onde podem ser definidos hooks como beforeEach e afterEach. 
docs.cypress.io

🔧 Configurações do Cypress

cypress.config.js: Arquivo de configuração principal do Cypress, onde são definidas as configurações globais para o projeto. 
docs.cypress.io

package.json: Contém as dependências do projeto, scripts para execução dos testes e outras configurações relacionadas ao ambiente de desenvolvimento.
