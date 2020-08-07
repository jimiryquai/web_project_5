/// <reference types="cypress" />

context('Connectors', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/')
  })

  it('.each() - iterate over an array of elements', () => {
    // https://on.cypress.io/each
    cy.get('.photo-grid>li')
      .each(($el, index, $list) => {
        console.log($el, index, $list)
      })
  })

  it('.its() - get properties on the current subject', () => {
    // https://on.cypress.io/its
    cy.get('.photo-grid>li')
      // calls the 'length' property yielding that value
      .its('length')
      .should('be', 6)
  })

})
