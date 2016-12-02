import { TheProjectJphpPage } from './app.po';

describe('the-project-jphp App', function() {
  let page: TheProjectJphpPage;

  beforeEach(() => {
    page = new TheProjectJphpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
