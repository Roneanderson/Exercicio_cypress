/// <reference types="cypress" />

describe("Teste para Agenda de contato", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("adicionando contato", () => {
    cy.get('[type="text"]').type("gian", 3);
    cy.get('[type="email"]').type("gian@gmail.com.br", 3);
    cy.get('[type="tel"]').type("3981152145", 3);
    cy.get(".adicionar").click();
    cy.get("input").should("have.length", 3);
    cy.screenshot("tela de contato");
  });

  it("alteração de contato", () => {
    cy.get('[type="text"]').type("gian", 3);
    cy.get('[type="email"]').type("gian@gmail.com.br", 3);
    cy.get('[type="tel"]').type("3981152145", 3);
    cy.get(":nth-child(2) > .sc-gueYoa > .edit").click();
    cy.get(".alterar").click();
  });

  it("removendo contato", () => {
    cy.get('[type="text"]').type("gian", 3);
    cy.get('[type="email"]').type("gian@gmail.com.br", 3);
    cy.get('[type="tel"]').type("3981152145", 3);
    cy.get(".adicionar").click();
    cy.get(":nth-child(2) > .sc-gueYoa > .delete").click();
    cy.screenshot("tela de contato-preenchida");
  });
});
