describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://duckduckgo.com/') // atidaryt psl
    cy.get('#searchbox_input').type('microsoft word cheat sheet{enter}') //ivedam teksta ir spaudziam enter
    cy.contains('Word Cheat Sheet - CustomGuide') // Patikrinama, ar rezultatuose yra Speedtest by Ookla (tokio teksto eradau irasiau kita)
      .should('be.visible')

  })
})