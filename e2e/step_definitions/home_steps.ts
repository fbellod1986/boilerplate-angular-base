// Assume that this 
const { Given, When, Then, And } = require('cypress-cucumber-preprocessor/steps');

Given('the user visit the main page', () => {
    cy.visit('http://localhost:4200/');
});

Then('page should have the right title', () => {
    cy.getPackageName()
        .then((packageName: any ) => {
            // Angular converts a dashed-name on package.json to Capitalize and Camel case
            // format for the title
            const pageTitle = packageName
                .replace(/-([a-z])/g, (match: any, character: string) => character.toUpperCase())
                .replace(/^([a-z])/g, (match: any, character: string) => character.toUpperCase());
            cy.title().should('contains', pageTitle);
        });
});
