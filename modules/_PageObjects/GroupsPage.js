import AppPage from '../AppPage';
import LoginPage from "./LoginPage";
import Menu from "./Menu";
import LogoutPage from "./LogoutPage";

class GroupsPage extends AppPage {

    get groupsLink() {
        return browser.$('//a[@qa="groups-link"]');
    }

    get h1() {
        return browser.$('//h1');
    }

    get groupLink() {
        return browser.$('=QA 5 new Group');
    }

    lectureLink(lectureName) {
        return browser.$(`//span[text() = "${lectureName}"]`);
    }

    get group4TestLink() {
        return $('//a[text()="Group4Test"]');
    }

    get linkToGroupGroup6Test() {
        return $('//a[contains(text(),"GROUP6 TEST")]');
    }

    get quizTabBtn(){
        return $('//a[contains(text(),"Quiz")]');
    }

    get createGroupBtn(){
        return $('//a[@class="btn btn-secondary"]');
    }

    get groupNameInput(){
        return $('//input[@name="name"]');
    }

    get groupDescriptionInput(){
        return $('//input[@name="description"]');
    }

    get accessTypeDropbox(){
        return $('//select[@name="accessType"]');
    }

    get createBtn(){
        return $('//button[@type="submit"]');
    }

    createNewGroup(role) {
        LoginPage.login(role);
        super.click(Menu.groupLink);
        super.click(this.createGroupBtn);
        this.groupNameInput.setValue('GROUP FOR TEST');
        this.groupDescriptionInput.setValue('test '.repeat(5));
        this.accessTypeDropbox.selectByVisibleText('All');
        super.click(this.createBtn);
        LogoutPage.logout()
    }

}

export default new GroupsPage();