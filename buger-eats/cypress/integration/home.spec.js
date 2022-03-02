describe('home page', () => { //nome do cenário de teste
    it('app deve estar online', () => { //nome do caso de teste
        cy.viewport(1440, 900) //definir a resolução do ecrã
        cy.visit('https://buger-eats.vercel.app') //abrir a página que vai ser testada
        cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats') //pega no elemento h1 e valida se tem o texto.
        // cy.get('strong').click();
    });
});