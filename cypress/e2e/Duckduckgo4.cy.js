describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://duckduckgo.com/') // atidaryt psl
    cy.get('#searchbox_input').type('shorten duckduckgo.com/about{enter}') //ivedam teksta ir spaudziam enter
    cy.get('#shorten-url').should('have.value', 'https://is.gd/OnnE8s')
   

  })
})