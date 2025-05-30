describe('Testes na tela de login', () => {

    beforeEach(() => {
    cy.login()
    cy.visit('/dashboard/index')
  })

  it('Teste deve pesquisar e acessar o módulo "PIM" com sucesso', () => {
    cy.get('.oxd-input').should('be.visible')
      .and('be.enabled')
      .type('PIM')
    cy.get('.oxd-main-menu-item').should('contain', 'PIM').click()

    cy.location ('pathname', {timeout: 20000})
        .should('not.be.equal', '/dashboard/index')
    cy.get('.oxd-topbar-header-title').should('contain', 'PIM')
  })
})
