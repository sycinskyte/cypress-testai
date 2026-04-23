describe('template spec', () => {
    it('passes', () => {
        cy.visit('http://automationexercise.com') // atidaryt psl
        cy.url().should('include', 'automationexercise.com') // ← assertion 
        cy.contains('Contact us').click() //pasitikrint ar kitaip negalima? negalima si kart
        cy.contains('Get In Touch').should('be.visible') // ← assertion
        cy.get('[data-qa="name"]').type('Petras')
        cy.get('[data-qa="email"]').type('Ares19744@superrito.com')
        cy.get('[data-qa="subject"]').type('Testas')
        cy.get('#message').type('Testas kaip viskas veikia kai galva neveikia')
        cy.get('input[name="upload_file"]').selectFile('cypress/fixtures/03-31.png')
        cy.get('[data-qa="submit-button"]').click()
        cy.contains('Success! Your details have been submitted successfully.').should('be.visible')
        cy.contains('Home').click()
        cy.url().should('include', 'automationexercise.com')
        
        


    })
    




    })
