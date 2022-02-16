/// <reference types="cypress" />

describe('Index', () => {

  const appUrl = "http://localhost:3000";

  it('should load and display content', () => {
    cy.visit(appUrl);

    cy.get("[role='logo']")
      .should("have.css", "background-image", `url("${appUrl}/images/logo.svg")`)

    cy.get("[role='title']")
      .should("have.text", "Olá, guruzinho!");

    cy.get("[role='subtitle-1']")
      .should("have.text", "Até agora está indo tudo como planejado..");
    
    cy.get("[role='subtitle-2']")
      .should("have.text", "Você utilizou o template para aplicações NextJS, parabéns!!");
    
    cy.get("[role='subtitle-3']")
      .should("have.text", "Está tudo pronto para você começar a fazer algo incrível,");

    cy.get("[role='subtitle-4']")
      .should("have.text", "boa sorte!");

    cy.get("[role='guru']")
      .should("have.css", "background-image", `url("${appUrl}/images/guru.svg")`)
  });
});