import { SpeechMapPage } from './app.po';

describe('speech-map App', function() {
  let page: SpeechMapPage;

  beforeEach(() => {
    page = new SpeechMapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
