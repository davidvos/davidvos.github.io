describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })
})

describe('Click Chrome Plugin Link', () => {
  it('Chrome plugin link found and clicked', () => {
    cy.get('.plugin-link').click()
  })
})

describe('Click A-Insights Link', () => {
  it('A-Insights found and clicked', () => {
    cy.get('.ainsights-link').click()
  })
})