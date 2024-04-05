const gapi_legacy = require('../src/js/utils/gapi-legacy');
const jsonData = require('./resources/response');

test('GApi legacy', () => {
    const legacy = gapi_legacy(jsonData);
    expect(legacy.feed.entry[0]["gsx$area"]["$t"]).toBe("Área, servicio o grupo");
});