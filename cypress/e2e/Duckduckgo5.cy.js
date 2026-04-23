describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://duckduckgo.com/') // atidaryt psl
        cy.get('#searchbox_input').type('!wiki{enter}') //ivedam teksta ir spaudziam enter
        cy.origin('https://www.wikipedia.org', () => { //pries origin reik sauktuko
        cy.url().should('include', '/wiki/Main_Page')
    })
          
    
    });
});