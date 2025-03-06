process.env['NODE_DEV'] = 'TEST';

const gapi_legacy = require('../src/js/utils/gapi-legacy');
const jsonData = require('./resources/response');

test('GApi legacy', () => {
    const legacy = gapi_legacy(jsonData);
    expect(legacy.feed.entry[0]["gsx$area"]["$t"]).toBe("Área, servicio o grupo");
});


test('GApiException', () => {
    const trhowTypeError = param => gapi_legacy("")
    expect(trhowTypeError).toThrow(Error);
    expect(trhowTypeError).toThrow("Invalid response format");
});



test('GApiException2', () => {
    const trhowTypeError = param => gapi_legacy([1])
    expect(trhowTypeError).toThrow(Error);
    expect(trhowTypeError).toThrow("Invalid response format");
});
