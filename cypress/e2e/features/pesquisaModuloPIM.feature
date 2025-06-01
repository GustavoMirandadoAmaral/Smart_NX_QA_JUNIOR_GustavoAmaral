Feature: Pesquisa e acesso ao módulo PIM

  Scenario: Pesquisar e acessar o módulo PIM com sucesso
    Given que o usuário está logado na plataforma
    When pesquisa por "PIM" na barra de pesquisa
    And clica no módulo PIM
    Then deve ser redirecionado para a página do módulo PIM
