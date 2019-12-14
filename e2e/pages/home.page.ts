import { browser, by, element } from 'protractor';

export class HomePage {

  getPage() {
    return browser.get('/#/home');
  }

  getPageTitle() {
    return browser.getTitle();
  }

  getLoginButton() {
    return element(by.id('login'));
  }
}
