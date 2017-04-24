var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('Should generate correct message object', () => {
        //store res in variable
        var from = 'Chien';
        var text = 'Some message';

        //assert from match
        //assert text match
        var message = generateMessage(from, text);

        //assert createdAt is number
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text})
    })
})

describe('generateLocationMessage', () => {
    it('Should generate correct location object', () => {
        var from = 'Mirna';
        var latitude = 15;
        var longitude = 19;
        var url = 'https://www.google.com/maps?q=15,19';
        var message = generateLocationMessage(from, latitude, longitude);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, url});
    })
})