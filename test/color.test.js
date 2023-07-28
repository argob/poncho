const {ponchoColor, findPonchoColorByHex} = require('../src/js/utils/color');


test('Colores Poncho por nombre', () => {
    expect(ponchoColor('amarillo')).toBe('#f9a822');
    expect(ponchoColor('warning')).toBe('#f9a822');
    expect(ponchoColor('Esto no es un color')).toBe('Esto no es un color');
});


test("Buscar colores por su valor hexadecimal", () => {
    expect(findPonchoColorByHex("333").code).toBe("black");
    expect(findPonchoColorByHex("333333").code).toBe("black");
    expect(findPonchoColorByHex("#333").code).toBe("black");
    expect(findPonchoColorByHex(333).code).toBe("black");
});