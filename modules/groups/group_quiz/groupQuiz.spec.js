import Menu from "../../_PageObjects/Menu";
import LoginPage from "../../_PageObjects/LoginPage";
import LogoutPage from "../../_PageObjects/LogoutPage";
import GroupsPage from "../../_PageObjects/GroupsPage";
import { student} from "../../_data/user.data";

describe ('GROUPS QUIZ TAB', () => {
    before('should login as student', () => {
        LoginPage.login(student);
        browser.pause(1000);
    });

    it('should check header is student name', () => {
        const element = Menu.h1;
        const actual = element.getText();
        const expected = 'Student PASV';
        expect(actual).equals(expected);
    });

    it('should click Groups link', () => {
        Menu.groupLink.click();
        browser.waitUntil(() => Menu.h1.getText() === 'Groups');
    });

    it('should open Existed Group "Group 6 Test" link',  () => {
        GroupsPage.linkToGroupGroup6Test.click();
        browser.waitUntil(() =>  Menu.h1.getText() === 'Group GROUP6 TEST');
    });

    it('should check if quiz tab exist',  () => {
        expect(GroupsPage.quizTabBtn.isDisplayed()).true
    });

    it('should click quiz Tab Btn',  () => {
        GroupsPage.quizTabBtn.click();
        browser.pause(1000);
    });

    it('should check redirection to quiz page',  () =>{
      const element = browser.getUrl();
        expect(element.includes('quiz')).true;
    });

    after('should log out', () => {
        LogoutPage.logout();
        browser.pause(1000)
    })
});