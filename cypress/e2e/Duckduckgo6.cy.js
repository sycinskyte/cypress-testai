describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://duckduckgo.com/') // atidaryt psl
        cy.get('#searchbox_input').type('stopwatch{enter}') //ivedam teksta ir spaudziam enter
        cy.contains('START').click() //Paleidžiame laikmatį
        cy.wait(1230) //  Palaukiame 1 sekundę ir 230 milisekundžių
        cy.contains('STOP').click() //Sustabdome laikmatį (nebaigtas nepakeiciau laiko)
        
    })
          
    
    });
