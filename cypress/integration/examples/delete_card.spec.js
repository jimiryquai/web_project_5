describe('deleteCard', () => {
    it('Visits Around The US', () => {
        cy.visit('http://127.0.0.1:5500/')
        cy.get('.button_trash').first().click()
        cy.get('.photo-grid>li')
            .its('length')
            .should('be', 5)
    })
})