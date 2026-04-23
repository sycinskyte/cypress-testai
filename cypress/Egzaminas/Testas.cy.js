describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://www.technorama.lt/') // atidaryt psl
        cy.url().should('include', 'technorama.lt') // ← assertion 
        cy.contains('Kalba').click() //pasitikrint ar kitaip negalima? negalima si kart
    })
        
        


    })