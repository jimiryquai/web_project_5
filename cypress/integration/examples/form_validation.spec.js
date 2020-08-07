describe('toggleButtonState (Edit Profile) - valueMissing', () => {
    it('Visits Around The US', () => {
      cy.visit('http://127.0.0.1:5500/')
      cy.get('.button_edit').click()
      cy.get('#name-input').clear()
      cy.get('#job-input').clear()
      cy.get(".button_submit")
          .should('have.prop', 'disabled', true)
    })
})

describe('toggleButtonState (Edit Profile) - tooShort', () => {
    it('Visits Around The US', () => {
      cy.visit('http://127.0.0.1:5500/')
      cy.get('.button_edit').click()
      cy.get('#name-input').clear().type('J')
      cy.get('#job-input').clear().type('R')
      cy.get(".button_submit")
          .should('have.prop', 'disabled', true)
    })
})

describe('toggleButtonState (Edit Profile) - wrongPattern', () => {
  it('Visits Around The US', () => {
    cy.visit('http://127.0.0.1:5500/')
    cy.get('.button_edit').click()
    cy.get('#name-input').clear().type('1')
    cy.get(".button_submit")
      .should('have.prop', 'disabled', true)
  })
})

describe('checkInputValidity (Edit Profile) - both fields are required', () => {
  it('Visits Around The US', () => {
    cy.visit('http://127.0.0.1:5500/')
    cy.get('.button_edit').click()
    cy.get('#name-input')
      .should('have.prop', 'required', true)
    cy.get('#job-input')
      .should('have.prop', 'required', true)
  })
})

describe('checkInputValidity (Edit Profile) - valueMissing', () => {
  it('Visits Around The US', () => {
    cy.visit('http://127.0.0.1:5500/')
    cy.get('.button_edit').click()
    cy.get('#name-input').clear()
    cy.get('#job-input').clear()
    cy.get('#name-input-error')
    .should('have.css', "visibility", "visible")
    cy.get('#job-input-error')
        .should('have.css', "visibility", "visible")
  })
})

describe('checkInputValidity (Edit Profile) - tooShort', () => {
  it('Visits Around The US', () => {
    cy.visit('http://127.0.0.1:5500/')
    cy.get('.button_edit').click()
    cy.get('#name-input').clear().type('J')
    cy.get('#job-input').clear().type('R')
    cy.get('#name-input-error')
      .should('have.css', "visibility", "visible")
    cy.get('#job-input-error')
        .should('have.css', "visibility", "visible")
  })
})

describe('checkInputValidity (Edit Profile) - tooLong', () => {
    it('Visits Around The US', () => {
      cy.visit('http://127.0.0.1:5500/')
      cy.get('.button_edit').click()
      cy.get('#name-input').clear().type('JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ')
          .should('have.length.of.at.most', (40))
      cy.get('#job-input').clear().type('000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000')
          .should('have.length.of.at.most', (200))
    })
})

describe('checkInputValidity (Edit Profile) - wrongPattern', () => {
  it('Visits Around The US', () => {
    cy.visit('http://127.0.0.1:5500/')
    cy.get('.button_edit').click()
    cy.get('#name-input').clear().type('1')
    cy.get('#name-input-error')
        .should('have.css', "visibility", "visible")
  })
})

describe('toggleButtonState (New Place) - valueMissing', () => {
  it('Visits Around The US', () => {
    cy.visit('http://127.0.0.1:5500/')
    cy.get('.button_add').click()
    cy.get('#title-input').clear()
    cy.get('#url-input').clear()
    cy.get('[data-cy=place-submit]')
        .should('have.prop', 'disabled', true)
  })
})

describe('toggleButtonState (New Place) - wrongPattern', () => {
  it('Visits Around The US', () => {
    cy.visit('http://127.0.0.1:5500/')
    cy.get('.button_add').click()
    cy.get('#url-input').clear().type('www.facebook.com')
    cy.get('[data-cy=place-submit]')
      .should('have.prop', 'disabled', true)
  })
})

describe('checkInputValidity (New Place) - both fields are required', () => {
  it('Visits Around The US', () => {
    cy.visit('http://127.0.0.1:5500/')
    cy.get('.button_add').click()
    cy.get('#title-input')
    cy.get('#url-input')
    cy.get('#title-input')
      .should('have.prop', 'required', true)
    cy.get('#url-input')
      .should('have.prop', 'required', true)
  })
})

describe('checkInputValidity (New Place) - tooShort', () => {
  it('Visits Around The US', () => {
    cy.visit('http://127.0.0.1:5500/')
    cy.get('.button_add').click()
    cy.get('#title-input').clear()
    cy.get('#title-input-error')
        .should('have.css', "visibility", "visible")
  })
})

describe('checkInputValidity (New Place) - tooLong', () => {
    it('Visits Around The US', () => {
      cy.visit('http://127.0.0.1:5500/')
      cy.get('.button_add').click()
      cy.get('#title-input').clear().type('JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ')
          .should('have.length.of.at.most', (30))
    })
})

describe('toggleButtonState (New Place) - wrongPattern', () => {
  it('Visits Around The US', () => {
    cy.visit('http://127.0.0.1:5500/')
    cy.get('.button_add').click()
    cy.get('#url-input').clear().type('www.facebook.com')
    cy.get('#url-input-error')
        .should('have.css', "visibility", "visible")
  })
})
