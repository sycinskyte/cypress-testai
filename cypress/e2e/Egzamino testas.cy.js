describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://www.eoltas.lt/') // atidaryt psl
        cy.url().should('include', 'eoltas.lt') // ← assertion 
        cy.contains('Prisijungti').click()
        
        
    })


    })