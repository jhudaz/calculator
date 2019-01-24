describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true)
  })
})

describe('My First Test', function() {
  it('Visits the Kitchen Sink', function() {
    cy.visit('http://localhost:3001/')

    cy.contains('Home')
    cy.contains('Calculator')
    cy.contains('Git profile').click()
    cy.contains('Git User:')

    cy.url().should('include', '/git-profile')

    cy.get('input')
      .type('jvelezpo')
      .should('have.value', 'jvelezpo')

    cy.get('button').click()
  })
})
