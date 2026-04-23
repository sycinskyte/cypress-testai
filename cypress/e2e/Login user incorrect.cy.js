describe('template spec', () => {
    it('passes', () => {
        cy.visit('http://automationexercise.com') // atidaryt psl
        cy.url().should('include', 'automationexercise.com') // ← assertion 
        cy.contains('Signup / Login').click() //pasitikrint ar kitaip negalima? negalima si kart
        cy.contains('Login to your account').should('be.visible') // ← assertion
        cy.get('[data-qa="login-email"]').type('Ares19744@superrito.com')
        cy.get('[data-qa="login-password"]').type('Ares1974+')
        cy.get('[data-qa="login-button"]').click()
        cy.contains('Your email or password is incorrect!').should('be.visible') // ← assertion
        
        


    })
    




    })
