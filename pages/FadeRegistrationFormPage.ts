import { BasePage } from "./BasePage.js";

export class FadeRegistrationFormPage extends BasePage {
    public get elements() {
        return {
            formPageHeading: this.page.locator('h2').nth(0),
            formNameField: this.page.getByTestId("name"),
            nameHelperText: this.page.getByTestId("name-helper-text"),
            formEmailField: this.page.getByTestId("email"),
            emailHelperText: this.page.getByTestId("email-helper-text"),
            formCountrySelector: this.page.getByTestId("react-select-2-input"),
            formCountrySelectionNull: this.page.getByTestId("react-select-2-listbox").locator('div').first(),
            formCountrySelectionDjibouti: this.page.getByTestId("react-select-2-listbox").locator('div').nth(14),
            formRegisterButton: this.page.getByRole('button', { name: "Register" }),
            tableRegistrationsHeading: this.page.locator('h5').nth(0),
            tableField: this.page.locator('tr').nth(1),
            countryHelperText: this.page.getByTestId("country-helper-text"),
        };
    }
}