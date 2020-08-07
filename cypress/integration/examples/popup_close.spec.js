describe('addPopupClose - click on overlay', () => {
  it('Visits Around The US', () => {
    cy.visit('http://127.0.0.1:5500/')
    cy.get('.button_add').click()
    cy.get('.popup_opened').as('openPopup')
    cy.get('@openPopup').click({force: true})
      .should('have.css', "visibility", "hidden")
  })
})

describe('editPopupClose - click on overlay', () => {
  it('Visits Around The US', () => {
    cy.visit('http://127.0.0.1:5500/')
    cy.get('.button_edit').click()
    cy.get('.popup_opened').as('openPopup')
    cy.get('@openPopup').click({force: true})
      .should('have.css', "visibility", "hidden")
  })
})

describe('imagePopupClose - click on overlay', () => {
  it('Visits Around The US', () => {
    cy.visit('http://127.0.0.1:5500/')
    cy.get('.photo-grid__image').first().click()
    cy.get('.popup_opened').as('openPopup')
    cy.get('@openPopup').click({force: true})
      .should('have.css', "visibility", "hidden")
  })
})

describe('imagePopupClose - press esc', () => {
  it('Visits Around The US', () => {
    cy.visit('http://127.0.0.1:5500/')
    cy.get('.photo-grid__image').first().click()
    cy.get('body').trigger('keydown', { key: "Escape", code: 27, which: 27  })
    cy.wait(100)
    cy.get('body').trigger('keyup', { key: "Escape", code: 27, which: 27 })
    cy.get('.popup_type_image').as('popup')
      .should('have.css', "visibility", "hidden")
  })
})

describe('editPopupClose - press esc', () => {
  it('Visits Around The US', () => {
    cy.visit('http://127.0.0.1:5500/')
    cy.get('.button_edit').click()
    cy.get('body').trigger('keydown', { key: "Escape", code: 27, which: 27  })
    cy.wait(100)
    cy.get('body').trigger('keyup', { key: "Escape", code: 27, which: 27 })
    cy.get('.popup_type_edit').as('popup')
      .should('have.css', "visibility", "hidden")
  })
})


describe('addPopupClose - press esc', () => {
  it('Visits Around The US', () => {
    cy.visit('http://127.0.0.1:5500/')
    cy.get('.button_add').click()
    cy.get('body').trigger('keydown', { key: "Escape", code: 27, which: 27  })
    cy.wait(100)
    cy.get('body').trigger('keyup', { key: "Escape", code: 27, which: 27 })
    cy.get('.popup_type_add').as('popup')
      .should('have.css', "visibility", "hidden")
  })
})

