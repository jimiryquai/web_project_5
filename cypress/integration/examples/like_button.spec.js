describe('toggleCardLike', () => {
    it('Visits Around The US', () => {
        cy.visit('http://127.0.0.1:5500/')
        cy.get('.button_heart').first()
            .should('have.css', 'background')
            .and('not.match', /black-heart/)
        cy.get('.button_heart').first().click()
            .should('have.css', 'background')
            .and('match', /black-heart/)
    })
})

// cy.window().then((win) => { cy.spy(win.console, "log") })