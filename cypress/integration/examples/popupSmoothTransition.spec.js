describe('imagePopupOpenSmooth', () => {
    it('Visits Around The US', () => {
        cy.visit('http://127.0.0.1:5500/')
        cy.get('.photo-grid__image').first().click()
        cy.get('.popup_type_image')
            .should('have.css', "transition", "all 0.3s ease 0s")
    })
})
