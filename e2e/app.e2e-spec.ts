import { AngularFirebaseGalleryPage } from './app.po';

describe('angular-firebase-gallery App', () => {
  let page: AngularFirebaseGalleryPage;

  beforeEach(() => {
    page = new AngularFirebaseGalleryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
