Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'John',
    lastName: 'Soares',
    email: 'johnsoares@teste.com',
    text: 'text.'
    
}) =>{
    cy.get('input[name="firstName"]').type(data.firstName)      
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text)
    cy.get('.button').click()
    cy.get('.success').should('be.visible')
})