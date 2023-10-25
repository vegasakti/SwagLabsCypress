describe('Login Scenario', () => {
  it('Login as Standard User', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('.app_logo').contains('Swag Labs')
  })

  it('Login as Lockout User', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').contains('Sorry, this user has been locked out.')   
  });
})