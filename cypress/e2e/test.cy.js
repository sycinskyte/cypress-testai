describe('Redirection to wikipedia through searchbar', () => {
    it('searches and redirects to wikipedia page', () => {
        cy.visit('https://duckduckgo.com/')
        cy.get('#searchbox_input').type("!wiki{enter}")
        cy.origin('https://en.wikipedia.org', () => {
            cy.url().should('include', '/wiki/Main_Page')
        })
 
    });
});