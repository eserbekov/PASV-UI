import FlashCardsPage from '../../_PageObjects/FlashCardsPage';
import LoginPage from '../../_PageObjects/LoginPage';
import {student} from '../../_data/user.data';
import Menu from "../../_PageObjects/Menu";

describe('CARDS/FLASHCARDS --NEGATIVE', () => {
    before('login as a student', () => {
        LoginPage.login(student);
    });

    it('should check `FlashCards` page title', () => {
        FlashCardsPage.openCardsMenu().click();
        const actual = FlashCardsPage.h1.getText();
        const expected = 'Flash Cards';
        expect(actual).not.eq(expected);
    });

    it('should check `Compact view` link is clickable', function () {
        const actual=FlashCardsPage.compactViewLink.isClickable();
        const expected=false;
        expect(actual).eq(expected);
    });

    it('should check `Waiting for approval` link is clickable', function () {
        const actual=FlashCardsPage.waitingForApproval.isClickable();
        const expected=false ;
        expect(actual).eq(expected);
    });

    it('should check `Training` link is clickable', function () {
        const actual=FlashCardsPage.trainingLink.isClickable();
        const expected=false;
        expect(actual).eq(expected);
    });
});