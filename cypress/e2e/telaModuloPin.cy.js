describe('Pesquisa de módulos', () => {

    beforeEach(() => {
    cy.visit('/dashboard/index')
  })

  it('Teste deve pesquisar e acessar o módulo "PIM" com sucesso', () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
      .and('be.enabled')
      .type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
      .and('be.enabled')
      .type('admin123')
        cy.get('.oxd-button').should('be.visible')
      .and('be.enabled')
      .click()
    cy.get('.oxd-input').should('be.visible')
      .and('be.enabled')
      .type('PIM')
    cy.get('.oxd-main-menu-item').should('contain', 'PIM').click()

    cy.location ('pathname', {timeout: 20000})
        .should('not.be.equal', '/dashboard/index')
    cy.get('.oxd-topbar-header-title').should('contain', 'PIM')
  })
})
