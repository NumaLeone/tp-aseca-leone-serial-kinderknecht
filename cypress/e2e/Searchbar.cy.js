describe("Searchbar Test", function () {
  beforeEach(() => {
    cy.visit("https://www.amazon.com/");
    cy.wait(4000);
  });
  xit("Tests the search bar", function () {
    changeDeliveryAddress();
    cy.wait(1000);
    cy.get('[aria-label="Search"]').type("Macbook pro");
    cy.get("#nav-search-submit-button").click();
    cy.get("span").contains("RESULTS");
  });
  xit("Tests that the searchbar searches the desired product", () => {
    changeDeliveryAddress();
    cy.wait(1000);
    cy.get('[aria-label="Search"]').type("Kindle Oasis");
    cy.get("#nav-search-submit-button").click();
    cy.wait(2000);

    cy.get("span").contains("Kindle Oasis - ").eq(0).click();
    cy.wait(1000);
    cy.get("#add-to-cart-button").click();
  });
  it("Test that the user can apply a filter to the searchbar", () => {
    changeDeliveryAddress();
    cy.wait(4000);
    cy.get("select").select("Alexa Skills", { force: true });
    // cy.get('[aria-describedby="searchDropdownDescription"]');
    cy.get("#nav-search-submit-button").click();
    cy.get("h2").contains("Alexa features");
    cy.get("div").contains(
      "Alexa makes your life easier, more meaningful, and more fun by letting your voice control your world. Alexa can help you get more out of the things you already love and discover new possibilities you've never imagined."
    );
  });
});

function changeDeliveryAddress() {
  cy.get("a").contains("Deliver to").click();
  cy.get('[aria-label="or enter a US zip code"]').type("99501");
  cy.get('[aria-labelledby="GLUXZipUpdate-announce"]').click();
  cy.wait(2000);
  cy.get("body").click(0, 0);
}
