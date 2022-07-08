

describe ('Tela Login',function(){
  beforeEach(() => {
      cy.visit ('https://sacnew.ascbrazil.com.br/login')
      cy.get('#login-user').type('user_qa')
      cy.get('#login-password').type('ascQA2022')
      cy.get('#form-login > :nth-child(3) > .controls > .btn').click()
        
      
  });
  it('Primeiro Caso de Teste',function (){
    cy.get('#side_agentes > .dropdown-toggle').click()
    cy.get('#side_agente_notificacoes > a').click()
    cy.get('.btn-to-success > .fa').click()
    cy.get('#nom_msg').type('Teste-Israel')
    cy.get('.btn-info').click()
    
    cy.get('#fltBusca > .caret').click()
    cy.get('#ulSearch > :nth-child(2) > a').click()
    cy.get('#bloco_busca > :nth-child(2)').type('Teste-Israel')
    cy.get('#find_icon').click()
    cy.contains('Teste-Israel')

   


   

  
  });
   it('segundo caso',function(){
    cy.get('#side_agentes > .dropdown-toggle').click()
    cy.get('#side_agente_notificacoes > a').click()
    cy.get('.btn-to-success > .fa').click()
    cy.get('#nom_msg').type('Teste-Israel2')
    cy.get('.btn-info').click()
    
    cy.get('#fltBusca > .caret').click()
    cy.get('#ulSearch > :nth-child(2) > a').click()
    cy.get('#bloco_busca > :nth-child(2)').type('Teste-Israel2')
    cy.get('#find_icon').click()
    cy.contains('Teste-Israel2')

   })
 
  


});
