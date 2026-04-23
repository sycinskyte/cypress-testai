describe('template spec', () => {
    it('passes', () => {
        cy.visit('http://automationexercise.com') // atidaryt psl
        cy.url().should('include', 'automationexercise.com') // ← assertion 
        cy.contains('Signup / Login').click() //pasitikrint 
        cy.contains('New User Signup!').should('be.visible') // ← assertion 
        cy.get('[data-qa="signup-name"]').type('Petras')
        cy.get('[data-qa="signup-email"]').type('Ares19744@superrito.com')
        cy.get('[data-qa="signup-button"]').click()
        cy.contains('Email Address already exist!').should('be.visible') // ← assertion
        
        


    })
    




    })
