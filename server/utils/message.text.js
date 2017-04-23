var expect = require('expect');

var {generateMessage} = require('./message');

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