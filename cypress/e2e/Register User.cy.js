describe('template spec', () => {
    it('passes', () => {
        cy.visit('http://automationexercise.com') // atidaryt psl
        cy.url().should('include', 'automationexercise.com') // ← assertion 
        cy.contains('Signup / Login').click() //pasitikrint 
        cy.contains('New User Signup!').should('be.visible') // ← assertion 
        cy.get('[data-qa="signup-name"]').type('Petras')
        cy.get('[data-qa="signup-email"]').type('Ares19744@superrito.com')
        cy.get('[data-qa="signup-button"]').click()
        cy.contains('Enter Account Information').should('be.visible') // ← assertion
        cy.get('[data-qa="password"]').type('Ares1974+')
        cy.get('#days').select('16')
        cy.get('#months').select('July')
        cy.get('#years').select('1988')
        cy.get('#newsletter').check()
        cy.get('#optin').check()
        cy.get('#first_name').type('Petras')
        cy.get('#last_name').type('Petraitis')
        cy.get('#company').type('Petraitis&KO')
        cy.get('#address1').type('Liepkalnio g. 180')
        cy.get('#address2').type('Gedimino pr. 56')
        cy.get('#address2').type('Gedimino pr. 56')
        cy.get('#country').select('Israel')
        cy.get('#state').type('Israel')
        cy.get('#city').type('Jerusalem')
        cy.get('#zipcode').type('02156')
        cy.get('#mobile_number').type('06523148')
        cy.get('[data-qa="create-account"]').click()
        cy.get('[data-qa="continue-button"]').click()
        cy.contains('Logged in as Petras').should('be.visible') // ← assertion
        cy.contains('Delete Account').click()
        cy.contains('Account Deleted!').should('be.visible')
        cy.get('[data-qa="continue-button"]').click() // ← assertion


    })
    




    })
