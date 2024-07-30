// const {ponchoColorDefinitionsList} = require('../src/js/color-definitions');
const {ponchoColor, ponchoColorByHex, cleanUpHex} = require('../src/js/color');


test('Colores Poncho por nombre', () => {
    expect(ponchoColor('amarillo')).toBe('#E7BA61');
    expect(ponchoColor('warning')).toBe('#E7BA61');
    expect(ponchoColor('Esto no es un color')).toBe('#99999');
});


test("Buscar colores por su valor hexadecimal", () => {
    expect(ponchoColorByHex("141414")[0].code).toBe("arg-black");
    expect(ponchoColorByHex("141414")[0].code).toBe("arg-black");
    expect(ponchoColorByHex("#141414")[0].code).toBe("arg-black");
    expect(ponchoColorByHex(141414)).toBeUndefined();
});



test("Refactor Hex", () => {
    expect( cleanUpHex(123) ).toBe('#112233');
    expect(cleanUpHex("#123")).toBe("#112233");
    expect(cleanUpHex("#1234567")).toBeFalsy();
});