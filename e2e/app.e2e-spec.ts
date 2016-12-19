import { AbletonStackPage } from './app.po';

describe('ableton-stack App', function() {
  let page: AbletonStackPage;

  beforeEach(() => {
    page = new AbletonStackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
