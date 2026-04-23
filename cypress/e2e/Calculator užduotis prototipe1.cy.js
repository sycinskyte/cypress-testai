describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://testsheepnz.github.io/BasicCalculator') // atidaryt psl
        cy.get('[data-testid="selectBuild"]').select(1)

    })
    it('All elements are visible and active', () => {

        //Dropdowns
        cy.get('[data-testid="selectBuild"]').should('be.visible');
        cy.get('[data-testid="selectOperationDropdown"]').should('be.visible');

        //Input fields
        cy.get('[data-testid="number1Field"]').should('be.visible');
        cy.get('[data-testid="number2Field"]').should('be.visible');

        //Buttons
        cy.get('[data-testid="calculateButton"]')
        .should('be.visible')
        .and('not.be.disabled');
        cy.get('[data-testid="clearButton"]')
        .should('be.visible')
        .and('not.be.disabled');

        //Answer field and integer only checkbox
        cy.get('[data-testid="numberAnswerField"]')
        .should('be.visible');
        cy.get('[data-testid="integerSelect"]')
        .should('be.visible')
        .and('not.be.disabled');
    });

    it('Add 2 + 3 = 5', () => {
        cy.get('[data-testid="number1Field"]').type(2)
        cy.get('[data-testid="number2Field"]').type(3)
        cy.get('[data-testid="selectOperationDropdown"]').select('Add')
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]')
        .should('have.value', 5)
    })
    it('Add 3.2 + 2.1 = 5.3', () => {
        cy.get('[data-testid="number1Field"]').type(3.2)
        cy.get('[data-testid="number2Field"]').type(2.1)
        cy.get('[data-testid="selectOperationDropdown"]').select('Add')
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]')
        .should('have.value', 5.3)
    })
    it('Add 7 - 3 = 4', () => {
        cy.get('[data-testid="number1Field"]').type(7)
        cy.get('[data-testid="number2Field"]').type(3)
        cy.get('[data-testid="selectOperationDropdown"]').select('Subtract')
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]')
        .should('have.value', 4)
    })
    it('Add 7 * 3 = 4', () => {
        cy.get('[data-testid="number1Field"]').type(7)
        cy.get('[data-testid="number2Field"]').type(3)
        cy.get('[data-testid="selectOperationDropdown"]').select('Multiply')
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]')
        .should('have.value', 21)
    })
    it('Add 9 / 3 = 4', () => {
        cy.get('[data-testid="number1Field"]').type(9)
        cy.get('[data-testid="number2Field"]').type(3)
        cy.get('[data-testid="selectOperationDropdown"]').select('Divide')
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]')
        .should('have.value', 3)
    })
    it('Add 9 and 3 = 93', () => {
        cy.get('[data-testid="number1Field"]').type(9)
        cy.get('[data-testid="number2Field"]').type(3)
        cy.get('[data-testid="selectOperationDropdown"]').select('Concatenate')
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]')
        .should('have.value', 93)
    })
    it('Add 9 - 3.5 = 5.5', () => {
        cy.get('[data-testid="number1Field"]').type(9)
        cy.get('[data-testid="number2Field"]').type(3.5)
        cy.get('[data-testid="selectOperationDropdown"]').select('Subtract')
        cy.get('[data-testid="integerSelect"]').check()
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]')
        .should('have.value', 5)



    })
})