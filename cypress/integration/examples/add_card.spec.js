describe('addCard (New Place)', () => {
    it('Visits Around The US', () => {
        cy.visit('http://127.0.0.1:5500/')
        cy.get('.button_add').click()
        cy.get('#title-input').type('The Pantheon')
        cy.get('#url-input').type('http://www.marcuslink.com/travel/journal/italy/lazio/images/DSC_7002-Pantheon-800.jpg')
        cy.get('[data-cy=place-submit]').click()
        cy.get('.photo-grid>li')
            .its('length')
            .should('be', 7)
    })
})