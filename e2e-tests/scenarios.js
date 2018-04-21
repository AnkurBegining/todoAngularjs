'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /done when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/done");
  });


  describe('done', function() {

    beforeEach(function() {
      browser.get('index.html#!/done');
    });


    it('should render done when user navigates to /done', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('tobeDone', function() {

    beforeEach(function() {
      browser.get('index.html#!/tobeDone');
    });


    it('should render tobeDone when user navigates to /tobeDone', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
