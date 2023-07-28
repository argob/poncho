const {ponchoColor} = require('../src/js/utils/color');


test('Colores Poncho por nombre', () => {
    expect(ponchoColor('amarillo')).toBe('#f9a822');
    expect(ponchoColor('warning')).toBe('#f9a822');
    expect(ponchoColor('Esto no es un color')).toBe('Esto no es un color');
});
