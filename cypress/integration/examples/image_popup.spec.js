describe('imagePopupOpen', () => {
    it('Visits Around The US', () => {
        cy.visit('http://127.0.0.1:5500/')
        cy.get('.photo-grid__image').first().click()
        cy.get('.popup__modal_type_image')
            .should('have.css', "max-width", "750px")
            .and('have.css', "max-height", "495px")
    })
})