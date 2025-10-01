describe('Central de atendimento ao Cliente TAT', () => {
  beforeEach(() => {
      cy.visit('/src/index.html')    
    })

  it('verificar o título da aplicação', () => {    
    const longText = Cypress._.repeat('abcede!-', 5)
    
    cy.get('input[name="firstName"]').type('Gabriel')      
    cy.get('#lastName').type('Gonzaga')
    cy.get('#email').type('fuladoDeTal@teste.com')
    cy.get('#open-text-area').type(longText, { delay: 50})
    cy.contains('button', 'Enviar').click()
    cy.get('.success').should('be.visible')
  })

  it('Validar elemento com classe "error"', () =>{
    cy.get('input[name="firstName"]').type('Gabriel')
    cy.get('#lastName').type('Gonzaga')
    cy.get('#email').type('fuladoDeTal.com')
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
  })

  it('validar valor não-numero no campo telefone', () => {
    cy.get('input[type="number"]').type('abcde')
    cy.get('.error').should('have.value', '')
  })
  
  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () =>{
    cy.get('input[name="firstName"]').type('Gabriel')
    cy.get('#lastName').type('Gonzaga')
    cy.get('#email').type('fuladoDeTal@teste.com')
    cy.get('#phone-checkbox').type('Sem acesso ao sistema')
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () =>{
    cy.get('input[name="firstName"]')
      .type('Gabriel', 50)
      .should('have.value', 'Gabriel')
      .clear()
      .should('have.value', '')

    cy.get('#lastName')
      .type('Gonzaga', 50)
      .should('have.value', 'Gonzaga')
      .clear()
      .should('have.value', '')


    cy.get('#email')
     .type('fuladoDeTal@teste.com', 50)
     .should('have.value', 'fuladoDeTal@teste.com')
     .clear()
     .should('have.value', '')
  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios.', () => {
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
  })

  it('envia o formulário com sucesso usando um comando customizado', () => {
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('.success').should('be.visible')

  })

  it('seleciona um produto (YouTube) por seu texto', () => {
    cy.get('#product')
      .select('YouTube')
      .should('have.value', 'youtube')
  })

  it('seleciona um produto (Mentoria) por seu valor (value)', () => {
    cy.get('#product')
      .select('mentoria')
      .should('have.value', 'mentoria')
  })

  it.only('seleciona um produto (Blog) por seu índice', () => {
    cy.get('#product')
      .select(1)
      .should('have.value', 'blog')

  })
})


