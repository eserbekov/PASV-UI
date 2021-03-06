import AppPage from '../AppPage';

class ResetPasswordPage extends AppPage {

    get h1() {
        return $('//h1');
    }
    get sendBtn() {
        return $('//button[contains(text(),"Send password reset email")]');
    }
    get emailInput(){
        return $('//input[@name="email"]');
    }
    get requiredMsg(){
        return $('//div[contains(@class, "form")]//span[contains(text(), "Required")]');
    }
    open(path) {
        super.open('https://stage.pasv.us/user/password/reset/request');
    }
}

export default new ResetPasswordPage();
