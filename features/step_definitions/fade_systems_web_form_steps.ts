import { Given, When, Then } from "@cucumber/cucumber";
import ICustomWorld from "../../support/custom-world.js";
import { expect } from "@playwright/test";

Given("a user is on their browser", async function (this: ICustomWorld) {
   await this.allPagesObject.basePage.pageLoaded();
});

When("the user navigates to the website", async function (this: ICustomWorld) {
    await this.allPagesObject.basePage.goTo("http://fade-qa-test.s3-website-eu-west-1.amazonaws.com");
});

Then("the registration form is displayed", async function (this: ICustomWorld) {
    expect(this.allPagesObject.fadeRegistrationFormPage.elements.formPageHeading).toHaveText("Registration Form");
 });

When("the user fills in the form correctly with email {string}", async function (this: ICustomWorld, emailPresence: string) {
    await this.allPagesObject.fadeRegistrationFormPage.elements.formNameField.scrollIntoViewIfNeeded();
    await this.allPagesObject.fadeRegistrationFormPage.elements.formNameField.isEditable();
    await this.allPagesObject.fadeRegistrationFormPage.elements.formNameField.fill("User Name");
    if (emailPresence == "present") {
        await this.allPagesObject.fadeRegistrationFormPage.elements.formEmailField.isEditable();
        await this.allPagesObject.fadeRegistrationFormPage.elements.formEmailField.fill("foo@bar.com");
    }
    await this.allPagesObject.fadeRegistrationFormPage.elements.formCountrySelector.isVisible();
    await this.allPagesObject.fadeRegistrationFormPage.elements.formCountrySelector.click();
    await this.allPagesObject.fadeRegistrationFormPage.elements.formCountrySelectionDjibouti.scrollIntoViewIfNeeded();
    await this.allPagesObject.fadeRegistrationFormPage.elements.formCountrySelectionDjibouti.click();
    await this.allPagesObject.fadeRegistrationFormPage.elements.formRegisterButton.click();
});

Then("the table is updated with email {string} in the information", async function (this: ICustomWorld, emailPresence: string) {
    expect(this.allPagesObject.fadeRegistrationFormPage.elements.tableRegistrationsHeading).toHaveText("Registrations");
    expect(this.allPagesObject.fadeRegistrationFormPage.elements.tableField.locator('td').nth(0)).toHaveText('User Name');
    if (emailPresence == "present") {
        expect(this.allPagesObject.fadeRegistrationFormPage.elements.tableField.locator('td').nth(1)).toHaveText('foo@bar.com');
    }
    expect(this.allPagesObject.fadeRegistrationFormPage.elements.tableField.locator('td').nth(2)).toHaveText('Djibouti');
});

When("the user fills in the form incorrectly, leaving out the {string}", async function (this: ICustomWorld, formMissing: string) {
    await this.allPagesObject.fadeRegistrationFormPage.elements.formNameField.scrollIntoViewIfNeeded();
    if (formMissing != "Name") {
        await this.allPagesObject.fadeRegistrationFormPage.elements.formNameField.isEditable();
        await this.allPagesObject.fadeRegistrationFormPage.elements.formNameField.fill("User Name");
    }
    
    await this.allPagesObject.fadeRegistrationFormPage.elements.formEmailField.isEditable();
    await this.allPagesObject.fadeRegistrationFormPage.elements.formEmailField.fill("foo@bar.com");

    if (formMissing != "Country") {
        await this.allPagesObject.fadeRegistrationFormPage.elements.formCountrySelector.isVisible();
        await this.allPagesObject.fadeRegistrationFormPage.elements.formCountrySelector.click();
        await this.allPagesObject.fadeRegistrationFormPage.elements.formCountrySelectionDjibouti.scrollIntoViewIfNeeded();
        await this.allPagesObject.fadeRegistrationFormPage.elements.formCountrySelectionDjibouti.click();
    }
    await this.allPagesObject.fadeRegistrationFormPage.elements.formRegisterButton.click();
});

Then("the error for {string} is shown", async function (this: ICustomWorld, formMissing: string) {
    if (formMissing == "Name") {
        expect(this.allPagesObject.fadeRegistrationFormPage.elements.nameHelperText).toBeVisible();
        expect(this.allPagesObject.fadeRegistrationFormPage.elements.nameHelperText).toHaveText("Name is required.");
    } else {
        expect(this.allPagesObject.fadeRegistrationFormPage.elements.countryHelperText).toBeVisible();
        expect(this.allPagesObject.fadeRegistrationFormPage.elements.countryHelperText).toHaveText("Country is required.");
    }
});

