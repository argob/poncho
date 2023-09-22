const {ponchoColor, ponchoColorByHex, cleanUpHex} = require('../src/js/utils/color');


test('Colores Poncho por nombre', () => {
    expect(ponchoColor('amarillo')).toBe('#F9A822');
    expect(ponchoColor('warning')).toBe('#F9A822');
    expect(ponchoColor('Esto no es un color')).toBe('Esto no es un color');
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