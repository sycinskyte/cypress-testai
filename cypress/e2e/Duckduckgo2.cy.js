describe('Mano pirmasis scenarijus', () => {
    it('Task 2 - search for "microsoft word cheat sheet" and check if custom phrase components are seen', () => { // Testo pavadinimas 
        cy.visit('https://duckduckgo.com') // Atidaromas puslapis 
        cy.get('#searchbox_input').type('microsoft word cheat sheet{enter}') // Parašomas tekstas ir spaudžiamas enter
        // Galima tikrinti ar visas elemento blokas matomas ir su include ar kažkur jame yra tekstas
        cy.get('#zci-cheat_sheets > .cw')
            .should('be.visible')
            .and('include.text', 'Microsoft Word 2010');
        // Galima pasiimti konkretų elementą elemento bloke ir jame daryti patikrinimą
        cy.get('.c-base__title')
            .should('be.visible')
            .and('have.text', 'Microsoft Word 2010')
    })

})