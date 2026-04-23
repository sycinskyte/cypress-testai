describe('Test case 1: Register User', () => {
    it('should register a new user successfully', () => {
        cy.visit('https://www.eoltas.lt/') // open page
        cy.url().should('include', 'eoltas.lt')     // page is visible
        cy.get('[class="is-hidden-mobile is-hidden-touch"]').first().click({ force: true }) //Registration
        cy.get('[class="btn btn-standart btn-outline btn-l btn-right"]').click() //Registration
        cy.get('#login-email').type('Nothad1984@jourrapide.com') // 
        cy.get('#login-password-1').type('Nothad1986')
        cy.get('#login-password-2').type('Nothad1986')
        cy.get('#terms-accept').check({ force: true })
        cy.get('[class="p-r-5"]').click()
        cy.get('[class="header-main__cell cell-icon-link link-user"]').click() //Add profile info
        cy.get('#my_information_firstName').type('Petras')
        cy.get('#my_information_lastName').type('Petraitis')
        cy.get('#my_information_phone').type('+37068795632')
        cy.contains('Išsaugoti pakeitimus').click() // 
        cy.visit('https://www.eoltas.lt/lt-lt/user/profile/address')
        cy.get('#address_country').select('Aruba')
        cy.get('#address_city').type('Vilnius')
        cy.get('#address_street').type('+Liepkalnio g.')
        cy.get('#address_streetNumber').type('180')
        cy.get('#address_postCode').type('02121')
        cy.contains('Išsaugoti pakeitimus').click() // 

    })
})