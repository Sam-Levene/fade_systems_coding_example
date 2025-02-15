import { BrowserContext, Page } from "@playwright/test";
import { BasePage } from "./BasePage.js";
import { FadeRegistrationFormPage } from "./FadeRegistrationFormPage.js";

export class AllPagesObject {
  basePage: BasePage;
  fadeRegistrationFormPage: FadeRegistrationFormPage;

  constructor(public page: Page, public context: BrowserContext) {
    this.basePage = new BasePage(page, context);
    this.fadeRegistrationFormPage = new FadeRegistrationFormPage(page, context);
  }
}
