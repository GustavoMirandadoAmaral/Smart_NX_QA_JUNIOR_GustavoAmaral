Feature: Funcionalidades da tela PIM

  Scenario: Tentar cadastrar um usuário sem preencher os campos de nome
    Given que o usuário está na tela de cadastro do PIM
    When clica no botão Save sem preencher os campos obrigatórios
    Then o sistema deve exibir uma mensagem de campo obrigatório

  Scenario: Cadastrar um usuário corretamente
    Given que o usuário está na tela de cadastro do PIM
    When preenche os campos de primeiro nome, último nome e ID
    And clica no botão Save
    Then o sistema deve exibir uma mensagem de sucesso no cadastro

  Scenario: Pesquisar um usuário pelo nome corretamente
    Given que o usuário está na tela PIM
    When pesquisa o usuário pelo nome
    Then o sistema deve exibir os dados do usuário na listagem

  Scenario: Excluir um usuário corretamente
    Given que o usuário está na tela PIM
    When pesquisa o usuário pelo ID
    And realiza a exclusão do usuário
    Then o sistema deve exibir uma mensagem de sucesso na exclusão