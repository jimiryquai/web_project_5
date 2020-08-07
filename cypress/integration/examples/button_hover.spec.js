context('Connectors', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/')
    })

    it('.each() - iterate over an array of elements', () => {
        // https://on.cypress.io/each
        cy.get('.button')
            .each(($el, index, $list) => {
                console.log($el, index, $list)
            })
    })

    it('.its() - get properties on the current subject', () => {
        // https://on.cypress.io/its
        cy.get('.button')
            .should('have.css', 'opacity', '1')
        cy.get('.button').first().trigger('mouseover', 'topRight')
            .should('have.css', 'opacity', '.6')
    })

})