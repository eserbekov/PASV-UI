import AppPage from '../AppPage';

class MainAndCompactViewPage extends AppPage {

  get mainView() {
    return browser.$('//a[contains(text(),"Main view")]');
  }

  get mainViewActive() {
    return browser.$('//a[contains(text(),"Main view")][contains(@class,"nav-link active")]');
  }

  get compactView() {
    return browser.$('//a[contains(text(),"Compact view")]');
  }

  get compactViewActive() {
    return browser.$('//a[contains(text(),"Compact view")][contains(@class,"nav-link active")]');
  }

  get questionText() {
    return browser.$('//strong[contains(text(),"What is the difference between the first test and the second one?")]');
  }

  get answerText() {
    return browser.$('//div[@class="answer mb-4 mt-1 img-shadow"]');
  }

}

export default new MainAndCompactViewPage();





