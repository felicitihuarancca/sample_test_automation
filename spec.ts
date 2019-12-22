// spec.js
import {browser, by, element} from "protractor";

describe('Protractor Demo App', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));

    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('should have a title', async function() {
        expect(await browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add one and two',async function() {
        firstNumber.sendKeys(1);
        secondNumber.sendKeys(2);

        goButton.click();

        expect(await latestResult.getText()).toEqual('3');
    });

    it('should add four and six',async function() {
        firstNumber.sendKeys(4);
        secondNumber.sendKeys(6);

        goButton.click();

        expect(await latestResult.getText()).toEqual('10');
    });

    it('should read the value from an input', async function() {
        firstNumber.sendKeys(1);
        expect(await firstNumber.getAttribute('value')).toEqual('1');
    });
});