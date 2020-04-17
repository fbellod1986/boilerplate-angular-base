const packageJson = require('../../package.json');

/**
 * Navigates to page with pageName
 */
Cypress.Commands.add('navigate', (pageName) => {
    // Find navigation menu item
    // Click on it
    cy.visit(`/${pageName}`);
});

Cypress.Commands.add('getPackageName', () => packageJson.name);

// Must be declared global to be detected by typescript (allows import/export)
// tslint:disable-next-line:no-namespace
declare global {
    namespace Cypress {
        // tslint:disable-next-line:interface-name
        interface Chainable<Subject> {
            navigate(pageName: string): void;
            getPackageName(): Chainable<Subject>;
        }
    }
}

// Convert this to a module instead of script (allows import/export)
export { };
