const {charMap} = require('../../char-map.js');
global.charMap = charMap;
const {replaceSpecialChars} = require('../replace-special-chars.js');


test('Removedor de acentos y caracteres especiales', () => {
    expect(replaceSpecialChars('AGUSTÍN Bouillet juega como un niño'))
        .toBe('AGUSTIN Bouillet juega como un nino');
    expect(replaceSpecialChars(
        'El hijo de Rolón, «el niño Joaquín», jugaba con un paragüas'))
        .toBe('El hijo de Rolon, «el nino Joaquin», jugaba con un paraguas');
});


