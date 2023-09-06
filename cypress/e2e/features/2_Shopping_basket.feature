Feature: Customer Purchase on E-commerce Site
  As a customer
  I want to purchase a product
  So that I can complete an online purchase successfully

  Scenario: Adding a product to the cart and completing the purchase
    Given I am on the e-commerce website homepage
    When I search for "Lenovo"
    When I select the first product
    When I complete the purchase
    Then I should see a confirmation message 'Your order has been successfully processed!'
