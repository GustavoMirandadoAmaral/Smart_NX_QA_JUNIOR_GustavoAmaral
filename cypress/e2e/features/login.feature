Feature: Testes na tela de login

  Scenario: Login com sucesso
    Given que o usuário está na tela de login
    When o usuário insere username válido
    And insere a senha válida
    And clica no botão login
    Then deve visualizar a página de dashboard

  Scenario: Tentativa de login com campos vazios
    Given que o usuário está na tela de login
    When clica no botão login sem preencher os campos
    Then deve visualizar a mensagem de erro "Required"

  Scenario: Tentativa de login com credenciais inválidas
    Given que o usuário está na tela de login
    When o usuário insere username inválido
    And insere a senha inválida
    And clica no botão login
    Then deve visualizar a mensagem de erro "Invalid credentials"
