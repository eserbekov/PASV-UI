import { expect } from 'chai';
import LoginPage from '../../_PageObjects/LoginPage';

describe('LOGIN PAGE NEGATIVE with empty Email field and valid Password', () => {
    it('should open login page', () => {
        LoginPage.open();
    });

    it('should have correct title', () => {
        const actual = LoginPage.h1.getText();
        const expected = 'User Login';
        expect(actual).eq(expected);
    });

    it('should fill out password field', () => {
        LoginPage.password.setValue('123456');
    });

    it('should click Login button', () => {
        LoginPage.submitBtn.click();
        browser.pause(2000);
    });

    it('should have correct title', () => {
        const actual = LoginPage.h1.getText();
        const expected = 'User Login';
        expect(actual).eq(expected);
    });
});
