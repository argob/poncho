const {slugify, ponchoColor, replaceSpecialChars} = require('../src/js/utils');
test('Slugify', () => {
    expect(slugify('El murciélago remolón')).toBe('el-murcielago-remolon');
    expect(slugify('Inglés Français')).toBe('ingles-francais');
    expect(slugify('Las niñas juegan')).toBe('las-ninas-juegan');
    expect(slugify('--Las [niñas]-. juegan.')).toBe('las-ninas-juegan');
});


test('Colores Poncho por nombre', () => {
    expect(ponchoColor('amarillo')).toBe('#f9a822');
    expect(ponchoColor('warning')).toBe('#f9a822');
    expect(ponchoColor('Esto no es un color')).toBe('Esto no es un color');
});


test('Removedor de acentos y caracteres especiales', () => {
  expect(replaceSpecialChars('AGUSTÍN Bouillet juega como un niño'))
      .toBe('AGUSTIN Bouillet juega como un nino');
  expect(replaceSpecialChars(
      'El hijo de Rolón, «el niño Joaquín», jugaba con un paragüas'))
      .toBe('El hijo de Rolon, «el nino Joaquin», jugaba con un paraguas');
});