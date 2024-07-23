const {ponchoColor, ponchoColorByHex, cleanUpHex} = require('../src/js/utils/color');

test('Colores Poncho por nombre', () => {
    expect(ponchoColor('amarillo')).toBe('#E7BA61');
    expect(ponchoColor('warning')).toBe('#E7BA61');
    expect(ponchoColor('Esto no es un color')).toBe('#99999');
});


test("Buscar colores por su valor hexadecimal", () => {
    expect(ponchoColorByHex("333").code).toBe("black");
    expect(ponchoColorByHex("333333").code).toBe("black");
    expect(ponchoColorByHex("#333").code).toBe("black");
    expect(ponchoColorByHex(333).code).toBe("black");
});



test("Refactor Hex", () => {
    expect( cleanUpHex(123) ).toBe('#112233');
    expect(cleanUpHex("#123")).toBe("#112233");
    expect(cleanUpHex("#1234567")).toBeFalsy();
});