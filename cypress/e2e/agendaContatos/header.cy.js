/// <reference types="cypress" />

describe("Teste para Agenda de contato", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("inserção de contato", () => {
    cy.get('[type="text"]').type("gian", 3);
    cy.get('[type="email"]').type("gian@gmail.com.br", 3);
    cy.get('[type="tel"]').type("3981152145", 3);
    cy.get(".adicionar").click = { multiple: true };
    cy.get(".edit").click();
    cy.get(".alterar").click();
    cy.get(".cancelar").click();
    cy.get("input").should("have.length", 3);
  });

  it("deletando contato de contato", () => {
    cy.get('[type="text"]').type("gian", 9);
    cy.get('[type="email"]').type("gian@gmail.com.br", 9);
    cy.get('[type="tel"]').type("3981152145", 3);
    cy.get(".adicionar").click();
    cy.get(":nth-child(2) > .sc-gueYoa > .delete").click();
  });

  it("removendo de contato", () => {
    cy.get('[type="text"]').type("gian", 3);
    cy.get('[type="email"]').type("gian@gmail.com.br", 3);
    cy.get('[type="tel"]').type("3981152145", 3);
    cy.get(":nth-child(2) > .sc-gueYoa > .edit").click();
    cy.get(".cancelar").click();
  });
});
