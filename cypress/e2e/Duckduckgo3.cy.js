describe('Duckduckgo search engine test', () => { // Bendras pavadinimas 
    it('Task 3 Version 1 - Share Feedback functionality for leaving a positive review', () => { // Testo pavadinimas 
        cy.visit('https://duckduckgo.com') // Atidaromas puslapis 
        cy.get('#searchbox_input').type('microsoft word cheat sheet{enter}') // Parašomas tekstas ir spaudžiamas enter
        // Galima imti tiesioginį elementą
        cy.get('.VYRn0PqcTApLnWYi0GKA > .ffON2NH02oMAcqyoh2UU').click() // Share Feedback
        cy.get('.qVcwmKAeI6lHWhM7wALj > [aria-label="Positive feedback"]').click() // Positive review (like icon)
        cy.contains('.JkHd9XMghWGv6y6RD_Cr', 'Something else').click() // Something else iš sąrašo (paskutinis)
        cy.get('[data-testid="feedback-form-submit"]').click() // Continue
        cy.get('.AvAURxrcviI0tNootU1F').type('This is just a test') // Teksto laukas su tekstu
        cy.get('[data-testid="feedback-form-submit"]').should('not.be.disabled') // Patikrinam, kad laukelis yra aktyvus (jį galima spausti, tik nesiunčiam su click, kad nespamminti)

    })

})