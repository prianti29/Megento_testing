describe('Magento Website Test', () => {
  it('should navigate to the website, login, and click on "Tops"', () => {
    // Navigate to the website
    cy.visit('https://magento.softwaretestingboard.com/');
  
    // Open the login form
    cy.contains('Sign In').click();
 
    // Login to the website
    cy.get('#email').type('priantibanik.cse@gmail.com');
    cy.get('#pass').type('priantI123');
    cy.get('#send2').click();
 
    // Verify successful login
    cy.get('.greet.welcome .logged-in').should('exist');
 
    // Hover over "Women" menu to make the submenu visible
    cy.get('.level0.nav-2')
      .contains('Women')
      .click()


    //Goto the product page
    cy.get("img[alt='Breathe-Easy Tank']").click()
    //add to the cart
    //select size and color for the product
    cy.get("#option-label-size-143-item-167").click()
    cy.get("#option-label-color-93-item-59").click()
    cy.get("#product-addtocart-button").click()
    //click on the cart menu icon
    cy.get(".action.showcart").click()
    //check the cart options
    cy.get("strong[class='product-item-name']").should("contain","Breathe-Easy Tank")
  });
});
 