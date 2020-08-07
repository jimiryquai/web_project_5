describe('toggleButtonState - valueMissing', () => {
    it('Visits Around The US', () => {
        cy.visit('http://127.0.0.1:5500/')
        cy.get('.button_edit').click()
        cy.get('#name-input').clear()
        cy.get('#job-input').clear()
        cy.get('#name-input-error')
        .should('have.css', "visibility", "visible") 
        cy.get('#job-input-error')
            .should('have.css', "visibility", "visible") 
        cy.get(".button_submit")
            .should('have.prop', 'disabled', true)
    })
})

describe('toggleButtonState - tooShort', () => {
    it('Visits Around The US', () => {
        cy.visit('http://127.0.0.1:5500/')
        cy.get('.button_edit').click()
        cy.get('#name-input').clear().type('J')
        cy.get('#job-input').clear().type('R')
        cy.get('#name-input-error')
            .should('have.css', "visibility", "visible")
        cy.get('#job-input-error')
            .should('have.css', "visibility", "visible") 
        cy.get(".button_submit")
            .should('have.prop', 'disabled', true)
    })
})

describe('checkInputValidity - tooLong', () => {
    it('Visits Around The US', () => {
        cy.visit('http://127.0.0.1:5500/')
        cy.get('.button_edit').click()
        cy.get('#name-input').clear().type('JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ')
            .should('have.length.of.at.most', (40))
        cy.get('#job-input').clear().type('000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000')
            .should('have.length.of.at.most', (200))
    })
})

       // Arrange - setup initial app state -
       // - visit a web page - 
       //  - query for an element -
       // Act - take an action -
       // - interact with that element -
       // Assert - make an assertion
       // - make an assertion about page content