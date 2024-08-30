const {ponchoColorDefinitionsList} = require('../src/js/color-definitions');
const {Color} = require('../src/js/color');

const _color = new Color(ponchoColorDefinitionsList);

test('Colores Poncho por nombre', () => {
    expect( _color.ponchoColor('amarillo') ).toBe('#E7BA61');
    expect( _color.ponchoColor('warning') ).toBe('#E7BA61');
    expect( _color.ponchoColor('Esto no es un color') ).toBe('#99999');

});

test('ponchoColorDefinitions()', () => {
    expect( _color.ponchoColorDefinitions("arandano").code ).toBe('arg-arandano');
    expect( _color.ponchoColorDefinitions("arándano").code ).toBe('arg-arandano');
    expect( _color.ponchoColorDefinitions("arg-arándano").code ).toBe('arg-arandano');
    
});


test("Buscar colores por su valor hexadecimal", () => {
    expect( _color.ponchoColorByHex("141414")[0].code ).toBe("arg-negro");
    expect( _color.ponchoColorByHex("141414")[0].code ).toBe("arg-negro");
    expect( _color.ponchoColorByHex("#141414")[0].code ).toBe("arg-negro");
    expect( _color.ponchoColorByHex(141414) ).toBeUndefined();
});


test("Refactor Hex", () => {
    expect( _color.cleanUpHex(123) ).toBe('#112233');
    expect( _color.cleanUpHex("#123") ).toBe("#112233");
    expect( _color.cleanUpHex("#1234567") ).toBeFalsy();
});


test('isValidHex', () => {
    expect( _color.isValidHex('#FF0000') ).toBe(true);
    expect( _color.isValidHex('CCC') ).toBe(true);
    expect( _color.isValidHex('CC') ).toBe(false);
    expect( _color.isValidHex('') ).toBe(false);
    expect( _color.isValidHex() ).toBe(false);
    expect( _color.isValidHex('FF0000') ).toBe(true);
    expect( _color.isValidHex('FF000000') ).toBe(false);
});


test('hexToRgb', () => {
    expect( _color.hexToRgb('#FF0000')[0] ).toBe(255);
    expect( _color.hexToRgb('CCC')[0] ).toBe(204);
    expect( _color.hexToRgb('CCC').length ).toBe(3);
    expect( Array.isArray( _color.hexToRgb('FF0000') ) ).toBe(true);
    expect( _color.hexToRgb('cc') ).toBeUndefined();
    expect( _color.hexToRgb('') ).toBeUndefined();
    expect( _color.hexToRgb() ).toBeUndefined();
    expect( _color.hexToRgb('FF000000') ).toBeUndefined();
});