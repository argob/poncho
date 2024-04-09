process.env['NODE_DEV'] = 'TEST';
const PonchoAgenda = require("../src/js/poncho-agenda.js");


test("Agenda", () => {
    expect( new PonchoAgenda({})._ponchoTableExists() ).toBeFalsy()
    expect( "a" ).toBe('a');
    // expect( cleanUpHex("#123")).toBe("#112233");
    // expect( cleanUpHex("#1234567")).toBeFalsy();
});