describe("First test suite", function () {
  beforeEach(() => {
    cy.visit("https://www.amazon.com/");
  });
  it("Test accessing Today's Deals page", function () {
    cy.get("a").contains(`Today's Deals`).click();
  });
});