When("the user fills in the form incorrectly, trying to submit a country that doesn't exist", async function (this: ICustomWorld) {
    await this.allPagesObject.fadeRegistrationFormPage.elements.formNameField.scrollIntoViewIfNeeded();
    await this.allPagesObject.fadeRegistrationFormPage.elements.formNameField.isEditable();
    await this.allPagesObject.fadeRegistrationFormPage.elements.formNameField.fill("User Name");

    await this.allPagesObject.fadeRegistrationFormPage.elements.formEmailField.isEditable();
    await this.allPagesObject.fadeRegistrationFormPage.elements.formEmailField.fill("foo@bar.com");

    await this.allPagesObject.fadeRegistrationFormPage.elements.formCountrySelector.isVisible();
    await this.allPagesObject.fadeRegistrationFormPage.elements.formCountrySelector.fill("United Kingdom");
});
        
Then("the field informs the user that no options are available", async function (this: ICustomWorld) {
    expect(this.allPagesObject.fadeRegistrationFormPage.elements.formCountrySelectionNull).toHaveText("No options");
});

When("the user fills in the form incorrectly, entering an invalid email address", async function (this: ICustomWorld) {
    await this.allPagesObject.fadeRegistrationFormPage.elements.formNameField.scrollIntoViewIfNeeded();
    await this.allPagesObject.fadeRegistrationFormPage.elements.formNameField.isEditable();
    await this.allPagesObject.fadeRegistrationFormPage.elements.formNameField.fill("User Name");
    
    await this.allPagesObject.fadeRegistrationFormPage.elements.formEmailField.isEditable();
    await this.allPagesObject.fadeRegistrationFormPage.elements.formEmailField.fill("foo");
    
    await this.allPagesObject.fadeRegistrationFormPage.elements.formCountrySelector.isVisible();
    await this.allPagesObject.fadeRegistrationFormPage.elements.formCountrySelector.click();
    await this.allPagesObject.fadeRegistrationFormPage.elements.formCountrySelectionDjibouti.scrollIntoViewIfNeeded();
    await this.allPagesObject.fadeRegistrationFormPage.elements.formCountrySelectionDjibouti.click();
    await this.allPagesObject.fadeRegistrationFormPage.elements.formRegisterButton.click();
});

Then("the error for the Email field is shown", async function (this: ICustomWorld) {
    expect(this.allPagesObject.fadeRegistrationFormPage.elements.emailHelperText).toHaveText("Enter a valid email address.");
});

When("the user deletes their data from the table", async function (this: ICustomWorld) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then("the data is removed from the table", async function (this: ICustomWorld) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When("the user fills in the form maliciously, entering a username that tries to {string}", async function (this: ICustomWorld, penTest: string) {
    await this.allPagesObject.fadeRegistrationFormPage.elements.formNameField.scrollIntoViewIfNeeded();
    await this.allPagesObject.fadeRegistrationFormPage.elements.formNameField.isEditable();
    if (penTest == "inject SQL") {
        await this.allPagesObject.fadeRegistrationFormPage.elements.formNameField.fill("\">DROP ALL TABLES;");
    } else {
        await this.allPagesObject.fadeRegistrationFormPage.elements.formNameField.fill("\"/><script>alert('xss')</script><br class=\"");
    }
    
    await this.allPagesObject.fadeRegistrationFormPage.elements.formEmailField.isEditable();
    await this.allPagesObject.fadeRegistrationFormPage.elements.formEmailField.fill("foo@bar.com");
    
    await this.allPagesObject.fadeRegistrationFormPage.elements.formCountrySelector.isVisible();
    await this.allPagesObject.fadeRegistrationFormPage.elements.formCountrySelector.click();
    await this.allPagesObject.fadeRegistrationFormPage.elements.formCountrySelectionDjibouti.scrollIntoViewIfNeeded();
    await this.allPagesObject.fadeRegistrationFormPage.elements.formCountrySelectionDjibouti.click();
    await this.allPagesObject.fadeRegistrationFormPage.elements.formRegisterButton.click();
});

Then("the table is updated with the username being {string}", async function (this: ICustomWorld, userName: string) {
    expect(this.allPagesObject.fadeRegistrationFormPage.elements.tableRegistrationsHeading).toHaveText("Registrations");
    if (userName == "inject SQL") {
        expect(this.allPagesObject.fadeRegistrationFormPage.elements.tableField.locator('td').nth(0)).toHaveText("\">DROP ALL TABLES;");
    } else {
        expect(this.allPagesObject.fadeRegistrationFormPage.elements.tableField.locator('td').nth(0)).toHaveText("\"/><script>alert('xss')</script><br class=\"");
    }
    expect(this.allPagesObject.fadeRegistrationFormPage.elements.tableField.locator('td').nth(1)).toHaveText('foo@bar.com');
    expect(this.allPagesObject.fadeRegistrationFormPage.elements.tableField.locator('td').nth(2)).toHaveText('Djibouti');
});