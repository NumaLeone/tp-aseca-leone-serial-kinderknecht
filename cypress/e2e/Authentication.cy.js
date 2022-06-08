const testUsername = "";
const testPassword = "";
describe("Authentication Test", function () {
  it("Tests the login", function () {
    cy.visit("https://www.amazon.com/");
    cy.wait(4000);
    cy.get("#nav-signin-tooltip").click();
    cy.get('[type="email"]').type(testUsername);
    cy.get("#continue").click();
    cy.get('[type="password"]').type(testPassword);
    cy.get("#signInSubmit").click();
  });

  // data-nav-role="signin"
});
